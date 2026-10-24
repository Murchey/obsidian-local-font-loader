import { describe, expect, test } from 'bun:test';
import { bindDeviceToPreset, deviceLimitNotices, inheritSimilarDevicePresets } from '../src/device-presets';
import { planDeviceRepair, resolveDeviceAlias } from '../src/device-repair';
import type { DeviceMeta, FontPreset } from '../src/types';

const preset = (id: string, targetDevices: string[] = []): FontPreset => ({
    id, name: id, targetDevices,
    fonts: { ui: '', text: '', heading: '', monospace: '', math: '' },
});
const android = (model = 'SM-X710'): DeviceMeta => ({
    platform: 'mobile', os: 'android', model, hostname: '',
});

describe('similar-device preset inheritance', () => {
    test('inherits a renamed peer preset without merging identities; repeated passes do not change it', () => {
        const presets = [preset('default-preset'), preset('reading', ['renamed'])];
        const meta = { renamed: android(), fresh: android(), phone: android('PJZ110') };
        expect(inheritSimilarDevicePresets(presets, meta, {})).toBe(1);
        expect(presets[1].targetDevices).toEqual(['renamed', 'fresh']);
        expect(Object.keys(meta)).toEqual(['renamed', 'fresh', 'phone']);
        expect(inheritSimilarDevicePresets(presets, meta, {})).toBe(0);
    });

    test('conflicting presets leave an unassigned peer alone', () => {
        const presets = [preset('default-preset'), preset('a', ['one']), preset('b', ['two'])];
        expect(inheritSimilarDevicePresets(presets, { one: android(), two: android(), fresh: android() }, {})).toBe(0);
        expect(presets.flatMap(p => p.targetDevices)).not.toContain('fresh');
    });

    test('explicit global choice survives inheritance and conflicts with a custom peer', () => {
        const presets = [preset('default-preset'), preset('reading', ['old', 'current'])];
        bindDeviceToPreset(presets, 'current', 'default-preset');
        expect(inheritSimilarDevicePresets(presets, { old: android(), current: android(), fresh: android() }, {})).toBe(0);
        expect(presets[0].targetDevices).toEqual(['current']);
        expect(presets[1].targetDevices).toEqual(['old']);
    });

    test('does not guess a target from names, generic iPads, another OS or stale aliases', () => {
        const presets = [preset('default-preset'), preset('mobile', ['old', 'ipad'])];
        const ipad: DeviceMeta = { platform: 'mobile', os: 'ipados', model: 'iPad', hostname: '' };
        const meta = { old: android(), fresh: android(), ipad, anotherIpad: ipad };
        expect(inheritSimilarDevicePresets(presets, meta, { old: 'removed' })).toBe(0);
        expect(inheritSimilarDevicePresets([preset('mobile')], { old: android(), fresh: android() }, {})).toBe(0);
        expect(inheritSimilarDevicePresets(presets, { old: android(), fresh: { ...android(), os: 'unknown' } }, {})).toBe(0);
    });

    test('invalid targets leave bindings unchanged; valid assignment repairs duplicate bindings', () => {
        const presets = [preset('default-preset'), preset('a', ['current']), preset('b', ['current'])];
        const before = structuredClone(presets);
        expect(() => bindDeviceToPreset(presets, 'current', 'missing')).toThrow();
        expect(() => bindDeviceToPreset(presets, '', 'a')).toThrow();
        expect(presets).toEqual(before);
        bindDeviceToPreset(presets, 'current', 'b');
        expect(presets.filter(p => p.targetDevices.includes('current')).map(p => p.id)).toEqual(['b']);
    });
});

describe('device identity repair', () => {
    test('same hostname or model is insufficient to collapse physical devices', () => {
        const desktop: DeviceMeta = { platform: 'desktop', os: 'linux', hostname: 'debian', model: '' };
        const plan = planDeviceRepair({ nameMap: {}, meta: { a: desktop, b: desktop, c: android(), d: android() }, aliases: {}, now: Date.now() });
        expect(plan.merges).toEqual([]);
        expect(plan.ambiguous).toHaveLength(2);
    });

    test('an explicitly aliased row resurrected by sync is repaired in the recorded direction', () => {
        const plan = planDeviceRepair({ nameMap: { old: 'Old', current: 'Current' }, meta: { old: android(), current: android() }, aliases: { old: 'current' }, now: Date.now() });
        expect(plan.merges.map(merge => ({ id: merge.canonicalId, removed: merge.removedIds }))).toEqual([{ id: 'current', removed: ['old'] }]);
    });

    test('cyclic aliases converge consistently, including from outside the cycle', () => {
        const aliases = { z: 'a', a: 'b', b: 'a' };
        for (const id of ['z', 'a', 'b']) expect(resolveDeviceAlias(id, aliases)).toBe('a');
        const plan = planDeviceRepair({ nameMap: { a: 'A', b: 'B' }, meta: {}, aliases, now: Date.now() });
        expect(plan.aliases).toEqual({ z: 'a', b: 'a' });
        expect(plan.merges[0].canonicalId).toBe('a');
    });
});

test('limitation callout includes both mobile platforms on desktop, including mobile emulation', () => {
    const desktop = { isDesktopApp: true, isMobileApp: false, isAndroidApp: false, isIosApp: false, isMobile: true };
    expect(deviceLimitNotices(desktop)).toEqual(['deviceLimitBodyAndroid', 'deviceLimitBodyIos']);
    expect(deviceLimitNotices({ ...desktop, isDesktopApp: false, isMobileApp: true, isAndroidApp: true })).toEqual(['deviceLimitBodyAndroid']);
    expect(deviceLimitNotices({ ...desktop, isDesktopApp: false, isMobileApp: true, isIosApp: true })).toEqual(['deviceLimitBodyIos']);
});
