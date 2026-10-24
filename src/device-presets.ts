import type { DeviceMeta, FontPreset } from './types';
import { deviceIdentityKey } from './device-repair';

/** 单设备分配的共用入口；Validate before changing any existing binding. */
export function bindDeviceToPreset(presets: FontPreset[], deviceId: string, presetId: string): void {
    const target = presets.find(preset => preset.id === presetId);
    if (!target || !deviceId.trim()) {
        throw new Error('Cannot assign a device without a valid device and preset');
    }
    for (const preset of presets) {
        preset.targetDevices = preset.targetDevices.filter(id => id !== deviceId);
    }
    // 显式记录全局选择，避免下次被自动继承覆盖；Keep explicit global choices too.
    target.targetDevices.push(deviceId);
}

/** 只继承无歧义的明确分配，保留独立 ID；Share presets without merging device identities. */
export function inheritSimilarDevicePresets(
    presets: FontPreset[], meta: Record<string, DeviceMeta>, aliases: Record<string, string>,
): number {
    const groups = new Map<string, string[]>();
    for (const [id, info] of Object.entries(meta)) {
        if (aliases[id]) continue;
        const key = deviceIdentityKey(info);
        if (!key) continue;
        const ids = groups.get(key) || [];
        ids.push(id);
        groups.set(key, ids);
    }
    let inherited = 0;
    for (const ids of groups.values()) {
        const members = new Set(ids);
        const assigned = presets.filter(preset => preset.targetDevices.some(id => members.has(id)));
        // 不猜测冲突，也不根据预设名称判断用途；Conflicts and names are not assignment rules.
        if (assigned.length !== 1) continue;
        const target = assigned[0];
        for (const id of ids) {
            if (target.targetDevices.includes(id)) continue;
            bindDeviceToPreset(presets, id, target.id);
            inherited++;
        }
    }
    return inherited;
}

/** 桌面管理者也需要了解移动端局限；Desktop managers must see both mobile limitations. */
export function deviceLimitNotices(platform: {
    isDesktopApp: boolean; isMobileApp: boolean; isAndroidApp: boolean; isIosApp: boolean;
}): ('deviceLimitBodyAndroid' | 'deviceLimitBodyIos')[] {
    if (!platform.isDesktopApp && platform.isMobileApp) {
        if (platform.isIosApp) return ['deviceLimitBodyIos'];
        if (platform.isAndroidApp) return ['deviceLimitBodyAndroid'];
    }
    return ['deviceLimitBodyAndroid', 'deviceLimitBodyIos'];
}
