/**
 * Editor / reading-view / interface text sizes.
 *
 * Kept apart from the font modules on purpose: a size is a typography preference, not a font
 * selection. It applies whether or not a custom font is loaded, it is written under its own
 * stylesheet id so clearing the font layer never clears it, and the numbers a user types are the
 * numbers that end up in the CSS — no slider grid in between.
 */
import type { FontSizeKey, FontSizeSettings } from './types';

/** The stylesheet id the size rules are applied under. */
export const FONT_SIZES_CSS_ID = 'local-font-loader-sizes';

/** The surfaces with a size of their own, in the order they are shown. */
export const FONT_SIZE_KEYS: FontSizeKey[] = ['editor', 'reading', 'ui'];

export interface FontSizeLimit {
    min: number;
    max: number;
    /** Obsidian's own default, used when a stored value is missing or unusable. */
    default: number;
    step: number;
}

/**
 * Bounds per surface.
 *
 * The interface tops out lower than the text surfaces: its labels sit in fixed-height rows
 * (tabs, sidebars, status bar), so a 40px menu font overflows them instead of helping.
 */
export const FONT_SIZE_LIMITS: Record<FontSizeKey, FontSizeLimit> = {
    editor: { min: 10, max: 40, default: 16, step: 1 },
    reading: { min: 10, max: 40, default: 16, step: 1 },
    ui: { min: 10, max: 24, default: 15, step: 1 }
};

/**
 * The interface variables Obsidian derives every label from, with their stock pixel values.
 *
 * Scaling all four keeps the interface's type hierarchy intact — a 17px base yields a 13.6px
 * small label, not a 13px one sitting under a larger heading.
 */
const UI_VARIABLES: Array<{ name: string; size: number }> = [
    { name: '--font-ui-smaller', size: 12 },
    { name: '--font-ui-small', size: 13 },
    { name: '--font-ui-medium', size: 15 },
    { name: '--font-ui-large', size: 20 }
];

/** The stock `--font-ui-medium`, i.e. the value a UI size of 15 means "unchanged". */
const UI_BASE = 15;

/** A fresh, fully-disabled size configuration. */
export function createDefaultFontSizes(): FontSizeSettings {
    return {
        editor: { enabled: false, value: FONT_SIZE_LIMITS.editor.default },
        reading: { enabled: false, value: FONT_SIZE_LIMITS.reading.default },
        ui: { enabled: false, value: FONT_SIZE_LIMITS.ui.default }
    };
}

export const FONT_SIZE_DEFAULTS: FontSizeSettings = createDefaultFontSizes();

/**
 * Clamps and rounds a size to what its surface accepts.
 *
 * @param key - Which surface the size belongs to
 * @param value - The requested pixel size
 * @returns The nearest usable integer
 */
export function clampFontSize(key: FontSizeKey, value: number): number {
    const { min, max } = FONT_SIZE_LIMITS[key];
    return Math.min(max, Math.max(min, Math.round(value)));
}

/**
 * Reads a typed size.
 *
 * Accepts what people actually type into the field — `18`, ` 18 `, `18px`, `18PX`, `17,5` — and
 * reports anything else as unusable rather than guessing, so a half-finished entry never
 * silently becomes the minimum.
 *
 * @param raw - The field's text
 * @returns The parsed number, or null when the text holds no number
 */
export function parseFontSize(raw: string): number | null {
    const cleaned = String(raw ?? '').trim().replace(/\s*(px)$/i, '');
    if (!cleaned) return null;
    const parsed = Number(cleaned.replace(',', '.'));
    return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Coerces anything read from data.json into a complete, in-range configuration.
 *
 * Older settings files have no `fontSizes` block at all, and a sync merge can leave one surface
 * missing; both must land on defaults instead of `undefined` reaching the CSS builder.
 *
 * @param raw - The stored value, of unknown shape
 * @returns A complete configuration
 */
export function normalizeFontSizeSettings(raw: unknown): FontSizeSettings {
    const source = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
    const result = createDefaultFontSizes();

    for (const key of FONT_SIZE_KEYS) {
        const entry = source[key];
        const record = (entry && typeof entry === 'object' ? entry : {}) as Record<string, unknown>;
        const numeric = typeof record.value === 'number'
            ? record.value
            : parseFontSize(String(record.value ?? ''));

        result[key].enabled = record.enabled === true;
        result[key].value = numeric === null || !Number.isFinite(numeric)
            ? FONT_SIZE_LIMITS[key].default
            : clampFontSize(key, numeric);
    }

    return result;
}

/**
 * Builds the CSS for the enabled sizes.
 *
 * Each surface overrides `--font-text-size` inside its own container rather than on `:root`.
 * That is what makes the two sizes independent: the editor and the reading view are siblings, so
 * a value scoped to one cannot leak into the other, while every heading and inline element under
 * it still scales from the em-based sizes Obsidian already ships.
 *
 * @param settings - The stored size configuration
 * @returns The stylesheet text, or an empty string when no surface is enabled
 */
export function buildFontSizeCss(settings: FontSizeSettings | undefined): string {
    const config = normalizeFontSizeSettings(settings);
    const px = (value: number): string => `${Number(value.toFixed(2))}px`;
    let css = '';

    if (config.editor.enabled) {
        const size = px(config.editor.value);
        css += `/* Editor text size (${config.editor.value}px) */\n`;
        css += 'body .markdown-source-view,\n';
        css += 'body .markdown-source-view.mod-cm6 {\n';
        css += `  --font-text-size: ${size} !important;\n`;
        css += `  font-size: ${size} !important;\n`;
        css += '}\n\n';
        css += 'body .markdown-source-view .cm-scroller,\n';
        css += 'body .markdown-source-view.mod-cm6 .cm-scroller,\n';
        css += 'body .markdown-source-view.mod-cm6 .cm-content {\n';
        css += `  font-size: ${size} !important;\n`;
        css += '}\n\n';
    }

    if (config.reading.enabled) {
        const size = px(config.reading.value);
        css += `/* Reading view text size (${config.reading.value}px) */\n`;
        css += 'body .markdown-reading-view,\n';
        css += 'body .markdown-preview-view {\n';
        css += `  --font-text-size: ${size} !important;\n`;
        css += `  font-size: ${size} !important;\n`;
        css += '}\n\n';
        css += 'body .markdown-preview-view .markdown-preview-sizer {\n';
        css += `  font-size: ${size} !important;\n`;
        css += '}\n\n';
    }

    if (config.ui.enabled) {
        const ratio = config.ui.value / UI_BASE;
        css += `/* Interface text size (${config.ui.value}px base) */\n`;
        for (const scope of [':root', 'body']) {
            css += `${scope} {\n`;
            for (const variable of UI_VARIABLES) {
                css += `  ${variable.name}: ${px(variable.size * ratio)} !important;\n`;
            }
            css += '}\n\n';
        }
    }

    return css;
}
