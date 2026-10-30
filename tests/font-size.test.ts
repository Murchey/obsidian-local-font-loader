import { describe, expect, test } from 'bun:test';

import {
    FONT_SIZE_DEFAULTS,
    FONT_SIZE_LIMITS,
    buildFontSizeCss,
    clampFontSize,
    createDefaultFontSizes,
    normalizeFontSizeSettings,
    parseFontSize
} from '../src/font-size';
import type { FontSizeSettings } from '../src/types';

const sizes = (overrides: Partial<Record<'editor' | 'reading' | 'ui', { enabled: boolean; value: number }>> = {}): FontSizeSettings => {
    const base = createDefaultFontSizes();
    for (const key of ['editor', 'reading', 'ui'] as const) {
        if (overrides[key]) base[key] = { ...overrides[key]! };
    }
    return base;
};

describe('typed font sizes', () => {
    test('a typed number is read as typed, with or without a unit', () => {
        expect(parseFontSize('18')).toBe(18);
        expect(parseFontSize(' 18 ')).toBe(18);
        expect(parseFontSize('18px')).toBe(18);
        expect(parseFontSize('18PX')).toBe(18);
        expect(parseFontSize('17,5')).toBe(17.5);
    });

    test('an entry that is not a number is reported, never guessed', () => {
        expect(parseFontSize('')).toBeNull();
        expect(parseFontSize('   ')).toBeNull();
        expect(parseFontSize('abc')).toBeNull();
        expect(parseFontSize('px')).toBeNull();
    });

    test('each surface clamps to its own bounds', () => {
        expect(clampFontSize('editor', 5)).toBe(10);
        expect(clampFontSize('editor', 80)).toBe(40);
        expect(clampFontSize('reading', 41)).toBe(FONT_SIZE_LIMITS.reading.max);
        // The interface tops out lower than the text surfaces.
        expect(clampFontSize('ui', 30)).toBe(24);
        expect(clampFontSize('ui', 16.6)).toBe(17);
    });
});

describe('stored size settings', () => {
    test('a settings file without sizes yields three disabled defaults', () => {
        const normalized = normalizeFontSizeSettings(undefined);
        expect(normalized).toEqual(FONT_SIZE_DEFAULTS);
        expect(normalized.editor.enabled).toBe(false);
        expect(normalized.reading.value).toBe(16);
        expect(normalized.ui.value).toBe(15);
    });

    test('partial, string-typed and out-of-range entries are all repaired', () => {
        const normalized = normalizeFontSizeSettings({
            editor: { enabled: true, value: '22' },
            reading: { enabled: 'yes', value: 999 },
            ui: { enabled: true, value: 'abc' }
        });

        expect(normalized.editor).toEqual({ enabled: true, value: 22 });
        // enabled is only true for a real boolean; 999 clamps to the reading maximum.
        expect(normalized.reading.enabled).toBe(false);
        expect(normalized.reading.value).toBe(40);
        // An unusable number falls back to the default instead of the bound.
        expect(normalized.ui).toEqual({ enabled: true, value: 15 });
    });
});

describe('generated size CSS', () => {
    test('nothing enabled produces no stylesheet at all', () => {
        expect(buildFontSizeCss(undefined)).toBe('');
        expect(buildFontSizeCss(createDefaultFontSizes())).toBe('');
    });

    test('the editor and reading view are scoped to their own containers', () => {
        const css = buildFontSizeCss(sizes({
            editor: { enabled: true, value: 18 },
            reading: { enabled: true, value: 22 }
        }));

        expect(css).toContain('/* Editor text size (18px) */');
        expect(css).toContain('/* Reading view text size (22px) */');
        // Scoped per container: neither size is declared on :root, or the two would collide.
        expect(css).not.toContain(':root');
        expect(css).toContain('body .markdown-source-view,');
        expect(css).toContain('body .markdown-reading-view,');
        expect(css).toContain('--font-text-size: 18px !important;');
        expect(css).toContain('--font-text-size: 22px !important;');
    });

    test('one surface enabled leaves the other two untouched', () => {
        const css = buildFontSizeCss(sizes({ editor: { enabled: true, value: 20 } }));
        expect(css).toContain('20px');
        expect(css).not.toContain('markdown-preview-view');
        expect(css).not.toContain('--font-ui-medium');
    });

    test('the interface size scales the whole type scale from the 15px base', () => {
        const css = buildFontSizeCss(sizes({ ui: { enabled: true, value: 18 } }));
        expect(css).toContain('--font-ui-medium: 18px !important;');
        expect(css).toContain('--font-ui-smaller: 14.4px !important;');
        expect(css).toContain('--font-ui-small: 15.6px !important;');
        expect(css).toContain('--font-ui-large: 24px !important;');
        // Both scopes, so a theme that re-declares the variables on <body> cannot win.
        expect(css).toContain(':root {');
        expect(css).toContain('body {');
    });

    test('out-of-range stored values are clamped before they reach the CSS', () => {
        const css = buildFontSizeCss(sizes({ editor: { enabled: true, value: 999 } }));
        expect(css).toContain('40px');
        expect(css).not.toContain('999');
    });
});
