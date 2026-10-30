/**
 * Independent text sizes for the editor, the reading view and the interface.
 *
 * One section of the settings tab. The size is typed into a number field, not dragged: the value
 * a person wants is usually one they already know (18, 20, 22), a slider cannot be typed into,
 * and its step grid cannot express "a bit larger than the font I just picked". The slider stays
 * beside the field for coarse changes, and the two always show the same number.
 *
 * The section owns no state: every edit writes through to `plugin.settings.fontSizes`, saves, and
 * re-applies the size layer — so what the preview shows is the stylesheet that is actually live.
 */
import { Notice, Setting, setIcon } from 'obsidian';
import type { SliderComponent, TextComponent } from 'obsidian';

import { t } from '../../i18n';
import { FONT_SIZE_KEYS, FONT_SIZE_LIMITS, clampFontSize, createDefaultFontSizes, parseFontSize } from '../../font-size';
import type { FontSizeKey } from '../../types';
import type FontManagerSettingTab from '../settings-tab';

/** Translation keys per surface, resolved at render time so a locale change is picked up. */
const COPY: Record<FontSizeKey, { name: string; desc: string }> = {
    editor: { name: 'fontSizeEditor', desc: 'fontSizeEditorDesc' },
    reading: { name: 'fontSizeReading', desc: 'fontSizeReadingDesc' },
    ui: { name: 'fontSizeUI', desc: 'fontSizeUIDesc' }
};

/**
 * Renders this section into the given container.
 *
 * @param tab - The settings tab, for access to the plugin and shared helpers
 * @param containerEl - Where to append the section
 */
export function renderFontSizeSection(tab: FontManagerSettingTab, containerEl: HTMLElement): void {
    const plugin = tab.plugin;

    containerEl.createEl('h3', { text: t('headerFontSize') });

    const calloutEl = containerEl.createDiv({ cls: 'callout', attr: { 'data-callout': 'info' } });
    const calloutTitle = calloutEl.createDiv({ cls: 'callout-title' });
    setIcon(calloutTitle.createDiv({ cls: 'callout-icon' }), 'info');
    calloutTitle.createDiv({ cls: 'callout-title-inner', text: t('fontSizeInfoTitle') });
    calloutEl.createDiv({ cls: 'callout-content' }).createEl('p', { text: t('fontSizeInfo') });

    // Live preview: the three surfaces at their configured sizes, so a number can be judged
    // before it is lived with.
    const previewEl = containerEl.createDiv({ cls: 'lfl-size-preview' });
    previewEl.createDiv({ cls: 'lfl-size-preview-title', text: t('fontSizePreview') });
    const previewLines = {} as Record<FontSizeKey, HTMLElement>;
    for (const key of FONT_SIZE_KEYS) {
        const line = previewEl.createDiv({ cls: 'lfl-size-preview-line' });
        line.createSpan({ cls: 'lfl-size-preview-label', text: t(COPY[key].name) });
        line.createSpan({ cls: 'lfl-size-preview-sample', text: t('fontSizePreviewSample') });
        previewLines[key] = line;
    }

    const syncPreview = (): void => {
        for (const key of FONT_SIZE_KEYS) {
            const entry = plugin.settings.fontSizes[key];
            const line = previewLines[key];
            line.style.fontSize = entry.enabled ? `${entry.value}px` : '';
            line.toggleClass('is-disabled', !entry.enabled);
        }
    };

    for (const key of FONT_SIZE_KEYS) {
        const limits = FONT_SIZE_LIMITS[key];
        let input: TextComponent | null = null;
        let slider: SliderComponent | null = null;

        const current = () => plugin.settings.fontSizes[key];

        /** Writes one accepted value through to the settings, the controls and the stylesheet. */
        const applyValue = (value: number, source: 'input' | 'slider'): void => {
            const entry = current();
            entry.value = clampFontSize(key, value);

            if (source !== 'input' && input) input.setValue(String(entry.value));
            if (source !== 'slider' && slider) slider.setValue(entry.value);

            syncPreview();
            plugin._debouncedSaveSettings();
            plugin._debouncedApplyFontSizes();
        };

        /** Enable/disable both controls, so an inactive surface cannot be edited by accident. */
        const syncEnabled = (): void => {
            const enabled = current().enabled;
            input?.setDisabled(!enabled);
            slider?.setDisabled(!enabled);
        };

        new Setting(containerEl)
            .setName(t(COPY[key].name))
            .setDesc(t(COPY[key].desc))
            .addToggle(toggle => toggle
                .setValue(current().enabled)
                .onChange(async (value) => {
                    current().enabled = value;
                    syncEnabled();
                    syncPreview();
                    await plugin.saveSettings();
                    plugin.applyFontSizes();
                }))
            .addText(text => {
                input = text;
                const field = text.inputEl;
                // A real number field: it brings the numeric keypad on touch and the steppers on
                // desktop, while still accepting a typed value verbatim.
                field.type = 'number';
                field.min = String(limits.min);
                field.max = String(limits.max);
                field.step = String(limits.step);
                field.addClass('lfl-size-input');
                field.setAttribute('aria-label', t(COPY[key].name));
                text.setValue(String(current().value));
                text.setDisabled(!current().enabled);

                // Typing commits only a value that is already a usable number in range. An empty
                // field, "1" on the way to "18", or "48" on the way to "4" has to wait for blur:
                // snapping mid-entry rewrites the field while the user is still typing in it.
                text.onChange(raw => {
                    const parsed = parseFontSize(raw);
                    if (parsed === null) return;
                    if (parsed < limits.min || parsed > limits.max) return;
                    applyValue(parsed, 'input');
                });

                // Leaving the field finishes the entry: clamp what is there and write it back, so
                // an out-of-range or non-numeric entry never stays on screen unapplied.
                tab._addEventListener<FocusEvent>(field, 'blur', () => {
                    const parsed = parseFontSize(field.value);
                    applyValue(parsed === null ? current().value : parsed, 'input');
                    input?.setValue(String(current().value));
                });

                tab._addEventListener<KeyboardEvent>(field, 'keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        field.blur();
                    }
                });
            })
            .addSlider(sliderEl => {
                slider = sliderEl;
                sliderEl
                    .setLimits(limits.min, limits.max, limits.step)
                    .setValue(current().value)
                    .setDynamicTooltip()
                    .setDisabled(!current().enabled)
                    .onChange(value => applyValue(value, 'slider'));
            })
            .addExtraButton(button => button
                .setIcon('rotate-ccw')
                .setTooltip(t('fontSizeResetOne'))
                .onClick(async () => {
                    current().value = limits.default;
                    input?.setValue(String(limits.default));
                    slider?.setValue(limits.default);
                    syncPreview();
                    await plugin.saveSettings();
                    plugin.applyFontSizes();
                }));
    }

    syncPreview();

    new Setting(containerEl)
        .setName(t('fontSizeReset'))
        .setDesc(t('fontSizeResetDesc'))
        .addButton(button => button
            .setButtonText(t('fontSizeReset'))
            .onClick(async () => {
                plugin.settings.fontSizes = createDefaultFontSizes();
                await plugin.saveSettings();
                plugin.applyFontSizes();
                new Notice(t('fontSizeResetDone'));
                tab.update();
            }));
}
