/**
 * Default plugin settings.
 */
import { FONT_SIZE_DEFAULTS } from './font-size';
import type { PluginSettings } from './types';

export const DEFAULT_SETTINGS: PluginSettings = {
    // A folder of the plugin's own, so a fresh install does not read or write inside a directory
    // that belongs to something else in the vault. Created on demand — see scanFonts().
    fontSourceDir: 'Local-Fonts',
    availableFonts: [],       // Global font list (shared by all presets)
    fontFamilies: [],         // Global font family grouping info (shared by all presets)
    autoLoadOnStartup: true,

    // Device identification (synced via cloud)
    // NOTE: the real per-device identity lives in device-local storage, NOT here — see
    // _getOrCreateLocalDeviceId(). This map is a one-time migration ledger only.
    deviceFingerprints: {},   // Legacy fingerprint → deviceId (migration ledger only)
    deviceNameMap: {},        // { deviceId: displayName }
    deviceMeta: {},           // { deviceId: { platform, os, model, hostname } }
    deviceAliases: {},        // { collapsed deviceId: surviving deviceId } — see the repair pass

    // Global settings
    latinFontForUI: false,    // Apply Latin font to UI elements (global)

    // Editor / reading view / interface text sizes (global; independent of the font presets).
    // All three start disabled: Obsidian's own sizes apply until the user sets one.
    fontSizes: {
        editor: { ...FONT_SIZE_DEFAULTS.editor },
        reading: { ...FONT_SIZE_DEFAULTS.reading },
        ui: { ...FONT_SIZE_DEFAULTS.ui }
    },

    // Preset system
    presets: [                // Preset array
        {
            id: 'default-preset',
            name: 'Default',
            targetDevices: [],  // Empty array = global default preset
            fonts: {
                ui: '',
                text: '',
                heading: '',
                monospace: '',
                math: '',
                latin: ''
            },
            headingApplyToFileTitle: false,
            latinFontEnabled: false,
            latinFontScope: {
                letters: true,
                numbers: true,
                punctuation: true,
                symbols: true
            }
        }
    ]
};
