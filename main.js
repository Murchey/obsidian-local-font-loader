"use strict";

// src/plugin.ts
var import_obsidian11 = require("obsidian");

// src/i18n.ts
var import_obsidian = require("obsidian");
var TRANSLATIONS = {
  en: {
    // Plugin Info
    pluginName: "Local Font Loader",
    pluginDesc: "Load custom fonts from your local vault",
    // Settings Headers
    headerDirectoryConfig: "Directory Configuration",
    headerGeneralSettings: "General Settings",
    headerFontApplication: "Font Application Settings",
    headerFontFileConfig: "Font File Configuration",
    headerFontSize: "Font Sizes",
    // Font sizes
    fontSizeInfoTitle: "Independent text sizes",
    fontSizeInfo: "The editor, the reading view and the interface each have their own size. Type a pixel value in the field or drag the slider \u2014 the two stay in sync \u2014 and the change applies immediately, whether or not a custom font is loaded.",
    fontSizeEditor: "Editor font size",
    fontSizeEditorDesc: "Text in the source / live preview editor",
    fontSizeReading: "Reading view font size",
    fontSizeReadingDesc: "Text in the reading view and note previews",
    fontSizeUI: "Interface font size",
    fontSizeUIDesc: "Menus, sidebar, buttons and dialogs, scaled from the 15px default",
    fontSizePreview: "Preview",
    fontSizePreviewSample: "Aa \u4E2D\u6587 123",
    fontSizeResetOne: "Reset this size",
    fontSizeReset: "Reset all font sizes",
    fontSizeResetDesc: "Turn every size back off and return to the Obsidian defaults",
    fontSizeResetDone: "Font sizes reset",
    // Directory Configuration
    fontSourceDir: "Font Source Directory",
    fontSourceDirDesc: "Directory containing font family folders",
    browseFolder: "Browse",
    browseFolderDesc: "Pick a folder from the vault",
    selectFolder: "Select a folder",
    // General Settings
    autoLoad: "Auto-load fonts on startup",
    autoLoadDesc: "Automatically apply font configuration when Obsidian starts",
    // Font Types
    uiFontName: "UI Interface Font",
    uiFontDesc: "Sidebar, menus, buttons, and other UI elements",
    textFontName: "Body Text Font",
    textFontDesc: "Editor body content",
    textFontWarning: "\u26A0\uFE0F Recommended: Choose a font family with Regular/Italic/Bold/BoldItalic variants for proper italic and bold rendering",
    headingFontName: "Heading Font",
    headingFontDesc: "Font for markdown headings (h1-h6) in content",
    headingUseTextFont: "Use Text Font",
    headingUseUIFont: "Use UI Font",
    headingApplyToFileTitle: "Apply to File Name Title",
    headingApplyToFileTitleDesc: "Also apply heading font to the inline file title displayed at the top of notes",
    monospaceFontName: "Code Font",
    monospaceFontDesc: "Code blocks and inline code",
    monospaceFontWarning: "\u26A0\uFE0F Required: Must be a monospace font. Regular Latin fonts will cause code alignment issues",
    mathFontName: "LaTeX Math Font",
    mathFontDesc: "LaTeX math formula rendering",
    mathFontWarning: "\u26A0\uFE0F Required: Must be a dedicated math font (e.g., Latin Modern Math, XITS Math). Regular fonts cannot render math symbols correctly",
    systemDefault: "-- System Default --",
    // Latin Font Separation
    latinFontInfo: "Latin Font Separation",
    latinFontInfoDesc: "After enabling, you can assign a separate Latin font. Latin characters (A-Z, a-z, numbers, punctuation) will use the Latin font, while non-Latin characters (CJK, etc.) will continue using the original font.",
    latinFontInfoDescForLatinUsers: "This feature is designed for users who mix Latin and non-Latin scripts (e.g., English + Chinese/Japanese/Korean). If you primarily write in Latin-script languages, you likely don't need this feature.",
    latinFontEnabled: "Enable Latin Font Separation",
    latinFontEnabledDesc: "Use separate fonts for Latin and non-Latin characters",
    latinFontForUI: "Apply Latin Font to UI",
    latinFontForUIDesc: "When enabled, the Latin font will also be applied to UI elements (menus, sidebars, buttons, etc.)",
    latinFont: "Latin Font",
    latinFontDesc: "Font used for Latin characters (A-Z, a-z, 0-9, punctuation)",
    recommendedLatinFonts: "Recommended Latin Fonts",
    latinFontScope: "Latin Font Scope",
    latinFontScopeDesc: "Fine-tune which character ranges use the Latin font",
    scopeBasic: "Basic Latin only (A-Z, a-z, 0-9)",
    scopeExtended: "Basic + Extended Latin (includes accented characters)",
    scopeFull: "Full Latin + Symbols (includes punctuation and special symbols)",
    // Font Legend
    legendConverted: "Available",
    legendNotExist: "Not Exist",
    filterAll: "All",
    noNotExistFonts: "No missing fonts found",
    // Font Actions
    scanFonts: "Scan Fonts",
    deleteFont: "Delete Font",
    // Fallback Operations
    deleteUnusedFonts: "Delete Unused Fonts",
    rescanFonts: "Rescan Fonts",
    fontsRescanned: "Fonts Rescanned",
    fontFileStatus: "Font File Status",
    deleteUnusedFontsDesc: "Delete unused font files (configured fonts will not be deleted)",
    applyNow: "Apply Now",
    applyNowDesc: "Apply current font configuration",
    applyFonts: "Apply fonts",
    // Font Variant Warnings
    variantWarningTitle: "Font Variant Warning",
    variantWarningBody: `The selected font "{fontFamily}" only has {variantCount} variant(s) ({variantList}).

For proper italic and bold rendering in Latin-script content, it's recommended to use a font family with Regular, Italic, Bold, and Bold Italic variants. Missing variants may cause faux italic/bold rendering issues.`,
    variantWarningContinue: "Continue anyway",
    variantWarningCancel: "Cancel",
    nonLatinFontNote: "Non-Latin fonts (Chinese, Japanese, Korean, etc.) can ignore this warning",
    // Override System Settings
    overrideSystemSettingsTitle: "Custom Settings Override",
    overrideSystemSettingsContent: "All custom font settings applied here will override Obsidian's system appearance settings.",
    // Performance Warning
    performanceWarningTitle: "Performance Considerations",
    performanceWarningContent: "Avoid mixing too many languages in a single line of text. Dense multilingual mixing (e.g., Chinese + Japanese + Korean + Arabic + Russian in one line) may trigger font fallback mechanisms that can freeze the rendering engine.\n\nRecommendation: Keep content from different languages in separate paragraphs or sections for optimal performance.",
    // Settings Page Callouts
    incompleteVariantTitle: "Font Variant Incomplete",
    incompleteVariantBody: 'The selected font "{fontFamily}" only has {variantCount} variant(s) ({variantList}).\nRecommendation: Choose a font family with Regular, Italic, Bold, and Bold Italic variants to ensure proper italic and bold rendering.\nNon-Latin fonts typically do not require full Italic/Bold variants and can ignore this warning.',
    monospaceRequirement: "Monospace Font Required",
    monospaceRequirementBody: "Code fonts must be monospace. Regular Latin fonts will cause code alignment issues.",
    mathFontRequirement: "Math Font Required",
    mathFontRequirementBody: "LaTeX math fonts must be dedicated math fonts (e.g., Latin Modern Math, XITS Math). Regular fonts cannot render math symbols correctly.",
    mathFontMismatchTitle: "Math font metrics do not match",
    mathFontMismatchBody: '"{fontFamily}" has different glyph metrics from the fonts MathJax builds its layout from, so radicals leave a gap between the hook and the bar, and superscripts/subscripts drift away from their base. A math font with Computer Modern metrics \u2014 Latin Modern Math above all \u2014 removes this entirely.',
    mathFontNotMathTitle: "Not a usable math font",
    mathFontNotMathBody: '"{fontFamily}" does not provide the required math glyphs ({missing}), so MathJax falls back for them and the formula layout drifts. Please choose a dedicated math font.',
    missingVariantTitle: "Missing Font Variants",
    missingVariantBody: "{latinFont} is missing the following variants: {missingList}. Missing styles will use browser synthesis (lower quality).",
    // Font Missing Warning
    fontMissingWarning: "Font file is missing, fallback to system default",
    noAvailableFonts: "No fonts found yet. Use Rescan to look for them.",
    fontStatusTitle: "Font status",
    fontStatusIntro: "Which font each category uses, and where its numbers come from.",
    fontStatusFont: "Font",
    fontStatusFiles: "Files",
    fontStatusHow: "How the numbers are obtained",
    fontStatusSource: "Source",
    fontStatusGaps: "Not covered",
    fontStatusNone: "None",
    fontStatusPending: "Waiting for the font to be resolved",
    fontStatusClose: "Close",
    // UI Text
    variantsSuffix: "variants",
    variantsWithCheckmark: "{familyName} \u2713 ({variantCount} variants)",
    variantsWithoutCheckmark: "{familyName} ({variantCount} variants)",
    notFoundFontFamily: "Font family not found. Please verify font folder structure.",
    importFont: "Import Font",
    recommendedLatinFontsLabel: "--- Recommended Latin Fonts ---",
    otherFontsLabel: "--- Other Fonts ---",
    expandCollapse: "Expand/Collapse",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    deleteThisFont: "Delete this font",
    confirmDeleteFont: 'Are you sure you want to delete font "{fontName}"?',
    deletedFont: "\u2713 Deleted {fontName}",
    deleteFailedError: "\u26A0\uFE0F Delete failed: {error}",
    noUnusedFonts: "No unused fonts",
    confirmDeleteUnusedFonts: "Found {count} unused fonts. Are you sure you want to delete them?",
    deletedUnusedFonts: "\u2713 Deleted {count} unused fonts",
    deleteError: "\u26A0\uFE0F Error deleting fonts",
    importedFonts: "\u2713 Imported {count} font files",
    importing: "Importing...",
    importError: "\u26A0\uFE0F Import failed",
    importFailedError: "\u26A0\uFE0F Import failed: {error}",
    importDropTitle: "Drag font files here",
    importDropSubtitle: "Or click to choose files",
    importDropHint: "Supports .ttf, .otf, .woff, .woff2",
    punctuationDesc: ".,!?;: and other common punctuation",
    symbolsDesc: "@#$%&* and other special characters",
    // Notices
    fontsApplied: "\u2713 Fonts applied",
    conversionFailed: "\u26A0\uFE0F Font conversion failed",
    fontDeleted: "\u2713 Font deleted",
    deleteFailed: "\u26A0\uFE0F Failed to delete font",
    unusedDeleted: "\u2713 Deleted {count} unused fonts",
    scanComplete: "\u2713 Scanned {count} fonts",
    // Modals
    confirmDelete: "Confirm Delete",
    confirmDeleteMsg: "Are you sure you want to delete this font?",
    confirmDeleteUnused: "Are you sure you want to delete all unused fonts?",
    delete: "Delete",
    cancel: "Cancel",
    confirm: "Confirm",
    // Font Info
    variantsCount: "{count} variants",
    familyName: "Family",
    style: "Style",
    path: "Path",
    // Preset Management (New)
    syncDelayTitle: "Cross-Device Sync Notice",
    syncDelayContent: "Font preset changes sync across devices via Obsidian Sync or third-party cloud services (iCloud, Dropbox). Changes may take time to propagate. Manually refresh if needed.",
    headerPresetManagement: "Preset Management",
    createPreset: "Create New Preset",
    createPresetDesc: "Enter a name and click the plus icon to create",
    presetNamePlaceholder: "e.g., Desktop Work, Mobile Reading",
    addPreset: "Add preset",
    presetNameRequired: "Preset name is required",
    presetNameExists: "Preset name already exists",
    presetCreated: "Preset created",
    headerDeviceManagement: "Device Management (Drag & Drop)",
    deviceLimitTitle: "Known limitation",
    deviceLimitBodyAndroid: "On Android, a factory reset leaves the same device duplicated in this list.",
    deviceLimitBodyIos: "On iOS, uninstalling and reinstalling Obsidian leaves the same device duplicated in this list.",
    devicePresetManagement: "Device Preset Assignment",
    currentDevicePreset: "Current Device Preset",
    currentDevicePresetDesc: "Select which preset this device should use",
    selectPresetToEdit: "Select Preset to Edit",
    selectPresetToEditDesc: "Choose which preset you want to configure font settings for",
    devices: "devices",
    global: "Global",
    presetId: "Preset ID",
    presetName: "Preset Name",
    editPresetName: "Edit preset name",
    enterNewPresetName: "Enter new preset name",
    deletePreset: "Delete preset",
    deletePresetWarning: "After deleting this preset, all devices will use the default preset configuration. Please think twice if your preset differs from the default.",
    cannotDeleteDefaultPreset: "Cannot delete the default preset",
    targetDevices: "Target Devices",
    targetDevicesDesc: "Devices that will use this preset",
    refreshDeviceList: "Refresh device list",
    globalPresetNote: "This is a global preset (applies to all devices by default)",
    currentDevice: "Current Device",
    copyPresetCopy: "Copy Preset",
    copyPresetCopyDesc: "Create a copy of the current device's preset",
    copySuffix: "_Copy",
    presetCopied: "Preset copied",
    deviceReassigned: "Device reassigned to preset",
    dragDeviceHere: "Drag devices here to assign to this preset",
    cleanupDevices: "Clean up unbound devices",
    cleanupDevicesNone: "No unbound devices to clean up",
    confirmCleanupDevices: "These devices are neither this device nor bound to any preset, and will be removed from the list:\n\n{0}",
    cleanupDevicesDone: "Cleaned up {0} device(s)",
    deviceListRepaired: "Merged {0} duplicated device entr(y/ies) in the device list",
    currentDeviceName: "Current Device Name",
    deviceId: "Device ID",
    deviceNamePlaceholder: "e.g., Desktop-Mac, Mobile-Android",
    editDeviceName: "Edit device name",
    moveDeviceToPreset: "Move device to preset",
    fontConfiguration: "Font Configuration",
    currentPresetConfig: "Current Preset Configuration",
    usingGlobalPreset: "You are using the global preset (default for all unassigned devices)",
    fontNotFound: "Font not found in available fonts",
    removeDevice: "Remove device",
    confirmRemoveDevice: 'Remove device "{0}" from all presets? This action cannot be undone.'
  },
  zh: {
    // Plugin Info
    pluginName: "\u672C\u5730\u5B57\u4F53\u52A0\u8F7D\u5668",
    pluginDesc: "\u4ECE\u672C\u5730 Vault \u52A0\u8F7D\u81EA\u5B9A\u4E49\u5B57\u4F53",
    // Settings Headers
    headerDirectoryConfig: "\u76EE\u5F55\u914D\u7F6E",
    headerGeneralSettings: "\u901A\u7528\u8BBE\u7F6E",
    headerFontApplication: "\u5B57\u4F53\u5E94\u7528\u8BBE\u7F6E",
    headerFontFileConfig: "\u5B57\u4F53\u6587\u4EF6\u914D\u7F6E",
    headerFontSize: "\u5B57\u53F7\u8BBE\u7F6E",
    // 字号设置
    fontSizeInfoTitle: "\u53EF\u5206\u522B\u8C03\u8282\u7684\u5B57\u53F7",
    fontSizeInfo: "\u7F16\u8F91\u5668\u3001\u9605\u8BFB\u89C6\u56FE\u4E0E\u754C\u9762\u5404\u6709\u81EA\u5DF1\u7684\u5B57\u53F7\u3002\u53EF\u4EE5\u76F4\u63A5\u5728\u8F93\u5165\u6846\u91CC\u952E\u5165\u50CF\u7D20\u503C\uFF0C\u4E5F\u53EF\u4EE5\u62D6\u6ED1\u5757\uFF0C\u4E24\u8005\u59CB\u7EC8\u540C\u6B65\uFF1B\u4FEE\u6539\u7ACB\u5373\u751F\u6548\uFF0C\u4E14\u4E0E\u662F\u5426\u52A0\u8F7D\u81EA\u5B9A\u4E49\u5B57\u4F53\u65E0\u5173\u3002",
    fontSizeEditor: "\u7F16\u8F91\u5668\u5B57\u53F7",
    fontSizeEditorDesc: "\u6E90\u7801 / \u5B9E\u65F6\u9884\u89C8\u7F16\u8F91\u5668\u5185\u7684\u6B63\u6587",
    fontSizeReading: "\u9605\u8BFB\u89C6\u56FE\u5B57\u53F7",
    fontSizeReadingDesc: "\u9605\u8BFB\u89C6\u56FE\u4E0E\u7B14\u8BB0\u9884\u89C8\u5185\u7684\u6B63\u6587",
    fontSizeUI: "\u754C\u9762\u5B57\u53F7",
    fontSizeUIDesc: "\u83DC\u5355\u3001\u4FA7\u8FB9\u680F\u3001\u6309\u94AE\u4E0E\u5BF9\u8BDD\u6846\uFF0C\u4EE5\u9ED8\u8BA4 15px \u4E3A\u57FA\u51C6\u7B49\u6BD4\u7F29\u653E",
    fontSizePreview: "\u9884\u89C8",
    fontSizePreviewSample: "Aa \u4E2D\u6587 123",
    fontSizeResetOne: "\u6062\u590D\u6B64\u9879\u9ED8\u8BA4\u503C",
    fontSizeReset: "\u91CD\u7F6E\u5168\u90E8\u5B57\u53F7",
    fontSizeResetDesc: "\u5173\u95ED\u6240\u6709\u5B57\u53F7\u8C03\u8282\uFF0C\u6062\u590D Obsidian \u9ED8\u8BA4\u8BBE\u7F6E",
    fontSizeResetDone: "\u5B57\u53F7\u5DF2\u91CD\u7F6E",
    // Directory Configuration
    fontSourceDir: "\u5B57\u4F53\u6E90\u76EE\u5F55",
    fontSourceDirDesc: "\u5305\u542B\u5B57\u4F53\u5BB6\u65CF\u6587\u4EF6\u5939\u7684\u76EE\u5F55",
    browseFolder: "\u6D4F\u89C8",
    browseFolderDesc: "\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u5939",
    selectFolder: "\u9009\u62E9\u6587\u4EF6\u5939",
    // General Settings
    autoLoad: "\u542F\u52A8\u65F6\u81EA\u52A8\u52A0\u8F7D",
    autoLoadDesc: "\u5F53 Obsidian \u542F\u52A8\u65F6\u81EA\u52A8\u5E94\u7528\u5B57\u4F53",
    // Font Types
    uiFontName: "UI \u754C\u9762\u5B57\u4F53",
    uiFontDesc: "\u4FA7\u8FB9\u680F\u3001\u83DC\u5355\u3001\u6309\u94AE\u7B49\u754C\u9762\u5143\u7D20",
    textFontName: "\u6B63\u6587\u5B57\u4F53",
    textFontDesc: "\u7F16\u8F91\u5668\u6B63\u6587\u5185\u5BB9",
    textFontWarning: "\u26A0\uFE0F \u5EFA\u8BAE\u9009\u62E9\u5305\u542B Regular/Italic/Bold/BoldItalic \u56DB\u79CD\u53D8\u4F53\u7684\u5B57\u4F53\u5BB6\u65CF\uFF0C\u4EE5\u786E\u4FDD\u659C\u4F53\u548C\u7C97\u4F53\u6B63\u5E38\u663E\u793A",
    headingFontName: "\u6807\u9898\u5B57\u4F53",
    headingFontDesc: "\u7528\u4E8E\u6B63\u6587\u5185\u7684 Markdown \u6807\u9898\uFF08h1-h6\uFF09",
    headingUseTextFont: "\u4F7F\u7528\u6B63\u6587\u5B57\u4F53",
    headingUseUIFont: "\u4F7F\u7528UI\u5B57\u4F53",
    headingApplyToFileTitle: "\u5E94\u7528\u5230\u6587\u4EF6\u540D\u6807\u9898",
    headingApplyToFileTitleDesc: "\u540C\u65F6\u5C06\u6807\u9898\u5B57\u4F53\u5E94\u7528\u5230\u7B14\u8BB0\u9876\u90E8\u663E\u793A\u7684\u6587\u4EF6\u540D\u6807\u9898",
    monospaceFontName: "\u4EE3\u7801\u5B57\u4F53",
    monospaceFontDesc: "\u4EE3\u7801\u5757\u548C\u884C\u5185\u4EE3\u7801",
    monospaceFontWarning: "\u26A0\uFE0F \u5FC5\u987B\u9009\u62E9\u7B49\u5BBD\u5B57\u4F53\uFF08Monospace\uFF09\uFF0C\u666E\u901A\u62C9\u4E01\u5B57\u4F53\u4F1A\u5BFC\u81F4\u4EE3\u7801\u5BF9\u9F50\u9519\u4E71",
    mathFontName: "LaTeX \u6570\u5B66\u5B57\u4F53",
    mathFontDesc: "\u6570\u5B66\u516C\u5F0F\u6E32\u67D3",
    mathFontWarning: "\u26A0\uFE0F \u5FC5\u987B\u9009\u62E9\u4E13\u7528\u6570\u5B66\u5B57\u4F53\uFF08\u5982 Latin Modern Math, XITS Math\uFF09\uFF0C\u666E\u901A\u5B57\u4F53\u65E0\u6CD5\u6B63\u786E\u6E32\u67D3\u6570\u5B66\u7B26\u53F7",
    systemDefault: "-- \u7CFB\u7EDF\u9ED8\u8BA4 --",
    // Latin Font Separation
    latinFontInfo: "\u62C9\u4E01\u5B57\u4F53\u5206\u79BB",
    latinFontInfoDesc: "\u542F\u7528\u540E\uFF0C\u53EF\u5355\u72EC\u6307\u5B9A\u62C9\u4E01\u5B57\u4F53\u3002\u62C9\u4E01\u5B57\u7B26\uFF08A-Z\u3001a-z\u3001\u6570\u5B57\u3001\u6807\u70B9\uFF09\u5C06\u4F7F\u7528\u62C9\u4E01\u5B57\u4F53\uFF0C\u800C\u975E\u62C9\u4E01\u5B57\u7B26\uFF08CJK\u7B49\uFF09\u4ECD\u4F7F\u7528\u539F\u5B57\u4F53\u3002",
    latinFontInfoDescForLatinUsers: "\u6B64\u529F\u80FD\u4E13\u4E3A\u6DF7\u5408\u4F7F\u7528\u62C9\u4E01\u6587\u5B57\u548C\u975E\u62C9\u4E01\u6587\u5B57\u7684\u7528\u6237\u8BBE\u8BA1\uFF08\u4F8B\u5982\uFF1A\u82F1\u6587 + \u4E2D\u6587/\u65E5\u6587/\u97E9\u6587\uFF09\u3002\u5982\u679C\u60A8\u4E3B\u8981\u4F7F\u7528\u62C9\u4E01\u6587\u5B57\u4E66\u5199\uFF0C\u53EF\u80FD\u4E0D\u9700\u8981\u6B64\u529F\u80FD\u3002",
    latinFontEnabled: "\u542F\u7528\u62C9\u4E01\u5B57\u4F53\u5206\u79BB",
    latinFontEnabledDesc: "\u4E3A\u62C9\u4E01\u5B57\u7B26\u548C\u975E\u62C9\u4E01\u5B57\u7B26\u4F7F\u7528\u4E0D\u540C\u5B57\u4F53",
    latinFontForUI: "\u62C9\u4E01\u5B57\u4F53\u5E94\u7528\u4E8E UI",
    latinFontForUIDesc: "\u542F\u7528\u540E\uFF0C\u62C9\u4E01\u5B57\u4F53\u4E5F\u5C06\u5E94\u7528\u4E8E UI \u5143\u7D20\uFF08\u83DC\u5355\u3001\u4FA7\u8FB9\u680F\u3001\u6309\u94AE\u7B49\uFF09",
    latinFont: "\u62C9\u4E01\u5B57\u4F53",
    latinFontDesc: "\u7528\u4E8E\u62C9\u4E01\u5B57\u7B26\u7684\u5B57\u4F53\uFF08A-Z\u3001a-z\u30010-9\u3001\u6807\u70B9\uFF09",
    recommendedLatinFonts: "\u63A8\u8350\u7684\u62C9\u4E01\u5B57\u4F53",
    latinFontScope: "\u62C9\u4E01\u5B57\u4F53\u4F5C\u7528\u8303\u56F4",
    latinFontScopeDesc: "\u7CBE\u7EC6\u8C03\u6574\u54EA\u4E9B\u5B57\u7B26\u8303\u56F4\u4F7F\u7528\u62C9\u4E01\u5B57\u4F53",
    scopeBasic: "\u4EC5\u57FA\u672C\u62C9\u4E01\u5B57\u7B26\uFF08A-Z\u3001a-z\u30010-9\uFF09",
    scopeExtended: "\u57FA\u672C + \u6269\u5C55\u62C9\u4E01\u5B57\u7B26\uFF08\u5305\u542B\u91CD\u97F3\u5B57\u7B26\uFF09",
    scopeFull: "\u5B8C\u6574\u62C9\u4E01\u5B57\u7B26 + \u7B26\u53F7\uFF08\u5305\u542B\u6807\u70B9\u548C\u7279\u6B8A\u7B26\u53F7\uFF09",
    // Font Legend
    legendConverted: "\u53EF\u7528",
    legendNotExist: "\u4E0D\u5B58\u5728",
    filterAll: "\u5168\u90E8",
    noNotExistFonts: "\u6CA1\u6709\u7F3A\u5931\u7684\u5B57\u4F53",
    // Font Operations
    scanFonts: "\u626B\u63CF\u5B57\u4F53",
    deleteFont: "\u5220\u9664\u5B57\u4F53",
    // Fallback Operations
    deleteUnusedFonts: "\u5220\u9664\u672A\u4F7F\u7528\u7684\u5B57\u4F53",
    rescanFonts: "\u91CD\u65B0\u626B\u63CF",
    fontsRescanned: "\u5B57\u4F53\u5DF2\u91CD\u65B0\u626B\u63CF",
    fontFileStatus: "\u5B57\u4F53\u6587\u4EF6\u72B6\u6001",
    deleteUnusedFontsDesc: "\u5220\u9664\u672A\u4F7F\u7528\u7684\u5B57\u4F53\u6587\u4EF6\uFF08\u5DF2\u914D\u7F6E\u7684\u5B57\u4F53\u4E0D\u4F1A\u88AB\u5220\u9664\uFF09",
    applyNow: "\u7ACB\u5373\u5E94\u7528",
    applyNowDesc: "\u5E94\u7528\u5F53\u524D\u5B57\u4F53\u914D\u7F6E",
    applyFonts: "\u5E94\u7528\u5B57\u4F53",
    // Font Missing Warning
    fontMissingWarning: "\u5F53\u524D\u5B57\u4F53\u6587\u4EF6\u7F3A\u5931\uFF0C\u5DF2\u56DE\u9000\u81F3\u7CFB\u7EDF\u8BBE\u7F6E",
    noAvailableFonts: "\u5C1A\u672A\u53D1\u73B0\u4EFB\u4F55\u5B57\u4F53\u3002\u8BF7\u4F7F\u7528\u300C\u91CD\u65B0\u626B\u63CF\u300D\u67E5\u627E\u3002",
    fontStatusTitle: "\u5B57\u4F53\u72B6\u6001",
    fontStatusIntro: "\u6BCF\u4E00\u7C7B\u7528\u7684\u662F\u54EA\u4E2A\u5B57\u4F53\uFF0C\u4EE5\u53CA\u5B83\u7684\u5EA6\u91CF\u4ECE\u54EA\u91CC\u6765\u3002",
    fontStatusFont: "\u5B57\u4F53",
    fontStatusFiles: "\u6587\u4EF6",
    fontStatusHow: "\u5EA6\u91CF\u662F\u600E\u4E48\u5F97\u5230\u7684",
    fontStatusSource: "\u6765\u6E90",
    fontStatusGaps: "\u672A\u8986\u76D6",
    fontStatusNone: "\u672A\u8BBE\u7F6E",
    fontStatusPending: "\u5B57\u4F53\u5C1A\u672A\u89E3\u6790\u5B8C\u6210",
    fontStatusClose: "\u5173\u95ED",
    // Font Variant Warning
    variantWarningTitle: "\u5B57\u4F53\u53D8\u4F53\u8B66\u544A",
    variantWarningBody: '\u6240\u9009\u5B57\u4F53 "{fontFamily}" \u4EC5\u6709 {variantCount} \u4E2A\u53D8\u4F53\uFF08{variantList}\uFF09\u3002\n\n\u4E3A\u786E\u4FDD\u62C9\u4E01\u6587\u5B57\u5185\u5BB9\u7684\u659C\u4F53\u548C\u7C97\u4F53\u6B63\u5E38\u663E\u793A\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5305\u542B Regular\u3001Italic\u3001Bold \u548C Bold Italic \u56DB\u79CD\u53D8\u4F53\u7684\u5B57\u4F53\u5BB6\u65CF\u3002\u7F3A\u5C11\u53D8\u4F53\u53EF\u80FD\u5BFC\u81F4\u4F2A\u659C\u4F53/\u4F2A\u7C97\u4F53\u6E32\u67D3\u95EE\u9898\u3002',
    variantWarningContinue: "\u4ECD\u7136\u7EE7\u7EED",
    variantWarningCancel: "\u53D6\u6D88",
    nonLatinFontNote: "\u975E\u62C9\u4E01\u8BED\u8A00\u5B57\u4F53\uFF08\u4E2D\u6587\u3001\u65E5\u6587\u3001\u97E9\u6587\u7B49\uFF09\u8BF7\u5FFD\u7565\u6B64\u8B66\u544A",
    // Override System Settings
    overrideSystemSettingsTitle: "\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u4F18\u5148",
    overrideSystemSettingsContent: "\u6240\u6709\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u4E00\u7ECF\u5E94\u7528\uFF0C\u5747\u4F1A\u8986\u76D6\u7CFB\u7EDF\u8BBE\u7F6E",
    // Performance Warning
    performanceWarningTitle: "\u6027\u80FD\u6CE8\u610F\u4E8B\u9879",
    performanceWarningContent: "\u907F\u514D\u5728\u5355\u884C\u5185\u6DF7\u5408\u8FC7\u591A\u8BED\u8A00\u6587\u5B57\u3002\u5BC6\u96C6\u7684\u591A\u8BED\u8A00\u6DF7\u6392\uFF08\u4F8B\u5982\u5728\u540C\u4E00\u884C\u5185\u6DF7\u5408\u4E2D\u6587+\u65E5\u6587+\u97E9\u6587+\u963F\u62C9\u4F2F\u6587+\u4FC4\u6587\uFF09\u53EF\u80FD\u89E6\u53D1\u5B57\u4F53\u56DE\u9000\u673A\u5236\uFF0C\u5BFC\u81F4\u6E32\u67D3\u5F15\u64CE\u5361\u6B7B\u3002\n\n\u5EFA\u8BAE\uFF1A\u5C06\u4E0D\u540C\u8BED\u8A00\u7684\u5185\u5BB9\u5206\u6BB5\u663E\u793A\uFF0C\u4EE5\u83B7\u5F97\u6700\u4F73\u6027\u80FD\u3002",
    // Settings Page Callout
    incompleteVariantTitle: "\u5B57\u4F53\u53D8\u4F53\u4E0D\u5B8C\u6574",
    incompleteVariantBody: '\u6240\u9009\u5B57\u4F53 "{fontFamily}" \u4EC5\u6709 {variantCount} \u4E2A\u53D8\u4F53\uFF08{variantList}\uFF09\u3002\n\u5EFA\u8BAE\uFF1A\u9009\u62E9\u5305\u542B Regular\u3001Italic\u3001Bold \u548C Bold Italic \u56DB\u79CD\u53D8\u4F53\u7684\u5B57\u4F53\u5BB6\u65CF\uFF0C\u4EE5\u786E\u4FDD\u659C\u4F53\u548C\u7C97\u4F53\u6B63\u5E38\u663E\u793A\u3002\n\u975E\u62C9\u4E01\u8BED\u8A00\u5B57\u4F53\u901A\u5E38\u4E0D\u9700\u8981\u5B8C\u6574\u7684 Italic/Bold \u53D8\u4F53\uFF0C\u53EF\u4EE5\u5FFD\u7565\u6B64\u8B66\u544A\u3002',
    monospaceRequirement: "\u7B49\u5BBD\u5B57\u4F53\u8981\u6C42",
    monospaceRequirementBody: "\u4EE3\u7801\u5B57\u4F53\u5FC5\u987B\u9009\u62E9\u7B49\u5BBD\u5B57\u4F53\uFF08Monospace\uFF09\uFF0C\u666E\u901A\u62C9\u4E01\u5B57\u4F53\u4F1A\u5BFC\u81F4\u4EE3\u7801\u5BF9\u9F50\u9519\u4E71\u3002",
    mathFontRequirement: "\u6570\u5B66\u5B57\u4F53\u8981\u6C42",
    mathFontRequirementBody: "LaTeX \u6570\u5B66\u5B57\u4F53\u5FC5\u987B\u9009\u62E9\u4E13\u7528\u6570\u5B66\u5B57\u4F53\uFF08\u5982 Latin Modern Math\u3001XITS Math\uFF09\uFF0C\u666E\u901A\u5B57\u4F53\u65E0\u6CD5\u6B63\u786E\u6E32\u67D3\u6570\u5B66\u7B26\u53F7\u3002",
    mathFontMismatchTitle: "\u6570\u5B66\u5B57\u4F53\u5EA6\u91CF\u4E0D\u5339\u914D",
    mathFontMismatchBody: "\u300C{fontFamily}\u300D\u7684\u5B57\u5F62\u5EA6\u91CF\u4E0E MathJax \u6392\u7248\u6240\u4F9D\u636E\u7684\u5B57\u4F53\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u51FA\u73B0\u6839\u53F7\u6A2A\u6760\u4E0E\u94A9\u5B50\u8131\u5F00\u3001\u4E0A\u4E0B\u6807\u4E0E\u5E95\u6570\u6D6E\u79BB\u7684\u95EE\u9898\u3002\u6539\u7528 Computer Modern \u5EA6\u91CF\u7684\u6570\u5B66\u5B57\u4F53\uFF08\u9996\u9009 Latin Modern Math\uFF09\u53EF\u4ECE\u6839\u4E0A\u6D88\u9664\u3002",
    mathFontNotMathTitle: "\u4E0D\u662F\u53EF\u7528\u7684\u6570\u5B66\u5B57\u4F53",
    mathFontNotMathBody: "\u300C{fontFamily}\u300D\u672A\u63D0\u4F9B\u6240\u9700\u7684\u6570\u5B66\u5B57\u5F62\uFF08{missing}\uFF09\uFF0CMathJax \u4F1A\u6539\u7528\u56DE\u9000\u5B57\u4F53\u6E32\u67D3\uFF0C\u516C\u5F0F\u6392\u7248\u4F1A\u968F\u4E4B\u9519\u4F4D\u3002\u8BF7\u6539\u9009\u4E13\u7528\u6570\u5B66\u5B57\u4F53\u3002",
    missingVariantTitle: "\u7F3A\u5C11\u5B57\u4F53\u53D8\u4F53",
    missingVariantBody: "{latinFont} \u7F3A\u5C11\u4EE5\u4E0B\u53D8\u4F53\uFF1A{missingList}\u3002\u7F3A\u5931\u7684\u6837\u5F0F\u5C06\u4F7F\u7528\u6D4F\u89C8\u5668\u5408\u6210\uFF08\u6548\u679C\u8F83\u5DEE\uFF09\u3002",
    // UI Text
    variantsSuffix: "\u53D8\u4F53",
    variantsWithCheckmark: "{familyName} \u2713 ({variantCount} \u4E2A\u53D8\u4F53)",
    variantsWithoutCheckmark: "{familyName} ({variantCount} \u4E2A\u53D8\u4F53)",
    notFoundFontFamily: "\u672A\u627E\u5230\u5B57\u4F53\u5BB6\u65CF\uFF0C\u8BF7\u786E\u8BA4\u5B57\u4F53\u6587\u4EF6\u5939\u7ED3\u6784\u6B63\u786E",
    importFont: "\u5BFC\u5165\u5B57\u4F53",
    recommendedLatinFontsLabel: "--- \u63A8\u8350\u7684\u62C9\u4E01\u5B57\u4F53 ---",
    otherFontsLabel: "--- \u5176\u4ED6\u5B57\u4F53 ---",
    expandCollapse: "\u5C55\u5F00/\u6536\u8D77",
    expandAll: "\u5168\u90E8\u5C55\u5F00",
    collapseAll: "\u5168\u90E8\u6298\u53E0",
    deleteThisFont: "\u5220\u9664\u6B64\u5B57\u4F53",
    confirmDeleteFont: '\u786E\u5B9A\u8981\u5220\u9664\u5B57\u4F53 "{fontName}" \u5417\uFF1F',
    deletedFont: "\u2713 \u5DF2\u5220\u9664 {fontName}",
    deleteFailedError: "\u26A0\uFE0F \u5220\u9664\u5931\u8D25: {error}",
    noUnusedFonts: "\u6CA1\u6709\u672A\u4F7F\u7528\u7684\u5B57\u4F53",
    confirmDeleteUnusedFonts: "\u53D1\u73B0 {count} \u4E2A\u672A\u4F7F\u7528\u7684\u5B57\u4F53\uFF0C\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
    deletedUnusedFonts: "\u2713 \u5DF2\u5220\u9664 {count} \u4E2A\u672A\u4F7F\u7528\u7684\u5B57\u4F53",
    deleteError: "\u26A0\uFE0F \u5220\u9664\u5B57\u4F53\u65F6\u51FA\u9519",
    importedFonts: "\u2713 \u5DF2\u5BFC\u5165 {count} \u4E2A\u5B57\u4F53\u6587\u4EF6",
    importing: "\u5BFC\u5165\u4E2D...",
    importError: "\u26A0\uFE0F \u5BFC\u5165\u5931\u8D25",
    importFailedError: "\u26A0\uFE0F \u5BFC\u5165\u5931\u8D25: {error}",
    importDropTitle: "\u62D6\u62FD\u5B57\u4F53\u6587\u4EF6\u5230\u6B64\u5904",
    importDropSubtitle: "\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6",
    importDropHint: "\u652F\u6301 .ttf, .otf, .woff, .woff2 \u683C\u5F0F",
    punctuationDesc: ".,!?;: \u7B49\u5E38\u7528\u6807\u70B9",
    symbolsDesc: "@#$%&* \u7B49\u7279\u6B8A\u5B57\u7B26",
    // Notices
    fontsApplied: "\u2713 \u5B57\u4F53\u5DF2\u5E94\u7528",
    conversionFailed: "\u26A0\uFE0F \u5B57\u4F53\u8F6C\u6362\u5931\u8D25",
    fontDeleted: "\u2713 \u5B57\u4F53\u5DF2\u5220\u9664",
    deleteFailed: "\u26A0\uFE0F \u5220\u9664\u5B57\u4F53\u5931\u8D25",
    unusedDeleted: "\u2713 \u5DF2\u5220\u9664 {count} \u4E2A\u672A\u4F7F\u7528\u7684\u5B57\u4F53",
    scanComplete: "\u2713 \u5DF2\u626B\u63CF {count} \u4E2A\u5B57\u4F53",
    // Modals
    confirmDelete: "\u786E\u8BA4\u5220\u9664",
    confirmDeleteMsg: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5B57\u4F53\u5417\uFF1F",
    confirmDeleteUnused: "\u786E\u5B9A\u8981\u5220\u9664\u6240\u6709\u672A\u4F7F\u7528\u7684\u5B57\u4F53\u5417\uFF1F",
    delete: "\u5220\u9664",
    cancel: "\u53D6\u6D88",
    confirm: "\u786E\u8BA4",
    // Font Info
    variantsCount: "{count} \u4E2A\u53D8\u4F53",
    familyName: "\u5BB6\u65CF",
    style: "\u6837\u5F0F",
    path: "\u8DEF\u5F84",
    // Preset Management (New)
    syncDelayTitle: "\u8DE8\u8BBE\u5907\u540C\u6B65\u63D0\u793A",
    syncDelayContent: "\u5B57\u4F53\u9884\u8BBE\u7684\u53D8\u66F4\u901A\u8FC7 Obsidian Sync \u6216\u7B2C\u4E09\u65B9\u4E91\u540C\u6B65\u670D\u52A1\uFF08iCloud\u3001Dropbox\uFF09\u5728\u8BBE\u5907\u95F4\u540C\u6B65\u3002\u53D8\u66F4\u53EF\u80FD\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u4F20\u64AD\u5230\u5176\u4ED6\u8BBE\u5907\u3002\u5982\u9700\u7ACB\u5373\u751F\u6548\uFF0C\u8BF7\u624B\u52A8\u5237\u65B0\u3002",
    headerPresetManagement: "\u9884\u8BBE\u7BA1\u7406",
    createPreset: "\u521B\u5EFA\u65B0\u9884\u8BBE",
    createPresetDesc: "\u8F93\u5165\u540D\u79F0\u540E\u70B9\u51FB\u52A0\u53F7\u56FE\u6807\u521B\u5EFA",
    presetNamePlaceholder: "\u4F8B\u5982\uFF1A\u684C\u9762\u529E\u516C\u3001\u79FB\u52A8\u9605\u8BFB",
    addPreset: "\u6DFB\u52A0\u9884\u8BBE",
    presetNameRequired: "\u9884\u8BBE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
    presetNameExists: "\u9884\u8BBE\u540D\u79F0\u5DF2\u5B58\u5728",
    presetCreated: "\u9884\u8BBE\u5DF2\u521B\u5EFA",
    headerDeviceManagement: "\u8BBE\u5907\u7BA1\u7406\uFF08\u62D6\u62FD\u5206\u914D\uFF09",
    deviceLimitTitle: "\u5DF2\u77E5\u5C40\u9650",
    deviceLimitBodyAndroid: "\u5B89\u5353\u7AEF\u6062\u590D\u51FA\u5382\u8BBE\u7F6E\u540E\uFF0C\u4F1A\u51FA\u73B0\u540C\u4E00\u53F0\u8BBE\u5907\u5728\u6B64\u5217\u8868\u4E2D\u91CD\u590D\u7684\u95EE\u9898\u3002",
    deviceLimitBodyIos: "iOS \u7AEF\u5378\u8F7D\u5E76\u91CD\u88C5 Obsidian \u540E\uFF0C\u4F1A\u51FA\u73B0\u540C\u4E00\u53F0\u8BBE\u5907\u5728\u6B64\u5217\u8868\u4E2D\u91CD\u590D\u7684\u95EE\u9898\u3002",
    devicePresetManagement: "\u8BBE\u5907\u6240\u5C5E\u9884\u8BBE\u7BA1\u7406",
    currentDevicePreset: "\u5F53\u524D\u8BBE\u5907\u6240\u5C5E\u9884\u8BBE",
    currentDevicePresetDesc: "\u9009\u62E9\u5F53\u524D\u8BBE\u5907\u8981\u4F7F\u7528\u7684\u9884\u8BBE",
    selectPresetToEdit: "\u9009\u62E9\u9700\u8981\u88AB\u8BBE\u7F6E\u7684\u9884\u8BBE",
    selectPresetToEditDesc: "\u9009\u62E9\u60A8\u8981\u914D\u7F6E\u5B57\u4F53\u8BBE\u7F6E\u7684\u9884\u8BBE",
    devices: "\u8BBE\u5907",
    global: "\u5168\u5C40",
    presetId: "\u9884\u8BBE ID",
    presetName: "\u9884\u8BBE\u540D\u79F0",
    editPresetName: "\u7F16\u8F91\u9884\u8BBE\u540D\u79F0",
    enterNewPresetName: "\u8F93\u5165\u65B0\u7684\u9884\u8BBE\u540D\u79F0",
    deletePreset: "\u5220\u9664\u9884\u8BBE",
    deletePresetWarning: "\u5220\u9664\u6B64\u9884\u8BBE\u540E\uFF0C\u9884\u8BBE\u6240\u5C5E\u7684\u8BBE\u5907\u5747\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u9884\u8BBE\u914D\u7F6E\uFF0C\u82E5\u60A8\u8BBE\u7F6E\u7684\u9884\u8BBE\u4E0E\u9ED8\u8BA4\u9884\u8BBE\u4E0D\u540C\uFF0C\u8BF7\u4E09\u601D\u800C\u540E\u884C",
    cannotDeleteDefaultPreset: "\u65E0\u6CD5\u5220\u9664\u9ED8\u8BA4\u9884\u8BBE",
    targetDevices: "\u76EE\u6807\u8BBE\u5907",
    targetDevicesDesc: "\u5C06\u4F7F\u7528\u6B64\u9884\u8BBE\u7684\u8BBE\u5907\u5217\u8868",
    refreshDeviceList: "\u5237\u65B0\u8BBE\u5907\u5217\u8868",
    globalPresetNote: "\u8FD9\u662F\u5168\u5C40\u9884\u8BBE\uFF08\u9ED8\u8BA4\u5E94\u7528\u4E8E\u6240\u6709\u8BBE\u5907\uFF09",
    currentDevice: "\u5F53\u524D\u8BBE\u5907",
    copyPresetCopy: "\u590D\u5236\u9884\u8BBE\u526F\u672C",
    copyPresetCopyDesc: "\u4E3A\u5F53\u524D\u8BBE\u5907\u521B\u5EFA\u9884\u8BBE\u7684\u526F\u672C",
    copySuffix: "_\u526F\u672C",
    presetCopied: "\u9884\u8BBE\u5DF2\u590D\u5236",
    deviceReassigned: "\u8BBE\u5907\u5DF2\u91CD\u65B0\u5206\u914D\u5230\u9884\u8BBE",
    dragDeviceHere: "\u62D6\u52A8\u8BBE\u5907\u5230\u6B64\u5904\u4EE5\u5206\u914D\u5230\u8BE5\u9884\u8BBE",
    cleanupDevices: "\u6E05\u7406\u672A\u7ED1\u5B9A\u8BBE\u5907",
    cleanupDevicesNone: "\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u672A\u7ED1\u5B9A\u8BBE\u5907",
    confirmCleanupDevices: "\u4EE5\u4E0B\u8BBE\u5907\u65E2\u975E\u672C\u673A\u3001\u4E5F\u672A\u7ED1\u5B9A\u4EFB\u4F55\u9884\u8BBE\uFF0C\u5C06\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\uFF1A\n\n{0}",
    cleanupDevicesDone: "\u5DF2\u6E05\u7406 {0} \u53F0\u8BBE\u5907",
    deviceListRepaired: "\u8BBE\u5907\u5217\u8868\u5DF2\u81EA\u6211\u4FEE\u590D\uFF1A\u5408\u5E76 {0} \u7EC4\u91CD\u590D\u8BBE\u5907",
    currentDeviceName: "\u5F53\u524D\u8BBE\u5907\u540D\u79F0",
    deviceId: "\u8BBE\u5907 ID",
    deviceNamePlaceholder: "\u4F8B\u5982\uFF1A\u684C\u9762-Mac\u3001\u79FB\u52A8-\u5B89\u5353",
    editDeviceName: "\u7F16\u8F91\u8BBE\u5907\u540D\u79F0",
    moveDeviceToPreset: "\u79FB\u52A8\u8BBE\u5907\u5230\u9884\u8BBE",
    fontConfiguration: "\u5B57\u4F53\u914D\u7F6E",
    currentPresetConfig: "\u5F53\u524D\u9884\u8BBE\u914D\u7F6E",
    usingGlobalPreset: "\u60A8\u6B63\u5728\u4F7F\u7528\u5168\u5C40\u9884\u8BBE\uFF08\u6240\u6709\u672A\u5206\u914D\u8BBE\u5907\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF09",
    fontNotFound: "\u5B57\u4F53\u5728\u53EF\u7528\u5B57\u4F53\u5217\u8868\u4E2D\u4E0D\u5B58\u5728",
    removeDevice: "\u79FB\u9664\u8BBE\u5907",
    confirmRemoveDevice: '\u4ECE\u6240\u6709\u9884\u8BBE\u4E2D\u79FB\u9664\u8BBE\u5907"{0}"\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002'
  },
  ja: {
    // Plugin Info
    pluginName: "\u30ED\u30FC\u30AB\u30EB\u30D5\u30A9\u30F3\u30C8\u30ED\u30FC\u30C0\u30FC",
    pluginDesc: "\u30ED\u30FC\u30AB\u30EB Vault \u304B\u3089\u30AB\u30B9\u30BF\u30E0\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u3080",
    // Settings Headers
    headerDirectoryConfig: "\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u8A2D\u5B9A",
    headerGeneralSettings: "\u4E00\u822C\u8A2D\u5B9A",
    headerFontApplication: "\u30D5\u30A9\u30F3\u30C8\u9069\u7528\u8A2D\u5B9A",
    headerFontFileConfig: "\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u8A2D\u5B9A",
    headerFontSize: "\u6587\u5B57\u30B5\u30A4\u30BA",
    // 文字サイズ
    fontSizeInfoTitle: "\u500B\u5225\u306B\u8ABF\u6574\u3067\u304D\u308B\u6587\u5B57\u30B5\u30A4\u30BA",
    fontSizeInfo: "\u30A8\u30C7\u30A3\u30BF\u30FB\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30D3\u30E5\u30FC\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u305D\u308C\u305E\u308C\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u5165\u529B\u6B04\u306B px \u5024\u3092\u76F4\u63A5\u5165\u529B\u3059\u308B\u304B\u30B9\u30E9\u30A4\u30C0\u30FC\u3092\u52D5\u304B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u5E38\u306B\u540C\u671F\u3057\u307E\u3059\uFF09\u3002\u30AB\u30B9\u30BF\u30E0\u30D5\u30A9\u30F3\u30C8\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u5373\u5EA7\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002",
    fontSizeEditor: "\u30A8\u30C7\u30A3\u30BF\u306E\u6587\u5B57\u30B5\u30A4\u30BA",
    fontSizeEditorDesc: "\u30BD\u30FC\u30B9 / \u30E9\u30A4\u30D6\u30D7\u30EC\u30D3\u30E5\u30FC\u5185\u306E\u672C\u6587",
    fontSizeReading: "\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30D3\u30E5\u30FC\u306E\u6587\u5B57\u30B5\u30A4\u30BA",
    fontSizeReadingDesc: "\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30D3\u30E5\u30FC\u3068\u30CE\u30FC\u30C8\u30D7\u30EC\u30D3\u30E5\u30FC\u5185\u306E\u672C\u6587",
    fontSizeUI: "\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u6587\u5B57\u30B5\u30A4\u30BA",
    fontSizeUIDesc: "\u30E1\u30CB\u30E5\u30FC\u3001\u30B5\u30A4\u30C9\u30D0\u30FC\u3001\u30DC\u30BF\u30F3\u3001\u30C0\u30A4\u30A2\u30ED\u30B0\uFF08\u65E2\u5B9A\u306E 15px \u3092\u57FA\u6E96\u306B\u62E1\u5927\u7E2E\u5C0F\uFF09",
    fontSizePreview: "\u30D7\u30EC\u30D3\u30E5\u30FC",
    fontSizePreviewSample: "Aa \u65E5\u672C\u8A9E 123",
    fontSizeResetOne: "\u3053\u306E\u9805\u76EE\u3092\u521D\u671F\u5024\u306B\u623B\u3059",
    fontSizeReset: "\u3059\u3079\u3066\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u30EA\u30BB\u30C3\u30C8",
    fontSizeResetDesc: "\u3059\u3079\u3066\u306E\u30B5\u30A4\u30BA\u8ABF\u6574\u3092\u89E3\u9664\u3057\u3001Obsidian \u306E\u65E2\u5B9A\u5024\u306B\u623B\u3057\u307E\u3059",
    fontSizeResetDone: "\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",
    devicePresetManagement: "\u30C7\u30D0\u30A4\u30B9\u30D7\u30EA\u30BB\u30C3\u30C8\u7BA1\u7406",
    currentDevicePreset: "\u73FE\u5728\u306E\u30C7\u30D0\u30A4\u30B9\u30D7\u30EA\u30BB\u30C3\u30C8",
    currentDevicePresetDesc: "\u3053\u306E\u30C7\u30D0\u30A4\u30B9\u304C\u4F7F\u7528\u3059\u308B\u30D7\u30EA\u30BB\u30C3\u30C8\u3092\u9078\u629E",
    selectPresetToEdit: "\u7DE8\u96C6\u3059\u308B\u30D7\u30EA\u30BB\u30C3\u30C8\u3092\u9078\u629E",
    selectPresetToEditDesc: "\u30D5\u30A9\u30F3\u30C8\u8A2D\u5B9A\u3092\u69CB\u6210\u3059\u308B\u30D7\u30EA\u30BB\u30C3\u30C8\u3092\u9078\u629E",
    presetName: "\u30D7\u30EA\u30BB\u30C3\u30C8\u540D",
    presetId: "\u30D7\u30EA\u30BB\u30C3\u30C8 ID",
    usingGlobalPreset: "\u30B0\u30ED\u30FC\u30D0\u30EB\u30D7\u30EA\u30BB\u30C3\u30C8\u3067\u3059\uFF08\u672A\u5272\u308A\u5F53\u3066\u306E\u3059\u3079\u3066\u306E\u30C7\u30D0\u30A4\u30B9\u306B\u9069\u7528\uFF09",
    // Directory Settings
    fontSourceDir: "\u30D5\u30A9\u30F3\u30C8\u30BD\u30FC\u30B9\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA",
    fontSourceDirDesc: "\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u30D5\u30A9\u30EB\u30C0\u3092\u542B\u3080\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA",
    // General Settings
    autoLoad: "\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u8AAD\u307F\u8FBC\u307F",
    autoLoadDesc: "Obsidian \u8D77\u52D5\u6642\u306B\u30D5\u30A9\u30F3\u30C8\u3092\u81EA\u52D5\u9069\u7528",
    // Font Types
    uiFontName: "UI \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30D5\u30A9\u30F3\u30C8",
    uiFontDesc: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3001\u30E1\u30CB\u30E5\u30FC\u3001\u30DC\u30BF\u30F3\u306A\u3069\u306E UI \u8981\u7D20",
    textFontName: "\u672C\u6587\u30D5\u30A9\u30F3\u30C8",
    textFontDesc: "\u30A8\u30C7\u30A3\u30BF\u30FC\u672C\u6587\u30B3\u30F3\u30C6\u30F3\u30C4",
    textFontWarning: "\u26A0\uFE0F \u63A8\u5968\uFF1A\u659C\u4F53\u3068\u592A\u5B57\u304C\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u3001Regular/Italic/Bold/BoldItalic \u30D0\u30EA\u30A2\u30F3\u30C8\u3092\u542B\u3080\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    headingFontName: "\u898B\u51FA\u3057\u30D5\u30A9\u30F3\u30C8",
    headingFontDesc: "\u30B3\u30F3\u30C6\u30F3\u30C4\u5185\u306E Markdown \u898B\u51FA\u3057\uFF08h1-h6\uFF09\u7528\u30D5\u30A9\u30F3\u30C8",
    headingUseTextFont: "\u672C\u6587\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528",
    headingUseUIFont: "UI \u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528",
    headingApplyToFileTitle: "\u30D5\u30A1\u30A4\u30EB\u540D\u30BF\u30A4\u30C8\u30EB\u306B\u9069\u7528",
    headingApplyToFileTitleDesc: "\u30CE\u30FC\u30C8\u4E0A\u90E8\u306B\u8868\u793A\u3055\u308C\u308B\u30A4\u30F3\u30E9\u30A4\u30F3\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30C8\u30EB\u306B\u3082\u898B\u51FA\u3057\u30D5\u30A9\u30F3\u30C8\u3092\u9069\u7528",
    monospaceFontName: "\u30B3\u30FC\u30C9\u30D5\u30A9\u30F3\u30C8",
    monospaceFontDesc: "\u30B3\u30FC\u30C9\u30D6\u30ED\u30C3\u30AF\u3068\u30A4\u30F3\u30E9\u30A4\u30F3\u30B3\u30FC\u30C9",
    monospaceFontWarning: "\u26A0\uFE0F \u5FC5\u9808\uFF1A\u7B49\u5E45\u30D5\u30A9\u30F3\u30C8\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u901A\u5E38\u306E\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u306F\u30B3\u30FC\u30C9\u306E\u914D\u7F6E\u3092\u5D29\u3057\u307E\u3059",
    mathFontName: "LaTeX \u6570\u5F0F\u30D5\u30A9\u30F3\u30C8",
    mathFontDesc: "\u6570\u5F0F\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",
    mathFontWarning: "\u26A0\uFE0F \u5FC5\u9808\uFF1A\u5C02\u7528\u306E\u6570\u5F0F\u30D5\u30A9\u30F3\u30C8\uFF08Latin Modern Math\u3001XITS Math \u306A\u3069\uFF09\u304C\u5FC5\u8981\u3067\u3059\u3002\u901A\u5E38\u306E\u30D5\u30A9\u30F3\u30C8\u3067\u306F\u6570\u5B66\u8A18\u53F7\u3092\u6B63\u3057\u304F\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3067\u304D\u307E\u305B\u3093",
    systemDefault: "-- \u30B7\u30B9\u30C6\u30E0\u30C7\u30D5\u30A9\u30EB\u30C8 --",
    // Latin Font Separation
    latinFontInfo: "\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u5206\u96E2",
    latinFontInfoDesc: "\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u5225\u306E\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30E9\u30C6\u30F3\u6587\u5B57\uFF08A-Z\u3001a-z\u3001\u6570\u5B57\u3001\u53E5\u8AAD\u70B9\uFF09\u306F\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3001\u975E\u30E9\u30C6\u30F3\u6587\u5B57\uFF08CJK \u306A\u3069\uFF09\u306F\u5143\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u7D9A\u3051\u307E\u3059\u3002",
    latinFontInfoDescForLatinUsers: "\u3053\u306E\u6A5F\u80FD\u306F\u30E9\u30C6\u30F3\u6587\u5B57\u3068\u975E\u30E9\u30C6\u30F3\u6587\u5B57\u3092\u6DF7\u5728\u3055\u305B\u308B\u30E6\u30FC\u30B6\u30FC\u5411\u3051\u3067\u3059\uFF08\u4F8B\uFF1A\u82F1\u8A9E + \u4E2D\u56FD\u8A9E/\u65E5\u672C\u8A9E/\u97D3\u56FD\u8A9E\uFF09\u3002\u4E3B\u306B\u30E9\u30C6\u30F3\u6587\u5B57\u8A00\u8A9E\u3067\u57F7\u7B46\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u6A5F\u80FD\u306F\u5FC5\u8981\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002",
    latinFontEnabled: "\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u5206\u96E2\u3092\u6709\u52B9\u5316",
    latinFontEnabledDesc: "\u30E9\u30C6\u30F3\u6587\u5B57\u3068\u975E\u30E9\u30C6\u30F3\u6587\u5B57\u306B\u7570\u306A\u308B\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528",
    latinFontForUI: "UI\u306B\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u3092\u9069\u7528",
    latinFontForUIDesc: "\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u306FUI\u8981\u7D20\uFF08\u30E1\u30CB\u30E5\u30FC\u3001\u30B5\u30A4\u30C9\u30D0\u30FC\u3001\u30DC\u30BF\u30F3\u306A\u3069\uFF09\u306B\u3082\u9069\u7528\u3055\u308C\u307E\u3059",
    latinFont: "\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8",
    latinFontDesc: "\u30E9\u30C6\u30F3\u6587\u5B57\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30F3\u30C8\uFF08A-Z\u3001a-z\u30010-9\u3001\u53E5\u8AAD\u70B9\uFF09",
    recommendedLatinFonts: "\u63A8\u5968\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8",
    latinFontScope: "\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u30B9\u30B3\u30FC\u30D7",
    latinFontScopeDesc: "\u3069\u306E\u6587\u5B57\u7BC4\u56F2\u306B\u30E9\u30C6\u30F3\u6587\u5B57\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u304B\u3092\u5FAE\u8ABF\u6574",
    scopeBasic: "\u57FA\u672C\u30E9\u30C6\u30F3\u6587\u5B57\u306E\u307F\uFF08A-Z\u3001a-z\u30010-9\uFF09",
    scopeExtended: "\u57FA\u672C + \u62E1\u5F35\u30E9\u30C6\u30F3\u6587\u5B57\uFF08\u30A2\u30AF\u30BB\u30F3\u30C8\u4ED8\u304D\u6587\u5B57\u3092\u542B\u3080\uFF09",
    scopeFull: "\u5B8C\u5168\u30E9\u30C6\u30F3\u6587\u5B57 + \u8A18\u53F7\uFF08\u53E5\u8AAD\u70B9\u3068\u7279\u6B8A\u8A18\u53F7\u3092\u542B\u3080\uFF09",
    // Font Legend
    legendConverted: "\u4F7F\u7528\u53EF\u80FD",
    legendNotExist: "\u5B58\u5728\u3057\u306A\u3044",
    filterAll: "\u3059\u3079\u3066",
    noNotExistFonts: "\u6B20\u843D\u3057\u3066\u3044\u308B\u30D5\u30A9\u30F3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093",
    // Font Operations
    scanFonts: "\u30D5\u30A9\u30F3\u30C8\u3092\u30B9\u30AD\u30E3\u30F3",
    deleteFont: "\u30D5\u30A9\u30F3\u30C8\u3092\u524A\u9664",
    // Fallback Operations
    deleteUnusedFonts: "\u672A\u4F7F\u7528\u30D5\u30A9\u30F3\u30C8\u3092\u524A\u9664",
    rescanFonts: "\u30D5\u30A9\u30F3\u30C8\u3092\u518D\u30B9\u30AD\u30E3\u30F3",
    fontsRescanned: "\u30D5\u30A9\u30F3\u30C8\u3092\u518D\u30B9\u30AD\u30E3\u30F3\u3057\u307E\u3057\u305F",
    fontFileStatus: "\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u30B9\u30C6\u30FC\u30BF\u30B9",
    deleteUnusedFontsDesc: "\u672A\u4F7F\u7528\u306E\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\uFF08\u8A2D\u5B9A\u6E08\u307F\u30D5\u30A9\u30F3\u30C8\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\uFF09",
    applyNow: "\u4ECA\u3059\u3050\u9069\u7528",
    applyNowDesc: "\u73FE\u5728\u306E\u30D5\u30A9\u30F3\u30C8\u8A2D\u5B9A\u3092\u9069\u7528",
    applyFonts: "\u30D5\u30A9\u30F3\u30C8\u3092\u9069\u7528",
    // Font Missing Warning
    fontMissingWarning: "\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30B7\u30B9\u30C6\u30E0\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\u3057\u307E\u3057\u305F",
    noAvailableFonts: "\u307E\u3060\u30D5\u30A9\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u300C\u518D\u30B9\u30AD\u30E3\u30F3\u300D\u3067\u63A2\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    fontStatusTitle: "\u30D5\u30A9\u30F3\u30C8\u306E\u72B6\u614B",
    fontStatusIntro: "\u5404\u30AB\u30C6\u30B4\u30EA\u304C\u4F7F\u3046\u30D5\u30A9\u30F3\u30C8\u3068\u3001\u305D\u306E\u6570\u5024\u306E\u51FA\u6240\u3002",
    fontStatusFont: "\u30D5\u30A9\u30F3\u30C8",
    fontStatusFiles: "\u30D5\u30A1\u30A4\u30EB",
    fontStatusHow: "\u6570\u5024\u306E\u53D6\u5F97\u65B9\u6CD5",
    fontStatusSource: "\u51FA\u6240",
    fontStatusGaps: "\u672A\u5BFE\u5FDC",
    fontStatusNone: "\u672A\u8A2D\u5B9A",
    fontStatusPending: "\u30D5\u30A9\u30F3\u30C8\u306E\u89E3\u6C7A\u5F85\u3061",
    fontStatusClose: "\u9589\u3058\u308B",
    // Font Variant Warning
    variantWarningTitle: "\u30D5\u30A9\u30F3\u30C8\u30D0\u30EA\u30A2\u30F3\u30C8\u8B66\u544A",
    variantWarningBody: '\u9078\u629E\u3057\u305F\u30D5\u30A9\u30F3\u30C8 "{fontFamily}" \u306B\u306F {variantCount} \u500B\u306E\u30D0\u30EA\u30A2\u30F3\u30C8\uFF08{variantList}\uFF09\u3057\u304B\u3042\u308A\u307E\u305B\u3093\u3002\n\n\u30E9\u30C6\u30F3\u6587\u5B57\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u659C\u4F53\u3068\u592A\u5B57\u3092\u9069\u5207\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u306B\u306F\u3001Regular\u3001Italic\u3001Bold\u3001Bold Italic \u306E\u30D0\u30EA\u30A2\u30F3\u30C8\u3092\u542B\u3080\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u30D0\u30EA\u30A2\u30F3\u30C8\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u308B\u3068\u3001\u7591\u4F3C\u659C\u4F53/\u7591\u4F3C\u592A\u5B57\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002',
    variantWarningContinue: "\u3053\u306E\u307E\u307E\u7D9A\u3051\u308B",
    variantWarningCancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    // Notices
    fontsApplied: "\u2713 \u30D5\u30A9\u30F3\u30C8\u304C\u9069\u7528\u3055\u308C\u307E\u3057\u305F",
    conversionFailed: "\u26A0\uFE0F \u30D5\u30A9\u30F3\u30C8\u5909\u63DB\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
    fontDeleted: "\u2713 \u30D5\u30A9\u30F3\u30C8\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F",
    deleteFailed: "\u26A0\uFE0F \u30D5\u30A9\u30F3\u30C8\u306E\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
    unusedDeleted: "\u2713 {count} \u500B\u306E\u672A\u4F7F\u7528\u30D5\u30A9\u30F3\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F",
    scanComplete: "\u2713 {count} \u500B\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u307E\u3057\u305F",
    importedFonts: "\u2713 {count} \u500B\u306E\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3057\u305F",
    importing: "\u30A4\u30F3\u30DD\u30FC\u30C8\u4E2D...",
    importError: "\u26A0\uFE0F \u30A4\u30F3\u30DD\u30FC\u30C8\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
    // Modals
    confirmDelete: "\u524A\u9664\u306E\u78BA\u8A8D",
    confirmDeleteMsg: "\u3053\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
    confirmDeleteUnused: "\u3059\u3079\u3066\u306E\u672A\u4F7F\u7528\u30D5\u30A9\u30F3\u30C8\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
    delete: "\u524A\u9664",
    cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    confirm: "\u78BA\u8A8D",
    // Font Info
    variantsCount: "{count} \u30D0\u30EA\u30A2\u30F3\u30C8",
    familyName: "\u30D5\u30A1\u30DF\u30EA\u30FC",
    style: "\u30B9\u30BF\u30A4\u30EB",
    path: "\u30D1\u30B9"
  },
  ko: {
    // Plugin Info
    pluginName: "\uB85C\uCEEC \uD3F0\uD2B8 \uB85C\uB354",
    pluginDesc: "\uB85C\uCEEC \uBCF4\uAD00\uD568\uC5D0\uC11C \uCEE4\uC2A4\uD140 \uD3F0\uD2B8 \uB85C\uB4DC",
    // Settings Headers
    headerDirectoryConfig: "\uB514\uB809\uD1A0\uB9AC \uC124\uC815",
    headerGeneralSettings: "\uC77C\uBC18 \uC124\uC815",
    headerFontApplication: "\uD3F0\uD2B8 \uC801\uC6A9 \uC124\uC815",
    headerFontFileConfig: "\uD3F0\uD2B8 \uD30C\uC77C \uC124\uC815",
    headerFontSize: "\uAE00\uC790 \uD06C\uAE30",
    // 글자 크기
    fontSizeInfoTitle: "\uAC1C\uBCC4\uB85C \uC870\uC815\uD558\uB294 \uAE00\uC790 \uD06C\uAE30",
    fontSizeInfo: "\uD3B8\uC9D1\uAE30, \uC77D\uAE30 \uBCF4\uAE30, \uC778\uD130\uD398\uC774\uC2A4\uC758 \uAE00\uC790 \uD06C\uAE30\uB97C \uAC01\uAC01 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC785\uB825\uB780\uC5D0 px \uAC12\uC744 \uC9C1\uC811 \uC785\uB825\uD558\uAC70\uB098 \uC2AC\uB77C\uC774\uB354\uB97C \uC6C0\uC9C1\uC774\uC138\uC694(\uD56D\uC0C1 \uB3D9\uAE30\uD654\uB428). \uC0AC\uC6A9\uC790 \uAE00\uAF34 \uC5EC\uBD80\uC640 \uAD00\uACC4\uC5C6\uC774 \uC989\uC2DC \uC801\uC6A9\uB429\uB2C8\uB2E4.",
    fontSizeEditor: "\uD3B8\uC9D1\uAE30 \uAE00\uC790 \uD06C\uAE30",
    fontSizeEditorDesc: "\uC18C\uC2A4 / \uB77C\uC774\uBE0C \uBBF8\uB9AC\uBCF4\uAE30 \uD3B8\uC9D1\uAE30\uC758 \uBCF8\uBB38",
    fontSizeReading: "\uC77D\uAE30 \uBCF4\uAE30 \uAE00\uC790 \uD06C\uAE30",
    fontSizeReadingDesc: "\uC77D\uAE30 \uBCF4\uAE30\uC640 \uB178\uD2B8 \uBBF8\uB9AC\uBCF4\uAE30\uC758 \uBCF8\uBB38",
    fontSizeUI: "\uC778\uD130\uD398\uC774\uC2A4 \uAE00\uC790 \uD06C\uAE30",
    fontSizeUIDesc: "\uBA54\uB274, \uC0AC\uC774\uB4DC\uBC14, \uBC84\uD2BC, \uB300\uD654\uC0C1\uC790(\uAE30\uBCF8 15px \uAE30\uC900\uC73C\uB85C \uBE44\uB840 \uC870\uC815)",
    fontSizePreview: "\uBBF8\uB9AC\uBCF4\uAE30",
    fontSizePreviewSample: "Aa \uD55C\uAD6D\uC5B4 123",
    fontSizeResetOne: "\uC774 \uD56D\uBAA9 \uAE30\uBCF8\uAC12\uC73C\uB85C \uBCF5\uC6D0",
    fontSizeReset: "\uBAA8\uB4E0 \uAE00\uC790 \uD06C\uAE30 \uCD08\uAE30\uD654",
    fontSizeResetDesc: "\uBAA8\uB4E0 \uD06C\uAE30 \uC870\uC815\uC744 \uB044\uACE0 Obsidian \uAE30\uBCF8\uAC12\uC73C\uB85C \uB418\uB3CC\uB9BD\uB2C8\uB2E4",
    fontSizeResetDone: "\uAE00\uC790 \uD06C\uAE30\uB97C \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4",
    devicePresetManagement: "\uC7A5\uCE58 \uD504\uB9AC\uC14B \uAD00\uB9AC",
    currentDevicePreset: "\uD604\uC7AC \uC7A5\uCE58 \uD504\uB9AC\uC14B",
    currentDevicePresetDesc: "\uC774 \uC7A5\uCE58\uAC00 \uC0AC\uC6A9\uD560 \uD504\uB9AC\uC14B \uC120\uD0DD",
    selectPresetToEdit: "\uD3B8\uC9D1\uD560 \uD504\uB9AC\uC14B \uC120\uD0DD",
    selectPresetToEditDesc: "\uD3F0\uD2B8 \uC124\uC815\uC744 \uAD6C\uC131\uD560 \uD504\uB9AC\uC14B \uC120\uD0DD",
    presetName: "\uD504\uB9AC\uC14B \uC774\uB984",
    presetId: "\uD504\uB9AC\uC14B ID",
    usingGlobalPreset: "\uC804\uC5ED \uD504\uB9AC\uC14B\uC785\uB2C8\uB2E4\uFF08\uD560\uB2F9\uB418\uC9C0 \uC54A\uC740 \uBAA8\uB4E0 \uC7A5\uCE58\uC5D0 \uC801\uC6A9\uFF09",
    // Directory Settings
    fontSourceDir: "\uD3F0\uD2B8 \uC18C\uC2A4 \uB514\uB809\uD1A0\uB9AC",
    fontSourceDirDesc: "\uD3F0\uD2B8 \uD328\uBC00\uB9AC \uD3F4\uB354\uAC00 \uD3EC\uD568\uB41C \uB514\uB809\uD1A0\uB9AC",
    // General Settings
    autoLoad: "\uC2DC\uC791 \uC2DC \uC790\uB3D9 \uB85C\uB4DC",
    autoLoadDesc: "Obsidian \uC2DC\uC791 \uC2DC \uD3F0\uD2B8 \uC790\uB3D9 \uC801\uC6A9",
    // Font Types
    uiFontName: "UI \uC778\uD130\uD398\uC774\uC2A4 \uD3F0\uD2B8",
    uiFontDesc: "\uC0AC\uC774\uB4DC\uBC14, \uBA54\uB274, \uBC84\uD2BC \uB4F1 UI \uC694\uC18C",
    textFontName: "\uBCF8\uBB38 \uD3F0\uD2B8",
    textFontDesc: "\uD3B8\uC9D1\uAE30 \uBCF8\uBB38 \uCF58\uD150\uCE20",
    textFontWarning: "\u26A0\uFE0F \uAD8C\uC7A5\uFF1A\uAE30\uC6B8\uC784\uAF34\uACFC \uAD75\uC740 \uAE00\uC528\uAC00 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB418\uB3C4\uB85D Regular/Italic/Bold/BoldItalic \uBCC0\uD615\uC774 \uD3EC\uD568\uB41C \uD3F0\uD2B8 \uD328\uBC00\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    headingFontName: "\uC81C\uBAA9 \uD3F0\uD2B8",
    headingFontDesc: "\uCF58\uD150\uCE20 \uB0B4 \uB9C8\uD06C\uB2E4\uC6B4 \uC81C\uBAA9\uFF08h1-h6\uFF09\uC6A9 \uD3F0\uD2B8",
    headingUseTextFont: "\uBCF8\uBB38 \uD3F0\uD2B8 \uC0AC\uC6A9",
    headingUseUIFont: "UI \uD3F0\uD2B8 \uC0AC\uC6A9",
    headingApplyToFileTitle: "\uD30C\uC77C\uBA85 \uC81C\uBAA9\uC5D0 \uC801\uC6A9",
    headingApplyToFileTitleDesc: "\uB178\uD2B8 \uC0C1\uB2E8\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC778\uB77C\uC778 \uD30C\uC77C \uC81C\uBAA9\uC5D0\uB3C4 \uC81C\uBAA9 \uD3F0\uD2B8 \uC801\uC6A9",
    monospaceFontName: "\uCF54\uB4DC \uD3F0\uD2B8",
    monospaceFontDesc: "\uCF54\uB4DC \uBE14\uB85D \uBC0F \uC778\uB77C\uC778 \uCF54\uB4DC",
    monospaceFontWarning: "\u26A0\uFE0F \uD544\uC218\uFF1A\uACE0\uC815\uD3ED \uD3F0\uD2B8\uC5EC\uC57C \uD569\uB2C8\uB2E4. \uC77C\uBC18 \uB77C\uD2F4 \uD3F0\uD2B8\uB294 \uCF54\uB4DC \uC815\uB82C\uC744 \uAE68\uB728\uB9BD\uB2C8\uB2E4",
    mathFontName: "LaTeX \uC218\uD559 \uD3F0\uD2B8",
    mathFontDesc: "\uC218\uD559 \uACF5\uC2DD \uB80C\uB354\uB9C1",
    mathFontWarning: "\u26A0\uFE0F \uD544\uC218\uFF1A\uC804\uC6A9 \uC218\uD559 \uD3F0\uD2B8\uFF08\uC608: Latin Modern Math, XITS Math\uFF09\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC77C\uBC18 \uD3F0\uD2B8\uB294 \uC218\uD559 \uAE30\uD638\uB97C \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
    systemDefault: "-- \uC2DC\uC2A4\uD15C \uAE30\uBCF8\uAC12 --",
    // Latin Font Separation
    latinFontInfo: "\uB77C\uD2F4 \uD3F0\uD2B8 \uBD84\uB9AC",
    latinFontInfoDesc: "\uD65C\uC131\uD654\uD558\uBA74 \uBCC4\uB3C4\uC758 \uB77C\uD2F4 \uD3F0\uD2B8\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB77C\uD2F4 \uBB38\uC790\uFF08A-Z, a-z, \uC22B\uC790, \uAD6C\uB450\uC810\uFF09\uB294 \uB77C\uD2F4 \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD558\uACE0 \uBE44\uB77C\uD2F4 \uBB38\uC790\uFF08CJK \uB4F1\uFF09\uB294 \uC6D0\uB798 \uD3F0\uD2B8\uB97C \uACC4\uC18D \uC0AC\uC6A9\uD569\uB2C8\uB2E4.",
    latinFontInfoDescForLatinUsers: "\uC774 \uAE30\uB2A5\uC740 \uB77C\uD2F4 \uBB38\uC790\uC640 \uBE44\uB77C\uD2F4 \uBB38\uC790\uB97C \uD63C\uC6A9\uD558\uB294 \uC0AC\uC6A9\uC790\uB97C \uC704\uD55C \uAC83\uC785\uB2C8\uB2E4\uFF08\uC608: \uC601\uC5B4 + \uC911\uAD6D\uC5B4/\uC77C\uBCF8\uC5B4/\uD55C\uAD6D\uC5B4\uFF09. \uC8FC\uB85C \uB77C\uD2F4 \uBB38\uC790 \uC5B8\uC5B4\uB85C \uC791\uC131\uD558\uB294 \uACBD\uC6B0 \uC774 \uAE30\uB2A5\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    latinFontEnabled: "\uB77C\uD2F4 \uD3F0\uD2B8 \uBD84\uB9AC \uD65C\uC131\uD654",
    latinFontEnabledDesc: "\uB77C\uD2F4 \uBB38\uC790\uC640 \uBE44\uB77C\uD2F4 \uBB38\uC790\uC5D0 \uB2E4\uB978 \uD3F0\uD2B8 \uC0AC\uC6A9",
    latinFontForUI: "UI\uC5D0 \uB77C\uD2F4 \uD3F0\uD2B8 \uC801\uC6A9",
    latinFontForUIDesc: "\uD65C\uC131\uD654\uD558\uBA74 \uB77C\uD2F4 \uD3F0\uD2B8\uAC00 UI \uC694\uC18C\uFF08\uBA54\uB274, \uC0AC\uC774\uB4DC\uBC14, \uBC84\uD2BC \uB4F1\uFF09\uC5D0\uB3C4 \uC801\uC6A9\uB429\uB2C8\uB2E4",
    latinFont: "\uB77C\uD2F4 \uD3F0\uD2B8",
    latinFontDesc: "\uB77C\uD2F4 \uBB38\uC790\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD3F0\uD2B8\uFF08A-Z, a-z, 0-9, \uAD6C\uB450\uC810\uFF09",
    recommendedLatinFonts: "\uAD8C\uC7A5 \uB77C\uD2F4 \uD3F0\uD2B8",
    latinFontScope: "\uB77C\uD2F4 \uD3F0\uD2B8 \uBC94\uC704",
    latinFontScopeDesc: "\uB77C\uD2F4 \uD3F0\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uBB38\uC790 \uBC94\uC704 \uC138\uBC00 \uC870\uC815",
    scopeBasic: "\uAE30\uBCF8 \uB77C\uD2F4 \uBB38\uC790\uB9CC\uFF08A-Z, a-z, 0-9\uFF09",
    scopeExtended: "\uAE30\uBCF8 + \uD655\uC7A5 \uB77C\uD2F4 \uBB38\uC790\uFF08\uC545\uC13C\uD2B8 \uBB38\uC790 \uD3EC\uD568\uFF09",
    scopeFull: "\uC804\uCCB4 \uB77C\uD2F4 \uBB38\uC790 + \uAE30\uD638\uFF08\uAD6C\uB450\uC810 \uBC0F \uD2B9\uC218 \uAE30\uD638 \uD3EC\uD568\uFF09",
    // Font Legend
    legendConverted: "\uC0AC\uC6A9 \uAC00\uB2A5",
    legendNotExist: "\uC874\uC7AC\uD558\uC9C0 \uC54A\uC74C",
    filterAll: "\uC804\uCCB4",
    noNotExistFonts: "\uB204\uB77D\uB41C \uD3F0\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4",
    // Font Operations
    scanFonts: "\uD3F0\uD2B8 \uC2A4\uCE94",
    deleteFont: "\uD3F0\uD2B8 \uC0AD\uC81C",
    // Fallback Operations
    deleteUnusedFonts: "\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uD3F0\uD2B8 \uC0AD\uC81C",
    rescanFonts: "\uD3F0\uD2B8 \uC7AC\uC2A4\uCE94",
    fontsRescanned: "\uD3F0\uD2B8 \uC7AC\uC2A4\uCE94 \uC644\uB8CC",
    fontFileStatus: "\uD3F0\uD2B8 \uD30C\uC77C \uC0C1\uD0DC",
    deleteUnusedFontsDesc: "\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uD3F0\uD2B8 \uD30C\uC77C \uC0AD\uC81C\uFF08\uC124\uC815\uB41C \uD3F0\uD2B8\uB294 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC74C\uFF09",
    applyNow: "\uC9C0\uAE08 \uC801\uC6A9",
    applyNowDesc: "\uD604\uC7AC \uD3F0\uD2B8 \uC124\uC815 \uC801\uC6A9",
    applyFonts: "\uD3F0\uD2B8 \uC801\uC6A9",
    // Font Missing Warning
    fontMissingWarning: "\uD3F0\uD2B8 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C \uAE30\uBCF8\uAC12\uC73C\uB85C \uB300\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
    noAvailableFonts: "\uC544\uC9C1 \uAE00\uAF34\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2A4\uCE94\uD558\uC5EC \uCC3E\uC544\uBCF4\uC138\uC694.",
    fontStatusTitle: "\uAE00\uAF34 \uC0C1\uD0DC",
    fontStatusIntro: "\uAC01 \uBC94\uC8FC\uAC00 \uC4F0\uB294 \uAE00\uAF34\uACFC \uC218\uCE58\uC758 \uCD9C\uCC98\uC785\uB2C8\uB2E4.",
    fontStatusFont: "\uAE00\uAF34",
    fontStatusFiles: "\uD30C\uC77C",
    fontStatusHow: "\uC218\uCE58\uB97C \uC5BB\uB294 \uBC29\uC2DD",
    fontStatusSource: "\uCD9C\uCC98",
    fontStatusGaps: "\uBBF8\uC9C0\uC6D0",
    fontStatusNone: "\uC5C6\uC74C",
    fontStatusPending: "\uAE00\uAF34 \uD655\uC778 \uB300\uAE30 \uC911",
    fontStatusClose: "\uB2EB\uAE30",
    // Font Variant Warning
    variantWarningTitle: "\uD3F0\uD2B8 \uBCC0\uD615 \uACBD\uACE0",
    variantWarningBody: '\uC120\uD0DD\uD55C \uD3F0\uD2B8 "{fontFamily}"\uC5D0\uB294 {variantCount}\uAC1C\uC758 \uBCC0\uD615\uFF08{variantList}\uFF09\uB9CC \uC788\uC2B5\uB2C8\uB2E4.\n\n\uB77C\uD2F4 \uBB38\uC790 \uCF58\uD150\uCE20\uC758 \uAE30\uC6B8\uC784\uAF34\uACFC \uAD75\uC740 \uAE00\uC528\uB97C \uC62C\uBC14\uB974\uAC8C \uB80C\uB354\uB9C1\uD558\uB824\uBA74 Regular, Italic, Bold, Bold Italic \uBCC0\uD615\uC774 \uD3EC\uD568\uB41C \uD3F0\uD2B8 \uD328\uBC00\uB9AC\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uBCC0\uD615\uC774 \uB204\uB77D\uB418\uBA74 \uAC00\uC9DC \uAE30\uC6B8\uC784\uAF34/\uAC00\uC9DC \uAD75\uC740 \uAE00\uC528 \uB80C\uB354\uB9C1 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
    variantWarningContinue: "\uACC4\uC18D \uC9C4\uD589",
    variantWarningCancel: "\uCDE8\uC18C",
    // Notices
    fontsApplied: "\u2713 \uD3F0\uD2B8\uAC00 \uC801\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
    conversionFailed: "\u26A0\uFE0F \uD3F0\uD2B8 \uBCC0\uD658 \uC2E4\uD328",
    fontDeleted: "\u2713 \uD3F0\uD2B8\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
    deleteFailed: "\u26A0\uFE0F \uD3F0\uD2B8 \uC0AD\uC81C \uC2E4\uD328",
    unusedDeleted: "\u2713 {count}\uAC1C\uC758 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uD3F0\uD2B8\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4",
    scanComplete: "\u2713 {count}\uAC1C\uC758 \uD3F0\uD2B8\uB97C \uC2A4\uCE94\uD588\uC2B5\uB2C8\uB2E4",
    importedFonts: "\u2713 {count}\uAC1C\uC758 \uD3F0\uD2B8 \uD30C\uC77C\uC744 \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4",
    importing: "\uAC00\uC838\uC624\uB294 \uC911...",
    importError: "\u26A0\uFE0F \uAC00\uC838\uC624\uAE30 \uC2E4\uD328",
    // Modals
    confirmDelete: "\uC0AD\uC81C \uD655\uC778",
    confirmDeleteMsg: "\uC774 \uD3F0\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C\uFF1F",
    confirmDeleteUnused: "\uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uBAA8\uB4E0 \uD3F0\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C\uFF1F",
    delete: "\uC0AD\uC81C",
    cancel: "\uCDE8\uC18C",
    confirm: "\uD655\uC778",
    // Font Info
    variantsCount: "{count}\uAC1C \uBCC0\uD615",
    familyName: "\uD328\uBC00\uB9AC",
    style: "\uC2A4\uD0C0\uC77C",
    path: "\uACBD\uB85C"
  },
  es: {
    // Plugin Info
    pluginName: "Cargador de Fuentes Locales",
    pluginDesc: "Carga fuentes personalizadas desde tu b\xF3veda local",
    // Settings Headers
    headerDirectoryConfig: "Configuraci\xF3n de Directorios",
    headerGeneralSettings: "Configuraci\xF3n General",
    headerFontApplication: "Configuraci\xF3n de Aplicaci\xF3n de Fuentes",
    headerFontFileConfig: "Configuraci\xF3n de Archivos de Fuentes",
    headerFontSize: "Tama\xF1os de letra",
    // Tamaños de letra
    fontSizeInfoTitle: "Tama\xF1os de texto independientes",
    fontSizeInfo: "El editor, la vista de lectura y la interfaz tienen su propio tama\xF1o. Escribe un valor en p\xEDxeles en el campo o arrastra el control deslizante \u2014ambos se mantienen sincronizados\u2014 y el cambio se aplica al instante, haya o no una fuente personalizada cargada.",
    fontSizeEditor: "Tama\xF1o del editor",
    fontSizeEditorDesc: "Texto del editor de c\xF3digo / vista previa en vivo",
    fontSizeReading: "Tama\xF1o de la vista de lectura",
    fontSizeReadingDesc: "Texto de la vista de lectura y las previsualizaciones de notas",
    fontSizeUI: "Tama\xF1o de la interfaz",
    fontSizeUIDesc: "Men\xFAs, barra lateral, botones y di\xE1logos, escalados desde los 15 px predeterminados",
    fontSizePreview: "Vista previa",
    fontSizePreviewSample: "Aa Espa\xF1ol 123",
    fontSizeResetOne: "Restablecer este tama\xF1o",
    fontSizeReset: "Restablecer todos los tama\xF1os",
    fontSizeResetDesc: "Desactiva todos los tama\xF1os y vuelve a los valores predeterminados de Obsidian",
    fontSizeResetDone: "Tama\xF1os restablecidos",
    devicePresetManagement: "Gesti\xF3n de Presets de Dispositivo",
    currentDevicePreset: "Preset de Dispositivo Actual",
    currentDevicePresetDesc: "Seleccionar qu\xE9 preset debe usar este dispositivo",
    selectPresetToEdit: "Seleccionar Preset para Editar",
    selectPresetToEditDesc: "Elegir qu\xE9 preset desea configurar",
    presetName: "Nombre del Preset",
    presetId: "ID del Preset",
    usingGlobalPreset: "Este es un preset global (aplica a todos los dispositivos no asignados)",
    // Directory Settings
    fontSourceDir: "Directorio de Origen de Fuentes",
    fontSourceDirDesc: "Directorio que contiene carpetas de familias de fuentes",
    // General Settings
    autoLoad: "Cargar autom\xE1ticamente al iniciar",
    autoLoadDesc: "Aplicar autom\xE1ticamente las fuentes cuando se inicia Obsidian",
    // Tipos de fuente
    uiFontName: "Fuente de Interfaz UI",
    uiFontDesc: "Barra lateral, men\xFAs, botones y otros elementos de UI",
    textFontName: "Fuente de Texto del Cuerpo",
    textFontDesc: "Contenido del cuerpo del editor",
    textFontWarning: "\u26A0\uFE0F Recomendado: Elija una familia de fuentes con variantes Regular/Italic/Bold/BoldItalic para una correcta renderizaci\xF3n de cursiva y negrita",
    monospaceFontName: "Fuente de C\xF3digo",
    monospaceFontDesc: "Bloques de c\xF3digo y c\xF3digo en l\xEDnea",
    monospaceFontWarning: "\u26A0\uFE0F Requerido: Debe ser una fuente monoespaciada. Las fuentes latinas regulares causar\xE1n problemas de alineaci\xF3n de c\xF3digo",
    mathFontName: "Fuente de Matem\xE1ticas LaTeX",
    mathFontDesc: "Renderizado de f\xF3rmulas matem\xE1ticas",
    mathFontWarning: "\u26A0\uFE0F Requerido: Debe ser una fuente matem\xE1tica dedicada (ej., Latin Modern Math, XITS Math). Las fuentes regulares no pueden renderizar s\xEDmbolos matem\xE1ticos correctamente",
    systemDefault: "-- Predeterminado del Sistema --",
    // Latin Font Separation
    latinFontInfo: "Separaci\xF3n de Fuentes Latinas",
    latinFontInfoDesc: "Al activarse, puede asignar una fuente latina separada. Los caracteres latinos (A-Z, a-z, n\xFAmeros, puntuaci\xF3n) usar\xE1n la fuente latina, mientras que los caracteres no latinos (CJK, etc.) continuar\xE1n usando la fuente original.",
    latinFontInfoDescForLatinUsers: "Esta funci\xF3n est\xE1 dise\xF1ada para usuarios que mezclan escrituras latinas y no latinas (ej., Ingl\xE9s + Chino/Japon\xE9s/Coreano). Si escribe principalmente en idiomas con escritura latina, probablemente no necesite esta funci\xF3n.",
    latinFontEnabled: "Activar Separaci\xF3n de Fuentes Latinas",
    latinFontEnabledDesc: "Usar fuentes separadas para caracteres latinos y no latinos",
    latinFontForUI: "Aplicar Fuente Latina a UI",
    latinFontForUIDesc: "Cuando est\xE1 habilitado, la fuente latina tambi\xE9n se aplicar\xE1 a elementos de UI (men\xFAs, barras laterales, botones, etc.)",
    latinFont: "Fuente Latina",
    latinFontDesc: "Fuente usada para caracteres latinos (A-Z, a-z, 0-9, puntuaci\xF3n)",
    recommendedLatinFonts: "Fuentes Latinas Recomendadas",
    latinFontScope: "\xC1mbito de Fuente Latina",
    latinFontScopeDesc: "Ajustar qu\xE9 rangos de caracteres usan la fuente latina",
    scopeBasic: "Solo lat\xEDn b\xE1sico (A-Z, a-z, 0-9)",
    scopeExtended: "Lat\xEDn b\xE1sico + extendido (incluye caracteres acentuados)",
    scopeFull: "Lat\xEDn completo + s\xEDmbolos (incluye puntuaci\xF3n y s\xEDmbolos especiales)",
    // Leyenda de fuentes
    legendConverted: "Disponible",
    legendNotExist: "No Existe",
    filterAll: "Todos",
    noNotExistFonts: "No se encontraron fuentes faltantes",
    // Acciones de fuentes
    scanFonts: "Escanear Fuentes",
    deleteFont: "Eliminar Fuente",
    // Operaciones de respaldo
    deleteUnusedFonts: "Eliminar Fuentes No Usadas",
    rescanFonts: "Reescanear Fuentes",
    fontsRescanned: "Fuentes Reescaneadas",
    fontFileStatus: "Estado de Archivos de Fuentes",
    deleteUnusedFontsDesc: "Eliminar archivos de fuentes no usadas (las fuentes configuradas no se eliminar\xE1n)",
    applyNow: "Aplicar Ahora",
    applyNowDesc: "Aplicar la configuraci\xF3n de fuentes actual",
    applyFonts: "Aplicar Fuentes",
    // Advertencia de Fuente Faltante
    fontMissingWarning: "Archivo de fuente faltante, usando predeterminado del sistema",
    noAvailableFonts: "A\xFAn no hay fuentes. Use \xABVolver a buscar\xBB para encontrarlas.",
    fontStatusTitle: "Estado de las fuentes",
    fontStatusIntro: "Qu\xE9 fuente usa cada categor\xEDa y de d\xF3nde salen sus n\xFAmeros.",
    fontStatusFont: "Fuente",
    fontStatusFiles: "Archivos",
    fontStatusHow: "C\xF3mo se obtienen los n\xFAmeros",
    fontStatusSource: "Origen",
    fontStatusGaps: "Sin cubrir",
    fontStatusNone: "Ninguna",
    fontStatusPending: "Esperando a resolver la fuente",
    fontStatusClose: "Cerrar",
    // Advertencias de variantes de fuente
    variantWarningTitle: "Advertencia de Variantes de Fuente",
    variantWarningBody: 'La fuente seleccionada "{fontFamily}" solo tiene {variantCount} variante(s) ({variantList}).\n\nPara una correcta renderizaci\xF3n de cursiva y negrita en contenido de escritura latina, se recomienda usar una familia de fuentes con variantes Regular, Italic, Bold y Bold Italic. Las variantes faltantes pueden causar problemas de renderizaci\xF3n de falsa cursiva/negrita.',
    variantWarningContinue: "Continuar de todos modos",
    variantWarningCancel: "Cancelar",
    // Notificaciones
    fontsApplied: "\u2713 Fuentes aplicadas",
    conversionFailed: "\u26A0\uFE0F Conversi\xF3n de fuente fallida",
    fontDeleted: "\u2713 Fuente eliminada",
    deleteFailed: "\u26A0\uFE0F Error al eliminar fuente",
    unusedDeleted: "\u2713 Se eliminaron {count} fuentes no usadas",
    scanComplete: "\u2713 Se escanearon {count} fuentes",
    importedFonts: "\u2713 Se importaron {count} archivos de fuentes",
    importing: "Importando...",
    importError: "\u26A0\uFE0F Error al importar",
    // Modales
    confirmDelete: "Confirmar Eliminaci\xF3n",
    confirmDeleteMsg: "\xBFEst\xE1 seguro de que desea eliminar esta fuente?",
    confirmDeleteUnused: "\xBFEst\xE1 seguro de que desea eliminar todas las fuentes no usadas?",
    delete: "Eliminar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    // Font Info
    variantsCount: "{count} variantes",
    familyName: "Familia",
    style: "Estilo",
    path: "Ruta"
  },
  "zh-TW": {
    // Plugin Info
    pluginName: "\u672C\u5730\u5B57\u578B\u8F09\u5165\u5668",
    pluginDesc: "\u5F9E\u672C\u5730 Vault \u8F09\u5165\u81EA\u8A02\u5B57\u578B",
    // Settings Headers
    headerDirectoryConfig: "\u76EE\u9304\u8A2D\u5B9A",
    headerGeneralSettings: "\u901A\u7528\u8A2D\u5B9A",
    headerFontApplication: "\u5B57\u578B\u5957\u7528\u8A2D\u5B9A",
    headerFontFileConfig: "\u5B57\u578B\u6A94\u6848\u8A2D\u5B9A",
    headerFontSize: "\u5B57\u7D1A\u8A2D\u5B9A",
    // 字級設定
    fontSizeInfoTitle: "\u53EF\u5206\u5225\u8ABF\u6574\u7684\u5B57\u7D1A",
    fontSizeInfo: "\u7DE8\u8F2F\u5668\u3001\u95B1\u8B80\u8996\u5716\u8207\u4ECB\u9762\u5404\u81EA\u6709\u81EA\u5DF1\u7684\u5B57\u7D1A\u3002\u53EF\u76F4\u63A5\u5728\u8F38\u5165\u6846\u9375\u5165\u50CF\u7D20\u503C\uFF0C\u4E5F\u53EF\u62D6\u66F3\u6ED1\u687F\uFF0C\u5169\u8005\u59CB\u7D42\u540C\u6B65\uFF1B\u4FEE\u6539\u7ACB\u5373\u751F\u6548\uFF0C\u4E14\u8207\u662F\u5426\u8F09\u5165\u81EA\u8A02\u5B57\u578B\u7121\u95DC\u3002",
    fontSizeEditor: "\u7DE8\u8F2F\u5668\u5B57\u7D1A",
    fontSizeEditorDesc: "\u539F\u59CB\u78BC / \u5373\u6642\u9810\u89BD\u7DE8\u8F2F\u5668\u5167\u7684\u6B63\u6587",
    fontSizeReading: "\u95B1\u8B80\u8996\u5716\u5B57\u7D1A",
    fontSizeReadingDesc: "\u95B1\u8B80\u8996\u5716\u8207\u7B46\u8A18\u9810\u89BD\u5167\u7684\u6B63\u6587",
    fontSizeUI: "\u4ECB\u9762\u5B57\u7D1A",
    fontSizeUIDesc: "\u9078\u55AE\u3001\u5074\u908A\u6B04\u3001\u6309\u9215\u8207\u5C0D\u8A71\u6846\uFF0C\u4EE5\u9810\u8A2D 15px \u70BA\u57FA\u6E96\u7B49\u6BD4\u7E2E\u653E",
    fontSizePreview: "\u9810\u89BD",
    fontSizePreviewSample: "Aa \u4E2D\u6587 123",
    fontSizeResetOne: "\u6062\u5FA9\u6B64\u9805\u9810\u8A2D\u503C",
    fontSizeReset: "\u91CD\u8A2D\u5168\u90E8\u5B57\u7D1A",
    fontSizeResetDesc: "\u95DC\u9589\u6240\u6709\u5B57\u7D1A\u8ABF\u6574\uFF0C\u6062\u5FA9 Obsidian \u9810\u8A2D\u8A2D\u5B9A",
    fontSizeResetDone: "\u5B57\u7D1A\u5DF2\u91CD\u8A2D",
    // Directory Configuration
    fontSourceDir: "\u5B57\u578B\u4F86\u6E90\u76EE\u9304",
    fontSourceDirDesc: "\u5305\u542B\u5B57\u578B\u5BB6\u65CF\u8CC7\u6599\u593E\u7684\u76EE\u9304",
    // General Settings
    autoLoad: "\u555F\u52D5\u6642\u81EA\u52D5\u8F09\u5165",
    autoLoadDesc: "\u7576 Obsidian \u555F\u52D5\u6642\u81EA\u52D5\u5957\u7528\u5B57\u578B",
    // Font Types
    uiFontName: "UI \u4ECB\u9762\u5B57\u578B",
    uiFontDesc: "\u5074\u908A\u6B04\u3001\u9078\u55AE\u3001\u6309\u9215\u7B49\u4ECB\u9762\u5143\u7D20",
    textFontName: "\u6B63\u6587\u5B57\u578B",
    textFontDesc: "\u7DE8\u8F2F\u5668\u6B63\u6587\u5167\u5BB9",
    textFontWarning: "\u26A0\uFE0F \u5EFA\u8B70\u9078\u64C7\u5305\u542B Regular/Italic/Bold/BoldItalic \u56DB\u7A2E\u8B8A\u9AD4\u7684\u5B57\u578B\u5BB6\u65CF\uFF0C\u4EE5\u78BA\u4FDD\u659C\u9AD4\u548C\u7C97\u9AD4\u6B63\u5E38\u986F\u793A",
    headingFontName: "\u6A19\u984C\u5B57\u578B",
    headingFontDesc: "\u7528\u65BC\u6B63\u6587\u5167\u7684 Markdown \u6A19\u984C\uFF08h1-h6\uFF09",
    headingUseTextFont: "\u4F7F\u7528\u6B63\u6587\u5B57\u578B",
    headingUseUIFont: "\u4F7F\u7528UI\u5B57\u578B",
    headingApplyToFileTitle: "\u5957\u7528\u5230\u6A94\u6848\u540D\u7A31\u6A19\u984C",
    headingApplyToFileTitleDesc: "\u540C\u6642\u5C07\u6A19\u984C\u5B57\u578B\u5957\u7528\u5230\u7B46\u8A18\u9802\u90E8\u986F\u793A\u7684\u6A94\u6848\u540D\u7A31\u6A19\u984C",
    monospaceFontName: "\u7A0B\u5F0F\u78BC\u5B57\u578B",
    monospaceFontDesc: "\u7A0B\u5F0F\u78BC\u5340\u584A\u548C\u884C\u5167\u7A0B\u5F0F\u78BC",
    monospaceFontWarning: "\u26A0\uFE0F \u5FC5\u9808\u9078\u64C7\u7B49\u5BEC\u5B57\u578B\uFF08Monospace\uFF09\uFF0C\u666E\u901A\u62C9\u4E01\u5B57\u578B\u6703\u5C0E\u81F4\u7A0B\u5F0F\u78BC\u5C0D\u9F4A\u932F\u4E82",
    mathFontName: "LaTeX \u6578\u5B78\u5B57\u578B",
    mathFontDesc: "\u6578\u5B78\u516C\u5F0F\u6E32\u67D3",
    mathFontWarning: "\u26A0\uFE0F \u5FC5\u9808\u9078\u64C7\u5C08\u7528\u6578\u5B78\u5B57\u578B\uFF08\u5982 Latin Modern Math, XITS Math\uFF09\uFF0C\u666E\u901A\u5B57\u578B\u7121\u6CD5\u6B63\u78BA\u6E32\u67D3\u6578\u5B78\u7B26\u865F",
    systemDefault: "-- \u7CFB\u7D71\u9810\u8A2D --",
    // Latin Font Separation
    latinFontInfo: "\u62C9\u4E01\u5B57\u578B\u5206\u96E2",
    latinFontInfoDesc: "\u555F\u7528\u5F8C\uFF0C\u53EF\u55AE\u7368\u6307\u5B9A\u62C9\u4E01\u5B57\u578B\u3002\u62C9\u4E01\u5B57\u5143\uFF08A-Z\u3001a-z\u3001\u6578\u5B57\u3001\u6A19\u9EDE\uFF09\u5C07\u4F7F\u7528\u62C9\u4E01\u5B57\u578B\uFF0C\u800C\u975E\u62C9\u4E01\u5B57\u5143\uFF08CJK\u7B49\uFF09\u4ECD\u4F7F\u7528\u539F\u5B57\u578B\u3002",
    latinFontInfoDescForLatinUsers: "\u6B64\u529F\u80FD\u5C08\u70BA\u6DF7\u5408\u4F7F\u7528\u62C9\u4E01\u6587\u5B57\u548C\u975E\u62C9\u4E01\u6587\u5B57\u7684\u4F7F\u7528\u8005\u8A2D\u8A08\uFF08\u4F8B\u5982\uFF1A\u82F1\u6587 + \u4E2D\u6587/\u65E5\u6587/\u97D3\u6587\uFF09\u3002\u5982\u679C\u60A8\u4E3B\u8981\u4F7F\u7528\u62C9\u4E01\u6587\u5B57\u66F8\u5BEB\uFF0C\u53EF\u80FD\u4E0D\u9700\u8981\u6B64\u529F\u80FD\u3002",
    latinFontEnabled: "\u555F\u7528\u62C9\u4E01\u5B57\u578B\u5206\u96E2",
    latinFontEnabledDesc: "\u70BA\u62C9\u4E01\u5B57\u5143\u548C\u975E\u62C9\u4E01\u5B57\u5143\u4F7F\u7528\u4E0D\u540C\u5B57\u578B",
    latinFontForUI: "\u62C9\u4E01\u5B57\u578B\u5957\u7528\u65BC UI",
    latinFontForUIDesc: "\u555F\u7528\u5F8C\uFF0C\u62C9\u4E01\u5B57\u578B\u4E5F\u5C07\u5957\u7528\u65BC UI \u5143\u7D20\uFF08\u9078\u55AE\u3001\u5074\u908A\u6B04\u3001\u6309\u9215\u7B49\uFF09",
    latinFont: "\u62C9\u4E01\u5B57\u578B",
    latinFontDesc: "\u7528\u65BC\u62C9\u4E01\u5B57\u5143\u7684\u5B57\u578B\uFF08A-Z\u3001a-z\u30010-9\u3001\u6A19\u9EDE\uFF09",
    recommendedLatinFonts: "\u63A8\u85A6\u7684\u62C9\u4E01\u5B57\u578B",
    latinFontScope: "\u62C9\u4E01\u5B57\u578B\u4F5C\u7528\u7BC4\u570D",
    latinFontScopeDesc: "\u7CBE\u7D30\u8ABF\u6574\u54EA\u4E9B\u5B57\u5143\u7BC4\u570D\u4F7F\u7528\u62C9\u4E01\u5B57\u578B",
    scopeBasic: "\u50C5\u57FA\u672C\u62C9\u4E01\u5B57\u5143\uFF08A-Z\u3001a-z\u30010-9\uFF09",
    scopeExtended: "\u57FA\u672C + \u64F4\u5145\u62C9\u4E01\u5B57\u5143\uFF08\u5305\u542B\u91CD\u97F3\u5B57\u5143\uFF09",
    scopeFull: "\u5B8C\u6574\u62C9\u4E01\u5B57\u5143 + \u7B26\u865F\uFF08\u5305\u542B\u6A19\u9EDE\u548C\u7279\u6B8A\u7B26\u865F\uFF09",
    // Font Legend
    legendConverted: "\u53EF\u7528",
    legendNotExist: "\u4E0D\u5B58\u5728",
    filterAll: "\u5168\u90E8",
    noNotExistFonts: "\u6C92\u6709\u7F3A\u5931\u7684\u5B57\u578B",
    // Font Operations
    scanFonts: "\u6383\u63CF\u5B57\u578B",
    deleteFont: "\u522A\u9664\u5B57\u578B",
    // Fallback Operations
    deleteUnusedFonts: "\u522A\u9664\u672A\u4F7F\u7528\u7684\u5B57\u578B",
    rescanFonts: "\u91CD\u65B0\u6383\u63CF",
    fontsRescanned: "\u5B57\u578B\u5DF2\u91CD\u65B0\u6383\u63CF",
    fontFileStatus: "\u5B57\u578B\u6A94\u6848\u72C0\u614B",
    deleteUnusedFontsDesc: "\u522A\u9664\u672A\u4F7F\u7528\u7684\u5B57\u578B\u6A94\u6848\uFF08\u5DF2\u8A2D\u5B9A\u7684\u5B57\u578B\u4E0D\u6703\u88AB\u522A\u9664\uFF09",
    applyNow: "\u7ACB\u5373\u5957\u7528",
    applyNowDesc: "\u5957\u7528\u76EE\u524D\u5B57\u578B\u8A2D\u5B9A",
    applyFonts: "\u5957\u7528\u5B57\u578B",
    // Font Missing Warning
    fontMissingWarning: "\u76EE\u524D\u5B57\u578B\u6A94\u6848\u7F3A\u5931\uFF0C\u5DF2\u56DE\u9000\u81F3\u7CFB\u7D71\u8A2D\u5B9A",
    // Font Variant Warning
    variantWarningTitle: "\u5B57\u578B\u8B8A\u9AD4\u8B66\u544A",
    variantWarningBody: '\u6240\u9078\u5B57\u578B "{fontFamily}" \u50C5\u6709 {variantCount} \u500B\u8B8A\u9AD4\uFF08{variantList}\uFF09\u3002\n\n\u70BA\u78BA\u4FDD\u62C9\u4E01\u6587\u5B57\u5167\u5BB9\u7684\u659C\u9AD4\u548C\u7C97\u9AD4\u6B63\u5E38\u986F\u793A\uFF0C\u5EFA\u8B70\u4F7F\u7528\u5305\u542B Regular\u3001Italic\u3001Bold \u548C Bold Italic \u56DB\u7A2E\u8B8A\u9AD4\u7684\u5B57\u578B\u5BB6\u65CF\u3002\u7F3A\u5C11\u8B8A\u9AD4\u53EF\u80FD\u5C0E\u81F4\u507D\u659C\u9AD4/\u507D\u7C97\u9AD4\u6E32\u67D3\u554F\u984C\u3002',
    variantWarningContinue: "\u4ECD\u7136\u7E7C\u7E8C",
    variantWarningCancel: "\u53D6\u6D88",
    nonLatinFontNote: "\u975E\u62C9\u4E01\u8A9E\u8A00\u5B57\u578B\uFF08\u4E2D\u6587\u3001\u65E5\u6587\u3001\u97D3\u6587\u7B49\uFF09\u8ACB\u5FFD\u7565\u6B64\u8B66\u544A",
    // Override System Settings
    overrideSystemSettingsTitle: "\u81EA\u8A02\u8A2D\u5B9A\u512A\u5148",
    overrideSystemSettingsContent: "\u6240\u6709\u81EA\u8A02\u8A2D\u5B9A\u4E00\u7D93\u5957\u7528\uFF0C\u5747\u6703\u8986\u84CB\u7CFB\u7D71\u8A2D\u5B9A",
    // Performance Warning
    performanceWarningTitle: "\u6548\u80FD\u6CE8\u610F\u4E8B\u9805",
    performanceWarningContent: "\u907F\u514D\u5728\u55AE\u884C\u5167\u6DF7\u5408\u904E\u591A\u8A9E\u8A00\u6587\u5B57\u3002\u5BC6\u96C6\u7684\u591A\u8A9E\u8A00\u6DF7\u6392\uFF08\u4F8B\u5982\u5728\u540C\u4E00\u884C\u5167\u6DF7\u5408\u4E2D\u6587+\u65E5\u6587+\u97D3\u6587+\u963F\u62C9\u4F2F\u6587+\u4FC4\u6587\uFF09\u53EF\u80FD\u89F8\u767C\u5B57\u578B\u56DE\u9000\u6A5F\u5236\uFF0C\u5C0E\u81F4\u6E32\u67D3\u5F15\u64CE\u5361\u6B7B\u3002\n\n\u5EFA\u8B70\uFF1A\u5C07\u4E0D\u540C\u8A9E\u8A00\u7684\u5167\u5BB9\u5206\u6BB5\u986F\u793A\uFF0C\u4EE5\u7372\u5F97\u6700\u4F73\u6548\u80FD\u3002",
    // Settings Page Callout
    incompleteVariantTitle: "\u5B57\u578B\u8B8A\u9AD4\u4E0D\u5B8C\u6574",
    incompleteVariantBody: '\u6240\u9078\u5B57\u578B "{fontFamily}" \u50C5\u6709 {variantCount} \u500B\u8B8A\u9AD4\uFF08{variantList}\uFF09\u3002\n\u5EFA\u8B70\uFF1A\u9078\u64C7\u5305\u542B Regular\u3001Italic\u3001Bold \u548C Bold Italic \u56DB\u7A2E\u8B8A\u9AD4\u7684\u5B57\u578B\u5BB6\u65CF\uFF0C\u4EE5\u78BA\u4FDD\u659C\u9AD4\u548C\u7C97\u9AD4\u6B63\u5E38\u986F\u793A\u3002\n\u975E\u62C9\u4E01\u8A9E\u8A00\u5B57\u578B\u901A\u5E38\u4E0D\u9700\u8981\u5B8C\u6574\u7684 Italic/Bold \u8B8A\u9AD4\uFF0C\u53EF\u4EE5\u5FFD\u7565\u6B64\u8B66\u544A\u3002',
    monospaceRequirement: "\u7B49\u5BEC\u5B57\u578B\u8981\u6C42",
    monospaceRequirementBody: "\u7A0B\u5F0F\u78BC\u5B57\u578B\u5FC5\u9808\u9078\u64C7\u7B49\u5BEC\u5B57\u578B\uFF08Monospace\uFF09\uFF0C\u666E\u901A\u62C9\u4E01\u5B57\u578B\u6703\u5C0E\u81F4\u7A0B\u5F0F\u78BC\u5C0D\u9F4A\u932F\u4E82\u3002",
    mathFontRequirement: "\u6578\u5B78\u5B57\u578B\u8981\u6C42",
    mathFontRequirementBody: "LaTeX \u6578\u5B78\u5B57\u578B\u5FC5\u9808\u9078\u64C7\u5C08\u7528\u6578\u5B78\u5B57\u578B\uFF08\u5982 Latin Modern Math\u3001XITS Math\uFF09\uFF0C\u666E\u901A\u5B57\u578B\u7121\u6CD5\u6B63\u78BA\u6E32\u67D3\u6578\u5B78\u7B26\u865F\u3002",
    mathFontMismatchTitle: "\u6578\u5B78\u5B57\u578B\u5EA6\u91CF\u4E0D\u76F8\u5BB9",
    mathFontMismatchBody: "\u300C{fontFamily}\u300D\u7684\u5B57\u5F62\u5EA6\u91CF\u8207 MathJax \u6392\u7248\u6240\u4F9D\u64DA\u7684\u5B57\u578B\u4E0D\u4E00\u81F4\uFF0C\u6703\u51FA\u73FE\u6839\u865F\u6A6B\u69D3\u8207\u9264\u5B50\u812B\u958B\u3001\u4E0A\u4E0B\u6A19\u8207\u5E95\u6578\u6D6E\u96E2\u7684\u554F\u984C\u3002\u6539\u7528 Computer Modern \u5EA6\u91CF\u7684\u6578\u5B78\u5B57\u578B\uFF08\u9996\u9078 Latin Modern Math\uFF09\u53EF\u5F9E\u6839\u672C\u6D88\u9664\u3002",
    mathFontNotMathTitle: "\u4E0D\u662F\u53EF\u7528\u7684\u6578\u5B78\u5B57\u578B",
    mathFontNotMathBody: "\u300C{fontFamily}\u300D\u672A\u63D0\u4F9B\u6240\u9700\u7684\u6578\u5B78\u5B57\u5F62\uFF08{missing}\uFF09\uFF0CMathJax \u6703\u6539\u7528\u56DE\u9000\u5B57\u578B\u6E32\u67D3\uFF0C\u516C\u5F0F\u6392\u7248\u6703\u96A8\u4E4B\u932F\u4F4D\u3002\u8ACB\u6539\u9078\u5C08\u7528\u6578\u5B78\u5B57\u578B\u3002",
    missingVariantTitle: "\u7F3A\u5C11\u5B57\u578B\u8B8A\u9AD4",
    missingVariantBody: "{latinFont} \u7F3A\u5C11\u4EE5\u4E0B\u8B8A\u9AD4\uFF1A{missingList}\u3002\u7F3A\u5931\u7684\u6A23\u5F0F\u5C07\u4F7F\u7528\u700F\u89BD\u5668\u5408\u6210\uFF08\u6548\u679C\u8F03\u5DEE\uFF09\u3002",
    // UI Text
    variantsSuffix: "\u8B8A\u9AD4",
    variantsWithCheckmark: "{familyName} \u2713 ({variantCount} \u500B\u8B8A\u9AD4)",
    variantsWithoutCheckmark: "{familyName} ({variantCount} \u500B\u8B8A\u9AD4)",
    notFoundFontFamily: "\u672A\u627E\u5230\u5B57\u578B\u5BB6\u65CF\uFF0C\u8ACB\u78BA\u8A8D\u5B57\u578B\u8CC7\u6599\u593E\u7D50\u69CB\u6B63\u78BA",
    importFont: "\u532F\u5165\u5B57\u578B",
    recommendedLatinFontsLabel: "--- \u63A8\u85A6\u7684\u62C9\u4E01\u5B57\u578B ---",
    otherFontsLabel: "--- \u5176\u4ED6\u5B57\u578B ---",
    expandCollapse: "\u5C55\u958B/\u6536\u5408",
    expandAll: "\u5168\u90E8\u5C55\u958B",
    collapseAll: "\u5168\u90E8\u6536\u5408",
    deleteThisFont: "\u522A\u9664\u6B64\u5B57\u578B",
    confirmDeleteFont: '\u78BA\u5B9A\u8981\u522A\u9664\u5B57\u578B "{fontName}" \u55CE\uFF1F',
    deletedFont: "\u2713 \u5DF2\u522A\u9664 {fontName}",
    deleteFailedError: "\u26A0\uFE0F \u522A\u9664\u5931\u6557: {error}",
    noUnusedFonts: "\u6C92\u6709\u672A\u4F7F\u7528\u7684\u5B57\u578B",
    confirmDeleteUnusedFonts: "\u767C\u73FE {count} \u500B\u672A\u4F7F\u7528\u7684\u5B57\u578B\uFF0C\u78BA\u5B9A\u8981\u522A\u9664\u55CE\uFF1F",
    deletedUnusedFonts: "\u2713 \u5DF2\u522A\u9664 {count} \u500B\u672A\u4F7F\u7528\u7684\u5B57\u578B",
    deleteError: "\u26A0\uFE0F \u522A\u9664\u5B57\u578B\u6642\u51FA\u932F",
    importedFonts: "\u2713 \u5DF2\u532F\u5165 {count} \u500B\u5B57\u578B\u6A94\u6848",
    importing: "\u532F\u5165\u4E2D...",
    importError: "\u26A0\uFE0F \u532F\u5165\u5931\u6557",
    importFailedError: "\u26A0\uFE0F \u532F\u5165\u5931\u6557: {error}",
    importDropTitle: "\u62D6\u62FD\u5B57\u578B\u6A94\u6848\u5230\u6B64\u8655",
    importDropSubtitle: "\u6216\u9EDE\u64CA\u9078\u64C7\u6A94\u6848",
    importDropHint: "\u652F\u63F4 .ttf, .otf, .woff, .woff2 \u683C\u5F0F",
    punctuationDesc: ".,!?;: \u7B49\u5E38\u7528\u6A19\u9EDE",
    symbolsDesc: "@#$%&* \u7B49\u7279\u6B8A\u5B57\u5143",
    // Notices
    fontsApplied: "\u2713 \u5B57\u578B\u5DF2\u5957\u7528",
    conversionFailed: "\u26A0\uFE0F \u5B57\u578B\u8F49\u63DB\u5931\u6557",
    fontDeleted: "\u2713 \u5B57\u578B\u5DF2\u522A\u9664",
    deleteFailed: "\u26A0\uFE0F \u522A\u9664\u5B57\u578B\u5931\u6557",
    unusedDeleted: "\u2713 \u5DF2\u522A\u9664 {count} \u500B\u672A\u4F7F\u7528\u7684\u5B57\u578B",
    scanComplete: "\u2713 \u5DF2\u6383\u63CF {count} \u500B\u5B57\u578B",
    // Modals
    confirmDelete: "\u78BA\u8A8D\u522A\u9664",
    confirmDeleteMsg: "\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u5B57\u578B\u55CE\uFF1F",
    confirmDeleteUnused: "\u78BA\u5B9A\u8981\u522A\u9664\u6240\u6709\u672A\u4F7F\u7528\u7684\u5B57\u578B\u55CE\uFF1F",
    delete: "\u522A\u9664",
    cancel: "\u53D6\u6D88",
    confirm: "\u78BA\u8A8D",
    // Font Info
    variantsCount: "{count} \u500B\u8B8A\u9AD4",
    familyName: "\u5BB6\u65CF",
    style: "\u6A23\u5F0F",
    path: "\u8DEF\u5F91",
    // Preset Management (New)
    syncDelayTitle: "\u8DE8\u88DD\u7F6E\u540C\u6B65\u63D0\u793A",
    syncDelayContent: "\u5B57\u578B\u9810\u8A2D\u7684\u8B8A\u66F4\u900F\u904E Obsidian Sync \u6216\u7B2C\u4E09\u65B9\u96F2\u7AEF\u540C\u6B65\u670D\u52D9\uFF08iCloud\u3001Dropbox\uFF09\u5728\u88DD\u7F6E\u9593\u540C\u6B65\u3002\u8B8A\u66F4\u53EF\u80FD\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u50B3\u64AD\u5230\u5176\u4ED6\u88DD\u7F6E\u3002\u5982\u9700\u7ACB\u5373\u751F\u6548\uFF0C\u8ACB\u624B\u52D5\u91CD\u65B0\u6574\u7406\u3002",
    headerPresetManagement: "\u9810\u8A2D\u7BA1\u7406",
    createPreset: "\u5EFA\u7ACB\u65B0\u9810\u8A2D",
    createPresetDesc: "\u8F38\u5165\u540D\u7A31\u5F8C\u9EDE\u9078\u52A0\u865F\u5716\u793A\u5EFA\u7ACB",
    presetNamePlaceholder: "\u4F8B\u5982\uFF1A\u684C\u9762\u8FA6\u516C\u3001\u884C\u52D5\u95B1\u8B80",
    addPreset: "\u65B0\u589E\u9810\u8A2D",
    presetNameRequired: "\u9810\u8A2D\u540D\u7A31\u4E0D\u80FD\u70BA\u7A7A",
    presetNameExists: "\u9810\u8A2D\u540D\u7A31\u5DF2\u5B58\u5728",
    presetCreated: "\u9810\u8A2D\u5DF2\u5EFA\u7ACB",
    headerDeviceManagement: "\u88DD\u7F6E\u7BA1\u7406\uFF08\u62D6\u66F3\u5206\u914D\uFF09",
    deviceLimitTitle: "\u5DF2\u77E5\u9650\u5236",
    deviceLimitBodyAndroid: "\u5B89\u5353\u7AEF\u6062\u5FA9\u539F\u5EE0\u8A2D\u5B9A\u5F8C\uFF0C\u6703\u51FA\u73FE\u540C\u4E00\u53F0\u88DD\u7F6E\u5728\u6B64\u5217\u8868\u4E2D\u91CD\u8907\u7684\u554F\u984C\u3002",
    deviceLimitBodyIos: "iOS \u7AEF\u5378\u8F09\u4E26\u91CD\u65B0\u5B89\u88DD Obsidian \u5F8C\uFF0C\u6703\u51FA\u73FE\u540C\u4E00\u53F0\u88DD\u7F6E\u5728\u6B64\u5217\u8868\u4E2D\u91CD\u8907\u7684\u554F\u984C\u3002",
    devicePresetManagement: "\u88DD\u7F6E\u6240\u5C6C\u9810\u8A2D\u7BA1\u7406",
    currentDevicePreset: "\u76EE\u524D\u88DD\u7F6E\u6240\u5C6C\u9810\u8A2D",
    currentDevicePresetDesc: "\u9078\u64C7\u76EE\u524D\u88DD\u7F6E\u8981\u4F7F\u7528\u7684\u9810\u8A2D",
    selectPresetToEdit: "\u9078\u64C7\u9700\u8981\u88AB\u8A2D\u5B9A\u7684\u9810\u8A2D",
    selectPresetToEditDesc: "\u9078\u64C7\u60A8\u8981\u8A2D\u5B9A\u5B57\u578B\u8A2D\u5B9A\u7684\u9810\u8A2D",
    presetName: "\u9810\u8A2D\u540D\u7A31",
    presetId: "\u9810\u8A2D ID",
    usingGlobalPreset: "\u9019\u662F\u5168\u57DF\u9810\u8A2D\uFF08\u5957\u7528\u65BC\u6240\u6709\u672A\u5206\u914D\u88DD\u7F6E\uFF09",
    devices: "\u88DD\u7F6E",
    global: "\u5168\u57DF",
    editPresetName: "\u7DE8\u8F2F\u9810\u8A2D\u540D\u7A31",
    enterNewPresetName: "\u8F38\u5165\u65B0\u7684\u9810\u8A2D\u540D\u7A31",
    deletePreset: "\u522A\u9664\u9810\u8A2D",
    deletePresetWarning: "\u522A\u9664\u6B64\u9810\u8A2D\u5F8C\uFF0C\u9810\u8A2D\u6240\u5C6C\u7684\u88DD\u7F6E\u5747\u6703\u4F7F\u7528\u9810\u8A2D\u9810\u8A2D\u8A2D\u5B9A\uFF0C\u82E5\u60A8\u8A2D\u5B9A\u7684\u9810\u8A2D\u8207\u9810\u8A2D\u9810\u8A2D\u4E0D\u540C\uFF0C\u8ACB\u4E09\u601D\u800C\u5F8C\u884C",
    cannotDeleteDefaultPreset: "\u7121\u6CD5\u522A\u9664\u9810\u8A2D\u9810\u8A2D",
    targetDevices: "\u76EE\u6A19\u88DD\u7F6E",
    targetDevicesDesc: "\u5C07\u4F7F\u7528\u6B64\u9810\u8A2D\u7684\u88DD\u7F6E\u5217\u8868",
    refreshDeviceList: "\u91CD\u65B0\u6574\u7406\u88DD\u7F6E\u5217\u8868",
    globalPresetNote: "\u9019\u662F\u5168\u57DF\u9810\u8A2D\uFF08\u9810\u8A2D\u5957\u7528\u65BC\u6240\u6709\u88DD\u7F6E\uFF09",
    currentDevice: "\u76EE\u524D\u88DD\u7F6E",
    copyPresetCopy: "\u8907\u88FD\u9810\u8A2D\u526F\u672C",
    copyPresetCopyDesc: "\u70BA\u76EE\u524D\u88DD\u7F6E\u5EFA\u7ACB\u9810\u8A2D\u7684\u526F\u672C",
    copySuffix: "_\u526F\u672C",
    presetCopied: "\u9810\u8A2D\u5DF2\u8907\u88FD",
    deviceReassigned: "\u88DD\u7F6E\u5DF2\u91CD\u65B0\u5206\u914D\u5230\u9810\u8A2D",
    dragDeviceHere: "\u62D6\u52D5\u88DD\u7F6E\u5230\u6B64\u8655\u4EE5\u5206\u914D\u5230\u8A72\u9810\u8A2D",
    cleanupDevices: "\u6E05\u7406\u672A\u7D81\u5B9A\u88DD\u7F6E",
    cleanupDevicesNone: "\u6C92\u6709\u53EF\u6E05\u7406\u7684\u672A\u7D81\u5B9A\u88DD\u7F6E",
    confirmCleanupDevices: "\u4EE5\u4E0B\u88DD\u7F6E\u65E2\u975E\u672C\u6A5F\u3001\u4E5F\u672A\u7D81\u5B9A\u4EFB\u4F55\u9810\u8A2D\uFF0C\u5C07\u5F9E\u5217\u8868\u4E2D\u79FB\u9664\uFF1A\n\n{0}",
    cleanupDevicesDone: "\u5DF2\u6E05\u7406 {0} \u53F0\u88DD\u7F6E",
    deviceListRepaired: "\u88DD\u7F6E\u5217\u8868\u5DF2\u81EA\u6211\u4FEE\u5FA9\uFF1A\u5408\u4F75 {0} \u7D44\u91CD\u8907\u88DD\u7F6E",
    currentDeviceName: "\u76EE\u524D\u88DD\u7F6E\u540D\u7A31",
    deviceId: "\u88DD\u7F6E ID",
    deviceNamePlaceholder: "\u4F8B\u5982\uFF1A\u684C\u9762-Mac\u3001\u884C\u52D5-\u5B89\u5353",
    editDeviceName: "\u7DE8\u8F2F\u88DD\u7F6E\u540D\u7A31",
    moveDeviceToPreset: "\u79FB\u52D5\u88DD\u7F6E\u5230\u9810\u8A2D",
    fontConfiguration: "\u5B57\u578B\u8A2D\u5B9A",
    currentPresetConfig: "\u76EE\u524D\u9810\u8A2D\u8A2D\u5B9A",
    fontNotFound: "\u5B57\u578B\u5728\u53EF\u7528\u5B57\u578B\u5217\u8868\u4E2D\u4E0D\u5B58\u5728",
    removeDevice: "\u79FB\u9664\u88DD\u7F6E",
    confirmRemoveDevice: '\u5F9E\u6240\u6709\u9810\u8A2D\u4E2D\u79FB\u9664\u88DD\u7F6E"{0}"\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002'
  }
};
var TRANSLATIONS_BY_LOCALE = TRANSLATIONS;
function t(key, localeOrParams = null, params = {}) {
  let locale = null;
  if (typeof localeOrParams === "object" && localeOrParams !== null) {
    params = localeOrParams;
  } else if (typeof localeOrParams === "string") {
    locale = localeOrParams;
  }
  if (!locale) {
    const fullLocale = (0, import_obsidian.getLanguage)() || "en";
    if (TRANSLATIONS_BY_LOCALE[fullLocale]) {
      locale = fullLocale;
    } else {
      locale = fullLocale.split("-")[0];
    }
  }
  const lang = TRANSLATIONS_BY_LOCALE[locale] || TRANSLATIONS_BY_LOCALE.en;
  let text = lang[key] || TRANSLATIONS_BY_LOCALE.en[key] || key;
  Object.keys(params).forEach((param) => {
    text = text.replace(new RegExp(`\\{${param}\\}`, "g"), String(params[param]));
  });
  return text;
}
function getCurrentLocale() {
  return ((0, import_obsidian.getLanguage)() || "en").split("-")[0];
}
function isLatinScriptLocale() {
  const locale = getCurrentLocale();
  const latinLocales = ["en", "es", "fr", "de", "it", "pt", "pl", "nl", "sv", "no", "da", "fi"];
  return latinLocales.includes(locale);
}

// src/font-metadata.ts
function parseFontMetadata(arrayBuffer) {
  try {
    const dataView = new DataView(arrayBuffer);
    const numTables = dataView.getUint16(4);
    let nameTableOffset = null;
    for (let i = 0; i < numTables; i++) {
      const tableOffset = 12 + i * 16;
      const tag = String.fromCharCode(
        dataView.getUint8(tableOffset),
        dataView.getUint8(tableOffset + 1),
        dataView.getUint8(tableOffset + 2),
        dataView.getUint8(tableOffset + 3)
      );
      if (tag === "name") {
        nameTableOffset = dataView.getUint32(tableOffset + 8);
        break;
      }
    }
    if (!nameTableOffset) {
      return null;
    }
    const nameTable = {
      format: dataView.getUint16(nameTableOffset),
      count: dataView.getUint16(nameTableOffset + 2),
      stringOffset: dataView.getUint16(nameTableOffset + 4)
    };
    const nameRecords = [];
    for (let i = 0; i < nameTable.count; i++) {
      const recordOffset = nameTableOffset + 6 + i * 12;
      nameRecords.push({
        platformID: dataView.getUint16(recordOffset),
        encodingID: dataView.getUint16(recordOffset + 2),
        languageID: dataView.getUint16(recordOffset + 4),
        nameID: dataView.getUint16(recordOffset + 6),
        length: dataView.getUint16(recordOffset + 8),
        offset: dataView.getUint16(recordOffset + 10)
      });
    }
    const metadata = {
      familyName: null,
      subfamilyName: null,
      fullName: null,
      postScriptName: null
    };
    const stringStorageOffset = nameTableOffset + nameTable.stringOffset;
    for (const record of nameRecords) {
      const stringOffset = stringStorageOffset + record.offset;
      let value = "";
      if (record.platformID === 3 && record.encodingID === 1) {
        for (let j = 0; j < record.length; j += 2) {
          const charCode = dataView.getUint16(stringOffset + j);
          if (charCode > 0) {
            value += String.fromCharCode(charCode);
          }
        }
      } else if (record.platformID === 1) {
        for (let j = 0; j < record.length; j++) {
          value += String.fromCharCode(dataView.getUint8(stringOffset + j));
        }
      }
      if (!value) continue;
      switch (record.nameID) {
        case 1:
          if (!metadata.familyName) metadata.familyName = value;
          break;
        case 2:
          if (!metadata.subfamilyName) metadata.subfamilyName = value;
          break;
        case 4:
          if (!metadata.fullName) metadata.fullName = value;
          break;
        case 6:
          if (!metadata.postScriptName) metadata.postScriptName = value;
          break;
      }
    }
    const subfamily = (metadata.subfamilyName || "").toLowerCase();
    const isItalic = subfamily.includes("italic") || subfamily.includes("oblique");
    const isBold = subfamily.includes("bold") || subfamily.includes("heavy") || subfamily.includes("black");
    let variantType = "regular";
    if (isBold && isItalic) {
      variantType = "bolditalic";
    } else if (isBold) {
      variantType = "bold";
    } else if (isItalic) {
      variantType = "italic";
    }
    let weight = 400;
    if (subfamily.includes("thin") || subfamily.includes("hairline")) {
      weight = 100;
    } else if (subfamily.includes("extralight") || subfamily.includes("ultralight")) {
      weight = 200;
    } else if (subfamily.includes("light")) {
      weight = 300;
    } else if (subfamily.includes("medium")) {
      weight = 500;
    } else if (subfamily.includes("semibold") || subfamily.includes("demibold")) {
      weight = 600;
    } else if (subfamily.includes("bold")) {
      weight = 700;
    } else if (subfamily.includes("extrabold") || subfamily.includes("ultrabold")) {
      weight = 800;
    } else if (subfamily.includes("black") || subfamily.includes("heavy")) {
      weight = 900;
    }
    return {
      familyName: metadata.familyName || "",
      subfamilyName: metadata.subfamilyName || "",
      fullName: metadata.fullName || "",
      postScriptName: metadata.postScriptName || "",
      variantType,
      // 'regular', 'italic', 'bold', 'bolditalic'
      style: {
        isItalic,
        isBold,
        weight,
        cssStyle: isItalic ? "italic" : "normal"
      }
    };
  } catch (error) {
    console.error("[Font Metadata] Parse failed:", error);
    return null;
  }
}

// src/font-size.ts
var FONT_SIZES_CSS_ID = "local-font-loader-sizes";
var FONT_SIZE_KEYS = ["editor", "reading", "ui"];
var FONT_SIZE_LIMITS = {
  editor: { min: 10, max: 40, default: 16, step: 1 },
  reading: { min: 10, max: 40, default: 16, step: 1 },
  ui: { min: 10, max: 24, default: 15, step: 1 }
};
var UI_VARIABLES = [
  { name: "--font-ui-smaller", size: 12 },
  { name: "--font-ui-small", size: 13 },
  { name: "--font-ui-medium", size: 15 },
  { name: "--font-ui-large", size: 20 }
];
var UI_BASE = 15;
function createDefaultFontSizes() {
  return {
    editor: { enabled: false, value: FONT_SIZE_LIMITS.editor.default },
    reading: { enabled: false, value: FONT_SIZE_LIMITS.reading.default },
    ui: { enabled: false, value: FONT_SIZE_LIMITS.ui.default }
  };
}
var FONT_SIZE_DEFAULTS = createDefaultFontSizes();
function clampFontSize(key, value) {
  const { min, max } = FONT_SIZE_LIMITS[key];
  return Math.min(max, Math.max(min, Math.round(value)));
}
function parseFontSize(raw) {
  const cleaned = String(raw ?? "").trim().replace(/\s*(px)$/i, "");
  if (!cleaned) return null;
  const parsed = Number(cleaned.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : null;
}
function normalizeFontSizeSettings(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  const result = createDefaultFontSizes();
  for (const key of FONT_SIZE_KEYS) {
    const entry = source[key];
    const record = entry && typeof entry === "object" ? entry : {};
    const numeric = typeof record.value === "number" ? record.value : parseFontSize(String(record.value ?? ""));
    result[key].enabled = record.enabled === true;
    result[key].value = numeric === null || !Number.isFinite(numeric) ? FONT_SIZE_LIMITS[key].default : clampFontSize(key, numeric);
  }
  return result;
}
function buildFontSizeCss(settings) {
  const config = normalizeFontSizeSettings(settings);
  const px = (value) => `${Number(value.toFixed(2))}px`;
  let css = "";
  if (config.editor.enabled) {
    const size = px(config.editor.value);
    css += `/* Editor text size (${config.editor.value}px) */
`;
    css += "body .markdown-source-view,\n";
    css += "body .markdown-source-view.mod-cm6 {\n";
    css += `  --font-text-size: ${size} !important;
`;
    css += `  font-size: ${size} !important;
`;
    css += "}\n\n";
    css += "body .markdown-source-view .cm-scroller,\n";
    css += "body .markdown-source-view.mod-cm6 .cm-scroller,\n";
    css += "body .markdown-source-view.mod-cm6 .cm-content {\n";
    css += `  font-size: ${size} !important;
`;
    css += "}\n\n";
  }
  if (config.reading.enabled) {
    const size = px(config.reading.value);
    css += `/* Reading view text size (${config.reading.value}px) */
`;
    css += "body .markdown-reading-view,\n";
    css += "body .markdown-preview-view {\n";
    css += `  --font-text-size: ${size} !important;
`;
    css += `  font-size: ${size} !important;
`;
    css += "}\n\n";
    css += "body .markdown-preview-view .markdown-preview-sizer {\n";
    css += `  font-size: ${size} !important;
`;
    css += "}\n\n";
  }
  if (config.ui.enabled) {
    const ratio = config.ui.value / UI_BASE;
    css += `/* Interface text size (${config.ui.value}px base) */
`;
    for (const scope of [":root", "body"]) {
      css += `${scope} {
`;
      for (const variable of UI_VARIABLES) {
        css += `  ${variable.name}: ${px(variable.size * ratio)} !important;
`;
      }
      css += "}\n\n";
    }
  }
  return css;
}

// src/constants.ts
var DEFAULT_SETTINGS = {
  // A folder of the plugin's own, so a fresh install does not read or write inside a directory
  // that belongs to something else in the vault. Created on demand — see scanFonts().
  fontSourceDir: "Local-Fonts",
  availableFonts: [],
  // Global font list (shared by all presets)
  fontFamilies: [],
  // Global font family grouping info (shared by all presets)
  autoLoadOnStartup: true,
  // Device identification (synced via cloud)
  // NOTE: the real per-device identity lives in device-local storage, NOT here — see
  // _getOrCreateLocalDeviceId(). This map is a one-time migration ledger only.
  deviceFingerprints: {},
  // Legacy fingerprint → deviceId (migration ledger only)
  deviceNameMap: {},
  // { deviceId: displayName }
  deviceMeta: {},
  // { deviceId: { platform, os, model, hostname } }
  deviceAliases: {},
  // { collapsed deviceId: surviving deviceId } — see the repair pass
  // Global settings
  latinFontForUI: false,
  // Apply Latin font to UI elements (global)
  // Editor / reading view / interface text sizes (global; independent of the font presets).
  // All three start disabled: Obsidian's own sizes apply until the user sets one.
  fontSizes: {
    editor: { ...FONT_SIZE_DEFAULTS.editor },
    reading: { ...FONT_SIZE_DEFAULTS.reading },
    ui: { ...FONT_SIZE_DEFAULTS.ui }
  },
  // Preset system
  presets: [
    // Preset array
    {
      id: "default-preset",
      name: "Default",
      targetDevices: [],
      // Empty array = global default preset
      fonts: {
        ui: "",
        text: "",
        heading: "",
        monospace: "",
        math: "",
        latin: ""
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

// src/device-repair.ts
var DEVICE_STALE_MS = 14 * 24 * 60 * 60 * 1e3;
var SUCCESSION_MIN_GAP_MS = 24 * 60 * 60 * 1e3;
var SUCCESSION_MAX_GAP_MS = 30 * 24 * 60 * 60 * 1e3;
function readLifetime(meta) {
  const parse = (value) => {
    if (!value) {
      return null;
    }
    const time = Date.parse(value);
    return Number.isNaN(time) ? null : time;
  };
  return {
    first: parse(meta && meta.firstSeen),
    last: parse(meta && meta.lastSeen)
  };
}
function describeDeviceGroupHistory(ids, meta, now) {
  const spans = ids.map((id) => readLifetime(meta[id]));
  for (let i = 0; i < spans.length; i++) {
    for (let j = i + 1; j < spans.length; j++) {
      const a = spans[i];
      const b = spans[j];
      if (a.first === null || a.last === null || b.first === null || b.last === null) {
        continue;
      }
      if (a.first <= b.last && b.first <= a.last) {
        return "coexisted";
      }
    }
  }
  const usableSpans = spans.filter(
    (span) => span.first !== null && span.last !== null
  );
  if (usableSpans.length !== spans.length) {
    return "unknown";
  }
  const ordered = usableSpans.slice().sort((a, b) => a.first - b.first);
  const newest = ordered[ordered.length - 1];
  if (!Number.isFinite(now) || now - newest.last > DEVICE_STALE_MS) {
    return "unknown";
  }
  for (let i = 0; i < ordered.length - 1; i++) {
    const gap = ordered[i + 1].first - ordered[i].last;
    if (gap < SUCCESSION_MIN_GAP_MS || gap > SUCCESSION_MAX_GAP_MS) {
      return "unknown";
    }
  }
  return "succession";
}
function resolveDeviceAlias(deviceId, aliases) {
  if (!aliases) {
    return deviceId;
  }
  let current = deviceId;
  const path = [];
  const seen = /* @__PURE__ */ new Map();
  while (aliases[current]) {
    const cycleStart = seen.get(current);
    if (cycleStart !== void 0) {
      return path.slice(cycleStart).sort()[0];
    }
    seen.set(current, path.length);
    path.push(current);
    current = aliases[current];
  }
  return current;
}
function isGeneratedDeviceName(name, meta) {
  if (!name) {
    return false;
  }
  if (/^(Desktop|Mobile)-(Linux|Windows|Mac|macOS|iOS|iPadOS|Android|Unknown)$/.test(name)) {
    return true;
  }
  if (meta && (name === meta.hostname || name === meta.model)) {
    return true;
  }
  return false;
}
function deviceIdentityKey(meta) {
  if (!meta || meta.platform !== "mobile" && meta.platform !== "desktop") {
    return null;
  }
  const hostname = String(meta.hostname || "").trim().toLowerCase();
  if (hostname) {
    return `${meta.platform}|${meta.os}|host:${hostname}`;
  }
  const model = String(meta.model || "").trim().toLowerCase();
  if (!model || meta.os === "ios" || meta.os === "ipados") {
    return null;
  }
  return `${meta.platform}|${meta.os}|model:${model}`;
}
function findDuplicateDeviceGroups(meta, aliases = {}) {
  const groups = /* @__PURE__ */ new Map();
  Object.keys(meta || {}).forEach((id) => {
    if (aliases[id]) {
      return;
    }
    const key = deviceIdentityKey(meta[id]);
    if (!key) {
      return;
    }
    const ids = groups.get(key);
    if (ids) {
      ids.push(id);
    } else {
      groups.set(key, [id]);
    }
  });
  const duplicates = [];
  groups.forEach((ids, key) => {
    if (ids.length > 1) {
      duplicates.push({ key, ids: ids.slice().sort() });
    }
  });
  return duplicates;
}
function pickName(canonicalId, ids, nameMap) {
  if (nameMap[canonicalId]) {
    return nameMap[canonicalId];
  }
  for (const id of ids) {
    if (nameMap[id]) {
      return nameMap[id];
    }
  }
  return void 0;
}
function pickMeta(canonicalId, ids, meta) {
  const source = meta[canonicalId] || ids.map((id) => meta[id]).find(Boolean);
  if (!source) {
    return void 0;
  }
  const earliest = ids.map((id) => meta[id] && meta[id].firstSeen).filter(Boolean).sort()[0];
  const latest = ids.map((id) => meta[id] && meta[id].lastSeen).filter(Boolean).sort().pop();
  return {
    ...source,
    ...earliest ? { firstSeen: earliest } : {},
    ...latest ? { lastSeen: latest } : {}
  };
}
function planDeviceRepair(input) {
  const nameMap = input.nameMap || {};
  const meta = input.meta || {};
  const previous = input.aliases || {};
  const aliases = {};
  Object.keys(previous).forEach((id) => {
    const target = resolveDeviceAlias(id, previous);
    if (target !== id) {
      aliases[id] = target;
    }
  });
  const allGroups = findDuplicateDeviceGroups(meta, aliases);
  const aliasGroups = /* @__PURE__ */ new Map();
  for (const [id, canonicalId] of Object.entries(aliases)) {
    if (!(meta[id] || nameMap[id]) || !(meta[canonicalId] || nameMap[canonicalId])) continue;
    const ids = aliasGroups.get(canonicalId) || [canonicalId];
    ids.push(id);
    aliasGroups.set(canonicalId, ids);
  }
  const ambiguous = allGroups.map((group) => ({ ...group, history: describeDeviceGroupHistory(group.ids, meta, input.now) }));
  const merges = Array.from(aliasGroups, ([canonicalId, ids]) => {
    const removedIds = ids.filter((id) => id !== canonicalId);
    removedIds.forEach((id) => {
      aliases[id] = canonicalId;
    });
    return {
      canonicalId,
      removedIds,
      name: pickName(canonicalId, ids, nameMap),
      meta: pickMeta(canonicalId, ids, meta)
    };
  });
  Object.keys(aliases).forEach((id) => {
    const target = resolveDeviceAlias(id, aliases);
    if (target === id) {
      delete aliases[id];
    } else {
      aliases[id] = target;
    }
  });
  return { merges, ambiguous, aliases, changed: merges.length > 0 };
}
function remapDeviceIds(deviceIds, aliases) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  (deviceIds || []).forEach((id) => {
    const mapped = resolveDeviceAlias(id, aliases);
    if (seen.has(mapped)) {
      return;
    }
    seen.add(mapped);
    result.push(mapped);
  });
  return result;
}

// src/device-presets.ts
function bindDeviceToPreset(presets, deviceId, presetId) {
  const target = presets.find((preset) => preset.id === presetId);
  if (!target || !deviceId.trim()) {
    throw new Error("Cannot assign a device without a valid device and preset");
  }
  for (const preset of presets) {
    preset.targetDevices = preset.targetDevices.filter((id) => id !== deviceId);
  }
  target.targetDevices.push(deviceId);
}
function inheritSimilarDevicePresets(presets, meta, aliases) {
  const groups = /* @__PURE__ */ new Map();
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
    const assigned = presets.filter((preset) => preset.targetDevices.some((id) => members.has(id)));
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
function deviceLimitNotices(platform) {
  if (!platform.isDesktopApp && platform.isMobileApp) {
    if (platform.isIosApp) return ["deviceLimitBodyIos"];
    if (platform.isAndroidApp) return ["deviceLimitBodyAndroid"];
  }
  return ["deviceLimitBodyAndroid", "deviceLimitBodyIos"];
}

// src/ui/settings-tab.ts
var import_obsidian10 = require("obsidian");

// src/ui/modals.ts
var import_obsidian2 = require("obsidian");
var TextInputModal = class extends import_obsidian2.Modal {
  titleText;
  placeholder;
  defaultValue;
  onSubmit;
  constructor(app, title, placeholder, defaultValue, onSubmit) {
    super(app);
    this.titleText = title;
    this.placeholder = placeholder;
    this.defaultValue = defaultValue || "";
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(this.titleText);
    const inputEl = contentEl.createEl("input", {
      type: "text",
      value: this.defaultValue,
      placeholder: this.placeholder,
      cls: "lfl-text-input",
      attr: {
        "aria-label": this.titleText
      }
    });
    const buttonContainer = contentEl.createDiv({ cls: "modal-button-container lfl-modal-buttons" });
    const cancelBtn = buttonContainer.createEl("button", { text: t("cancel") });
    cancelBtn.addEventListener("click", () => this.close());
    const submitBtn = buttonContainer.createEl("button", {
      text: t("confirm"),
      cls: "mod-cta"
    });
    submitBtn.addEventListener("click", () => {
      const value = inputEl.value.trim();
      if (value) {
        this.onSubmit(value);
        this.close();
      } else {
        inputEl.addClass("is-invalid");
        inputEl.focus();
      }
    });
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
      } else if (e.key === "Escape") {
        e.preventDefault();
        this.close();
      }
    });
    inputEl.addEventListener("input", () => {
      inputEl.removeClass("is-invalid");
    });
    window.setTimeout(() => {
      inputEl.focus();
      inputEl.select();
    }, 10);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var FontImportModal = class extends import_obsidian2.Modal {
  plugin;
  onImport;
  constructor(app, plugin, onImport) {
    super(app);
    this.plugin = plugin;
    this.onImport = onImport;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("importFont"));
    const dropZone = contentEl.createDiv({ cls: "lfl-import-dropzone" });
    const iconContainer = dropZone.createDiv({ cls: "lfl-import-icon" });
    (0, import_obsidian2.setIcon)(iconContainer, "folder");
    dropZone.createDiv({ cls: "lfl-import-title", text: t("importDropTitle") });
    dropZone.createDiv({ cls: "lfl-import-subtitle", text: t("importDropSubtitle") });
    dropZone.createDiv({ cls: "lfl-import-hint", text: t("importDropHint") });
    const input = createEl("input");
    input.type = "file";
    input.multiple = true;
    input.accept = ".ttf,.otf,.woff,.woff2";
    input.addClass("lfl-hidden-input");
    contentEl.appendChild(input);
    dropZone.onclick = () => {
      input.click();
    };
    input.onchange = async () => {
      const files = input.files;
      if (!files || files.length === 0) return;
      this.close();
      await this.onImport(files);
    };
    dropZone.ondragover = (e) => {
      e.preventDefault();
      dropZone.addClass("is-dragover");
    };
    dropZone.ondragleave = () => {
      dropZone.removeClass("is-dragover");
    };
    dropZone.ondrop = async (e) => {
      e.preventDefault();
      dropZone.removeClass("is-dragover");
      const transfer = e.dataTransfer;
      if (!transfer) return;
      const files = transfer.files;
      if (files.length === 0) return;
      this.close();
      await this.onImport(files);
    };
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
function showConfirmDialog(app, title, message, onConfirm, isDangerous = false) {
  const modal = new import_obsidian2.ConfirmationModal(app);
  modal.setTitle(title);
  modal.contentEl.createEl("p", {
    text: message,
    cls: "lfl-confirm-message"
  });
  modal.addButton((btn) => {
    btn.setButtonText(t("confirm"));
    btn.setCta();
    if (isDangerous) {
      btn.buttonEl.addClass("mod-warning");
    }
    btn.onClick(() => {
      onConfirm();
    });
  });
  modal.addCancelButton(t("cancel"));
  modal.open();
}
var FontStatusModal = class extends import_obsidian2.Modal {
  rows;
  constructor(app, rows) {
    super(app);
    this.rows = rows;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText(t("fontStatusTitle") || "Font status");
    contentEl.addClass("lfl-font-status");
    contentEl.createEl("p", {
      cls: "lfl-font-status-intro",
      text: t("fontStatusIntro") || "Which font each category uses, and where its metrics come from."
    });
    for (const row of this.rows) {
      contentEl.appendChild(this.renderRow(row));
    }
    const footer = contentEl.createDiv({ cls: "lfl-font-status-footer" });
    const closeEl = footer.createEl("button", { cls: "mod-cta", text: t("fontStatusClose") || "Close" });
    closeEl.addEventListener("click", () => this.close());
  }
  /** One category card: heading, the font, then the fields. */
  renderRow(row) {
    const card = createDiv({ cls: "lfl-font-status-card" });
    card.createDiv({ cls: "lfl-font-status-category", text: row.category });
    const fontEl = card.createDiv({ cls: "lfl-font-status-font" });
    fontEl.createSpan({ cls: "lfl-font-status-label", text: t("fontStatusFont") || "Font" });
    fontEl.createSpan({
      cls: "lfl-font-status-value lfl-font-status-value-strong",
      text: row.family || (t("fontStatusNone") || "None")
    });
    if (row.files) {
      const filesEl = card.createDiv({ cls: "lfl-font-status-field" });
      filesEl.createSpan({ cls: "lfl-font-status-label", text: t("fontStatusFiles") || "Files" });
      filesEl.createSpan({ cls: "lfl-font-status-value", text: row.files });
    }
    if (row.family) {
      const howEl = card.createDiv({ cls: "lfl-font-status-field lfl-font-status-field-stack" });
      howEl.createSpan({
        cls: "lfl-font-status-label",
        text: t("fontStatusHow") || "How the metrics are obtained"
      });
      const list = howEl.createEl("ol", { cls: "lfl-font-status-steps" });
      const steps = row.adaptation.length > 0 ? row.adaptation : [t("fontStatusPending") || "Waiting for the font to be resolved"];
      for (const step of steps) {
        list.createEl("li", { cls: "lfl-font-status-step", text: step });
      }
      if (row.source) {
        const sourceEl = card.createDiv({ cls: "lfl-font-status-field" });
        sourceEl.createSpan({ cls: "lfl-font-status-label", text: t("fontStatusSource") || "Source" });
        sourceEl.createSpan({ cls: "lfl-font-status-value", text: row.source });
      }
      if (row.gaps.length > 0) {
        const gapsEl = card.createDiv({ cls: "lfl-font-status-field lfl-font-status-field-stack" });
        gapsEl.createSpan({ cls: "lfl-font-status-label", text: t("fontStatusGaps") || "Not covered" });
        for (const gap of row.gaps) {
          gapsEl.createDiv({ cls: "lfl-font-status-gap", text: gap });
        }
      }
    }
    return card;
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/ui/settings/device-preset.ts
var import_obsidian3 = require("obsidian");
function renderDeviceAndPresetSection(tab, containerEl) {
  const syncWarningCallout = containerEl.createDiv({ cls: "callout", attr: { "data-callout": "info" } });
  const syncWarningTitle = syncWarningCallout.createDiv({ cls: "callout-title" });
  const syncWarningIcon = syncWarningTitle.createDiv({ cls: "callout-icon" });
  (0, import_obsidian3.setIcon)(syncWarningIcon, "info");
  syncWarningTitle.createDiv({ cls: "callout-title-inner", text: t("syncDelayTitle") });
  const syncWarningContent = syncWarningCallout.createDiv({ cls: "callout-content" });
  syncWarningContent.createEl("p", { text: t("syncDelayContent") });
  containerEl.createEl("h3", { text: t("headerPresetManagement") });
  new import_obsidian3.Setting(containerEl).setName(t("createPreset")).setDesc(t("createPresetDesc")).addText((text) => {
    text.setPlaceholder(t("presetNamePlaceholder"));
    tab._newPresetNameInput = text;
  }).addButton((btn) => {
    btn.setIcon("plus");
    btn.setTooltip(t("addPreset"));
    btn.onClick(async () => {
      const presetName = (tab._newPresetNameInput?.getValue() ?? "").trim();
      if (!presetName) {
        new import_obsidian3.Notice(t("presetNameRequired"), 3e3);
        return;
      }
      const exists = tab.plugin.settings.presets.some((p) => p.name === presetName);
      if (exists) {
        new import_obsidian3.Notice(t("presetNameExists"), 3e3);
        return;
      }
      await tab.plugin.createPreset(presetName);
      new import_obsidian3.Notice(`\u2713 ${t("presetCreated")}: ${presetName}`, 2e3);
      tab.update();
    });
  });
  const deviceManagementHeader = containerEl.createDiv({ cls: "setting-item-heading-with-button" });
  deviceManagementHeader.createEl("h4", { text: t("headerDeviceManagement") });
  {
    const calloutEl = containerEl.createDiv({ cls: "callout", attr: { "data-callout": "warning" } });
    const titleEl = calloutEl.createDiv({ cls: "callout-title" });
    (0, import_obsidian3.setIcon)(titleEl.createDiv({ cls: "callout-icon" }), "alert-triangle");
    titleEl.createDiv({ cls: "callout-title-inner", text: t("deviceLimitTitle") });
    const contentEl = calloutEl.createDiv({ cls: "callout-content" });
    for (const notice of deviceLimitNotices(import_obsidian3.Platform)) {
      contentEl.createEl("p", { text: t(notice) });
    }
  }
  const refreshBtn = deviceManagementHeader.createEl("button", { cls: "clickable-icon" });
  refreshBtn.setAttribute("aria-label", t("refreshDeviceList"));
  (0, import_obsidian3.setIcon)(refreshBtn, "refresh-cw");
  tab._addEventListener(refreshBtn, "click", async () => {
    await tab.plugin.loadSettings();
    await tab.plugin.repairDeviceList();
    await tab.plugin._ensureDevicePreset();
    await tab.plugin.applyFonts();
    tab.update();
  });
  const dragContainer = containerEl.createDiv({ cls: "preset-drag-container" });
  tab.plugin.settings.presets.forEach((preset) => {
    const presetSection = dragContainer.createDiv({ cls: "preset-section" });
    const presetHeader = presetSection.createDiv({ cls: "preset-header" });
    presetHeader.createEl("h5", {
      text: preset.id === "default-preset" ? `${preset.name} (${t("global")})` : preset.name
    });
    const presetActions = presetHeader.createDiv({ cls: "preset-actions" });
    const editBtn = presetActions.createEl("button", { cls: "clickable-icon" });
    editBtn.setAttribute("aria-label", t("editPresetName"));
    (0, import_obsidian3.setIcon)(editBtn, "edit");
    tab._addEventListener(editBtn, "click", async () => {
      new TextInputModal(
        tab.plugin.app,
        t("editPresetName"),
        t("presetNamePlaceholder"),
        preset.name,
        async (newName) => {
          if (newName !== preset.name) {
            await tab.plugin.renamePreset(preset.id, newName);
            tab.update();
          }
        }
      ).open();
    });
    const copyBtn = presetActions.createEl("button", { cls: "clickable-icon" });
    copyBtn.setAttribute("aria-label", t("copyPresetCopy"));
    (0, import_obsidian3.setIcon)(copyBtn, "copy");
    tab._addEventListener(copyBtn, "click", async () => {
      const copyName = `${preset.name}${t("copySuffix")}`;
      await tab.plugin.copyPresetForDevice(preset.id, copyName);
      new import_obsidian3.Notice(`\u2713 ${t("presetCopied")}: ${copyName}`, 2e3);
      tab.update();
    });
    if (preset.id !== "default-preset") {
      const deleteBtn = presetActions.createEl("button", { cls: "clickable-icon" });
      deleteBtn.setAttribute("aria-label", t("deletePreset"));
      (0, import_obsidian3.setIcon)(deleteBtn, "trash");
      tab._addEventListener(deleteBtn, "click", async () => {
        showConfirmDialog(
          tab.plugin.app,
          t("deletePreset"),
          t("deletePresetWarning"),
          async () => {
            await tab.plugin.deletePreset(preset.id);
            if (tab._activePresetId === preset.id) {
              const fallbackPreset = tab.plugin._getDevicePreset();
              tab._activePresetId = fallbackPreset ? fallbackPreset.id : "default-preset";
            }
            tab.update();
          },
          true
          // isDangerous = true (dangerous operation)
        );
      });
    }
    const devicesContainer = presetSection.createDiv({
      cls: "devices-container",
      attr: { "data-preset-id": preset.id }
    });
    if (preset.id === "default-preset") {
      devicesContainer.addClass("global-preset-zone");
    }
    tab._addEventListener(devicesContainer, "dragover", (e) => {
      e.preventDefault();
      devicesContainer.classList.add("drag-over");
    });
    tab._addEventListener(devicesContainer, "dragleave", () => {
      devicesContainer.classList.remove("drag-over");
    });
    tab._addEventListener(devicesContainer, "drop", async (e) => {
      e.preventDefault();
      devicesContainer.classList.remove("drag-over");
      const deviceId = e.dataTransfer?.getData("text/plain") ?? "";
      const targetPresetId = devicesContainer.dataset.presetId ?? "";
      await tab.plugin.assignDeviceToPreset(deviceId, targetPresetId);
      tab.update();
    });
    let devicesToShow = [];
    if (preset.id === "default-preset") {
      const allDeviceIds = /* @__PURE__ */ new Set();
      if (tab.plugin.settings.deviceNameMap) {
        Object.keys(tab.plugin.settings.deviceNameMap).forEach((id) => {
          allDeviceIds.add(id);
        });
      }
      const assignedDevices = /* @__PURE__ */ new Set();
      tab.plugin.settings.presets.forEach((p) => {
        if (p.id !== "default-preset") {
          p.targetDevices.forEach((id) => assignedDevices.add(id));
        }
      });
      devicesToShow = Array.from(allDeviceIds).filter((id) => !assignedDevices.has(id));
    } else {
      devicesToShow = preset.targetDevices;
    }
    if (devicesToShow.length === 0) {
      devicesContainer.createEl("p", {
        text: t("dragDeviceHere"),
        cls: "setting-item-description"
      });
    } else {
      devicesToShow.forEach((deviceId) => {
        const deviceName = tab.plugin._getDeviceName(deviceId);
        const isCurrent = deviceId === tab.plugin.currentDeviceId;
        const deviceItem = devicesContainer.createDiv({
          cls: "device-item"
        });
        const deviceInfoContainer = deviceItem.createDiv({ cls: "lfl-device-info" });
        const osIcon = deviceInfoContainer.createSpan({
          cls: "device-os-icon"
        });
        const osIconClasses = {
          android: "os-android",
          ios: "os-ios",
          ipados: "os-ipados",
          windows: "os-windows",
          macos: "os-macos",
          linux: "os-linux",
          unknown: "os-default"
        };
        const detectedOs = tab.plugin._getDeviceOs(deviceId);
        osIcon.addClass(osIconClasses[detectedOs] || "os-default");
        const textContainer = deviceInfoContainer.createDiv({ cls: "lfl-device-text" });
        textContainer.createSpan({
          text: isCurrent ? `${deviceName} (${t("currentDevice")})` : deviceName,
          cls: "device-name"
        });
        const metaParts = [];
        const identifier = tab.plugin._getDeviceHostname(deviceId) || tab.plugin._getDeviceModel(deviceId);
        if (identifier && identifier !== deviceName) {
          metaParts.push(identifier);
        }
        const osLabels = {
          android: "Android",
          ios: "iOS",
          ipados: "iPadOS",
          windows: "Windows",
          macos: "macOS",
          linux: "Linux",
          unknown: ""
        };
        const osText = osLabels[detectedOs];
        if (osText && osText !== identifier) {
          metaParts.push(osText);
        }
        if (metaParts.length > 0) {
          textContainer.createSpan({
            text: metaParts.join(" \xB7 "),
            cls: "device-meta"
          });
        }
        const btnContainer = deviceItem.createDiv({ cls: "device-actions" });
        const editBtn2 = btnContainer.createEl("button", {
          cls: "clickable-icon device-edit-btn",
          attr: { "aria-label": t("editDeviceName") }
        });
        (0, import_obsidian3.setIcon)(editBtn2, "edit");
        tab._addEventListener(editBtn2, "click", async (e) => {
          e.stopPropagation();
          new TextInputModal(
            tab.plugin.app,
            t("editDeviceName"),
            t("deviceNamePlaceholder"),
            deviceName,
            async (newName) => {
              if (newName !== deviceName) {
                await tab.plugin.updateDeviceName(deviceId, newName);
                tab.update();
              }
            }
          ).open();
        });
        if (!isCurrent) {
          const removeBtn = btnContainer.createEl("button", {
            cls: "clickable-icon",
            attr: { "aria-label": t("removeDevice") }
          });
          (0, import_obsidian3.setIcon)(removeBtn, "trash-2");
          tab._addEventListener(removeBtn, "click", async (e) => {
            e.stopPropagation();
            showConfirmDialog(
              tab.plugin.app,
              t("removeDevice"),
              t("confirmRemoveDevice").replace("{0}", deviceName),
              async () => {
                await tab.plugin.removeDeviceFromPresets(deviceId);
                tab.update();
              },
              true
              // isDangerous = true
            );
          });
        }
        if (isCurrent) {
          deviceItem.addClass("current-device");
        }
        if (import_obsidian3.Platform.isMobile) {
          const moveBtn = btnContainer.createEl("button", {
            cls: "clickable-icon",
            attr: { "aria-label": t("moveDeviceToPreset") }
          });
          (0, import_obsidian3.setIcon)(moveBtn, "move");
          tab._addEventListener(moveBtn, "click", (e) => {
            e.stopPropagation();
            const currentPreset = tab.plugin.settings.presets.find(
              (p) => p.targetDevices.includes(deviceId)
            );
            const menu = new import_obsidian3.Menu();
            tab.plugin.settings.presets.forEach((preset2) => {
              menu.addItem((item) => item.setTitle(preset2.id === "default-preset" ? `${preset2.name} (${t("global")})` : preset2.name).setChecked(preset2.id === (currentPreset?.id || "default-preset")).onClick(() => {
                void tab.plugin.assignDeviceToPreset(deviceId, preset2.id).then(() => {
                  new import_obsidian3.Notice(t("deviceReassigned"), 2e3);
                  tab.update();
                }).catch((error) => {
                  tab.plugin._logError("[Local Font Loader] Failed to reassign the device:", error);
                });
              }));
            });
            const rect = moveBtn.getBoundingClientRect();
            menu.showAtPosition({ x: rect.left, y: rect.bottom }, moveBtn.ownerDocument);
          });
        }
        deviceItem.draggable = !import_obsidian3.Platform.isMobile;
        tab._addEventListener(deviceItem, "dragstart", (e) => {
          e.dataTransfer?.setData("text/plain", deviceId);
          deviceItem.classList.add("dragging");
        });
        tab._addEventListener(deviceItem, "dragend", () => {
          deviceItem.classList.remove("dragging");
        });
      });
    }
    if (preset.id === "default-preset") {
      const cleanupFooter = presetSection.createDiv({ cls: "device-cleanup-footer" });
      const cleanupBtn = cleanupFooter.createEl("button", {
        text: t("cleanupDevices"),
        cls: "mod-warning"
      });
      tab._addEventListener(cleanupBtn, "click", async () => {
        const prunable = tab.plugin.getPrunableDevices();
        if (prunable.length === 0) {
          new import_obsidian3.Notice(t("cleanupDevicesNone"), 3e3);
          return;
        }
        const deviceNames = prunable.map((device) => device.name).join("\u3001");
        showConfirmDialog(
          tab.plugin.app,
          t("cleanupDevices"),
          t("confirmCleanupDevices").replace("{0}", deviceNames),
          async () => {
            const removedCount = await tab.plugin.pruneUnboundDevices();
            new import_obsidian3.Notice(`\u2713 ${t("cleanupDevicesDone").replace("{0}", String(removedCount))}`, 3e3);
            tab.update();
          },
          true
          // isDangerous = true
        );
      });
    }
  });
  containerEl.createEl("h4", { text: t("devicePresetManagement"), cls: "setting-item-heading" });
  const devicePreset = tab.plugin._getDevicePreset();
  new import_obsidian3.Setting(containerEl).setName(t("currentDevicePreset")).setDesc(t("currentDevicePresetDesc")).addDropdown((dropdown) => {
    tab.plugin.settings.presets.forEach((preset) => {
      const label = preset.id === "default-preset" ? `${preset.name} (${t("global")})` : preset.name;
      dropdown.addOption(preset.id, label);
    });
    dropdown.setValue(devicePreset ? devicePreset.id : "default-preset");
    dropdown.onChange(async (newPresetId) => {
      await tab.plugin.assignDeviceToPreset(tab.plugin.currentDeviceId, newPresetId);
      new import_obsidian3.Notice(`\u2713 ${t("deviceReassigned")}`, 2e3);
      tab.update();
    });
  }).addButton((btn) => {
    btn.setIcon("refresh-cw");
    btn.setTooltip(t("refreshDeviceList"));
    btn.onClick(() => tab.update());
  });
  new import_obsidian3.Setting(containerEl).setName(t("copyPresetCopy")).setDesc(t("copyPresetCopyDesc")).addButton((btn) => {
    btn.setButtonText(t("copyPresetCopy"));
    btn.onClick(async () => {
      const devicePreset2 = tab.plugin._getDevicePreset();
      if (!devicePreset2) {
        return;
      }
      const copyName = `${devicePreset2.name}${t("copySuffix")}`;
      await tab.plugin.copyPresetForDevice(devicePreset2.id, copyName);
      new import_obsidian3.Notice(`\u2713 ${t("presetCopied")}: ${copyName}`, 2e3);
      tab.update();
    });
  });
}

// src/ui/settings/directory-application.ts
var import_obsidian6 = require("obsidian");

// src/ui/settings/folder-input.ts
var import_obsidian4 = require("obsidian");
var import_obsidian5 = require("obsidian");
var FolderInputSuggest = class extends import_obsidian4.AbstractInputSuggest {
  constructor(app, textInputEl, onPick) {
    super(app, textInputEl);
    this.onPick = onPick;
  }
  onPick;
  getSuggestions(query) {
    const needle = query.toLowerCase();
    return this.vaultFolders().filter((folder) => folder.path.toLowerCase().includes(needle));
  }
  renderSuggestion(folder, el) {
    el.setText(folder.path);
  }
  selectSuggestion(folder) {
    this.setValue(folder.path);
    this.onPick(folder.path);
    this.close();
  }
  vaultFolders() {
    return this.app.vault.getAllLoadedFiles().filter((file) => file instanceof import_obsidian5.TFolder).sort((a, b) => a.path.localeCompare(b.path));
  }
};
var FolderPickerModal = class extends import_obsidian4.FuzzySuggestModal {
  constructor(app, onPick) {
    super(app);
    this.onPick = onPick;
    this.setPlaceholder(t("selectFolder"));
  }
  onPick;
  getItems() {
    return this.app.vault.getAllLoadedFiles().filter((file) => file instanceof import_obsidian5.TFolder).sort((a, b) => a.path.localeCompare(b.path));
  }
  getItemText(folder) {
    return folder.path;
  }
  onChooseItem(folder) {
    this.onPick(folder.path);
  }
};
function addFolderPathInput(setting, app, initialValue, onChange, placeholder = "") {
  let field = null;
  setting.addText((text) => {
    field = text;
    text.setValue(initialValue);
    if (placeholder) {
      text.setPlaceholder(placeholder);
    }
    text.onChange((value) => onChange(value));
    new FolderInputSuggest(app, text.inputEl, (path) => {
      text.setValue(path);
      onChange(path);
    });
  });
  setting.addButton(
    (button) => button.setButtonText(t("browseFolder")).setTooltip(t("browseFolderDesc")).onClick(() => {
      new FolderPickerModal(app, (path) => {
        field?.setValue(path);
        onChange(path);
      }).open();
    })
  );
}

// src/ui/settings/directory-application.ts
function renderDirectoryAndApplicationSection(tab, containerEl) {
  containerEl.createEl("h3", { text: t("headerDirectoryConfig") });
  const sourceDirSetting = new import_obsidian6.Setting(containerEl).setName(t("fontSourceDir")).setDesc(t("fontSourceDirDesc"));
  addFolderPathInput(sourceDirSetting, tab.app, tab.plugin.settings.fontSourceDir, async (value) => {
    try {
      tab.plugin.settings.fontSourceDir = value;
      await tab.plugin.saveSettings();
    } catch (error) {
      tab.plugin._logError("[Local Font Loader] Failed to save the font source directory:", error);
    }
  }, "Local-Fonts");
  sourceDirSetting.addButton(
    (btn) => btn.setButtonText(t("scanFonts")).onClick(async () => {
      await tab.plugin.scanFonts();
      new import_obsidian6.Notice("\u2713 Font list updated");
      tab.update();
    })
  );
  new import_obsidian6.Setting(containerEl).setName(t("autoLoad")).setDesc(t("autoLoadDesc")).addToggle(
    (toggle) => toggle.setValue(tab.plugin.settings.autoLoadOnStartup).onChange(async (value) => {
      tab.plugin.settings.autoLoadOnStartup = value;
      await tab.plugin.saveSettings();
    })
  );
  containerEl.createEl("h3", { text: t("headerFontApplication") });
  const currentDevicePreset = tab.plugin._getDevicePreset();
  if (!tab._activePresetId) {
    tab._activePresetId = currentDevicePreset ? currentDevicePreset.id : "default-preset";
  }
  new import_obsidian6.Setting(containerEl).setName(t("selectPresetToEdit")).setDesc(t("selectPresetToEditDesc")).addDropdown((dropdown) => {
    tab.plugin.settings.presets.forEach((preset) => {
      const label = preset.id === "default-preset" ? `${preset.name} (${t("global")})` : preset.name;
      dropdown.addOption(preset.id, label);
    });
    dropdown.setValue(tab._activePresetId);
    dropdown.onChange(async (newPresetId) => {
      tab._activePresetId = newPresetId;
      tab.update();
    });
  });
  const activePreset = tab.plugin.settings.presets.find((p) => p.id === tab._activePresetId);
  if (activePreset) {
    const presetInfoEl = containerEl.createDiv({
      cls: "callout",
      attr: { "data-callout": "example" }
    });
    const presetInfoTitle = presetInfoEl.createDiv({ cls: "callout-title" });
    const presetInfoIcon = presetInfoTitle.createDiv({ cls: "callout-icon" });
    (0, import_obsidian6.setIcon)(presetInfoIcon, "list-checks");
    presetInfoTitle.createDiv({
      cls: "callout-title-inner",
      text: `${t("presetName")}: ${activePreset.name}`
    });
    const presetInfoContent = presetInfoEl.createDiv({ cls: "callout-content" });
    presetInfoContent.createEl("p", {
      text: `${t("presetId")}: ${activePreset.id}`,
      cls: "lfl-preset-id"
    });
    if (activePreset.id === "default-preset") {
      const warningContainer = presetInfoContent.createEl("p", { cls: "lfl-global-warning" });
      const warningIcon = warningContainer.createSpan({ cls: "lfl-warning-icon" });
      (0, import_obsidian6.setIcon)(warningIcon, "alert-triangle");
      warningContainer.createSpan({ text: t("usingGlobalPreset") });
    }
  }
  const fontTypes = [
    { key: "ui", name: t("uiFontName"), desc: t("uiFontDesc") },
    {
      key: "text",
      name: t("textFontName"),
      desc: t("textFontDesc"),
      supportsLatin: true
    },
    {
      key: "heading",
      name: t("headingFontName"),
      desc: t("headingFontDesc"),
      supportsFileTitle: true,
      specialOptions: ["text", "ui"]
    },
    {
      key: "monospace",
      name: t("monospaceFontName"),
      desc: t("monospaceFontDesc")
    },
    {
      key: "math",
      name: t("mathFontName"),
      desc: t("mathFontDesc")
    }
  ];
  const activePresetForFonts = tab.plugin.settings.presets.find((p) => p.id === tab._activePresetId);
  if (!activePresetForFonts) {
    tab.plugin._logError("[Local Font Loader] Active preset not found:", tab._activePresetId);
    return;
  }
  const activePresetFonts = activePresetForFonts.fonts || {};
  for (const fontType of fontTypes) {
    const settingItem = new import_obsidian6.Setting(containerEl).setName(fontType.name).setDesc(fontType.desc);
    const selectedFont = activePresetFonts[fontType.key];
    const fontExists = tab.plugin.isFontAvailable(selectedFont);
    if (selectedFont && !fontExists) {
      const warningIcon = settingItem.nameEl.createSpan({ cls: "font-missing-icon" });
      (0, import_obsidian6.setIcon)(warningIcon, "x");
      warningIcon.setAttribute("aria-label", t("fontNotFound"));
    }
    const mathVerdict = fontType.key === "math" && selectedFont && fontExists ? tab.plugin._evaluateMathFont(selectedFont) : null;
    if (mathVerdict && (mathVerdict.status === "mismatch" || mathVerdict.status === "notMathFont")) {
      const mathWarningIcon = settingItem.nameEl.createSpan({ cls: "font-incompatible-icon" });
      (0, import_obsidian6.setIcon)(mathWarningIcon, "alert-triangle");
      mathWarningIcon.setAttribute("aria-label", t(
        mathVerdict.status === "notMathFont" ? "mathFontNotMathTitle" : "mathFontMismatchTitle"
      ));
    }
    settingItem.addDropdown((dropdown) => {
      dropdown.addOption("", t("systemDefault"));
      if (fontType.specialOptions) {
        fontType.specialOptions.forEach((optKey) => {
          if (optKey === "text") {
            dropdown.addOption("use-text-font", t("headingUseTextFont"));
          } else if (optKey === "ui") {
            dropdown.addOption("use-ui-font", t("headingUseUIFont"));
          }
        });
      }
      const uniqueFamilies = /* @__PURE__ */ new Set();
      tab.plugin.settings.availableFonts.forEach((font) => {
        const familyName = font.familyName || font.name;
        uniqueFamilies.add(familyName);
      });
      Array.from(uniqueFamilies).sort().forEach((familyName) => {
        const familyFonts = tab.plugin.settings.availableFonts.filter(
          (f) => (f.familyName || f.name) === familyName
        );
        const allUsable = familyFonts.every((f) => tab.plugin._getFontExists(f));
        const label = allUsable ? `${familyName} \u2713` : familyName;
        dropdown.addOption(familyName, label);
      });
      dropdown.setValue(activePresetForFonts.fonts[fontType.key]);
      dropdown.onChange(async (value) => {
        activePresetForFonts.fonts[fontType.key] = value;
        await tab.plugin.saveSettings();
        const currentDevicePreset2 = tab.plugin._getDevicePreset();
        if (currentDevicePreset2 && currentDevicePreset2.id === activePresetForFonts.id) {
          await tab.plugin.applyFonts();
        }
        window.requestAnimationFrame(() => {
          tab.update();
        });
      });
    });
    if (activePresetForFonts.fonts[fontType.key]) {
      const fontForVariantCheck = activePresetForFonts.fonts[fontType.key];
      const variants = tab.plugin.settings.availableFonts.filter(
        (f) => (f.familyName || f.name) === fontForVariantCheck
      );
      if (fontType.key === "text" && variants.length > 0 && variants.length < 4) {
        const variantList = variants.map((f) => f.variantType || "unknown").join(", ");
        const isLatin = tab._isLatinFont(fontForVariantCheck);
        if (isLatin) {
          const warningCallout = containerEl.createDiv({ cls: "lfl-callout" });
          const warningMd = `> [!warning] ${t("incompleteVariantTitle")}
> ${t("incompleteVariantBody", { fontFamily: fontForVariantCheck, variantCount: variants.length, variantList })}`;
          tab._renderMarkdown(warningCallout, warningMd);
        }
      }
      if (fontType.key === "monospace") {
        const infoCallout = containerEl.createDiv({ cls: "lfl-callout" });
        const infoMd = `> [!info] ${t("monospaceRequirement")}
> ${t("monospaceRequirementBody")}`;
        tab._renderMarkdown(infoCallout, infoMd);
      }
      if (fontType.key === "math") {
        const infoCallout = containerEl.createDiv({ cls: "lfl-callout" });
        if (mathVerdict && mathVerdict.status === "notMathFont") {
          const warningMd = `> [!warning] ${t("mathFontNotMathTitle")}
> ${t("mathFontNotMathBody", { fontFamily: selectedFont, missing: (mathVerdict.missing || []).join(", ") })}`;
          tab._renderMarkdown(infoCallout, warningMd);
        } else if (mathVerdict && mathVerdict.status === "mismatch") {
          const detail = mathVerdict.deviations.map((d) => `${d.metric}: ${d.actual}em (MathJax ${d.expected}em, \xB1${d.percent}%)`).join("\n> ");
          const warningMd = `> [!warning] ${t("mathFontMismatchTitle")}
> ${t("mathFontMismatchBody", { fontFamily: selectedFont })}
>
> ${detail}`;
          tab._renderMarkdown(infoCallout, warningMd);
        } else {
          const infoMd = `> [!info] ${t("mathFontRequirement")}
> ${t("mathFontRequirementBody")}`;
          tab._renderMarkdown(infoCallout, infoMd);
        }
      }
    }
    if (fontType.supportsLatin) {
      tab.addLatinFontOptions(containerEl, activePresetForFonts);
    }
    if (fontType.supportsFileTitle) {
      const currentValue = activePresetForFonts.fonts[fontType.key];
      if (currentValue && currentValue !== "use-text-font") {
        tab.addFileTitleOption(containerEl, activePresetForFonts);
      }
    }
  }
}

// src/ui/settings/font-size.ts
var import_obsidian7 = require("obsidian");
var COPY = {
  editor: { name: "fontSizeEditor", desc: "fontSizeEditorDesc" },
  reading: { name: "fontSizeReading", desc: "fontSizeReadingDesc" },
  ui: { name: "fontSizeUI", desc: "fontSizeUIDesc" }
};
function renderFontSizeSection(tab, containerEl) {
  const plugin = tab.plugin;
  containerEl.createEl("h3", { text: t("headerFontSize") });
  const calloutEl = containerEl.createDiv({ cls: "callout", attr: { "data-callout": "info" } });
  const calloutTitle = calloutEl.createDiv({ cls: "callout-title" });
  (0, import_obsidian7.setIcon)(calloutTitle.createDiv({ cls: "callout-icon" }), "info");
  calloutTitle.createDiv({ cls: "callout-title-inner", text: t("fontSizeInfoTitle") });
  calloutEl.createDiv({ cls: "callout-content" }).createEl("p", { text: t("fontSizeInfo") });
  const previewEl = containerEl.createDiv({ cls: "lfl-size-preview" });
  previewEl.createDiv({ cls: "lfl-size-preview-title", text: t("fontSizePreview") });
  const previewLines = {};
  for (const key of FONT_SIZE_KEYS) {
    const line = previewEl.createDiv({ cls: "lfl-size-preview-line" });
    line.createSpan({ cls: "lfl-size-preview-label", text: t(COPY[key].name) });
    line.createSpan({ cls: "lfl-size-preview-sample", text: t("fontSizePreviewSample") });
    previewLines[key] = line;
  }
  const syncPreview = () => {
    for (const key of FONT_SIZE_KEYS) {
      const entry = plugin.settings.fontSizes[key];
      const line = previewLines[key];
      line.style.fontSize = entry.enabled ? `${entry.value}px` : "";
      line.toggleClass("is-disabled", !entry.enabled);
    }
  };
  for (const key of FONT_SIZE_KEYS) {
    const limits = FONT_SIZE_LIMITS[key];
    let input = null;
    let slider = null;
    const current = () => plugin.settings.fontSizes[key];
    const applyValue = (value, source) => {
      const entry = current();
      entry.value = clampFontSize(key, value);
      if (source !== "input" && input) input.setValue(String(entry.value));
      if (source !== "slider" && slider) slider.setValue(entry.value);
      syncPreview();
      plugin._debouncedSaveSettings();
      plugin._debouncedApplyFontSizes();
    };
    const syncEnabled = () => {
      const enabled = current().enabled;
      input?.setDisabled(!enabled);
      slider?.setDisabled(!enabled);
    };
    new import_obsidian7.Setting(containerEl).setName(t(COPY[key].name)).setDesc(t(COPY[key].desc)).addToggle((toggle) => toggle.setValue(current().enabled).onChange(async (value) => {
      current().enabled = value;
      syncEnabled();
      syncPreview();
      await plugin.saveSettings();
      plugin.applyFontSizes();
    })).addText((text) => {
      input = text;
      const field = text.inputEl;
      field.type = "number";
      field.min = String(limits.min);
      field.max = String(limits.max);
      field.step = String(limits.step);
      field.addClass("lfl-size-input");
      field.setAttribute("aria-label", t(COPY[key].name));
      text.setValue(String(current().value));
      text.setDisabled(!current().enabled);
      text.onChange((raw) => {
        const parsed = parseFontSize(raw);
        if (parsed === null) return;
        if (parsed < limits.min || parsed > limits.max) return;
        applyValue(parsed, "input");
      });
      tab._addEventListener(field, "blur", () => {
        const parsed = parseFontSize(field.value);
        applyValue(parsed === null ? current().value : parsed, "input");
        input?.setValue(String(current().value));
      });
      tab._addEventListener(field, "keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          field.blur();
        }
      });
    }).addSlider((sliderEl) => {
      slider = sliderEl;
      sliderEl.setLimits(limits.min, limits.max, limits.step).setValue(current().value).setDynamicTooltip().setDisabled(!current().enabled).onChange((value) => applyValue(value, "slider"));
    }).addExtraButton((button) => button.setIcon("rotate-ccw").setTooltip(t("fontSizeResetOne")).onClick(async () => {
      current().value = limits.default;
      input?.setValue(String(limits.default));
      slider?.setValue(limits.default);
      syncPreview();
      await plugin.saveSettings();
      plugin.applyFontSizes();
    }));
  }
  syncPreview();
  new import_obsidian7.Setting(containerEl).setName(t("fontSizeReset")).setDesc(t("fontSizeResetDesc")).addButton((button) => button.setButtonText(t("fontSizeReset")).onClick(async () => {
    plugin.settings.fontSizes = createDefaultFontSizes();
    await plugin.saveSettings();
    plugin.applyFontSizes();
    new import_obsidian7.Notice(t("fontSizeResetDone"));
    tab.update();
  }));
}

// src/ui/settings/font-status.ts
var import_obsidian8 = require("obsidian");

// src/ui/font-family-view.ts
var TOGGLE_SELECTOR = ".font-family-toggle";
var VARIANTS_SELECTOR = ".font-variants";
function setFontFamilyExpanded(familyEl, expanded) {
  familyEl.querySelector(TOGGLE_SELECTOR)?.toggleClass("is-open", expanded);
  familyEl.querySelector(VARIANTS_SELECTOR)?.toggleClass("is-open", expanded);
}
function isFontFamilyExpanded(familyEl) {
  return familyEl.querySelector(VARIANTS_SELECTOR)?.hasClass("is-open") ?? false;
}

// src/ui/settings/font-status.ts
function renderFontStatusSection(tab, containerEl) {
  containerEl.createEl("h3", { text: t("headerFontFileConfig") });
  if (!tab._fontFilter) {
    tab._fontFilter = "all";
  }
  const buttonContainerEl = containerEl.createDiv({ cls: "lfl-toolbar" });
  const filterGroup = buttonContainerEl.createDiv({ cls: "lfl-toolbar-group" });
  const filterButtons = [
    { filter: "all", icon: "list", label: t("filterAll") || "\u5168\u90E8" },
    { filter: "available", icon: "check", label: t("legendConverted") },
    { filter: "notExist", icon: "help-circle", label: t("legendNotExist") }
  ];
  const filterButtonElements = [];
  filterButtons.forEach((btnConfig) => {
    const isActive = tab._fontFilter === btnConfig.filter;
    const btn = filterGroup.createEl("button", {
      cls: isActive ? "lfl-chip is-active" : "lfl-chip",
      attr: { "aria-label": btnConfig.label }
    });
    const iconEl = btn.createSpan({ cls: "lfl-chip-icon" });
    (0, import_obsidian8.setIcon)(iconEl, btnConfig.icon);
    btn.createSpan({ text: btnConfig.label });
    filterButtonElements.push({ btn, filter: btnConfig.filter });
  });
  buttonContainerEl.createDiv({ cls: "lfl-toolbar-divider" });
  const expandCollapseGroup = buttonContainerEl.createDiv({ cls: "lfl-toolbar-group" });
  const expandAllBtn = expandCollapseGroup.createEl("button", {
    cls: "lfl-chip",
    attr: { "aria-label": t("expandAll") }
  });
  const expandIcon = expandAllBtn.createSpan({ cls: "lfl-chip-icon" });
  (0, import_obsidian8.setIcon)(expandIcon, "chevrons-down");
  expandAllBtn.createSpan({ text: t("expandAll") });
  tab._addEventListener(expandAllBtn, "click", () => {
    const allFamilies = fontListEl.querySelectorAll(".font-family-item");
    allFamilies.forEach((familyItem) => {
      setFontFamilyExpanded(familyItem, true);
    });
  });
  const collapseAllBtn = expandCollapseGroup.createEl("button", {
    cls: "lfl-chip",
    attr: { "aria-label": t("collapseAll") }
  });
  const collapseIcon = collapseAllBtn.createSpan({ cls: "lfl-chip-icon" });
  (0, import_obsidian8.setIcon)(collapseIcon, "chevrons-up");
  collapseAllBtn.createSpan({ text: t("collapseAll") });
  tab._addEventListener(collapseAllBtn, "click", () => {
    const allFamilies = fontListEl.querySelectorAll(".font-family-item");
    allFamilies.forEach((familyItem) => {
      setFontFamilyExpanded(familyItem, false);
    });
  });
  const legendEl = containerEl.createDiv({ cls: "lfl-legend" });
  const legendsContainer = legendEl.createDiv({ cls: "lfl-legend-items" });
  legendsContainer.createDiv({
    text: t("fontFileStatus"),
    cls: "lfl-legend-title"
  });
  legendsContainer.createDiv({ cls: "lfl-legend-divider" });
  const legends = [
    { icon: "check", state: "available", text: t("legendConverted") },
    { icon: "help-circle", state: "missing", text: t("legendNotExist") }
  ];
  legends.forEach((legend) => {
    const item = legendsContainer.createDiv({ cls: "lfl-legend-item" });
    const iconEl = item.createSpan({ cls: `lfl-legend-icon is-${legend.state}` });
    (0, import_obsidian8.setIcon)(iconEl, legend.icon);
    item.createSpan({ text: legend.text });
  });
  const rescanBtn = legendEl.createEl("button", {
    cls: "lfl-chip lfl-chip--rescan",
    attr: { "aria-label": t("rescanFonts") || "\u91CD\u65B0\u626B\u63CF" }
  });
  const rescanIcon = rescanBtn.createSpan({ cls: "lfl-chip-icon" });
  (0, import_obsidian8.setIcon)(rescanIcon, "rotate-cw");
  rescanBtn.createSpan({ text: t("rescanFonts") || "\u91CD\u65B0\u626B\u63CF" });
  tab._addEventListener(rescanBtn, "click", async () => {
    rescanBtn.disabled = true;
    await tab.plugin.scanFonts();
    new import_obsidian8.Notice(t("fontsRescanned") || "\u2713 \u5B57\u4F53\u5DF2\u91CD\u65B0\u626B\u63CF");
    tab.update();
  });
  const fontListEl = containerEl.createDiv({ cls: "lfl-font-list" });
  filterButtonElements.forEach(({ btn, filter }) => {
    tab._addEventListener(btn, "click", () => {
      tab._fontFilter = filter;
      fontListEl.empty();
      if (tab.plugin.settings.availableFonts.length === 0) {
        fontListEl.createEl("div", {
          text: t("notFoundFontFamily"),
          cls: "lfl-empty-note"
        });
      } else {
        tab.renderFontFamilies(fontListEl, tab._fontFilter);
      }
      filterButtonElements.forEach(({ btn: button, filter: f }) => {
        button.toggleClass("is-active", tab._fontFilter === f);
      });
    });
  });
  if (tab.plugin.settings.availableFonts.length === 0) {
    fontListEl.createEl("div", {
      text: t("notFoundFontFamily"),
      cls: "lfl-empty-note"
    });
  } else {
    tab.renderFontFamilies(fontListEl, tab._fontFilter);
  }
  const fontOperationsEl = containerEl.createDiv({ cls: "lfl-font-actions" });
  const importBtn = fontOperationsEl.createEl("button", {
    text: t("importFont"),
    cls: "mod-cta"
  });
  tab._addEventListener(importBtn, "click", () => {
    const modal = new FontImportModal(
      tab.plugin.app,
      tab.plugin,
      async (files) => {
        importBtn.disabled = true;
        importBtn.textContent = t("importing") || "\u5BFC\u5165\u4E2D...";
        try {
          await tab.plugin.importFontsFromFiles(files);
          new import_obsidian8.Notice(t("importedFonts", { count: files.length }));
          await tab.plugin.scanFonts();
          tab._debouncedDisplay();
        } catch (error) {
          tab.plugin._logError("[Local Font Loader] Import failed:", error);
          new import_obsidian8.Notice(t("importError") || "\u5BFC\u5165\u5931\u8D25");
        } finally {
          importBtn.disabled = false;
          importBtn.textContent = t("importFont");
        }
      }
    );
    modal.open();
  });
}

// src/ui/settings/fallback.ts
var import_obsidian9 = require("obsidian");
function renderFallbackSection(tab, containerEl) {
  containerEl.createEl("h3", { text: t("headerFallback") });
  new import_obsidian9.Setting(containerEl).setName(t("deleteUnusedFonts")).setDesc(t("deleteUnusedFontsDesc")).addButton(
    (btn) => btn.setButtonText(t("deleteUnusedFonts")).setDestructive().onClick(async () => {
      const unusedFonts = tab._getUnusedFonts();
      if (unusedFonts.length === 0) {
        new import_obsidian9.Notice(t("noUnusedFonts"));
        return;
      }
      showConfirmDialog(
        tab.plugin.app,
        t("confirmDelete"),
        t("confirmDeleteUnusedFonts").replace("{count}", String(unusedFonts.length)),
        async () => {
          await tab.deleteUnusedFonts();
        },
        true
        // isDangerous = true
      );
    })
  );
  new import_obsidian9.Setting(containerEl).setName(t("applyNow")).setDesc(t("applyNowDesc")).addButton(
    (btn) => btn.setButtonText(t("applyFonts")).setCta().onClick(async () => {
      await tab.plugin.applyFonts();
      new import_obsidian9.Notice(t("fontsApplied"));
    })
  );
}

// src/ui/settings-tab.ts
var FontManagerSettingTab = class extends import_obsidian10.PluginSettingTab {
  /** The plugin this tab configures. `import type` keeps this free of a runtime cycle. */
  plugin;
  /**
   * Components backing MarkdownRenderer calls.
   *
   * MarkdownRenderer needs a Component to own what it creates, and the plugin itself is the
   * wrong owner: its lifecycle spans the whole session, so everything rendered here would
   * stay alive after the settings tab is gone. These are created per render and unloaded
   * with the rest of the tab state.
   */
  _markdownComponents = [];
  /** Listeners registered through _addEventListener, unbound by _cleanupEventListeners. */
  _eventListeners = [];
  /** Debounce handle for display(), which is requested repeatedly while typing. */
  _displayDebounceTimer = null;
  _displayDebounceDelay = 300;
  /** Whether the tab is on screen — guards re-rendering while it is hidden. */
  _isVisible = false;
  /** Fires when another device syncs a change into data.json. */
  _settingsChangedHandler;
  /** Preset currently being edited. */
  _activePresetId = "default-preset";
  /** Font-list filter: all | available | notExist. */
  _fontFilter = "all";
  /** The preset-name input, while it is on screen. */
  _newPresetNameInput = null;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this._eventListeners = [];
    this._displayDebounceTimer = null;
    this._displayDebounceDelay = 300;
    this._isVisible = false;
    this._settingsChangedHandler = () => {
      if (!this._isVisible) return;
      this._debouncedDisplay();
    };
    this.plugin.registerEvent(
      this.plugin.app.workspace.on("local-font-loader:settings-changed", this._settingsChangedHandler)
    );
  }
  _addEventListener(element, event, handler, options) {
    const listener = handler;
    element.addEventListener(event, listener, options);
    this._eventListeners.push({ element, event, handler: listener, options });
  }
  _cleanupEventListeners() {
    this._eventListeners.forEach(({ element, event, handler, options }) => {
      element.removeEventListener(event, handler, options);
    });
    this._eventListeners = [];
    this._markdownComponents.forEach((component) => component.unload());
    this._markdownComponents = [];
  }
  /**
   * Renders Markdown into an element under a component scoped to this render.
   *
   * @param el - Where to render
   * @param markdown - The Markdown source
   */
  _renderMarkdown(el, markdown) {
    const component = new import_obsidian10.Component();
    component.load();
    this._markdownComponents.push(component);
    import_obsidian10.MarkdownRenderer.render(this.app, markdown, el, "", component);
  }
  /**
   * Debounced version of display()
   * Only executes the last call when invoked multiple times within a short period
   */
  _debouncedDisplay() {
    if (this._displayDebounceTimer) {
      window.clearTimeout(this._displayDebounceTimer);
    }
    this._displayDebounceTimer = window.setTimeout(() => {
      this.update();
      this._displayDebounceTimer = null;
    }, this._displayDebounceDelay);
  }
  /**
   * Determine whether a font is a Latin font (heuristic check on the font name)
   * @param {string} fontName - The font family name
   * @returns {boolean} Whether it is a Latin font
   */
  _isLatinFont(fontName) {
    const lowerName = fontName.toLowerCase();
    const nonLatinKeywords = [
      // Chinese
      "\u601D\u6E90",
      "noto sans cjk",
      "noto serif cjk",
      "source han",
      "\u5FAE\u8F6F\u96C5\u9ED1",
      "microsoft yahei",
      "\u5B8B\u4F53",
      "simsun",
      "\u9ED1\u4F53",
      "simhei",
      "\u6977\u4F53",
      "kaiti",
      "\u65B9\u6B63",
      "fangzheng",
      // Japanese
      "\u6E90",
      "genkai",
      "meiryo",
      "yu gothic",
      "hiragino",
      "msmincho",
      "msgothic",
      // Korean
      "nanum",
      "malgun",
      "batang",
      "dotum",
      "gulim",
      // Arabic
      "arabic",
      "nastaliq",
      "kufi",
      // Others
      "devanagari",
      "thai",
      "hebrew"
    ];
    if (nonLatinKeywords.some((keyword) => lowerName.includes(keyword))) {
      return false;
    }
    const latinKeywords = [
      "times",
      "arial",
      "helvetica",
      "georgia",
      "verdana",
      "courier",
      "garamond",
      "palatino",
      "century",
      "cambria",
      "calibri",
      "latin",
      "roman",
      "serif",
      "sans"
    ];
    if (latinKeywords.some((keyword) => lowerName.includes(keyword))) {
      return true;
    }
    return true;
  }
  /**
   * Obsidian 1.13 replaced `display()` with `getSettingDefinitions()`, and a tab that returns
   * definitions never has `display()` called at all. The declarative model is row-shaped,
   * though: it has no entry point for a whole page — callouts, headings, a drag-and-drop device
   * list — so the page is hosted by a single `render` definition, and the tab is refreshed
   * through `update()`, which re-runs the definitions.
   */
  getSettingDefinitions() {
    return [{
      type: "group",
      items: [{
        // No `type` tag: the render variant of a definition is told apart by carrying
        // `render` rather than by a discriminator.
        name: t("pluginName"),
        render: (setting) => {
          setting.settingEl.addClass("lfl-settings-page");
          this._renderPage(setting.settingEl);
        }
      }]
    }];
  }
  /** Renders the tab's contents into the given container. */
  _renderPage(containerEl) {
    this._isVisible = true;
    this._cleanupEventListeners();
    const scrollParent = containerEl.closest(".vertical-tab-content");
    const savedScrollTop = scrollParent ? scrollParent.scrollTop : 0;
    containerEl.empty();
    new import_obsidian10.Setting(containerEl).setName(t("pluginName")).setHeading();
    const overrideInfoCallout = containerEl.createDiv({ cls: "callout", attr: { "data-callout": "info" } });
    const overrideInfoTitle = overrideInfoCallout.createDiv({ cls: "callout-title" });
    const overrideInfoIcon = overrideInfoTitle.createDiv({ cls: "callout-icon" });
    (0, import_obsidian10.setIcon)(overrideInfoIcon, "info");
    overrideInfoTitle.createDiv({ cls: "callout-title-inner", text: t("overrideSystemSettingsTitle") });
    const overrideInfoContent = overrideInfoCallout.createDiv({ cls: "callout-content" });
    overrideInfoContent.createEl("p", { text: t("overrideSystemSettingsContent") });
    const warningCallout = containerEl.createDiv({ cls: "callout", attr: { "data-callout": "warning" } });
    const warningTitle = warningCallout.createDiv({ cls: "callout-title" });
    const warningIcon = warningTitle.createDiv({ cls: "callout-icon" });
    (0, import_obsidian10.setIcon)(warningIcon, "alert-triangle");
    warningTitle.createDiv({ cls: "callout-title-inner", text: t("performanceWarningTitle") });
    const warningContent = warningCallout.createDiv({ cls: "callout-content" });
    warningContent.createEl("p", { text: t("performanceWarningContent") });
    renderDeviceAndPresetSection(this, containerEl);
    renderDirectoryAndApplicationSection(this, containerEl);
    renderFontSizeSection(this, containerEl);
    renderFontStatusSection(this, containerEl);
    renderFallbackSection(this, containerEl);
    if (scrollParent && savedScrollTop > 0) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          scrollParent.scrollTop = savedScrollTop;
        });
      });
    }
  }
  // Add Latin font separation options
  addLatinFontOptions(containerEl, activePreset) {
    const exampleCalloutEl = containerEl.createDiv({ cls: "lfl-callout lfl-callout--lead" });
    let exampleMarkdown = `> [!example] ${t("latinFontInfo")}
> ${t("latinFontInfoDesc")}`;
    if (isLatinScriptLocale()) {
      exampleMarkdown += `
>
> ${t("latinFontInfoDescForLatinUsers")}`;
    }
    this._renderMarkdown(exampleCalloutEl, exampleMarkdown);
    new import_obsidian10.Setting(containerEl).setName(t("latinFontEnabled")).setDesc(t("latinFontEnabledDesc")).addToggle((toggle) => toggle.setValue(activePreset.latinFontEnabled ?? false).onChange(async (value) => {
      activePreset.latinFontEnabled = value;
      await this.plugin.saveSettings();
      await this.plugin.applyFonts();
      this.update();
    }));
    if (activePreset.latinFontEnabled) {
      new import_obsidian10.Setting(containerEl).setName(t("latinFont")).setDesc(t("latinFontDesc")).addDropdown((dropdown) => {
        dropdown.addOption("", t("systemDefault"));
        const uniqueFamilies = /* @__PURE__ */ new Set();
        this.plugin.settings.availableFonts.forEach((font) => {
          const familyName = font.familyName || font.name;
          uniqueFamilies.add(familyName);
        });
        const allFamilies = Array.from(uniqueFamilies).sort();
        const latinFamilies = allFamilies.filter(
          (name) => name.toLowerCase().includes("times") || name.toLowerCase().includes("latin")
        );
        const otherFamilies = allFamilies.filter((name) => !latinFamilies.includes(name));
        if (latinFamilies.length > 0) {
          dropdown.addOption("", t("recommendedLatinFontsLabel"));
          latinFamilies.forEach((familyName) => {
            const familyFonts = this.plugin.settings.availableFonts.filter(
              (f) => (f.familyName || f.name) === familyName
            );
            const allUsable = familyFonts.every((f) => this.plugin._getFontExists(f));
            const variantCount = familyFonts.length;
            const label = allUsable ? `${familyName} \u2713 (${variantCount})` : `${familyName} (${variantCount})`;
            dropdown.addOption(familyName, label);
          });
        }
        if (otherFamilies.length > 0) {
          dropdown.addOption("", t("otherFontsLabel"));
          otherFamilies.forEach((familyName) => {
            const familyFonts = this.plugin.settings.availableFonts.filter(
              (f) => (f.familyName || f.name) === familyName
            );
            const allUsable = familyFonts.every((f) => this.plugin._getFontExists(f));
            const variantCount = familyFonts.length;
            const label = allUsable ? `${familyName} \u2713 (${variantCount})` : `${familyName} (${variantCount})`;
            dropdown.addOption(familyName, label);
          });
        }
        dropdown.setValue(activePreset.fonts.latin ?? "");
        dropdown.onChange(async (value) => {
          activePreset.fonts.latin = value;
          await this.plugin.saveSettings();
          await this.plugin.applyFonts();
          window.requestAnimationFrame(() => {
            this.update();
          });
        });
      });
      if (activePreset.fonts.latin) {
        const latinFont = activePreset.fonts.latin;
        const selectedFonts = this.plugin.settings.availableFonts.filter(
          (f) => (f.familyName || f.name) === latinFont
        );
        const hasItalic = selectedFonts.some((f) => f.variantType === "italic");
        const hasBold = selectedFonts.some((f) => f.variantType === "bold");
        const hasBoldItalic = selectedFonts.some((f) => f.variantType === "bolditalic");
        const missing = [];
        if (!hasItalic) missing.push("Italic");
        if (!hasBold) missing.push("Bold");
        if (!hasBoldItalic) missing.push("Bold Italic");
        if (missing.length > 0) {
          const warningCalloutEl = containerEl.createDiv({ cls: "lfl-callout" });
          const missingList = missing.join(", ");
          const warningMarkdown = `> [!warning] ${t("missingVariantTitle")}
> ${t("missingVariantBody", { latinFont, missingList })}`;
          this._renderMarkdown(warningCalloutEl, warningMarkdown);
        }
      }
      const scopes = [
        { key: "letters", name: "Letters", desc: "A-Z, a-z" },
        { key: "numbers", name: "Numbers", desc: "0-9" },
        { key: "punctuation", name: "Punctuation", desc: t("punctuationDesc") },
        { key: "symbols", name: "Symbols", desc: t("symbolsDesc") }
      ];
      scopes.forEach((scope) => {
        new import_obsidian10.Setting(containerEl).setName(scope.name).setDesc(scope.desc).addToggle((toggle) => toggle.setValue(activePreset.latinFontScope?.[scope.key] ?? true).onChange(async (value) => {
          if (!activePreset.latinFontScope) {
            activePreset.latinFontScope = { letters: true, numbers: true, punctuation: true, symbols: true };
          }
          activePreset.latinFontScope[scope.key] = value;
          await this.plugin.saveSettings();
          await this.plugin.applyFonts();
        }));
      });
      new import_obsidian10.Setting(containerEl).setName(t("latinFontForUI")).setDesc(t("latinFontForUIDesc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.latinFontForUI ?? false).onChange(async (value) => {
        this.plugin.settings.latinFontForUI = value;
        await this.plugin.saveSettings();
        await this.plugin.applyFonts();
      }));
    }
  }
  // Add the file title option
  addFileTitleOption(containerEl, activePreset) {
    const headingFontValue = activePreset.fonts.heading;
    if (headingFontValue === "use-text-font") {
      return;
    }
    new import_obsidian10.Setting(containerEl).setName(t("headingApplyToFileTitle")).setDesc(t("headingApplyToFileTitleDesc")).addToggle((toggle) => toggle.setValue(activePreset.headingApplyToFileTitle || false).onChange(async (value) => {
      activePreset.headingApplyToFileTitle = value;
      await this.plugin.saveSettings();
      await this.plugin.applyFonts();
    }));
  }
  // Render font families (collapsible)
  renderFontFamilies(containerEl, filter = "all") {
    const familiesMap = /* @__PURE__ */ new Map();
    this.plugin.settings.availableFonts.forEach((font) => {
      const familyName = font.familyName || font.name;
      if (!familiesMap.has(familyName)) {
        familiesMap.set(familyName, []);
      }
      familiesMap.get(familyName).push(font);
    });
    const filteredFamilies = Array.from(familiesMap.entries()).filter(([familyName, fonts]) => {
      if (filter === "all") {
        return true;
      } else if (filter === "available") {
        return fonts.some((f) => this.plugin._getFontExists(f));
      } else if (filter === "notExist") {
        return fonts.some((f) => !this.plugin._getFontExists(f));
      }
      return true;
    });
    if (filteredFamilies.length === 0) {
      let emptyMessage = t("noAvailableFonts") || "\u6CA1\u6709\u53EF\u7528\u7684\u5B57\u4F53";
      if (filter === "notExist") {
        emptyMessage = t("noNotExistFonts") || "\u6CA1\u6709\u7F3A\u5931\u7684\u5B57\u4F53";
      }
      containerEl.createEl("div", {
        text: emptyMessage,
        cls: "lfl-empty-note"
      });
      return;
    }
    for (const [familyName, fonts] of filteredFamilies) {
      const familyEl = containerEl.createDiv({ cls: "font-family-item" });
      const headerEl = familyEl.createDiv({ cls: "font-family-header" });
      const leftEl = headerEl.createDiv({ cls: "font-family-title" });
      const expandIcon = leftEl.createSpan({
        cls: "font-family-toggle",
        attr: { "aria-label": t("expandCollapse") }
      });
      (0, import_obsidian10.setIcon)(expandIcon, "chevron-right");
      leftEl.createSpan({
        text: familyName,
        cls: "font-family-name"
      });
      const variantsEl = familyEl.createDiv({ cls: "font-variants" });
      this._addEventListener(headerEl, "click", () => {
        setFontFamilyExpanded(familyEl, !isFontFamilyExpanded(familyEl));
      });
      fonts.forEach((font) => {
        const variantEl = variantsEl.createDiv({ cls: "font-variant-item" });
        const infoEl = variantEl.createDiv({ cls: "font-variant-info" });
        const fontSourceExists = this.plugin._getFontExists(font);
        const status = fontSourceExists ? "available" : "missing";
        const iconName = fontSourceExists ? "check" : "help-circle";
        const statusIconEl = infoEl.createSpan({
          cls: `font-variant-status is-${status}`
        });
        (0, import_obsidian10.setIcon)(statusIconEl, iconName);
        const variantLabels = {
          "regular": "Regular",
          "italic": "Italic",
          "bold": "Bold",
          "bolditalic": "Bold Italic"
        };
        const variantLabel = variantLabels[font.variantType] || "Unknown";
        infoEl.createSpan({
          text: variantLabel,
          cls: "font-variant-label"
        });
        const actionsEl = variantEl.createDiv({ cls: "font-variant-actions" });
        const deleteBtn = actionsEl.createEl("button", {
          cls: "font-icon-btn",
          attr: {
            title: t("deleteThisFont"),
            "aria-label": t("deleteThisFont")
          }
        });
        (0, import_obsidian10.setIcon)(deleteBtn, "trash-2");
        this._addEventListener(deleteBtn, "click", async () => {
          showConfirmDialog(
            this.plugin.app,
            t("confirmDelete"),
            t("confirmDeleteFont").replace("{fontName}", font.name),
            async () => {
              await this.deleteSingleFont(font);
              this.update();
            },
            true
            // isDangerous = true
          );
        });
      });
    }
  }
  // Delete a single font
  async deleteSingleFont(font) {
    try {
      try {
        await this.plugin.app.vault.adapter.remove(font.path);
      } catch {
        this.plugin._log(`[Local Font Loader] \u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8FC7\u5220\u9664: ${font.path}`);
      }
      const index = this.plugin.settings.availableFonts.indexOf(font);
      if (index > -1) {
        this.plugin.settings.availableFonts.splice(index, 1);
      }
      await this.plugin.saveSettings();
      new import_obsidian10.Notice(t("deletedFont", { fontName: font.name }));
    } catch (error) {
      this.plugin._logError(`[Local Font Loader] \u5220\u9664\u5931\u8D25: ${font.name}`, error);
      new import_obsidian10.Notice(t("deleteFailedError", { error: error.message }));
    }
  }
  /**
    * Collects font objects not referenced by any preset.
    * Iterates all presets (not the deprecated settings.fonts); a font referenced by any preset
    * via familyName or name counts as "used", protecting all variants of the same family from deletion.
    * @returns {Array} Array of unused font objects
   */
  _getUnusedFonts() {
    const usedFontValues = /* @__PURE__ */ new Set();
    const presets = this.plugin.settings.presets || [];
    for (const preset of presets) {
      const fontsConfig = preset.fonts || {};
      for (const value of Object.values(fontsConfig)) {
        if (value && value !== "use-text-font" && value !== "use-ui-font") {
          usedFontValues.add(value);
        }
      }
    }
    const availableFonts = this.plugin.settings.availableFonts || [];
    return availableFonts.filter(
      (font) => !usedFontValues.has(font.familyName) && !usedFontValues.has(font.name)
    );
  }
  // Delete Unused Fonts
  async deleteUnusedFonts() {
    const unusedFonts = this._getUnusedFonts();
    if (unusedFonts.length === 0) {
      new import_obsidian10.Notice(t("noUnusedFonts"));
      return;
    }
    this.plugin._log(`[Local Font Loader] Starting to delete unused fonts (${unusedFonts.length} fonts)...`);
    let deleted = 0;
    try {
      for (const font of unusedFonts) {
        try {
          try {
            await this.app.vault.adapter.remove(font.path);
          } catch {
            this.plugin._log(`[Local Font Loader] \u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8FC7\u5220\u9664: ${font.path}`);
          }
          const index = this.plugin.settings.availableFonts.indexOf(font);
          if (index > -1) {
            this.plugin.settings.availableFonts.splice(index, 1);
          }
          deleted++;
        } catch (error) {
          this.plugin._logError(`[Local Font Loader] \u5220\u9664\u5931\u8D25: ${font.name}`, error);
        }
      }
      await this.plugin.saveSettings();
      new import_obsidian10.Notice(t("deletedUnusedFonts", { count: deleted }));
      this.plugin._log(`[Local Font Loader] Deleted ${deleted} unused fonts`);
      this.update();
    } catch (error) {
      this.plugin._logError("[Local Font Loader] \u6279\u91CF\u5220\u9664\u5931\u8D25:", error);
      new import_obsidian10.Notice(t("deleteError"));
    }
  }
  hide() {
    this._isVisible = false;
    if (this._displayDebounceTimer) {
      window.clearTimeout(this._displayDebounceTimer);
      this._displayDebounceTimer = null;
    }
    this._cleanupEventListeners();
    super.hide();
  }
};

// src/math-standards/types.ts
function matchByFamilyName(adapter, familyName) {
  const want = familyName.trim().toLowerCase();
  return adapter.families.some((f) => f.trim().toLowerCase() === want);
}

// src/math-standards/opentype-math.ts
function makeReader(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return {
    u16: (o) => dv.getUint16(o),
    i16: (o) => dv.getInt16(o),
    u32: (o) => dv.getUint32(o),
    bytes
  };
}
function findTable(dv, tag) {
  const numTables = dv.getUint16(4);
  for (let i = 0; i < numTables; i++) {
    const rec = 12 + i * 16;
    const t2 = String.fromCharCode(dv.getUint8(rec), dv.getUint8(rec + 1), dv.getUint8(rec + 2), dv.getUint8(rec + 3));
    if (t2 === tag) {
      return { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) };
    }
  }
  return null;
}
function isCollection(dv) {
  const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
  return tag === "ttcf";
}
function readOpenTypeMathTable(binary) {
  try {
    const bytes = new Uint8Array(binary);
    const dv = new DataView(binary);
    if (binary.byteLength < 12) return null;
    let base = 0;
    if (isCollection(dv)) {
      const numFonts = dv.getUint32(8);
      if (numFonts < 1) return null;
      base = dv.getUint32(12);
    }
    const header = findTable(new DataView(binary, base), "MATH");
    if (!header) return null;
    const mathOff = base + header.offset;
    if (mathOff + 10 > binary.byteLength) return null;
    const version = dv.getUint16(mathOff);
    if (version !== 1) return null;
    const constantsOff = mathOff + dv.getUint16(mathOff + 4);
    const glyphInfoOff = mathOff + dv.getUint16(mathOff + 6);
    const variantsOff = mathOff + dv.getUint16(mathOff + 8);
    const unitsPerEm = readUnitsPerEm(dv, base) || 1e3;
    const toEm = (design) => design / unitsPerEm;
    const r = makeReader(bytes.subarray(mathOff));
    const constants = readConstants(r, constantsOff - mathOff, toEm);
    const info = readGlyphInfo(r, glyphInfoOff - mathOff, toEm);
    const variants = readVariants(r, variantsOff - mathOff, toEm);
    return {
      unitsPerEm,
      constants,
      italicCorrection: info.italicCorrection,
      extendedShapes: info.extendedShapes,
      vertVariants: variants.vert,
      horizVariants: variants.horiz,
      minConnectorOverlap: variants.minConnectorOverlap
    };
  } catch {
    return null;
  }
}
function readUnitsPerEm(dv, base) {
  try {
    const head = findTable(new DataView(dv.buffer, dv.byteOffset + base), "head");
    if (!head) return 0;
    return dv.getUint16(base + head.offset + 18);
  } catch {
    return 0;
  }
}
function valueRecord(r, at, toEm) {
  return toEm(r.i16(at));
}
function readConstants(r, at, toEm) {
  const out = {};
  try {
    let p = at;
    out.scriptPercentScaleDown = r.u16(p) / 100;
    p += 2;
    out.scriptScriptPercentScaleDown = r.u16(p) / 100;
    p += 2;
    p += 2;
    p += 2;
    p += 4;
    out.axisHeight = valueRecord(r, p, toEm);
    p += 4;
    p += 31 * 4;
    out.fractionRuleThickness = valueRecord(r, p, toEm);
    p += 4;
    p += 6 * 4;
    out.overbarExtraAscender = valueRecord(r, p, toEm);
    p += 4;
    p += 2 * 4;
    out.underbarExtraDescender = valueRecord(r, p, toEm);
    p += 4;
    p += 2 * 4;
    out.radicalRuleThickness = valueRecord(r, p, toEm);
  } catch {
  }
  return out;
}
function readCoverage(r, at) {
  try {
    const format = r.u16(at);
    const ids = [];
    if (format === 1) {
      const count = r.u16(at + 2);
      for (let i = 0; i < count; i++) ids.push(r.u16(at + 4 + i * 2));
    } else if (format === 2) {
      const ranges = r.u16(at + 2);
      for (let i = 0; i < ranges; i++) {
        const rec = at + 4 + i * 6;
        const start = r.u16(rec);
        const end = r.u16(rec + 2);
        for (let g = start; g <= end; g++) ids.push(g);
      }
    }
    return ids;
  } catch {
    return [];
  }
}
function readGlyphInfo(r, at, toEm) {
  const italicCorrection = {};
  const extendedShapes = /* @__PURE__ */ new Set();
  try {
    const italicsOff = at + r.u16(at);
    const topAccentOff = at + r.u16(at + 2);
    const extShapeOff = at + r.u16(at + 4);
    if (italicsOff > at) {
      const covOff = italicsOff + r.u16(italicsOff);
      const count = r.u16(italicsOff + 2);
      const ids = readCoverage(r, covOff);
      for (let i = 0; i < Math.min(count, ids.length); i++) {
        italicCorrection[String(ids[i])] = valueRecord(r, italicsOff + 4 + i * 4, toEm);
      }
    }
    if (extShapeOff > at) {
      const ids = readCoverage(r, extShapeOff);
      for (const id of ids) extendedShapes.add(id);
    }
  } catch {
  }
  return { italicCorrection, extendedShapes };
}
function readVariants(r, at, toEm) {
  const vert = {};
  const horiz = {};
  let minConnectorOverlap = 0;
  try {
    minConnectorOverlap = toEm(r.u16(at));
    const vertCovOff = at + r.u16(at + 2);
    const horizCovOff = at + r.u16(at + 4);
    const vertCount = r.u16(at + 6);
    const horizCount = r.u16(at + 8);
    const vertArrOff = at + 10;
    const horizArrOff = vertArrOff + vertCount * 2;
    const readSet = (covOff, arrOff, count, into) => {
      const ids = readCoverage(r, covOff);
      for (let i = 0; i < Math.min(count, ids.length); i++) {
        const constructionOff = at + r.u16(arrOff + i * 2);
        into[String(ids[i])] = readConstruction(r, constructionOff, toEm);
      }
    };
    if (vertCount > 0) readSet(vertCovOff, vertArrOff, vertCount, vert);
    if (horizCount > 0) readSet(horizCovOff, horizArrOff, horizCount, horiz);
  } catch {
  }
  return { vert, horiz, minConnectorOverlap };
}
function readConstruction(r, at, toEm) {
  const variants = [];
  let assembly = null;
  try {
    const assemblyOff = r.u16(at);
    const variantCount = r.u16(at + 2);
    for (let i = 0; i < variantCount; i++) {
      const rec = at + 4 + i * 4;
      variants.push({ glyphId: r.u16(rec), advance: toEm(r.u16(rec + 2)) });
    }
    if (assemblyOff > 0) {
      const a = at + assemblyOff;
      const italic = valueRecord(r, a, toEm);
      const partCount = r.u16(a + 4);
      const parts = [];
      for (let i = 0; i < partCount; i++) {
        const rec = a + 6 + i * 8;
        parts.push({
          glyphId: r.u16(rec),
          startConnectorLength: toEm(r.u16(rec + 2)),
          endConnectorLength: toEm(r.u16(rec + 4)),
          fullAdvance: toEm(r.u16(rec + 6)),
          isExtender: (r.u16(rec + 8) & 1) === 1
        });
      }
      assembly = { italicCorrection: italic, parts };
    }
  } catch {
  }
  return { variants, assembly };
}

// src/math-standards/adapters/xits-math.ts
var XITS_FAMILIES = ["XITS Math", "XITS Math Two", "XITS"];
var REPORT_RANGES = [
  [32, 126],
  // ASCII printable / ASCII 可打印
  [160, 255],
  // Latin-1 supplement / 拉丁一增补
  [256, 591],
  // Latin Extended-A/B / 拉丁扩展 A/B
  [880, 1023],
  // Greek and Coptic / 希腊与科普特
  [1024, 1279],
  // Cyrillic / 西里尔
  [8192, 8303],
  // General punctuation / 通用标点
  [8304, 8351],
  // Super/subscripts / 上下标
  [8352, 8383],
  // Currency symbols / 货币符号
  [8448, 8527],
  // Letterlike symbols / 类字母符号
  [8592, 8703],
  // Arrows / 箭头
  [8704, 8959],
  // Mathematical operators / 数学运算符
  [8960, 9215],
  // Miscellaneous technical / 杂项技术符号
  [9632, 9727],
  // Geometric shapes / 几何形状
  [9728, 9983],
  // Miscellaneous symbols / 杂项符号
  [10176, 10223],
  // Miscellaneous math symbols-A / 杂项数学符号 A
  [10624, 10751],
  // Miscellaneous math symbols-B / 杂项数学符号 B
  [10752, 11007],
  // Supplemental math operators / 增补数学运算符
  [119808, 120831]
  // Mathematical alphanumerics / 数学字母数字
];
function isControl(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function isPrivateUse(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function inReportedRange(code) {
  for (const [from, to] of REPORT_RANGES) {
    if (code >= from && code <= to) return true;
  }
  return false;
}
function findTable2(dv, base, tag) {
  try {
    const numTables = dv.getUint16(base + 4);
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      const t2 = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      if (t2 === tag) {
        return { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) };
      }
    }
  } catch {
  }
  return null;
}
function fontBase(dv, byteLength) {
  try {
    if (byteLength < 12) return -1;
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    if (tag === "ttcf") {
      const numFonts = dv.getUint32(8);
      if (numFonts < 1) return -1;
      return dv.getUint32(12);
    }
    return 0;
  } catch {
    return -1;
  }
}
function readCmapSubtable(dv, tableStart, subOffset, into) {
  try {
    const o = tableStart + subOffset;
    const format = dv.getUint16(o);
    if (format === 4) {
      const segCountX2 = dv.getUint16(o + 6);
      const segCount = segCountX2 >>> 1;
      if (segCount === 0) return false;
      const endBase = o + 14;
      const startBase = endBase + segCount * 2 + 2;
      const deltaBase = startBase + segCount * 2;
      const rangeBase = deltaBase + segCount * 2;
      for (let i = 0; i < segCount; i++) {
        const end = dv.getUint16(endBase + i * 2);
        const start = dv.getUint16(startBase + i * 2);
        const delta = dv.getInt16(deltaBase + i * 2);
        const rangeOffset = dv.getUint16(rangeBase + i * 2);
        if (start > end) continue;
        const last = Math.min(end, 65534);
        for (let cp = start; cp <= last; cp++) {
          let gid;
          if (rangeOffset === 0) {
            gid = cp + delta & 65535;
          } else {
            const addr = rangeBase + i * 2 + rangeOffset + (cp - start) * 2;
            gid = dv.getUint16(addr);
            if (gid !== 0) gid = gid + delta & 65535;
          }
          if (gid !== 0) into.set(cp, gid);
        }
      }
      return true;
    }
    if (format === 12) {
      const nGroups = dv.getUint32(o + 12);
      for (let g = 0; g < nGroups; g++) {
        const rec = o + 16 + g * 12;
        const startCp = dv.getUint32(rec);
        const endCp = dv.getUint32(rec + 4);
        const startGid = dv.getUint32(rec + 8);
        if (startCp > endCp || endCp > 1114111) continue;
        for (let cp = startCp; cp <= endCp; cp++) {
          const gid = startGid + (cp - startCp);
          if (gid !== 0) into.set(cp, gid);
        }
      }
      return true;
    }
  } catch {
  }
  return false;
}
function readCmap(dv, table, notes) {
  try {
    const numTables = dv.getUint16(table.offset + 2);
    const candidates = [];
    for (let i = 0; i < numTables; i++) {
      const rec = table.offset + 4 + i * 8;
      const plat = dv.getUint16(rec);
      const enc = dv.getUint16(rec + 2);
      const off = dv.getUint32(rec + 4);
      let rank = 9;
      if (plat === 3 && enc === 10) rank = 0;
      else if (plat === 0) rank = 1;
      else if (plat === 3 && enc === 1) rank = 2;
      else if (plat === 3 && enc === 0) rank = 3;
      candidates.push({ plat, enc, off, rank });
    }
    candidates.sort((a, b) => a.rank - b.rank);
    const into = /* @__PURE__ */ new Map();
    for (const c of candidates) {
      into.clear();
      if (readCmapSubtable(dv, table.offset, c.off, into) && into.size > 0) {
        notes.push(
          `cmap subtable platform ${c.plat} encoding ${c.enc} gave ${into.size} codepoints. cmap \u5B50\u8868 platform ${c.plat} / encoding ${c.enc} \u89E3\u6790\u51FA ${into.size} \u4E2A\u7801\u4F4D\u3002`
        );
        return into;
      }
    }
    notes.push("No usable cmap subtable (only formats 4 and 12 are read); chars stay empty. \u65E0\u53EF\u7528 cmap \u5B50\u8868\uFF08\u4EC5\u89E3\u6790\u683C\u5F0F 4 \u4E0E 12\uFF09\uFF0Cchars \u7559\u7A7A\u3002");
  } catch {
    notes.push("cmap could not be parsed; chars stay empty. cmap \u89E3\u6790\u5931\u8D25\uFF0Cchars \u7559\u7A7A\u3002");
  }
  return null;
}
function readSfntInfo(binary, notes) {
  try {
    const dv = new DataView(binary);
    const base = fontBase(dv, binary.byteLength);
    if (base < 0) {
      notes.push("Font header is unreadable; only MATH constants can be reported. \u5B57\u4F53\u5934\u4E0D\u53EF\u8BFB\uFF0C\u4EC5\u80FD\u4E0A\u62A5 MATH \u5E38\u91CF\u3002");
      return null;
    }
    let unitsPerEm = 1e3;
    const head = findTable2(dv, base, "head");
    if (head && head.offset + 20 <= binary.byteLength) {
      const upem = dv.getUint16(head.offset + 18);
      if (upem > 0) unitsPerEm = upem;
    }
    let numGlyphs = 0;
    const maxp = findTable2(dv, base, "maxp");
    if (maxp && maxp.offset + 6 <= binary.byteLength) {
      numGlyphs = dv.getUint16(maxp.offset + 4);
    }
    let hheaAsc = 0;
    let hheaDesc = 0;
    let numberOfHMetrics = 0;
    const hhea = findTable2(dv, base, "hhea");
    if (hhea && hhea.offset + 36 <= binary.byteLength) {
      hheaAsc = dv.getInt16(hhea.offset + 4);
      hheaDesc = dv.getInt16(hhea.offset + 6);
      numberOfHMetrics = dv.getUint16(hhea.offset + 34);
    }
    let typoAsc = 0;
    let typoDesc = 0;
    const os2 = findTable2(dv, base, "OS/2");
    if (os2 && os2.offset + 72 <= binary.byteLength) {
      typoAsc = dv.getInt16(os2.offset + 68);
      typoDesc = dv.getInt16(os2.offset + 70);
    }
    let ascender = 0;
    let descender = 0;
    let verticalSource = "none";
    const sane = (a, d) => a > 0 && d < 0 && a <= unitsPerEm * 2 && -d <= unitsPerEm;
    if (sane(typoAsc, typoDesc)) {
      ascender = typoAsc;
      descender = typoDesc;
      verticalSource = "os2-typo";
    } else if (sane(hheaAsc, hheaDesc)) {
      ascender = hheaAsc;
      descender = hheaDesc;
      verticalSource = "hhea";
    } else {
      notes.push("Neither OS/2 sTypo nor hhea gave sane verticals; height/depth fall back to 0.8/0.2 em. OS/2 sTypo \u4E0E hhea \u5747\u65E0\u5408\u6CD5\u5782\u76F4\u5EA6\u91CF\uFF0C\u9AD8\u5EA6/\u6DF1\u5EA6\u9000\u5316\u4E3A 0.8/0.2 em\u3002");
      ascender = Math.round(unitsPerEm * 0.8);
      descender = -Math.round(unitsPerEm * 0.2);
      verticalSource = "none";
    }
    let advances = null;
    const hmtx = findTable2(dv, base, "hmtx");
    if (hmtx && numGlyphs > 0 && numberOfHMetrics > 0) {
      const usable = Math.min(numberOfHMetrics, numGlyphs);
      if (hmtx.offset + usable * 4 <= binary.byteLength) {
        advances = new Uint16Array(numGlyphs);
        let last = 0;
        for (let g = 0; g < usable; g++) {
          last = dv.getUint16(hmtx.offset + g * 4);
          advances[g] = last;
        }
        for (let g = usable; g < numGlyphs; g++) advances[g] = last;
      }
    }
    if (!advances) {
      notes.push("hmtx was unusable; glyph widths stay at MathJax values. hmtx \u4E0D\u53EF\u7528\uFF0C\u5B57\u5F62\u5BBD\u5EA6\u4FDD\u7559 MathJax \u539F\u503C\u3002");
    }
    let cmap = null;
    const cmapTable = findTable2(dv, base, "cmap");
    if (cmapTable) {
      cmap = readCmap(dv, cmapTable, notes);
    } else {
      notes.push("No cmap table; chars stay empty. \u7F3A\u5C11 cmap \u8868\uFF0Cchars \u7559\u7A7A\u3002");
    }
    return { unitsPerEm, ascender, descender, numGlyphs, advances, cmap, verticalSource };
  } catch (err) {
    notes.push(
      `sfnt metric tables could not be read: ${err instanceof Error ? err.message : String(err)}. sfnt \u5EA6\u91CF\u8868\u8BFB\u53D6\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}\u3002`
    );
    return null;
  }
}
var xitsMathAdapter = {
  id: "xits-math",
  name: "XITS Math",
  families: XITS_FAMILIES,
  priority: 10,
  matches(familyName) {
    return matchByFamilyName({ families: XITS_FAMILIES }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    const math = readOpenTypeMathTable(binary);
    if (!math) {
      return null;
    }
    try {
      const info = readSfntInfo(binary, notes);
      const constants = math.constants;
      if (typeof constants.axisHeight === "number") {
        notes.push(`MATH constants adopted (axisHeight ${constants.axisHeight.toFixed(4)} em). \u5DF2\u91C7\u7528 MATH \u5E38\u91CF\uFF08axisHeight ${constants.axisHeight.toFixed(4)} em\uFF09\u3002`);
      } else {
        notes.push("MATH constants were partially readable; missing fields stay undefined. MATH \u5E38\u91CF\u53EA\u8BFB\u5230\u90E8\u5206\u5B57\u6BB5\uFF0C\u7F3A\u5931\u9879\u4FDD\u6301 undefined\u3002");
      }
      notes.push("Stretchy delimiter sizes were left to MathJax: this font does not own the assembly in MathJax output. \u53EF\u4F38\u7F29\u5B9A\u754C\u7B26\u5C3A\u5BF8\u4FDD\u7559 MathJax \u539F\u503C\uFF1A\u5728 MathJax \u8F93\u51FA\u4E2D\u62FC\u88C5\u5E76\u4E0D\u7531\u672C\u5B57\u4F53\u627F\u62C5\u3002");
      const italicCount = Object.keys(math.italicCorrection).length;
      const extCount = math.extendedShapes.size;
      notes.push(
        `MATH also reports ${italicCount} italic corrections and ${extCount} extended shapes; MathFontMetrics has no fields for them and they are not applied here. MATH \u53E6\u542B ${italicCount} \u6761\u659C\u4F53\u6821\u6B63\u4E0E ${extCount} \u4E2A extended shape\uFF1BMathFontMetrics \u65E0\u5BF9\u5E94\u5B57\u6BB5\uFF0C\u6B64\u5904\u672A\u5957\u7528\u3002`
      );
      notes.push("XITS is a two-width design (text weight plus bold); these metrics describe the supplied face only. XITS \u4E3A\u53CC\u5BBD\u5EA6\u8BBE\u8BA1\uFF08\u5E38\u89C4+\u7C97\u4F53\uFF09\uFF1B\u672C\u7EC4\u5EA6\u91CF\u4EC5\u63CF\u8FF0\u4F20\u5165\u7684\u8FD9\u4E00\u526F\u5B57\u9762\u3002");
      const chars = {};
      if (!info) {
        notes.push("Glyph boxes could not be built; only constants are reported. \u65E0\u6CD5\u6784\u5EFA\u5B57\u5F62\u76D2\uFF0C\u4EC5\u4E0A\u62A5\u5E38\u91CF\u3002");
        return {
          source: "opentype-math",
          chars,
          delimiters: void 0,
          constants,
          ownsStretchyAssembly: false,
          notes
        };
      }
      const upem = info.unitsPerEm > 0 ? info.unitsPerEm : 1e3;
      const height = info.ascender / upem;
      const depth = -info.descender / upem;
      if (ctx.unitsPerEm && ctx.unitsPerEm !== upem) {
        notes.push(`Caller reported unitsPerEm ${ctx.unitsPerEm}, font says ${upem}; the font wins. \u8C03\u7528\u65B9\u62A5\u544A unitsPerEm ${ctx.unitsPerEm}\uFF0C\u5B57\u4F53\u4E3A ${upem}\uFF1B\u4EE5\u5B57\u4F53\u4E3A\u51C6\u3002`);
      }
      notes.push(
        `Glyph boxes: width per-glyph from hmtx, height ${height.toFixed(4)} em / depth ${depth.toFixed(4)} em uniformly from ${info.verticalSource} (per-glyph verticals are approximated by these font-wide values). \u5B57\u5F62\u76D2\uFF1A\u5BBD\u5EA6\u9010\u5B57\u5F62\u53D6\u81EA hmtx\uFF0C\u9AD8\u5EA6 ${height.toFixed(4)} em / \u6DF1\u5EA6 ${depth.toFixed(4)} em \u7EDF\u4E00\u53D6\u81EA ${info.verticalSource}\uFF08\u9010\u5B57\u5F62\u5782\u76F4\u5EA6\u91CF\u4EE5\u6B64\u5168\u5B57\u4F53\u503C\u8FD1\u4F3C\uFF09\u3002`
      );
      if (info.cmap && info.advances) {
        let mapped = 0;
        let zeroAdvance = 0;
        for (const [code, gid] of info.cmap) {
          if (!inReportedRange(code) || isControl(code) || isPrivateUse(code)) continue;
          if (gid <= 0 || gid >= info.numGlyphs) continue;
          const width = (info.advances[gid] ?? 0) / upem;
          if (width === 0) zeroAdvance++;
          chars[String(code)] = [height, depth, width];
          mapped++;
        }
        notes.push(`Built ${mapped} glyph boxes from cmap+hmtx. \u7531 cmap+hmtx \u6784\u5EFA ${mapped} \u4E2A\u5B57\u5F62\u76D2\u3002`);
        if (zeroAdvance > 0) {
          notes.push(`${zeroAdvance} zero-advance glyphs kept at width 0 (combining marks). \u6709 ${zeroAdvance} \u4E2A\u96F6\u6B65\u8FDB\u5B57\u5F62\u4FDD\u7559\u5BBD\u5EA6 0\uFF08\u7EC4\u5408\u8BB0\u53F7\uFF09\u3002`);
        }
        if (mapped === 0) {
          notes.push("cmap produced no reported codepoints; constants remain the useful output. cmap \u672A\u7ED9\u51FA\u4EFB\u4F55\u4E0A\u62A5\u7801\u4F4D\uFF0C\u5E38\u91CF\u4ECD\u662F\u6709\u6548\u4EA7\u51FA\u3002");
        }
      }
      return {
        source: "opentype-math",
        chars,
        // Deliberately absent — see the file header and rule in types.ts.
        // 刻意缺省——见文件头与 types.ts 中的约定。
        delimiters: void 0,
        constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      notes.push(
        `xits-math build failed: ${err instanceof Error ? err.message : String(err)}. xits-math \u6784\u5EFA\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}\u3002`
      );
      return {
        source: "opentype-math",
        chars: {},
        delimiters: void 0,
        constants: math.constants,
        ownsStretchyAssembly: false,
        notes
      };
    }
  }
};

// src/math-standards/adapters/stix-two-math.ts
var FAMILIES = ["STIX Two Math", "STIX Math", "STIXGeneral"];
var PROBE_RANGES = [
  [32, 126],
  // ASCII printable / ASCII 可打印字符
  [160, 255],
  // Latin-1 supplement / 拉丁一补充
  [880, 1023],
  // Greek / 希腊字母
  [8192, 8303],
  // general punctuation / 通用标点
  [8304, 8351],
  // super/subscripts / 上下标
  [8352, 8383],
  // currency / 货币
  [8448, 8527],
  // letterlike / 字母式符号
  [8592, 8703],
  // arrows / 箭头
  [8704, 8959],
  // math operators / 数学运算符
  [8960, 9215],
  // misc technical / 杂项技术符号
  [9632, 9727],
  // geometric shapes / 几何形状
  [9728, 9983],
  // misc symbols / 杂项符号
  [10176, 10223],
  // misc math symbols-A / 杂项数学符号 A
  [10624, 10751],
  // misc math symbols-B / 杂项数学符号 B
  [10752, 11007],
  // supplemental math operators / 补充数学运算符
  [119808, 120831]
  // math alphanumerics / 数学字母数字符号
];
function isPrivateUse2(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isControl2(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function buildWantedSet() {
  const want = /* @__PURE__ */ new Set();
  for (const [from, to] of PROBE_RANGES) {
    for (let code = from; code <= to; code++) {
      if (!isPrivateUse2(code) && !isControl2(code)) {
        want.add(code);
      }
    }
  }
  return want;
}
function errText(err) {
  return err instanceof Error ? err.message : String(err);
}
function readTableDirectory(dv) {
  try {
    if (dv.byteLength < 12) return null;
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    let base = 0;
    if (tag === "ttcf") {
      const numFonts = dv.getUint32(8);
      if (numFonts < 1) return null;
      base = dv.getUint32(12);
    }
    if (base + 12 > dv.byteLength) return null;
    const numTables = dv.getUint16(base + 4);
    const tables = /* @__PURE__ */ new Map();
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      if (rec + 16 > dv.byteLength) break;
      const name = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      tables.set(name, { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) });
    }
    return tables;
  } catch {
    return null;
  }
}
function parseCmapFormat4(dv, at, want, into) {
  const segCount = dv.getUint16(at + 6) / 2;
  const endCodesAt = at + 14;
  const startCodesAt = endCodesAt + segCount * 2 + 2;
  const idDeltaAt = startCodesAt + segCount * 2;
  const idRangeOffsetAt = idDeltaAt + segCount * 2;
  for (let s = 0; s < segCount; s++) {
    const end = dv.getUint16(endCodesAt + s * 2);
    const start = dv.getUint16(startCodesAt + s * 2);
    const idDelta = dv.getInt16(idDeltaAt + s * 2);
    const idRangeOffset = dv.getUint16(idRangeOffsetAt + s * 2);
    if (start > end || start === 65535) continue;
    for (let code = start; code <= end; code++) {
      if (!want.has(code)) continue;
      let gid = 0;
      try {
        if (idRangeOffset === 0) {
          gid = code + idDelta & 65535;
        } else {
          const addr = idRangeOffsetAt + s * 2 + idRangeOffset + (code - start) * 2;
          if (addr + 2 > dv.byteLength) continue;
          const raw = dv.getUint16(addr);
          gid = raw === 0 ? 0 : raw + idDelta & 65535;
        }
      } catch {
        continue;
      }
      if (gid !== 0) into.set(String(code), gid);
    }
  }
}
function parseCmapFormat12(dv, at, want, into) {
  const numGroups = dv.getUint32(at + 12);
  for (let g = 0; g < numGroups; g++) {
    const rec = at + 16 + g * 12;
    if (rec + 12 > dv.byteLength) break;
    const start = dv.getUint32(rec);
    const end = dv.getUint32(rec + 4);
    const startGid = dv.getUint32(rec + 8);
    if (start > end) continue;
    for (let code = start; code <= end; code++) {
      if (!want.has(code)) continue;
      const gid = startGid + (code - start);
      if (gid !== 0) into.set(String(code), gid);
    }
  }
}
function readCmap2(dv, rec, want) {
  const into = /* @__PURE__ */ new Map();
  try {
    const numSubtables = dv.getUint16(rec.offset + 2);
    let bestScore = -1;
    let bestOffset = -1;
    for (let i = 0; i < numSubtables; i++) {
      const r = rec.offset + 4 + i * 8;
      if (r + 8 > dv.byteLength) break;
      const platform = dv.getUint16(r);
      const encoding = dv.getUint16(r + 2);
      const sub = rec.offset + dv.getUint32(r + 4);
      if (sub + 2 > dv.byteLength) continue;
      const format2 = dv.getUint16(sub);
      let score = -1;
      if (format2 === 12) {
        score = platform === 3 && encoding === 10 ? 4 : platform === 0 ? 3 : 2;
      } else if (format2 === 4) {
        score = platform === 3 && encoding === 1 ? 3 : platform === 0 ? 2 : 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestOffset = sub;
      }
    }
    if (bestOffset < 0) return into;
    const format = dv.getUint16(bestOffset);
    if (format === 12) {
      parseCmapFormat12(dv, bestOffset, want, into);
    } else if (format === 4) {
      parseCmapFormat4(dv, bestOffset, want, into);
    }
  } catch {
  }
  return into;
}
function readAdvances(dv, rec, numberOfHMetrics, numGlyphs) {
  try {
    if (numGlyphs < 1 || numberOfHMetrics < 1) return null;
    const advances = new Uint16Array(numGlyphs);
    const full = Math.min(numberOfHMetrics, numGlyphs);
    for (let g = 0; g < full; g++) {
      const off = rec.offset + g * 4;
      if (off + 2 > dv.byteLength) return null;
      advances[g] = dv.getUint16(off);
    }
    const last = advances[full - 1];
    for (let g = full; g < numGlyphs; g++) {
      advances[g] = last;
    }
    return advances;
  } catch {
    return null;
  }
}
function readGlyphYBounds(dv, glyf, loca, indexToLocFormat, gid) {
  try {
    let start;
    let end;
    if (indexToLocFormat === 0) {
      const a = loca.offset + gid * 2;
      const b = loca.offset + (gid + 1) * 2;
      if (b + 2 > dv.byteLength) return null;
      start = dv.getUint16(a) * 2;
      end = dv.getUint16(b) * 2;
    } else {
      const a = loca.offset + gid * 4;
      const b = loca.offset + (gid + 1) * 4;
      if (b + 4 > dv.byteLength) return null;
      start = dv.getUint32(a);
      end = dv.getUint32(b);
    }
    if (end <= start) {
      return { yMin: 0, yMax: 0 };
    }
    const goff = glyf.offset + start;
    if (goff + 10 > dv.byteLength) return null;
    return { yMin: dv.getInt16(goff + 6), yMax: dv.getInt16(goff + 8) };
  } catch {
    return null;
  }
}
function readSfntInfo2(dv, want, notes) {
  const tables = readTableDirectory(dv);
  if (!tables) {
    notes.push("STIX: SFNT table directory could not be read; no glyph metrics produced.");
    return null;
  }
  let unitsPerEm = 0;
  let indexToLocFormat = 1;
  const head = tables.get("head");
  if (head && head.length >= 54) {
    unitsPerEm = dv.getUint16(head.offset + 18);
    indexToLocFormat = dv.getInt16(head.offset + 50);
  }
  let hheaAscender = 0;
  let hheaDescender = 0;
  let numberOfHMetrics = 0;
  const hhea = tables.get("hhea");
  if (hhea && hhea.length >= 36) {
    hheaAscender = dv.getInt16(hhea.offset + 4);
    hheaDescender = dv.getInt16(hhea.offset + 6);
    numberOfHMetrics = dv.getUint16(hhea.offset + 34);
  }
  let typoAscender = 0;
  let typoDescender = 0;
  let usedTypoMetrics = false;
  let usedHheaMetrics = false;
  const os2 = tables.get("OS/2");
  if (os2 && os2.length >= 72) {
    typoAscender = dv.getInt16(os2.offset + 68);
    typoDescender = dv.getInt16(os2.offset + 70);
    usedTypoMetrics = true;
  } else if (hhea && hhea.length >= 36) {
    typoAscender = hheaAscender;
    typoDescender = hheaDescender;
    usedHheaMetrics = true;
  } else {
    notes.push("STIX: neither OS/2 sTypoAscender nor hhea ascent is readable; font-wide vertical defaults are unavailable.");
  }
  let numGlyphs = 0;
  const maxp = tables.get("maxp");
  if (maxp && maxp.length >= 6) {
    numGlyphs = dv.getUint16(maxp.offset + 4);
  }
  if (numGlyphs < 1) {
    notes.push("STIX: maxp reports no glyphs; no per-glyph metrics produced.");
    return null;
  }
  let advances = null;
  const hmtx = tables.get("hmtx");
  if (hmtx) {
    advances = readAdvances(dv, hmtx, numberOfHMetrics, numGlyphs);
  }
  if (!advances) {
    notes.push("STIX: hmtx advance widths unreadable; no per-glyph metrics produced.");
    return null;
  }
  let cmap = /* @__PURE__ */ new Map();
  const cmapRec = tables.get("cmap");
  if (cmapRec) {
    cmap = readCmap2(dv, cmapRec, want);
  }
  if (cmap.size === 0) {
    notes.push("STIX: cmap has no readable Unicode subtable for the probed codepoints; no per-glyph metrics produced.");
    return null;
  }
  const glyfRec = tables.get("glyf") || null;
  const locaRec = tables.get("loca") || null;
  const glyf = glyfRec && glyfRec.length > 0 ? glyfRec : null;
  const loca = locaRec && locaRec.length > 0 ? locaRec : null;
  return {
    unitsPerEm,
    indexToLocFormat,
    typoAscender,
    typoDescender,
    advances,
    cmap,
    glyf,
    loca,
    usedTypoMetrics,
    usedHheaMetrics
  };
}
function finish(constants, chars, notes) {
  return {
    source: "opentype-math",
    chars,
    // Deliberately absent: braces and arrows are assembled from MathJax's own pieces when this
    // font is substituted, so their target sizes must stay MathJax's.
    // 有意不写：本字体被代入时，花括号与箭头仍由 MathJax 自己的部件拼装，其目标尺寸必须保持其原值。
    delimiters: void 0,
    constants,
    ownsStretchyAssembly: false,
    notes
  };
}
var stixTwoMathAdapter = {
  id: "stix-two-math",
  name: "STIX Two Math",
  families: FAMILIES,
  priority: 20,
  /** Claim a family by exact, case-insensitive name. / 按精确（忽略大小写）字族名认领。 */
  matches(familyName) {
    return matchByFamilyName(stixTwoMathAdapter, familyName);
  },
  /**
   * Build metrics from the font file's bytes.
   * 从字体文件字节构建度量。
   *
   * @param binary - the whole font file / 整个字体文件
   * @param ctx    - what the caller knows / 调用方已知信息
   * @returns metrics, or null to decline so the measurement fallback tries / 度量；null 表示拒接，交给测量兜底
   */
  build(binary, ctx) {
    const notes = [];
    let math = null;
    try {
      math = readOpenTypeMathTable(binary);
    } catch (err) {
      notes.push(`STIX: MATH table read failed: ${errText(err)}`);
      math = null;
    }
    if (!math) {
      return null;
    }
    const chars = {};
    try {
      const dv = new DataView(binary);
      const want = buildWantedSet();
      const info = readSfntInfo2(dv, want, notes);
      if (!info) {
        notes.push("STIX: returning MATH constants only; MathJax keeps its own per-glyph metrics.");
        return finish(math.constants, chars, notes);
      }
      let unitsPerEm = info.unitsPerEm;
      if (!(unitsPerEm > 0)) {
        unitsPerEm = math.unitsPerEm;
      }
      if (!(unitsPerEm > 0) && ctx.unitsPerEm && ctx.unitsPerEm > 0) {
        unitsPerEm = ctx.unitsPerEm;
      }
      if (!(unitsPerEm > 0)) {
        unitsPerEm = 1e3;
        notes.push("STIX: unitsPerEm unreadable in head/MATH; assumed 1000.");
      }
      const fontHeight = Math.max(0, info.typoAscender) / unitsPerEm;
      const fontDepth = Math.max(0, -info.typoDescender) / unitsPerEm;
      if (info.usedTypoMetrics) {
        notes.push("STIX: font-wide verticals from OS/2 sTypoAscender/sTypoDescender.");
      } else if (info.usedHheaMetrics) {
        notes.push("STIX: OS/2 typographic metrics absent; font-wide verticals from hhea ascent/descent.");
      }
      const glyf = info.glyf;
      const loca = info.loca;
      const hasGlyf = glyf !== null && loca !== null;
      if (!hasGlyf) {
        notes.push("STIX: no glyf/loca tables (CFF outlines); per-glyph height/depth approximated by the font-wide ascender/descender.");
      }
      let built = 0;
      let missingGlyph = 0;
      let zeroAdvance = 0;
      let approximated = 0;
      for (const code of want) {
        const key = String(code);
        const gid = info.cmap.get(key);
        if (gid === void 0 || gid === 0 || gid >= info.advances.length) {
          missingGlyph++;
          continue;
        }
        const widthUnits = info.advances[gid];
        if (!(widthUnits > 0)) {
          zeroAdvance++;
          continue;
        }
        let height;
        let depth;
        if (hasGlyf && glyf && loca) {
          const box = readGlyphYBounds(dv, glyf, loca, info.indexToLocFormat, gid);
          if (box) {
            height = Math.max(0, box.yMax) / unitsPerEm;
            depth = Math.max(0, -box.yMin) / unitsPerEm;
          } else {
            height = fontHeight;
            depth = fontDepth;
            approximated++;
          }
        } else {
          height = fontHeight;
          depth = fontDepth;
          approximated++;
        }
        const metrics = [height, depth, widthUnits / unitsPerEm];
        chars[key] = metrics;
        built++;
      }
      notes.push(
        `STIX: built ${built} glyph layout boxes from cmap/hmtx/glyf; kept MathJax metrics for ${missingGlyph} absent glyphs and ${zeroAdvance} zero-advance glyphs.`
      );
      if (approximated > 0) {
        notes.push(
          `STIX: ${approximated} glyphs have no readable outline box; their height/depth use the font-wide ascender/descender (typographic approximation).`
        );
      }
    } catch (err) {
      notes.push(`STIX: glyph metric parse failed: ${errText(err)}; returning MATH constants with partial chars.`);
    }
    notes.push("STIX: MATH italic corrections read but not exported (no field on MathFontMetrics); axis and rule values come from the MATH constants.");
    notes.push("STIX: delimiters omitted on purpose \u2014 MathJax assembles stretchy delimiters from its own faces, so its target sizes must stay.");
    return finish(math.constants, chars, notes);
  }
};

// src/math-standards/opentype-font.ts
function tableDirectory(dv, base) {
  const out = /* @__PURE__ */ new Map();
  const numTables = dv.getUint16(base + 4);
  for (let i = 0; i < numTables; i++) {
    const rec = base + 12 + i * 16;
    const tag = String.fromCharCode(dv.getUint8(rec), dv.getUint8(rec + 1), dv.getUint8(rec + 2), dv.getUint8(rec + 3));
    out.set(tag, { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) });
  }
  return out;
}
function fontBase2(dv) {
  const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
  if (tag === "ttcf") {
    return dv.getUint32(12);
  }
  return 0;
}
function readOpenTypeFontInfo(binary) {
  try {
    if (binary.byteLength < 12) {
      return null;
    }
    const dv = new DataView(binary);
    const base = fontBase2(dv);
    const tables = tableDirectory(dv, base);
    if (tables.size === 0) {
      return null;
    }
    const head = tables.get("head");
    const maxp = tables.get("maxp");
    const hhea = tables.get("hhea");
    const hmtx = tables.get("hmtx");
    const os2 = tables.get("OS/2");
    if (!head || !maxp || !hhea || !hmtx) {
      return null;
    }
    const unitsPerEm = dv.getUint16(head.offset + 18) || 1e3;
    const toEm = (design) => design / unitsPerEm;
    const numGlyphs = dv.getUint16(maxp.offset + 4);
    const hheaAscent = dv.getInt16(hhea.offset + 4);
    const hheaDescent = dv.getInt16(hhea.offset + 6);
    const hheaLineGap = dv.getInt16(hhea.offset + 8);
    const numberOfHMetrics = dv.getUint16(hhea.offset + 34);
    const advanceWidths = new Uint16Array(numGlyphs);
    for (let i = 0; i < numGlyphs; i++) {
      const rec = i < numberOfHMetrics ? i : numberOfHMetrics - 1;
      advanceWidths[i] = dv.getUint16(hmtx.offset + rec * 4);
    }
    let ascent = toEm(hheaAscent);
    let descent = toEm(Math.abs(hheaDescent));
    let capHeight;
    let xHeight;
    let weightClass = 400;
    if (os2 && os2.length >= 72) {
      weightClass = dv.getUint16(os2.offset + 4) || 400;
      const typoAscender = dv.getInt16(os2.offset + 68);
      const typoDescender = dv.getInt16(os2.offset + 70);
      if (typoAscender !== 0) {
        ascent = toEm(typoAscender);
        descent = toEm(Math.abs(typoDescender));
      }
      const version = dv.getUint16(os2.offset);
      if (version >= 2 && os2.length >= 90) {
        const sx = dv.getInt16(os2.offset + 86);
        const sc = dv.getInt16(os2.offset + 88);
        if (sx > 0) xHeight = toEm(sx);
        if (sc > 0) capHeight = toEm(sc);
      }
    }
    const cmap = readCmap3(dv, tables.get("cmap"));
    return {
      unitsPerEm,
      numGlyphs,
      verticals: { ascent, descent, capHeight, xHeight, weightClass },
      advanceWidths,
      cmap,
      hhea: { ascent: toEm(hheaAscent), descent: toEm(Math.abs(hheaDescent)), lineGap: toEm(hheaLineGap) }
    };
  } catch {
    return null;
  }
}
function readCmap3(dv, table) {
  const out = {};
  if (!table) {
    return out;
  }
  try {
    const base = table.offset;
    const numTables = dv.getUint16(base + 2);
    let chosen = -1;
    let chosenScore = -1;
    for (let i = 0; i < numTables; i++) {
      const rec = base + 4 + i * 8;
      const platformId = dv.getUint16(rec);
      const encodingId = dv.getUint16(rec + 2);
      const offset = dv.getUint32(rec + 4);
      const format2 = dv.getUint16(base + offset);
      let score = -1;
      if (format2 === 12) score = 3;
      else if (format2 === 4) score = 2;
      if (platformId === 3 && encodingId === 10 && score > 0) score += 1;
      if (score > chosenScore) {
        chosenScore = score;
        chosen = base + offset;
      }
    }
    if (chosen < 0) {
      return out;
    }
    const format = dv.getUint16(chosen);
    if (format === 4) {
      const segCountX2 = dv.getUint16(chosen + 6);
      const segCount = segCountX2 / 2;
      const endCodes = chosen + 14;
      const startCodes = endCodes + segCountX2 + 2;
      const idDeltas = startCodes + segCountX2;
      const idRangeOffsets = idDeltas + segCountX2;
      for (let s = 0; s < segCount; s++) {
        const end = dv.getUint16(endCodes + s * 2);
        const start = dv.getUint16(startCodes + s * 2);
        const delta = dv.getInt16(idDeltas + s * 2);
        const rangeOffset = dv.getUint16(idRangeOffsets + s * 2);
        for (let c = start; c <= end && c !== 65535; c++) {
          let glyph;
          if (rangeOffset === 0) {
            glyph = c + delta & 65535;
          } else {
            const at = idRangeOffsets + s * 2 + rangeOffset + (c - start) * 2;
            if (at + 2 > dv.byteLength) continue;
            glyph = dv.getUint16(at);
            if (glyph !== 0) glyph = glyph + delta & 65535;
          }
          if (glyph !== 0) {
            out[String(c)] = glyph;
          }
        }
      }
    } else if (format === 12) {
      const nGroups = dv.getUint32(chosen + 12);
      for (let g = 0; g < nGroups; g++) {
        const rec = chosen + 16 + g * 12;
        const startChar = dv.getUint32(rec);
        const endChar = dv.getUint32(rec + 4);
        const startGlyph = dv.getUint32(rec + 8);
        for (let c = startChar; c <= endChar; c++) {
          out[String(c)] = startGlyph + (c - startChar);
        }
      }
    }
  } catch {
  }
  return out;
}
function glyphLayoutBox(font, glyphId) {
  if (glyphId < 0 || glyphId >= font.numGlyphs) {
    return null;
  }
  const advance = font.advanceWidths[glyphId];
  if (!advance) {
    return null;
  }
  return {
    height: font.verticals.ascent,
    depth: font.verticals.descent,
    width: advance / font.unitsPerEm
  };
}
function glyphForCodepoint(font, codepoint) {
  const id = font.cmap[String(codepoint)];
  return typeof id === "number" && id > 0 ? id : null;
}
var MAPPED_CODEPOINT_RANGES = [
  [32, 126],
  // ASCII printable
  [160, 255],
  // Latin-1 supplement
  [8192, 8303],
  // general punctuation
  [8304, 8351],
  // super/subscripts
  [8352, 8383],
  // currency
  [8448, 8527],
  // letterlike
  [8592, 8703],
  // arrows
  [8704, 8959],
  // mathematical operators
  [8960, 9215],
  // miscellaneous technical
  [9632, 9727],
  // geometric shapes
  [9728, 9983],
  // miscellaneous symbols
  [10176, 10223],
  // miscellaneous mathematical symbols-A
  [10624, 10751],
  // miscellaneous mathematical symbols-B
  [10752, 11007],
  // supplemental mathematical operators
  [119808, 120831]
  // mathematical alphanumerics
];
function buildCharsFromFont(font, gaps = [], ranges = MAPPED_CODEPOINT_RANGES) {
  const out = {
    chars: {},
    mapped: 0,
    skippedGap: 0,
    skippedAbsent: 0,
    gapsHit: []
  };
  for (const [from, to] of ranges) {
    for (let code = from; code <= to; code++) {
      const gap = gaps.find((g) => code >= g.from && code <= g.to);
      if (gap) {
        out.skippedGap++;
        if (!out.gapsHit.includes(gap.name)) {
          out.gapsHit.push(gap.name);
        }
        continue;
      }
      const glyphId = glyphForCodepoint(font, code);
      if (glyphId === null) {
        out.skippedAbsent++;
        continue;
      }
      const box = glyphLayoutBox(font, glyphId);
      if (!box) {
        out.skippedAbsent++;
        continue;
      }
      out.chars[String(code)] = [box.height, box.depth, box.width];
      out.mapped++;
    }
  }
  return out;
}

// src/math-standards/adapters/latin-modern-math.ts
var KNOWN_GAPS = [
  { name: "lowercase Script", from: 119990, to: 120015 }
];
var latinModernMathAdapter = {
  id: "latin-modern-math",
  name: "Latin Modern Math",
  families: ["Latin Modern Math", "Latin Modern", "LM Math", "Latin Modern Math Regular"],
  priority: 30,
  matches(familyName) {
    return matchByFamilyName(this, familyName);
  },
  build(binary, _ctx) {
    const font = readOpenTypeFontInfo(binary);
    if (!font) {
      return null;
    }
    const math = readOpenTypeMathTable(binary);
    const built = buildCharsFromFont(font, KNOWN_GAPS);
    if (built.mapped === 0) {
      return null;
    }
    const notes = [
      "Computer Modern lineage: metric skeleton follows the TeX design constants.",
      math ? "Read from the font's OpenType MATH table; nothing was measured." : "No MATH table found \u2014 boxes come from the font's own hmtx/OS-2 metrics.",
      `Mapped ${built.mapped} glyphs; left ${built.skippedAbsent} uncovered ones to MathJax.`
    ];
    for (const gap of built.gapsHit) {
      notes.push(`Gap left to MathJax: ${gap}.`);
    }
    if (math && math.extendedShapes.size > 0) {
      notes.push(`${math.extendedShapes.size} glyphs are extended shapes.`);
    }
    return {
      source: math ? "opentype-math" : "tex-tfm",
      gaps: built.gapsHit.map((g) => `${g} \u2014 those letters come from MathJax`),
      chars: built.chars,
      // Left to MathJax: it draws the stretchy pieces from its own faces.
      delimiters: void 0,
      ownsStretchyAssembly: false,
      constants: math ? math.constants : void 0,
      notes
    };
  }
};

// src/math-standards/adapters/tex-gyre-termes-math.ts
var FAMILIES2 = ["TeX Gyre Termes Math", "TeX Gyre Termes"];
var PROBE_RANGES2 = [
  [32, 126],
  // ASCII printable / ASCII 可打印字符
  [160, 255],
  // Latin-1 supplement / 拉丁一增补
  [880, 1023],
  // Greek and Coptic / 希腊字母
  [8192, 8303],
  // General punctuation / 通用标点
  [8304, 8351],
  // Super/subscripts / 上下标
  [8352, 8383],
  // Currency symbols / 货币符号
  [8448, 8527],
  // Letterlike symbols / 字母式符号
  [8592, 8703],
  // Arrows / 箭头
  [8704, 8959],
  // Mathematical operators / 数学运算符
  [8960, 9215],
  // Miscellaneous technical / 杂项技术符号
  [9632, 9727],
  // Geometric shapes / 几何形状
  [9728, 9983],
  // Miscellaneous symbols / 杂项符号
  [10176, 10223],
  // Miscellaneous math symbols-A / 杂项数学符号 A
  [10624, 10751],
  // Miscellaneous math symbols-B / 杂项数学符号 B
  [10752, 11007],
  // Supplemental math operators / 增补数学运算符
  [119808, 120831]
  // Mathematical alphanumerics / 数学字母数字符号
];
function indexTables(binary) {
  try {
    if (binary.byteLength < 12) {
      return null;
    }
    const dv = new DataView(binary);
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    const base = tag === "ttcf" ? dv.getUint32(12) : 0;
    if (base < 0 || base + 12 > binary.byteLength) {
      return null;
    }
    const numTables = dv.getUint16(base + 4);
    const tables = /* @__PURE__ */ new Map();
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      if (rec + 16 > binary.byteLength) {
        break;
      }
      const name = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      const offset = dv.getUint32(rec + 8);
      const length = dv.getUint32(rec + 12);
      if (offset >= 0 && length >= 0 && offset + length <= binary.byteLength) {
        tables.set(name, { offset, length });
      }
    }
    return { dv, totalBytes: binary.byteLength, tables };
  } catch {
    return null;
  }
}
function readUnitsPerEm2(sfnt, notes) {
  try {
    const head = sfnt.tables.get("head");
    if (!head || head.offset + 20 > sfnt.totalBytes) {
      notes.push("head table missing or truncated; assuming unitsPerEm 1000.");
      return 1e3;
    }
    const upem = sfnt.dv.getUint16(head.offset + 18);
    if (!(upem > 0)) {
      notes.push("head.unitsPerEm was zero; assuming 1000.");
      return 1e3;
    }
    return upem;
  } catch {
    notes.push("head table unreadable; assuming unitsPerEm 1000.");
    return 1e3;
  }
}
function readVerticalMetrics(sfnt, upem, notes) {
  let ascent = 0;
  let descent = 0;
  let source = "";
  try {
    const hhea = sfnt.tables.get("hhea");
    if (hhea && hhea.offset + 36 <= sfnt.totalBytes) {
      ascent = sfnt.dv.getInt16(hhea.offset + 4);
      descent = sfnt.dv.getInt16(hhea.offset + 6);
      source = "hhea";
    }
    const os2 = sfnt.tables.get("OS/2");
    if (os2 && os2.offset + 76 <= sfnt.totalBytes) {
      const fsSelection = sfnt.dv.getUint16(os2.offset + 62);
      const typoAscender = sfnt.dv.getInt16(os2.offset + 68);
      const typoDescender = sfnt.dv.getInt16(os2.offset + 70);
      const useTypo = (fsSelection & 128) !== 0;
      if ((useTypo || !source) && typoAscender > 0) {
        ascent = typoAscender;
        descent = typoDescender;
        source = useTypo ? "OS/2 sTypo (USE_TYPO_METRICS)" : "OS/2 sTypo (hhea absent)";
      }
    }
  } catch {
    notes.push("Vertical metrics tables were partially unreadable; using whatever was already read.");
  }
  if (!source || ascent <= 0) {
    notes.push("No usable font-wide ascender/descender; degraded to the 0.8em / 0.2em generic line box.");
    return { height: 0.8, depth: 0.2 };
  }
  notes.push(`Font-wide vertical metrics taken from ${source} (${ascent}/${descent} design units).`);
  return { height: Math.max(0, ascent) / upem, depth: Math.max(0, -descent) / upem };
}
function buildCmapLookup(sfnt, notes) {
  try {
    const cmap = sfnt.tables.get("cmap");
    if (!cmap || cmap.offset + 4 > sfnt.totalBytes) {
      notes.push("cmap table missing; no codepoint could be mapped to a glyph.");
      return null;
    }
    const dv = sfnt.dv;
    const numSubtables = dv.getUint16(cmap.offset + 2);
    let bestOffset = -1;
    let bestFormat = -1;
    let bestScore = -1;
    for (let i = 0; i < numSubtables; i++) {
      const rec = cmap.offset + 4 + i * 8;
      if (rec + 8 > sfnt.totalBytes) {
        break;
      }
      const platformId = dv.getUint16(rec);
      const encodingId = dv.getUint16(rec + 2);
      const subOffset = cmap.offset + dv.getUint32(rec + 4);
      if (subOffset + 4 > sfnt.totalBytes) {
        continue;
      }
      const format = dv.getUint16(subOffset);
      let score = -1;
      if (format === 12 && platformId === 3 && encodingId === 10) score = 5;
      else if (format === 12 && platformId === 0) score = 4;
      else if (format === 4 && platformId === 3 && encodingId === 1) score = 3;
      else if (format === 4 && platformId === 0) score = 2;
      else if (format === 6) score = 1;
      if (score > bestScore) {
        bestScore = score;
        bestOffset = subOffset;
        bestFormat = format;
      }
    }
    if (bestOffset < 0 || bestFormat < 0) {
      notes.push("cmap contained no usable subtable (formats 4/6/12); no codepoint could be mapped.");
      return null;
    }
    if (bestFormat === 12) {
      const groupCount = dv.getUint32(bestOffset + 12);
      return (code) => {
        try {
          let lo = 0;
          let hi = groupCount - 1;
          while (lo <= hi) {
            const mid = lo + hi >> 1;
            const rec = bestOffset + 16 + mid * 12;
            const start = dv.getUint32(rec);
            const end = dv.getUint32(rec + 4);
            if (code < start) hi = mid - 1;
            else if (code > end) lo = mid + 1;
            else return dv.getUint32(rec + 8) + (code - start);
          }
          return 0;
        } catch {
          return 0;
        }
      };
    }
    if (bestFormat === 4) {
      const segCount = dv.getUint16(bestOffset + 6) / 2;
      const endCodesAt = bestOffset + 14;
      const startCodesAt = endCodesAt + segCount * 2 + 2;
      const idDeltasAt = startCodesAt + segCount * 2;
      const idRangeOffsetsAt = idDeltasAt + segCount * 2;
      return (code) => {
        try {
          for (let i = 0; i < segCount; i++) {
            const end = dv.getUint16(endCodesAt + i * 2);
            if (code > end) {
              continue;
            }
            const start = dv.getUint16(startCodesAt + i * 2);
            if (code < start) {
              return 0;
            }
            const idDelta = dv.getInt16(idDeltasAt + i * 2);
            const idRangeOffset = dv.getUint16(idRangeOffsetsAt + i * 2);
            if (idRangeOffset === 0) {
              return code + idDelta & 65535;
            }
            const glyphAt = idRangeOffsetsAt + i * 2 + idRangeOffset + (code - start) * 2;
            if (glyphAt + 2 > sfnt.totalBytes) {
              return 0;
            }
            const raw = dv.getUint16(glyphAt);
            return raw === 0 ? 0 : raw + idDelta & 65535;
          }
          return 0;
        } catch {
          return 0;
        }
      };
    }
    const firstCode = dv.getUint16(bestOffset + 6);
    const entryCount = dv.getUint16(bestOffset + 8);
    return (code) => {
      try {
        const index = code - firstCode;
        if (index < 0 || index >= entryCount) {
          return 0;
        }
        return dv.getUint16(bestOffset + 10 + index * 2);
      } catch {
        return 0;
      }
    };
  } catch {
    notes.push("cmap parsing failed; no codepoint could be mapped to a glyph.");
    return null;
  }
}
function readNumberOfHMetrics(sfnt, numGlyphs, notes) {
  try {
    const hhea = sfnt.tables.get("hhea");
    if (!hhea || hhea.offset + 36 > sfnt.totalBytes) {
      notes.push("hhea table missing; assuming numberOfHMetrics equals numGlyphs.");
      return numGlyphs;
    }
    const n = sfnt.dv.getUint16(hhea.offset + 34);
    return n > 0 ? n : numGlyphs;
  } catch {
    notes.push("hhea.numberOfHMetrics unreadable; assuming numberOfHMetrics equals numGlyphs.");
    return numGlyphs;
  }
}
function readNumGlyphs(sfnt, notes) {
  try {
    const maxp = sfnt.tables.get("maxp");
    if (!maxp || maxp.offset + 6 > sfnt.totalBytes) {
      notes.push("maxp table missing; glyph count unknown, hmtx reads will be best-effort.");
      return 0;
    }
    return sfnt.dv.getUint16(maxp.offset + 4);
  } catch {
    notes.push("maxp.numGlyphs unreadable; hmtx reads will be best-effort.");
    return 0;
  }
}
function buildAdvanceReader(sfnt, numberOfHMetrics) {
  const hmtx = sfnt.tables.get("hmtx");
  return (gid) => {
    try {
      if (!hmtx || gid < 0) {
        return 0;
      }
      const slot = gid < numberOfHMetrics ? gid : numberOfHMetrics - 1;
      if (slot < 0) {
        return 0;
      }
      const at = hmtx.offset + slot * 4;
      if (at + 2 > sfnt.totalBytes) {
        return 0;
      }
      return sfnt.dv.getUint16(at);
    } catch {
      return 0;
    }
  };
}
var texGyreTermesMathAdapter = {
  id: "tex-gyre-termes-math",
  name: "TeX Gyre Termes Math",
  families: FAMILIES2,
  priority: 40,
  matches(familyName) {
    return matchByFamilyName({ families: FAMILIES2 }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    const chars = {};
    try {
      const sfnt = indexTables(binary);
      if (!sfnt) {
        return null;
      }
      const upem = readUnitsPerEm2(sfnt, notes) || ctx.unitsPerEm || 1e3;
      const vertical = readVerticalMetrics(sfnt, upem, notes);
      const numGlyphs = readNumGlyphs(sfnt, notes);
      const numberOfHMetrics = readNumberOfHMetrics(sfnt, numGlyphs > 0 ? numGlyphs : 1, notes);
      const lookupGid = buildCmapLookup(sfnt, notes);
      const advanceOf = buildAdvanceReader(sfnt, numberOfHMetrics);
      const math = readOpenTypeMathTable(binary);
      if (!math) {
        notes.push("No OpenType MATH table in this file: constants omitted, chars derived from hmtx/cmap only.");
      }
      if (!lookupGid) {
        return null;
      }
      let mapped = 0;
      let missing = 0;
      let zeroAdvance = 0;
      for (const [from, to] of PROBE_RANGES2) {
        for (let code = from; code <= to; code++) {
          const gid = lookupGid(code);
          if (gid <= 0) {
            missing++;
            continue;
          }
          const advance = advanceOf(gid) / upem;
          if (!(advance > 0)) {
            zeroAdvance++;
            continue;
          }
          chars[String(code)] = [vertical.height, vertical.depth, advance];
          mapped++;
        }
      }
      if (mapped === 0) {
        notes.push("No probed codepoint mapped to a glyph with a usable advance; declining so the fallback may try.");
        return null;
      }
      notes.push(
        `Per-glyph vertical extents are approximated by the font-wide ascender/descender (${vertical.height.toFixed(3)}em / ${vertical.depth.toFixed(3)}em) for all ${mapped} glyphs: CFF outlines expose no cheap per-glyph box and the MATH table states none.`
      );
      notes.push(`Mapped ${mapped} codepoints; left ${missing} to MathJax; skipped ${zeroAdvance} with zero advance.`);
      notes.push(
        "Stretchy delimiter sizes were left to MathJax: this font does not own the assembly (delimiters omitted, ownsStretchyAssembly false)."
      );
      return {
        source: "opentype-math",
        chars,
        // Deliberately absent — see the header note on stretchy assembly.
        // 刻意省略——见文件头关于伸缩拼装的说明。
        delimiters: void 0,
        constants: math ? math.constants : void 0,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      notes.push(`TeX Gyre Termes Math adapter failed mid-build: ${message}`);
      const built = Object.keys(chars).length;
      if (built > 0) {
        notes.push(`Returning ${built} partially built glyph entries after the failure.`);
        return {
          source: "opentype-math",
          chars,
          delimiters: void 0,
          ownsStretchyAssembly: false,
          notes
        };
      }
      return null;
    }
  }
};

// src/math-standards/adapters/tex-gyre-pagella-math.ts
function findTableAt(dv, base, tag) {
  try {
    if (base + 12 > dv.byteLength) return null;
    const numTables = dv.getUint16(base + 4);
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      if (rec + 16 > dv.byteLength) break;
      const t2 = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      if (t2 === tag) {
        return { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) };
      }
    }
  } catch {
  }
  return null;
}
function fontBase3(dv) {
  try {
    if (dv.byteLength < 16) return 0;
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    if (tag === "ttcf") {
      const numFonts = dv.getUint32(8);
      return numFonts >= 1 ? dv.getUint32(12) : 0;
    }
  } catch {
  }
  return 0;
}
function resolveUnitsPerEm(dv, base, fromMath, fromCtx) {
  try {
    const head = findTableAt(dv, base, "head");
    if (head && head.offset + 20 <= dv.byteLength) {
      const upem = dv.getUint16(head.offset + 18);
      if (upem > 0) return upem;
    }
  } catch {
  }
  if (fromMath > 0) return fromMath;
  if (fromCtx !== void 0 && fromCtx > 0) return fromCtx;
  return 1e3;
}
function readFontWideVerticals(dv, base, toEm, notes) {
  let ascentDesign = 0;
  let descentDesign = 0;
  let source = "";
  try {
    const os2 = findTableAt(dv, base, "OS/2");
    if (os2 && os2.offset + 72 <= dv.byteLength) {
      const typoAsc = dv.getInt16(os2.offset + 68);
      const typoDesc = dv.getInt16(os2.offset + 70);
      if (typoAsc > 0) {
        ascentDesign = typoAsc;
        source = "OS/2 sTypoAscender";
      }
      if (typoDesc < 0) {
        descentDesign = -typoDesc;
        if (!source) source = "OS/2 sTypoDescender";
      }
    }
  } catch {
  }
  try {
    const hhea = findTableAt(dv, base, "hhea");
    if (hhea && hhea.offset + 8 <= dv.byteLength) {
      const hAsc = dv.getInt16(hhea.offset + 4);
      const hDesc = dv.getInt16(hhea.offset + 6);
      if (ascentDesign <= 0 && hAsc > 0) {
        ascentDesign = hAsc;
        source = "hhea ascender";
      }
      if (descentDesign <= 0 && hDesc < 0) {
        descentDesign = -hDesc;
        if (!source) source = "hhea descender";
      }
    }
  } catch {
  }
  if (ascentDesign <= 0 || descentDesign <= 0) {
    try {
      const os2 = findTableAt(dv, base, "OS/2");
      if (os2 && os2.offset + 78 <= dv.byteLength) {
        const winAsc = dv.getUint16(os2.offset + 74);
        const winDesc = dv.getUint16(os2.offset + 76);
        if (ascentDesign <= 0 && winAsc > 0) {
          ascentDesign = winAsc;
          source = "OS/2 usWinAscent";
        }
        if (descentDesign <= 0 && winDesc > 0) {
          descentDesign = winDesc;
          if (!source) source = "OS/2 usWinDescent";
        }
      }
    } catch {
    }
  }
  if (ascentDesign <= 0 || descentDesign <= 0) {
    notes.push("Font-wide ascender/descender unreadable (head, hhea and OS/2 all unusable); using 0.75/0.25 em defaults.");
    return { ascent: 0.75, descent: 0.25 };
  }
  notes.push(`Font-wide layout verticals taken from ${source} (approximation: the font offers no per-glyph layout verticals).`);
  return { ascent: toEm(ascentDesign), descent: toEm(descentDesign) };
}
function readAdvanceLookup(dv, base, toEm, notes) {
  try {
    const hhea = findTableAt(dv, base, "hhea");
    const hmtx = findTableAt(dv, base, "hmtx");
    if (!hhea || !hmtx || hhea.offset + 36 > dv.byteLength) {
      notes.push("hhea/hmtx absent: advance widths were not adopted.");
      return null;
    }
    let numberOfHMetrics = dv.getUint16(hhea.offset + 34);
    if (numberOfHMetrics === 0) {
      numberOfHMetrics = Math.max(1, Math.floor(hmtx.length / 4));
    }
    if (numberOfHMetrics <= 0 || hmtx.offset + numberOfHMetrics * 4 > dv.byteLength) {
      notes.push("hmtx shorter than hhea.numberOfHMetrics: advance widths were not adopted.");
      return null;
    }
    const lastAdvance = dv.getUint16(hmtx.offset + (numberOfHMetrics - 1) * 4);
    return (gid) => {
      if (!Number.isFinite(gid) || gid < 0) return toEm(lastAdvance);
      const metric = gid < numberOfHMetrics ? gid : numberOfHMetrics - 1;
      return toEm(dv.getUint16(hmtx.offset + metric * 4));
    };
  } catch {
    notes.push("hmtx read failed: advance widths were not adopted.");
    return null;
  }
}
function readCmapFormat4(dv, sub, out) {
  try {
    if (sub + 14 > dv.byteLength) return false;
    const segCountX2 = dv.getUint16(sub + 6);
    const segCount = segCountX2 >> 1;
    if (segCount === 0 || segCountX2 === 0) return false;
    const endBase = sub + 14;
    const startBase = endBase + segCountX2 + 2;
    const deltaBase = startBase + segCountX2;
    const rangeBase = deltaBase + segCountX2;
    if (rangeBase + segCountX2 > dv.byteLength) return false;
    for (let i = 0; i < segCount; i++) {
      const end = dv.getUint16(endBase + i * 2);
      const start = dv.getUint16(startBase + i * 2);
      const delta = dv.getInt16(deltaBase + i * 2);
      const rangeOffset = dv.getUint16(rangeBase + i * 2);
      if (start > end) continue;
      for (let cp = start; cp <= end; cp++) {
        if (cp === 65535) continue;
        let gid;
        if (rangeOffset === 0) {
          gid = cp + delta & 65535;
        } else {
          const at = rangeBase + i * 2 + rangeOffset + (cp - start) * 2;
          if (at + 2 > dv.byteLength) break;
          gid = dv.getUint16(at);
          if (gid !== 0) gid = gid + delta & 65535;
        }
        if (gid !== 0) out.set(cp, gid);
      }
    }
    return out.size > 0;
  } catch {
    return false;
  }
}
function readCmapFormat12or13(dv, sub, out, oneGlyph) {
  try {
    if (sub + 16 > dv.byteLength) return false;
    const numGroups = dv.getUint32(sub + 12);
    const groupsBase = sub + 16;
    const maxCp = 1114111;
    for (let i = 0; i < numGroups; i++) {
      const rec = groupsBase + i * 12;
      if (rec + 12 > dv.byteLength) break;
      const start = dv.getUint32(rec);
      const end = dv.getUint32(rec + 4);
      const startGid = dv.getUint32(rec + 8);
      if (start > end || start > maxCp) continue;
      const last = Math.min(end, maxCp);
      for (let cp = start; cp <= last; cp++) {
        const gid = oneGlyph ? startGid : startGid + (cp - start);
        if (gid !== 0) out.set(cp, gid);
      }
    }
    return out.size > 0;
  } catch {
    return false;
  }
}
function readCmap4(dv, base, notes) {
  const out = /* @__PURE__ */ new Map();
  try {
    const cmap = findTableAt(dv, base, "cmap");
    if (!cmap || cmap.offset + 4 > dv.byteLength) {
      notes.push("cmap absent: no per-codepoint glyphs were adopted.");
      return out;
    }
    const cmapOff = cmap.offset;
    const numTables = dv.getUint16(cmapOff + 2);
    let bestOff = -1;
    let bestScore = -1;
    let bestFormat = -1;
    for (let i = 0; i < numTables; i++) {
      const rec = cmapOff + 4 + i * 8;
      if (rec + 8 > dv.byteLength) break;
      const platform = dv.getUint16(rec);
      const encoding = dv.getUint16(rec + 2);
      const sub = cmapOff + dv.getUint32(rec + 4);
      if (sub + 4 > dv.byteLength) continue;
      const format = dv.getUint16(sub);
      let score = -1;
      if (platform === 3 && encoding === 10 || platform === 0 && (encoding === 4 || encoding === 6)) {
        score = format === 12 ? 400 : format === 13 ? 350 : format === 4 ? 200 : 100;
      } else if (platform === 0) {
        score = format === 12 ? 300 : format === 13 ? 250 : format === 4 ? 150 : 50;
      } else if (platform === 3 && encoding === 1) {
        score = format === 4 ? 100 : 50;
      }
      if (score > bestScore) {
        bestScore = score;
        bestOff = sub;
        bestFormat = format;
      }
    }
    if (bestOff < 0) {
      notes.push("No usable cmap subtable (Unicode or Windows BMP); nothing was adopted.");
      return out;
    }
    let ok = false;
    if (bestFormat === 4) {
      ok = readCmapFormat4(dv, bestOff, out);
    } else if (bestFormat === 12) {
      ok = readCmapFormat12or13(dv, bestOff, out, false);
    } else if (bestFormat === 13) {
      ok = readCmapFormat12or13(dv, bestOff, out, true);
    }
    if (!ok) {
      notes.push(`cmap subtable format ${bestFormat} could not be read; nothing was adopted.`);
      return out;
    }
    if (bestFormat === 4) {
      notes.push("cmap format 4 covers the BMP only; plane-1 math alphanumerics keep MathJax metrics.");
    }
  } catch {
    notes.push("cmap read failed; nothing was adopted.");
  }
  return out;
}
function isAdoptableCodepoint(cp) {
  if (!Number.isFinite(cp) || cp < 32 || cp > 1114111) return false;
  if (cp >= 127 && cp <= 159) return false;
  if (cp >= 55296 && cp <= 57343) return false;
  if (cp >= 57344 && cp <= 63743) return false;
  if (cp >= 983040 && cp <= 1048573) return false;
  if (cp >= 1048576 && cp <= 1114109) return false;
  return true;
}
var texGyrePagellaMathAdapter = {
  id: "tex-gyre-pagella-math",
  name: "TeX Gyre Pagella Math",
  families: ["TeX Gyre Pagella Math", "TeX Gyre Pagella"],
  priority: 50,
  /** 按家族名精确匹配（忽略大小写）/ Claim the family by exact name, case-insensitively. */
  matches(familyName) {
    return matchByFamilyName(texGyrePagellaMathAdapter, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    let math;
    try {
      math = readOpenTypeMathTable(binary);
    } catch (err) {
      notes.push(`MATH table read threw: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
    if (!math) {
      return null;
    }
    const chars = {};
    try {
      const dv = new DataView(binary);
      const base = fontBase3(dv);
      const upem = resolveUnitsPerEm(dv, base, math.unitsPerEm, ctx.unitsPerEm);
      const toEm = (design) => design / upem;
      const verticals = readFontWideVerticals(dv, base, toEm, notes);
      const advanceOf = readAdvanceLookup(dv, base, toEm, notes);
      if (advanceOf) {
        const cmap = readCmap4(dv, base, notes);
        let adopted = 0;
        for (const [cp, gid] of cmap) {
          if (!isAdoptableCodepoint(cp)) continue;
          const width = advanceOf(gid);
          if (!Number.isFinite(width) || width < 0) continue;
          chars[String(cp)] = [verticals.ascent, verticals.descent, width];
          adopted++;
        }
        if (adopted > 0) {
          notes.push(
            `Adopted ${adopted} glyphs from cmap/hmtx; height/depth are the font-wide layout box (${verticals.ascent.toFixed(4)}/${verticals.descent.toFixed(4)} em).`
          );
          notes.push(
            "Per-glyph vertical extents are approximated with the font-wide ascender/descender: MATH MathGlyphInfo carries no per-glyph layout verticals, and outline bounding boxes are not a layout box."
          );
        }
      }
    } catch (err) {
      notes.push(`Partial metrics only: ${err instanceof Error ? err.message : String(err)}`);
    }
    notes.push("Constants (axis height, rule thickness, script scaling) are this font's own MATH values, not shared with TeX Gyre Termes Math.");
    notes.push("Stretchy delimiter sizes were left to MathJax: this font does not own the assembly.");
    return {
      source: "opentype-math",
      chars,
      // 刻意省略：见文件头约定 / Deliberately absent: see the header conventions.
      delimiters: void 0,
      constants: math.constants,
      ownsStretchyAssembly: false,
      notes
    };
  }
};

// src/math-standards/adapters/libertinus-math.ts
var CLAIMED_FAMILIES = ["Libertinus Math", "Libertinus"];
function errorText(err) {
  if (err instanceof Error && err.message) {
    return err.message;
  }
  return String(err);
}
function isControlCode(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function isPrivateUseCode(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isNonDrawingCode(code) {
  return code >= 55296 && code <= 57343 || code === 65534 || code === 65535;
}
function skipCode(code) {
  return isControlCode(code) || isPrivateUseCode(code) || isNonDrawingCode(code);
}
function fontDirectoryBase(dv) {
  try {
    if (dv.byteLength < 12) {
      return 0;
    }
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    if (tag === "ttcf") {
      const numFonts = dv.getUint32(8);
      if (numFonts < 1) {
        return 0;
      }
      return dv.getUint32(12);
    }
    return 0;
  } catch {
    return 0;
  }
}
var OpenTypeReader = class {
  dv;
  dir;
  /** unitsPerEm from `head`, or 1000 when unreadable. / head 的 unitsPerEm，读不到时为 1000。 */
  unitsPerEm;
  /** Glyph count from `maxp`, or 0 when unreadable. / maxp 的字形数，读不到时为 0。 */
  numGlyphs;
  /** Parse problems to surface in `metrics.notes`. / 需写入 metrics.notes 的解析问题。 */
  problems = [];
  headRef;
  hheaRef;
  hmtxRef;
  os2Ref;
  cmapRef;
  glyfRef;
  locaRef;
  constructor(binary) {
    this.dv = new DataView(binary);
    const base = fontDirectoryBase(this.dv);
    this.dir = new DataView(binary, base);
    this.headRef = this.findTable("head");
    this.hheaRef = this.findTable("hhea");
    const maxpRef = this.findTable("maxp");
    this.hmtxRef = this.findTable("hmtx");
    this.os2Ref = this.findTable("OS/2");
    this.cmapRef = this.findTable("cmap");
    this.glyfRef = this.findTable("glyf");
    this.locaRef = this.findTable("loca");
    this.unitsPerEm = this.readUnitsPerEm();
    this.numGlyphs = this.readNumGlyphs(maxpRef);
  }
  /** Find a table record; null means absent, which is not an error. / 查表记录；null 表示不存在，不算错误。 */
  findTable(tag) {
    try {
      const numTables = this.dir.getUint16(4);
      for (let i = 0; i < numTables; i++) {
        const rec = 12 + i * 16;
        const t2 = String.fromCharCode(
          this.dir.getUint8(rec),
          this.dir.getUint8(rec + 1),
          this.dir.getUint8(rec + 2),
          this.dir.getUint8(rec + 3)
        );
        if (t2 === tag) {
          return { offset: this.dir.getUint32(rec + 8), length: this.dir.getUint32(rec + 12) };
        }
      }
    } catch (err) {
      this.problems.push(`Table directory unreadable while looking up '${tag}' (${errorText(err)}).`);
    }
    return null;
  }
  readUnitsPerEm() {
    try {
      if (this.headRef && this.headRef.length >= 20) {
        const upem = this.dv.getUint16(this.headRef.offset + 18);
        if (upem > 0) {
          return upem;
        }
      }
    } catch (err) {
      this.problems.push(`head.unitsPerEm unreadable (${errorText(err)}); assuming 1000.`);
    }
    return 1e3;
  }
  readNumGlyphs(maxpRef) {
    try {
      if (maxpRef && maxpRef.length >= 6) {
        return this.dv.getUint16(maxpRef.offset + 4);
      }
    } catch (err) {
      this.problems.push(`maxp.numGlyphs unreadable (${errorText(err)}).`);
    }
    return 0;
  }
  /**
   * Codepoint -> glyph id, merged from every usable cmap subtable (format 12 preferred).
   * / 码位 -> 字形 id，合并自所有可用 cmap 子表（优先 format 12）。
   */
  readCmap() {
    const out = /* @__PURE__ */ new Map();
    if (!this.cmapRef) {
      this.problems.push("cmap table absent; per-glyph metrics left to MathJax.");
      return out;
    }
    try {
      const cmapStart = this.cmapRef.offset;
      const numTables = this.dv.getUint16(cmapStart + 2);
      const subs = [];
      for (let i = 0; i < numTables; i++) {
        const rec = cmapStart + 4 + i * 8;
        if (rec + 8 > this.dv.byteLength) {
          break;
        }
        const subOffset = cmapStart + this.dv.getUint32(rec + 4);
        if (subOffset + 2 > this.dv.byteLength) {
          continue;
        }
        const format = this.dv.getUint16(subOffset);
        if (format === 12) {
          subs.push({ offset: subOffset, score: 3 });
        } else if (format === 4) {
          subs.push({ offset: subOffset, score: 2 });
        } else if (format === 6) {
          subs.push({ offset: subOffset, score: 1 });
        }
      }
      subs.sort((a, b) => b.score - a.score);
      for (const sub of subs) {
        const got = sub.score === 3 ? this.readCmap12(sub.offset) : sub.score === 2 ? this.readCmap4(sub.offset) : this.readCmap6(sub.offset);
        for (const [code, gid] of got) {
          if (!out.has(code)) {
            out.set(code, gid);
          }
        }
      }
      if (out.size === 0) {
        this.problems.push("cmap present but no usable subtable (format 4/6/12).");
      }
    } catch (err) {
      this.problems.push(`cmap parse failed part-way (${errorText(err)}); using what was read.`);
    }
    return out;
  }
  /** cmap format 4 (BMP segments). / cmap format 4（BMP 分段）。 */
  readCmap4(at) {
    const map = /* @__PURE__ */ new Map();
    const length = this.dv.getUint16(at + 2);
    const hardEnd = this.dv.byteLength;
    const segCountX2 = this.dv.getUint16(at + 6);
    const segCount = segCountX2 >> 1;
    if (segCount === 0 || segCountX2 > 65534) {
      return map;
    }
    const endCodes = at + 14;
    const startCodes = endCodes + segCountX2 + 2;
    const deltas = startCodes + segCountX2;
    const rangeOffsets = deltas + segCountX2;
    for (let i = 0; i < segCount; i++) {
      const endCode = this.dv.getUint16(endCodes + i * 2);
      const startCode = this.dv.getUint16(startCodes + i * 2);
      const delta = this.dv.getInt16(deltas + i * 2);
      const rangeOffset = this.dv.getUint16(rangeOffsets + i * 2);
      if (startCode > endCode || endCode - startCode > 65535) {
        continue;
      }
      for (let code = startCode; code <= endCode; code++) {
        if (code === 65535) {
          continue;
        }
        let gid;
        if (rangeOffset === 0) {
          gid = code + delta & 65535;
        } else {
          const gidAddr = rangeOffsets + i * 2 + rangeOffset + (code - startCode) * 2;
          if (gidAddr + 2 > hardEnd || gidAddr + 2 > at + length) {
            continue;
          }
          gid = this.dv.getUint16(gidAddr);
          if (gid !== 0) {
            gid = gid + delta & 65535;
          }
        }
        if (gid !== 0) {
          map.set(code, gid);
        }
      }
    }
    return map;
  }
  /** cmap format 6 (trimmed table). / cmap format 6（裁剪表）。 */
  readCmap6(at) {
    const map = /* @__PURE__ */ new Map();
    const first = this.dv.getUint16(at + 6);
    const count = this.dv.getUint16(at + 8);
    if (count === 0 || count > 65536) {
      return map;
    }
    for (let i = 0; i < count; i++) {
      const addr = at + 10 + i * 2;
      if (addr + 2 > this.dv.byteLength) {
        break;
      }
      const gid = this.dv.getUint16(addr);
      if (gid !== 0) {
        map.set(first + i, gid);
      }
    }
    return map;
  }
  /** cmap format 12 (full-Unicode groups). / cmap format 12（全 Unicode 分组）。 */
  readCmap12(at) {
    const map = /* @__PURE__ */ new Map();
    const numGroups = this.dv.getUint32(at + 12);
    if (numGroups === 0 || numGroups > 65536) {
      return map;
    }
    for (let i = 0; i < numGroups; i++) {
      const rec = at + 16 + i * 12;
      if (rec + 12 > this.dv.byteLength) {
        break;
      }
      const start = this.dv.getUint32(rec);
      const end = this.dv.getUint32(rec + 4);
      const startGid = this.dv.getUint32(rec + 8);
      if (end < start || end > 1114111 || end - start > 65535) {
        continue;
      }
      for (let code = start; code <= end; code++) {
        const gid = startGid + (code - start);
        if (gid !== 0) {
          map.set(code, gid);
        }
      }
    }
    return map;
  }
  /**
   * Advance widths in design units, indexed by glyph id (hmtx repeats the last advance past
   * numberOfHMetrics). / 以设计单位表示的推进宽度，按字形 id 索引（超过 numberOfHMetrics 后沿用
   * 最后一个宽度，hmtx 规定如此）。
   */
  readAdvanceWidths() {
    try {
      if (!this.hmtxRef || !this.hheaRef || this.numGlyphs <= 0) {
        this.problems.push("hmtx/hhea/maxp missing; advance widths unavailable.");
        return new Uint16Array(0);
      }
      const numberOfHMetrics = Math.max(1, this.dv.getUint16(this.hheaRef.offset + 34));
      const widths = new Uint16Array(this.numGlyphs);
      for (let gid = 0; gid < this.numGlyphs; gid++) {
        const rec = gid < numberOfHMetrics ? gid : numberOfHMetrics - 1;
        widths[gid] = this.dv.getUint16(this.hmtxRef.offset + rec * 4);
      }
      return widths;
    } catch (err) {
      this.problems.push(`hmtx read failed (${errorText(err)}); advance widths unavailable.`);
      return new Uint16Array(0);
    }
  }
  /**
   * Per-glyph vertical extents from TrueType `glyf` bounding boxes, in em; null when the font
   * has no glyf/loca (CFF outlines). / 从 TrueType glyf 包围盒读取逐字形纵向范围（em）；字体
   * 没有 glyf/loca（CFF 轮廓）时返回 null。
   */
  readGlyphVerticals() {
    try {
      if (!this.glyfRef || !this.locaRef || !this.headRef || this.numGlyphs <= 0) {
        return null;
      }
      const indexToLocFormat = this.dv.getInt16(this.headRef.offset + 50);
      const entrySize = indexToLocFormat === 0 ? 2 : 4;
      const locaNeed = this.locaRef.offset + (this.numGlyphs + 1) * entrySize;
      if (locaNeed > this.dv.byteLength) {
        this.problems.push("loca table truncated; falling back to font-wide verticals.");
        return null;
      }
      const upem = this.unitsPerEm || 1e3;
      const map = /* @__PURE__ */ new Map();
      for (let gid = 0; gid < this.numGlyphs; gid++) {
        let start;
        let end;
        if (indexToLocFormat === 0) {
          start = this.dv.getUint16(this.locaRef.offset + gid * 2) * 2;
          end = this.dv.getUint16(this.locaRef.offset + (gid + 1) * 2) * 2;
        } else {
          start = this.dv.getUint32(this.locaRef.offset + gid * 4);
          end = this.dv.getUint32(this.locaRef.offset + (gid + 1) * 4);
        }
        if (end <= start) {
          map.set(gid, { height: 0, depth: 0 });
          continue;
        }
        if (start + 10 > this.dv.byteLength) {
          continue;
        }
        const yMin = this.dv.getInt16(this.glyfRef.offset + start + 4);
        const yMax = this.dv.getInt16(this.glyfRef.offset + start + 8);
        map.set(gid, {
          height: Math.max(0, yMax) / upem,
          depth: Math.max(0, -yMin) / upem
        });
      }
      return map;
    } catch (err) {
      this.problems.push(`glyf/loca read failed (${errorText(err)}); falling back to font-wide verticals.`);
      return null;
    }
  }
  /**
   * Font-wide ascent/descent in em: OS/2 sTypo* first, hhea second. / 整字体的上升/下降部（em）：
   * 优先 OS/2 sTypo*，其次 hhea。
   */
  readFontWideVerticals() {
    try {
      const upem = this.unitsPerEm || 1e3;
      if (this.os2Ref && this.os2Ref.length >= 74) {
        const asc = this.dv.getInt16(this.os2Ref.offset + 68);
        const desc = this.dv.getInt16(this.os2Ref.offset + 70);
        if (asc > 0 || desc < 0) {
          return { height: Math.max(0, asc) / upem, depth: Math.max(0, -desc) / upem };
        }
      }
      if (this.hheaRef) {
        const asc = this.dv.getInt16(this.hheaRef.offset + 4);
        const desc = this.dv.getInt16(this.hheaRef.offset + 6);
        return { height: Math.max(0, asc) / upem, depth: Math.max(0, -desc) / upem };
      }
    } catch (err) {
      this.problems.push(`OS/2 and hhea verticals unreadable (${errorText(err)}).`);
    }
    return null;
  }
};
function summarizeItalicCorrection(italicCorrection, notes) {
  const values = Object.values(italicCorrection);
  if (values.length === 0) {
    notes.push("MATH table carries no italics-correction coverage.");
    return;
  }
  let max = 0;
  let sum = 0;
  for (const v of values) {
    sum += v;
    if (v > max) {
      max = v;
    }
  }
  const mean = sum / values.length;
  notes.push(
    `Libertinus Math states a generous italic correction (${values.length} glyphs; max ${max.toFixed(4)} em, mean ${mean.toFixed(4)} em). The plugin's italic override interacts with these values \u2014 prefer the font's own correction over synthetic slanting.`
  );
}
function buildChars(reader, notes) {
  const chars = {};
  const cmap = reader.readCmap();
  if (cmap.size === 0) {
    return chars;
  }
  const upem = reader.unitsPerEm || 1e3;
  const advances = reader.readAdvanceWidths();
  const perGlyph = reader.readGlyphVerticals();
  const wide = perGlyph ? null : reader.readFontWideVerticals();
  let kept = 0;
  let skippedNonDrawing = 0;
  let skippedZeroWidth = 0;
  let skippedNoVertical = 0;
  for (const [code, gid] of cmap) {
    if (skipCode(code)) {
      skippedNonDrawing++;
      continue;
    }
    const width = (gid >= 0 && gid < advances.length ? advances[gid] : 0) / upem;
    if (!(width > 0)) {
      skippedZeroWidth++;
      continue;
    }
    let box = perGlyph ? perGlyph.get(gid) : wide ?? void 0;
    if (!box) {
      skippedNoVertical++;
      continue;
    }
    chars[String(code)] = [box.height, box.depth, width];
    kept++;
  }
  notes.push(
    `Read ${kept} glyphs from cmap+hmtx; kept MathJax metrics for ${skippedNonDrawing} non-drawing codepoints and ${skippedZeroWidth} zero-advance glyphs${skippedNoVertical > 0 ? ` and ${skippedNoVertical} glyphs without vertical extents` : ""}.`
  );
  if (perGlyph) {
    notes.push("Per-glyph verticals come from glyf bounding boxes.");
  } else if (wide) {
    notes.push(
      "No per-glyph verticals (CFF outlines): font-wide OS/2 sTypoAscender/sTypoDescender (or hhea) stand in for every glyph \u2014 heights and depths are approximate."
    );
  } else {
    notes.push("No vertical extents could be read; per-glyph metrics left entirely to MathJax.");
  }
  return chars;
}
var libertinusMathAdapter = {
  id: "libertinus-math",
  name: "Libertinus Math",
  families: CLAIMED_FAMILIES,
  priority: 60,
  matches(familyName) {
    return matchByFamilyName({ families: CLAIMED_FAMILIES }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    const math = readOpenTypeMathTable(binary);
    if (!math) {
      return null;
    }
    try {
      const reader = new OpenTypeReader(binary);
      const upem = math.unitsPerEm > 0 ? math.unitsPerEm : reader.unitsPerEm;
      if (ctx.unitsPerEm && ctx.unitsPerEm !== upem) {
        notes.push(`Caller reported unitsPerEm=${ctx.unitsPerEm}, font says ${upem}; using the font's value.`);
      }
      const chars = buildChars(reader, notes);
      summarizeItalicCorrection(math.italicCorrection, notes);
      notes.push("Stretchy delimiter sizes were left to MathJax: this font does not own the assembly.");
      for (const problem of reader.problems) {
        notes.push(problem);
      }
      return {
        source: "opentype-math",
        chars,
        // Deliberately absent: braces and arrows are assembled from MathJax's own pieces, so
        // their target sizes must stay MathJax's. / 刻意省略：花括号与箭头由 MathJax 自带
        // 部件拼装，其目标尺寸必须保留为 MathJax 的值。
        delimiters: void 0,
        constants: math.constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      notes.push(`Libertinus Math metrics could not be assembled (${errorText(err)}); MathJax metrics kept.`);
      return {
        source: "opentype-math",
        chars: {},
        delimiters: void 0,
        constants: math.constants,
        ownsStretchyAssembly: false,
        notes
      };
    }
  }
};

// src/math-standards/adapters/asana-math.ts
var ADAPTER_FAMILIES = ["Asana Math", "Asana"];
function isPrivateUse3(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isControl3(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function readTableDirectory2(dv) {
  const tables = /* @__PURE__ */ new Map();
  if (dv.byteLength < 12) {
    return tables;
  }
  let base = 0;
  const headTag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
  if (headTag === "ttcf") {
    if (dv.byteLength < 16) {
      return tables;
    }
    base = dv.getUint32(12);
  }
  if (base < 0 || base + 12 > dv.byteLength) {
    return tables;
  }
  const numTables = dv.getUint16(base + 4);
  for (let i = 0; i < numTables; i++) {
    const rec = base + 12 + i * 16;
    if (rec + 16 > dv.byteLength) {
      break;
    }
    const tag = String.fromCharCode(
      dv.getUint8(rec),
      dv.getUint8(rec + 1),
      dv.getUint8(rec + 2),
      dv.getUint8(rec + 3)
    );
    const offset = dv.getUint32(rec + 8);
    const length = dv.getUint32(rec + 12);
    if (offset <= dv.byteLength && length <= dv.byteLength - offset) {
      tables.set(tag, { offset, length });
    }
  }
  return tables;
}
function parseCmapFormat42(dv, off, into) {
  const segCountX2 = dv.getUint16(off + 6);
  const segCount = segCountX2 >> 1;
  if (segCount <= 0 || segCount > 16384) {
    return;
  }
  const endBase = off + 14;
  const startBase = endBase + segCountX2 + 2;
  const deltaBase = startBase + segCountX2;
  const rangeBase = deltaBase + segCountX2;
  for (let i = 0; i < segCount; i++) {
    const end = dv.getUint16(endBase + i * 2);
    const start = dv.getUint16(startBase + i * 2);
    const delta = dv.getInt16(deltaBase + i * 2);
    const rangeOffset = dv.getUint16(rangeBase + i * 2);
    if (start > end) {
      continue;
    }
    if (end - start > 65535) {
      continue;
    }
    for (let code = start; code <= end; code++) {
      let gid;
      if (rangeOffset === 0) {
        gid = code + delta & 65535;
      } else {
        const addr = rangeBase + i * 2 + rangeOffset + (code - start) * 2;
        gid = dv.getUint16(addr);
        if (gid !== 0) {
          gid = gid + delta & 65535;
        }
      }
      if (gid !== 0) {
        into.set(code, gid);
      }
    }
  }
}
function parseCmapFormat122(dv, off, into) {
  const nGroups = dv.getUint32(off + 12);
  const groups = Math.min(nGroups, 131072);
  const groupsOff = off + 16;
  for (let i = 0; i < groups; i++) {
    const rec = groupsOff + i * 12;
    const start = dv.getUint32(rec);
    const end = dv.getUint32(rec + 4);
    const startGid = dv.getUint32(rec + 8);
    if (start > end || end - start > 65535) {
      continue;
    }
    for (let code = start; code <= end; code++) {
      const gid = startGid + (code - start);
      if (gid !== 0) {
        into.set(code, gid);
      }
    }
  }
}
function readCodepointMap(dv, ref, notes) {
  const map = /* @__PURE__ */ new Map();
  const base = ref.offset;
  const numSubtables = dv.getUint16(base + 2);
  let parsed = 0;
  for (let i = 0; i < numSubtables; i++) {
    const rec = base + 4 + i * 8;
    if (rec + 8 > base + ref.length) {
      break;
    }
    const platform = dv.getUint16(rec);
    const encoding = dv.getUint16(rec + 2);
    const subOff = base + dv.getUint32(rec + 4);
    if (subOff + 4 > dv.byteLength) {
      continue;
    }
    const format = dv.getUint16(subOff);
    try {
      if (format === 4) {
        parseCmapFormat42(dv, subOff, map);
        parsed++;
      } else if (format === 12 && (platform === 3 || platform === 0 || encoding === 10)) {
        parseCmapFormat122(dv, subOff, map);
        parsed++;
      }
    } catch (err) {
      notes.push(`cmap subtable ${i} (format ${format}) could not be read; skipped.`);
      notes.push(`cmap read error: ${String(err)}`);
    }
  }
  if (parsed === 0) {
    notes.push("No readable Unicode cmap subtable (format 4 or 12); chars cannot be keyed by codepoint.");
  }
  return map;
}
function readAdvances2(dv, ref, numberOfHMetrics, numGlyphs) {
  const advances = new Array(numGlyphs).fill(0);
  const metricCount = Math.max(1, Math.min(numberOfHMetrics, numGlyphs));
  for (let gid = 0; gid < numGlyphs; gid++) {
    const slot = Math.min(gid, metricCount - 1);
    advances[gid] = dv.getUint16(ref.offset + slot * 4);
  }
  return advances;
}
function readOutlineExtents(dv, locaRef, glyfRef, numGlyphs, longLoca, notes) {
  if (!locaRef || !glyfRef || numGlyphs <= 0) {
    notes.push("No glyf/loca outlines (CFF or unreadable); per-glyph verticals fall back to font-wide ascender/descender.");
    return null;
  }
  try {
    const entrySize = longLoca ? 4 : 2;
    const need = (numGlyphs + 1) * entrySize;
    if (locaRef.length < need) {
      notes.push("loca table shorter than numGlyphs; per-glyph verticals fall back to font-wide ascender/descender.");
      return null;
    }
    const readLoca = (i) => longLoca ? dv.getUint32(locaRef.offset + i * 4) : dv.getUint16(locaRef.offset + i * 2) * 2;
    const out = new Array(numGlyphs).fill(null);
    for (let gid = 0; gid < numGlyphs; gid++) {
      const start = readLoca(gid);
      const end = readLoca(gid + 1);
      if (end <= start) {
        out[gid] = null;
        continue;
      }
      const at = glyfRef.offset + start;
      if (start + 10 > glyfRef.length || at + 10 > dv.byteLength) {
        out[gid] = null;
        continue;
      }
      out[gid] = {
        yMin: dv.getInt16(at + 4),
        yMax: dv.getInt16(at + 8)
      };
    }
    return out;
  } catch (err) {
    notes.push(`glyf/loca read failed (${String(err)}); per-glyph verticals fall back to font-wide ascender/descender.`);
    return null;
  }
}
function readFontVerticals(dv, tables, notes) {
  let ascent = 0;
  let descent = 0;
  try {
    const os2 = tables.get("OS/2");
    if (os2 && os2.length >= 72) {
      ascent = dv.getInt16(os2.offset + 68);
      descent = dv.getInt16(os2.offset + 70);
    }
  } catch (err) {
    notes.push(`OS/2 verticals unreadable (${String(err)}); trying hhea.`);
  }
  if (!(ascent > 0) || !(descent < 0)) {
    try {
      const hhea = tables.get("hhea");
      if (hhea && hhea.length >= 8) {
        ascent = dv.getInt16(hhea.offset + 4);
        descent = dv.getInt16(hhea.offset + 6);
      }
    } catch (err) {
      notes.push(`hhea verticals unreadable (${String(err)}).`);
    }
  }
  if (!(ascent > 0) || !(descent < 0)) {
    notes.push("No usable OS/2 or hhea vertical metrics; using a declared 0.8em / 0.2em em-box guess.");
    return { ascent: 800, descent: -200 };
  }
  return { ascent, descent };
}
function readNumGlyphs2(dv, tables, notes) {
  try {
    const maxp = tables.get("maxp");
    if (maxp && maxp.length >= 6) {
      const n = dv.getUint16(maxp.offset + 4);
      if (n > 0) {
        return n;
      }
    }
  } catch (err) {
    notes.push(`maxp unreadable (${String(err)}).`);
  }
  notes.push("numGlyphs unavailable; only advance widths for glyph ids under 65535 can be trusted.");
  return 0;
}
function readHead(dv, tables, notes) {
  let unitsPerEm = 0;
  let longLoca = false;
  try {
    const head = tables.get("head");
    if (head && head.length >= 54) {
      unitsPerEm = dv.getUint16(head.offset + 18);
      longLoca = dv.getInt16(head.offset + 50) !== 0;
    }
  } catch (err) {
    notes.push(`head unreadable (${String(err)}).`);
  }
  return { unitsPerEm, longLoca };
}
var asanaMathAdapter = {
  id: "asana-math",
  name: "Asana Math",
  families: ADAPTER_FAMILIES,
  priority: 70,
  matches(familyName) {
    return matchByFamilyName({ families: ADAPTER_FAMILIES }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    try {
      const math = readOpenTypeMathTable(binary);
      if (!math) {
        return null;
      }
      const dv = new DataView(binary);
      const tables = readTableDirectory2(dv);
      const headInfo = readHead(dv, tables, notes);
      const upm = math.unitsPerEm || headInfo.unitsPerEm || ctx.unitsPerEm || 1e3;
      const toEm = (design) => design / upm;
      const cmapRef = tables.get("cmap");
      const codeToGid = cmapRef ? readCodepointMap(dv, cmapRef, notes) : /* @__PURE__ */ new Map();
      if (!cmapRef) {
        notes.push("No cmap table; chars cannot be keyed by codepoint.");
      }
      const numGlyphs = readNumGlyphs2(dv, tables, notes);
      const hheaRef = tables.get("hhea");
      let numberOfHMetrics = numGlyphs;
      try {
        if (hheaRef && hheaRef.length >= 36) {
          numberOfHMetrics = dv.getUint16(hheaRef.offset + 34);
        }
      } catch (err) {
        notes.push(`hhea.numberOfHMetrics unreadable (${String(err)}); assuming all glyphs carry a full metric record.`);
      }
      const hmtxRef = tables.get("hmtx");
      let advances = [];
      if (hmtxRef && numGlyphs > 0) {
        try {
          advances = readAdvances2(dv, hmtxRef, numberOfHMetrics, numGlyphs);
        } catch (err) {
          notes.push(`hmtx read failed (${String(err)}); widths left to MathJax.`);
        }
      } else if (!hmtxRef) {
        notes.push("No hmtx table; widths left to MathJax.");
      }
      const extents = readOutlineExtents(
        dv,
        tables.get("loca"),
        tables.get("glyf"),
        numGlyphs,
        headInfo.longLoca,
        notes
      );
      const fontVerticals = readFontVerticals(dv, tables, notes);
      const fontHeight = Math.max(0, toEm(fontVerticals.ascent));
      const fontDepth = Math.max(0, toEm(-fontVerticals.descent));
      const chars = {};
      let built = 0;
      let skipped = 0;
      for (const [code, gid] of codeToGid) {
        if (isPrivateUse3(code) || isControl3(code)) {
          continue;
        }
        const width = advances[gid];
        if (width === void 0 || !(width > 0)) {
          skipped++;
          continue;
        }
        const w = toEm(width);
        let h;
        let d;
        if (extents) {
          const box = extents[gid];
          if (box) {
            h = Math.max(0, toEm(box.yMax));
            d = Math.max(0, toEm(-box.yMin));
          } else {
            h = 0;
            d = 0;
          }
        } else {
          h = fontHeight;
          d = fontDepth;
        }
        chars[String(code)] = [h, d, w];
        built++;
      }
      if (built === 0) {
        notes.push("No glyph of the cmap coverage produced a usable layout box; MathJax metrics stay in place for chars.");
      }
      if (!extents) {
        notes.push("Per-glyph height/depth are the font-wide ascender/descender approximation (OpenType hmtx has no per-glyph verticals and outlines were unreadable).");
      }
      const vertCount = Object.keys(math.vertVariants).length;
      const horizCount = Object.keys(math.horizVariants).length;
      let assemblyCount = 0;
      for (const key of Object.keys(math.vertVariants)) {
        if (math.vertVariants[key].assembly) {
          assemblyCount++;
        }
      }
      for (const key of Object.keys(math.horizVariants)) {
        if (math.horizVariants[key].assembly) {
          assemblyCount++;
        }
      }
      notes.push(
        `MATH table adopted (axis height ${math.constants.axisHeight ?? "n/a"}em); ${vertCount} vertical and ${horizCount} horizontal constructions, ${assemblyCount} with assembly recipes.`
      );
      notes.push("Stretchy delimiter target sizes were left to MathJax: this font does not own the assembly.");
      notes.push(`Built ${built} glyph layout boxes from font tables; skipped ${skipped} without a usable advance.`);
      return {
        source: "opentype-math",
        chars,
        // 明确留空，理由见文件头 / Explicitly absent: see the file header.
        delimiters: void 0,
        constants: math.constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      notes.push(`Asana Math adapter failed and declined: ${String(err)}`);
      return null;
    }
  }
};

// src/math-standards/adapters/cambria-math.ts
var FAMILIES3 = ["Cambria Math", "Cambria"];
var MAX_CODEPOINT_ENTRIES = 3e5;
function describeError(e) {
  return e instanceof Error ? e.message : String(e);
}
function readTag(dv, at) {
  return String.fromCharCode(
    dv.getUint8(at),
    dv.getUint8(at + 1),
    dv.getUint8(at + 2),
    dv.getUint8(at + 3)
  );
}
function findTable3(dv, base, tag) {
  try {
    const numTables = dv.getUint16(base + 4);
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      if (rec + 16 > dv.byteLength) break;
      if (readTag(dv, rec) !== tag) continue;
      const offset = dv.getUint32(rec + 8);
      const length = dv.getUint32(rec + 12);
      if (offset + length > dv.byteLength) return null;
      return { offset, length };
    }
  } catch {
  }
  return null;
}
function getTable(dv, tag) {
  return findTable3(dv, 0, tag);
}
function isCollection2(dv) {
  return dv.byteLength >= 12 && readTag(dv, 0) === "ttcf";
}
function rebuildSingleFont(dv, base) {
  const numTables = dv.getUint16(base + 4);
  if (numTables < 1 || numTables > 512) {
    throw new Error(`unreasonable table count ${numTables}`);
  }
  const tags = [];
  const checksums = [];
  const sources = [];
  for (let i = 0; i < numTables; i++) {
    const rec = base + 12 + i * 16;
    if (rec + 16 > dv.byteLength) {
      throw new Error("table directory truncated");
    }
    const tag = readTag(dv, rec);
    const checksum = dv.getUint32(rec + 4);
    const offset = dv.getUint32(rec + 8);
    const length = dv.getUint32(rec + 12);
    if (offset + length > dv.byteLength) {
      throw new Error(`table ${tag} out of range`);
    }
    tags.push(tag);
    checksums.push(checksum);
    sources.push({ offset, length });
  }
  const headerSize = 12 + numTables * 16;
  let cursor = headerSize;
  const placements = [];
  for (const src of sources) {
    placements.push(cursor);
    cursor = cursor + src.length + 3 & ~3;
  }
  const out = new ArrayBuffer(cursor);
  const odv = new DataView(out);
  const outBytes = new Uint8Array(out);
  const srcBytes = new Uint8Array(dv.buffer, dv.byteOffset, dv.byteLength);
  odv.setUint32(0, dv.getUint32(base));
  odv.setUint16(4, numTables);
  const maxPow2 = 1 << 31 - Math.clz32(numTables);
  odv.setUint16(6, maxPow2 * 16);
  odv.setUint16(8, Math.log2(maxPow2) | 0);
  odv.setUint16(10, numTables * 16 - maxPow2 * 16);
  for (let i = 0; i < numTables; i++) {
    const rec = 12 + i * 16;
    for (let t2 = 0; t2 < 4; t2++) {
      odv.setUint8(rec + t2, tags[i].charCodeAt(t2));
    }
    odv.setUint32(rec + 4, checksums[i]);
    odv.setUint32(rec + 8, placements[i]);
    odv.setUint32(rec + 12, sources[i].length);
    outBytes.set(srcBytes.subarray(sources[i].offset, sources[i].offset + sources[i].length), placements[i]);
  }
  return out;
}
function extractSingleFont(binary, notes) {
  const dv = new DataView(binary);
  if (!isCollection2(dv)) {
    return binary;
  }
  try {
    const numFonts = dv.getUint32(8);
    if (numFonts < 1) return binary;
    let chosen = -1;
    for (let i = 0; i < numFonts; i++) {
      const at = 12 + i * 4;
      if (at + 4 > binary.byteLength) break;
      const base = dv.getUint32(at);
      if (base <= 0 || base + 12 > binary.byteLength) continue;
      if (chosen < 0) chosen = base;
      if (findTable3(dv, base, "MATH")) {
        chosen = base;
        break;
      }
    }
    if (chosen < 0) return binary;
    const rebuilt = rebuildSingleFont(dv, chosen);
    notes.push("OpenType collection unpacked to the member that carries the MATH table.");
    return rebuilt;
  } catch (e) {
    notes.push(`OpenType collection could not be unpacked (${describeError(e)}); reading the file as-is.`);
    return binary;
  }
}
function readHhea(dv) {
  try {
    const ref = getTable(dv, "hhea");
    if (!ref || ref.length < 36) return null;
    return {
      ascent: dv.getInt16(ref.offset + 4),
      descent: dv.getInt16(ref.offset + 6),
      numHMetrics: dv.getUint16(ref.offset + 34)
    };
  } catch (e) {
    return null;
  }
}
function readOs2(dv, notes) {
  try {
    const ref = getTable(dv, "OS/2");
    if (!ref || ref.length < 8) return null;
    const info = {
      fsSelection: 0,
      sTypoAscender: 0,
      sTypoDescender: 0,
      usWinAscent: 0,
      usWinDescent: 0
    };
    if (ref.length >= 64) {
      info.fsSelection = dv.getUint16(ref.offset + 62);
    }
    if (ref.length >= 72) {
      info.sTypoAscender = dv.getInt16(ref.offset + 68);
      info.sTypoDescender = dv.getInt16(ref.offset + 70);
    }
    if (ref.length >= 78) {
      info.usWinAscent = dv.getUint16(ref.offset + 74);
      info.usWinDescent = dv.getUint16(ref.offset + 76);
    }
    return info;
  } catch (e) {
    notes.push(`OS/2 table unreadable (${describeError(e)}); falling back to hhea verticals.`);
    return null;
  }
}
function pickVertical(hhea, os2) {
  const typoUsable = !!os2 && os2.sTypoAscender > 0;
  const useTypo = typoUsable && (os2.fsSelection & 128) !== 0;
  if (useTypo && os2) {
    return {
      ascent: os2.sTypoAscender,
      descent: Math.abs(os2.sTypoDescender),
      source: "OS/2 sTypoAscender/sTypoDescender (USE_TYPO_METRICS)"
    };
  }
  if (hhea && hhea.ascent > 0) {
    return {
      ascent: hhea.ascent,
      descent: Math.abs(hhea.descent),
      source: "hhea ascent/descent"
    };
  }
  if (typoUsable && os2) {
    return {
      ascent: os2.sTypoAscender,
      descent: Math.abs(os2.sTypoDescender),
      source: "OS/2 sTypoAscender/sTypoDescender"
    };
  }
  if (os2 && os2.usWinAscent > 0) {
    return {
      ascent: os2.usWinAscent,
      descent: os2.usWinDescent,
      source: "OS/2 usWinAscent/usWinDescent"
    };
  }
  return { ascent: 800, descent: 200, source: "built-in 0.8/0.2 default" };
}
function parseCmap4(dv, sub, end, into) {
  const segCountX2 = dv.getUint16(sub + 6);
  if (segCountX2 < 2 || (segCountX2 & 1) !== 0) return;
  const segCount = segCountX2 / 2;
  const endBase = sub + 14;
  const startBase = endBase + segCountX2 + 2;
  const deltaBase = startBase + segCountX2;
  const rangeBase = deltaBase + segCountX2;
  for (let s = 0; s < segCount; s++) {
    const segEnd = dv.getUint16(endBase + s * 2);
    const segStart = dv.getUint16(startBase + s * 2);
    const delta = dv.getInt16(deltaBase + s * 2);
    const rangeOffset = dv.getUint16(rangeBase + s * 2);
    if (segStart === 65535 || segStart > segEnd) continue;
    for (let c = segStart; c <= segEnd; c++) {
      if (into.size >= MAX_CODEPOINT_ENTRIES) return;
      let gid;
      if (rangeOffset === 0) {
        gid = c + delta & 65535;
      } else {
        const idx = rangeBase + s * 2 + rangeOffset + (c - segStart) * 2;
        if (idx + 2 > end) return;
        gid = dv.getUint16(idx);
        if (gid !== 0) gid = gid + delta & 65535;
      }
      if (gid === 0) continue;
      if (!into.has(c)) into.set(c, gid);
    }
  }
}
function parseCmap6(dv, sub, end, into) {
  const firstCode = dv.getUint16(sub + 6);
  const entryCount = dv.getUint16(sub + 8);
  for (let i = 0; i < entryCount; i++) {
    if (into.size >= MAX_CODEPOINT_ENTRIES) return;
    const idx = sub + 10 + i * 2;
    if (idx + 2 > end) return;
    const gid = dv.getUint16(idx);
    if (gid === 0) continue;
    const code = firstCode + i;
    if (!into.has(code)) into.set(code, gid);
  }
}
function parseCmap12(dv, sub, end, into) {
  const numGroups = dv.getUint32(sub + 12);
  for (let i = 0; i < numGroups; i++) {
    const rec = sub + 16 + i * 12;
    if (rec + 12 > end) return;
    const start = dv.getUint32(rec);
    const finish2 = dv.getUint32(rec + 4);
    const startGid = dv.getUint32(rec + 8);
    if (start > finish2 || finish2 > 1114111) continue;
    for (let c = start; c <= finish2; c++) {
      if (into.size >= MAX_CODEPOINT_ENTRIES) return;
      const gid = startGid + (c - start);
      if (gid === 0) continue;
      if (!into.has(c)) into.set(c, gid);
    }
  }
}
function readCmap5(dv, notes) {
  const map = /* @__PURE__ */ new Map();
  try {
    const ref = getTable(dv, "cmap");
    if (!ref) {
      notes.push("No cmap table: codepoint coverage unknown, chars left empty.");
      return map;
    }
    const numSub = dv.getUint16(ref.offset + 2);
    for (let i = 0; i < numSub; i++) {
      const rec = ref.offset + 4 + i * 8;
      if (rec + 8 > ref.offset + ref.length) break;
      const platform = dv.getUint16(rec);
      const encoding = dv.getUint16(rec + 2);
      const isUnicode = platform === 0 || platform === 3 && (encoding === 1 || encoding === 10);
      if (!isUnicode) continue;
      const sub = ref.offset + dv.getUint32(rec + 4);
      if (sub + 4 > ref.offset + ref.length) continue;
      const end = ref.offset + ref.length;
      const format = dv.getUint16(sub);
      if (format === 12) parseCmap12(dv, sub, end, map);
      else if (format === 4) parseCmap4(dv, sub, end, map);
      else if (format === 6) parseCmap6(dv, sub, end, map);
    }
    if (map.size === 0) {
      notes.push("cmap contained no usable Unicode subtable; chars left empty.");
    } else if (map.size >= MAX_CODEPOINT_ENTRIES) {
      notes.push(`cmap truncated at ${MAX_CODEPOINT_ENTRIES} entries (corrupt size guard).`);
    }
  } catch (e) {
    notes.push(`cmap table unreadable (${describeError(e)}); partial coverage kept.`);
  }
  return map;
}
function readHmtx(dv, numHMetrics, notes) {
  try {
    const ref = getTable(dv, "hmtx");
    if (!ref) {
      notes.push("No hmtx table: advance widths unavailable, chars left empty.");
      return null;
    }
    const count = Math.max(0, Math.min(numHMetrics, Math.floor(ref.length / 4)));
    if (count === 0) {
      notes.push("hmtx has no longHorMetric records; advance widths unavailable.");
      return null;
    }
    const advances = new Uint16Array(count);
    for (let i = 0; i < count; i++) {
      advances[i] = dv.getUint16(ref.offset + i * 4);
    }
    const tail = advances[count - 1];
    return (gid) => gid < count ? advances[gid] : tail;
  } catch (e) {
    notes.push(`hmtx table unreadable (${describeError(e)}); advance widths unavailable.`);
    return null;
  }
}
function isPrivateUse4(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isControl4(code) {
  return code < 32 || code >= 127 && code <= 159;
}
var cambriaMathAdapter = {
  id: "cambria-math",
  name: "Cambria Math",
  families: FAMILIES3,
  priority: 80,
  matches(familyName) {
    return matchByFamilyName({ families: FAMILIES3 }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    let mathTable = null;
    let chars = {};
    try {
      if (!binary || binary.byteLength < 12) {
        return null;
      }
      const font = extractSingleFont(binary, notes);
      const dv = new DataView(font);
      mathTable = readOpenTypeMathTable(font);
      if (!mathTable) {
        return null;
      }
      const upm = mathTable.unitsPerEm > 0 ? mathTable.unitsPerEm : ctx.unitsPerEm && ctx.unitsPerEm > 0 ? ctx.unitsPerEm : 1e3;
      const vertical = pickVertical(readHhea(dv), readOs2(dv, notes));
      const height = vertical.ascent / upm;
      const depth = vertical.descent / upm;
      const cmap = readCmap5(dv, notes);
      const hhea = readHhea(dv);
      const advanceFor = readHmtx(dv, hhea ? hhea.numHMetrics : 0, notes);
      let used = 0;
      let skipped = 0;
      if (advanceFor && cmap.size > 0) {
        for (const [code, gid] of cmap) {
          if (gid <= 0 || isPrivateUse4(code) || isControl4(code) || code > 1114111) {
            skipped++;
            continue;
          }
          const advance = advanceFor(gid);
          if (!(advance > 0)) {
            skipped++;
            continue;
          }
          chars[String(code)] = [height, depth, advance / upm];
          used++;
        }
      }
      if (cmap.size > 0 && used === 0 && advanceFor) {
        chars = {};
        notes.push("Every hmtx advance was zero; treating hmtx as unreadable and leaving chars empty.");
      }
      notes.push(
        `Layout-box height/depth from font-wide ${vertical.source} (${height.toFixed(4)} / ${depth.toFixed(4)} em): the MATH table carries no per-glyph vertical extents, so verticals are an approximation; widths are exact hmtx advances.`
      );
      notes.push(
        `Read ${used} glyph boxes from cmap+hmtx (skipped ${skipped}: private-use, control, .notdef or zero advance).`
      );
      notes.push(
        "MATH constants taken verbatim from Cambria Math (ClearType-tuned; axis height is relatively high by design)."
      );
      notes.push(
        "Stretchy delimiter sizes left to MathJax (delimiters omitted, ownsStretchyAssembly=false): brace and arrow assembly uses MathJax private-use pieces, not this font."
      );
      if (Object.keys(mathTable.italicCorrection).length > 0) {
        notes.push(
          `MATH italics corrections for ${Object.keys(mathTable.italicCorrection).length} glyphs were read but not exported (MathFontMetrics has no field for them).`
        );
      }
      return {
        source: "opentype-math",
        chars,
        // 刻意省略：见上方 notes——花括号与箭头由 MathJax 的拼件组装。
        // Deliberately absent: braces and arrows are assembled by MathJax's own pieces.
        delimiters: void 0,
        constants: mathTable.constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (e) {
      notes.push(`Cambria Math metrics were only partially read: ${describeError(e)}`);
      if (mathTable) {
        return {
          source: "opentype-math",
          chars,
          constants: mathTable.constants,
          ownsStretchyAssembly: false,
          notes
        };
      }
      return null;
    }
  }
};

// src/math-standards/adapters/minion-math.ts
var FAMILIES4 = ["Minion Math"];
function findTableRange(dv, base, tag) {
  try {
    const numTables = dv.getUint16(base + 4);
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      const t2 = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      if (t2 === tag) {
        return { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) };
      }
    }
  } catch {
  }
  return null;
}
function firstFontBase(dv) {
  try {
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    if (tag === "ttcf") {
      const numFonts = dv.getUint32(8);
      if (numFonts < 1) return 0;
      return dv.getUint32(12);
    }
  } catch {
  }
  return 0;
}
function isControl5(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function isPrivateUse5(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isSurrogate(code) {
  return code >= 55296 && code <= 57343;
}
function isSpacing(code) {
  return code === 32 || code === 160 || code >= 8192 && code <= 8202 || code === 8232 || code === 8233 || code === 8239 || code === 8287 || code === 12288;
}
function parseCmapFormat43(dv, at, end, into) {
  const segCount = dv.getUint16(at + 6) / 2;
  const endCodes = at + 14;
  const startCodes = endCodes + segCount * 2 + 2;
  const idDeltas = startCodes + segCount * 2;
  const idRangeOffsets = idDeltas + segCount * 2;
  for (let i = 0; i < segCount; i++) {
    const end2 = dv.getUint16(endCodes + i * 2);
    const start = dv.getUint16(startCodes + i * 2);
    if (start === 65535 || start > end2) continue;
    const delta = dv.getInt16(idDeltas + i * 2);
    const rangeOffset = dv.getUint16(idRangeOffsets + i * 2);
    for (let code = start; code <= end2; code++) {
      let gid;
      if (rangeOffset === 0) {
        gid = code + delta & 65535;
      } else {
        const addr = idRangeOffsets + i * 2 + rangeOffset + (code - start) * 2;
        if (addr + 2 > end2) break;
        gid = dv.getUint16(addr);
        if (gid !== 0) gid = gid + delta & 65535;
      }
      if (gid !== 0) into.set(code, gid);
    }
  }
}
function parseCmapFormat123(dv, at, end, into, manyToOne) {
  const numGroups = dv.getUint32(at + 12);
  for (let g = 0; g < numGroups; g++) {
    const rec = at + 16 + g * 12;
    if (rec + 12 > end) break;
    const startChar = dv.getUint32(rec);
    const endChar = dv.getUint32(rec + 4);
    const startGid = dv.getUint32(rec + 8);
    if (startChar > endChar) continue;
    for (let code = startChar; code <= endChar; code++) {
      const gid = manyToOne ? startGid : startGid + (code - startChar);
      if (gid !== 0) into.set(code, gid);
    }
  }
}
function parseCmapSmall(dv, at, end, into, format) {
  if (format === 0) {
    for (let code = 0; code < 256; code++) {
      const addr = at + 6 + code;
      if (addr >= end) break;
      const gid = dv.getUint8(addr);
      if (gid !== 0) into.set(code, gid);
    }
    return;
  }
  const first = dv.getUint16(at + 6);
  const count = dv.getUint16(at + 8);
  for (let i = 0; i < count; i++) {
    const addr = at + 10 + i * 2;
    if (addr + 2 > end) break;
    const gid = dv.getUint16(addr);
    if (gid !== 0) into.set(first + i, gid);
  }
}
function parseCmap(dv, table, notes) {
  const map = /* @__PURE__ */ new Map();
  try {
    const end = table.offset + table.length;
    const numTables = dv.getUint16(table.offset + 2);
    const subtables = [];
    for (let i = 0; i < numTables; i++) {
      const rec = table.offset + 4 + i * 8;
      if (rec + 8 > end) break;
      const subOff = table.offset + dv.getUint32(rec + 4);
      if (subOff + 2 > end) continue;
      const format = dv.getUint16(subOff);
      let score = 0;
      if (format === 12 || format === 13) score = 3;
      else if (format === 4) score = 2;
      else if (format === 0 || format === 6) score = 1;
      if (score > 0) subtables.push({ offset: subOff, score });
    }
    subtables.sort((a, b) => a.score - b.score);
    for (const sub of subtables) {
      const format = dv.getUint16(sub.offset);
      if (format === 4) parseCmapFormat43(dv, sub.offset, end, map);
      else if (format === 12) parseCmapFormat123(dv, sub.offset, end, map, false);
      else if (format === 13) parseCmapFormat123(dv, sub.offset, end, map, true);
      else parseCmapSmall(dv, sub.offset, end, map, format);
    }
    if (map.size === 0) {
      notes.push("cmap subtables were present but yielded no codepoint mapping.");
    }
  } catch {
    notes.push("cmap could not be fully parsed; codepoints mapped so far were kept.");
  }
  return map;
}
function readGlyphLayout(binary, notes, upemFallback, ctx) {
  try {
    const dv = new DataView(binary);
    const base = firstFontBase(dv);
    const head = findTableRange(dv, base, "head");
    const hhea = findTableRange(dv, base, "hhea");
    const maxp = findTableRange(dv, base, "maxp");
    const hmtx = findTableRange(dv, base, "hmtx");
    const cmapTable = findTableRange(dv, base, "cmap");
    if (!head || !hhea || !maxp || !hmtx || !cmapTable) {
      notes.push("Required tables (head/hhea/maxp/hmtx/cmap) are incomplete; declining.");
      return null;
    }
    const unitsPerEm = dv.getUint16(head.offset + 18) || upemFallback || ctx.unitsPerEm || 1e3;
    const numGlyphs = dv.getUint16(maxp.offset + 4);
    if (!(numGlyphs > 0)) {
      notes.push("maxp reports no glyphs; declining.");
      return null;
    }
    const hheaAsc = dv.getInt16(hhea.offset + 4);
    const hheaDesc = dv.getInt16(hhea.offset + 6);
    const rawHMetrics = dv.getUint16(hhea.offset + 34);
    let fontAscentDU = hheaAsc;
    let fontDescentDU = Math.max(0, -hheaDesc);
    let verticalSource = "hhea";
    const os2 = findTableRange(dv, base, "OS/2");
    if (os2 && os2.length >= 72) {
      const typoAsc = dv.getInt16(os2.offset + 68);
      const typoDesc = dv.getInt16(os2.offset + 70);
      if (typoAsc > 0) {
        fontAscentDU = typoAsc;
        fontDescentDU = Math.max(0, -typoDesc);
        verticalSource = "os2-typo";
      }
    }
    if (!(fontAscentDU > 0)) {
      fontAscentDU = Math.round(unitsPerEm * 0.75);
      fontDescentDU = Math.round(unitsPerEm * 0.25);
      verticalSource = "default";
      notes.push("Neither OS/2 sTypo nor hhea gave a usable ascender; used 0.75em/0.25em defaults.");
    }
    const advances = new Uint16Array(numGlyphs);
    const hMetricsCount = Math.max(1, Math.min(rawHMetrics || 1, numGlyphs, Math.floor(hmtx.length / 4)));
    for (let g = 0; g < numGlyphs; g++) {
      const rec = hmtx.offset + Math.min(g, hMetricsCount - 1) * 4;
      advances[g] = dv.getUint16(rec);
    }
    if (hMetricsCount < (rawHMetrics || 1)) {
      notes.push("hmtx is shorter than hhea.numberOfHMetrics; advance widths were truncated to the readable range.");
    }
    const cmap = parseCmap(dv, cmapTable, notes);
    let yMin = null;
    let yMax = null;
    const glyf = findTableRange(dv, base, "glyf");
    const loca = findTableRange(dv, base, "loca");
    if (glyf && loca) {
      try {
        const indexToLocFormat = dv.getInt16(head.offset + 50);
        const needed = indexToLocFormat === 0 ? (numGlyphs + 1) * 2 : (numGlyphs + 1) * 4;
        if (loca.length >= needed) {
          yMin = new Int16Array(numGlyphs);
          yMax = new Int16Array(numGlyphs);
          const glyfEnd = glyf.offset + glyf.length;
          for (let g = 0; g < numGlyphs; g++) {
            let start;
            let stop;
            if (indexToLocFormat === 0) {
              start = dv.getUint16(loca.offset + g * 2) * 2;
              stop = dv.getUint16(loca.offset + (g + 1) * 2) * 2;
            } else {
              start = dv.getUint32(loca.offset + g * 4);
              stop = dv.getUint32(loca.offset + (g + 1) * 4);
            }
            if (stop <= start || start + 10 > glyfEnd || stop > glyfEnd) continue;
            yMin[g] = dv.getInt16(glyf.offset + start + 4);
            yMax[g] = dv.getInt16(glyf.offset + start + 8);
          }
          verticalSource = "glyf";
          notes.push("Per-glyph vertical extents come from glyf bounding boxes (TrueType outlines).");
        }
      } catch {
        yMin = null;
        yMax = null;
        notes.push("glyf/loca could not be read; fell back to font-wide vertical extents.");
      }
    } else {
      notes.push("No glyf/loca (CFF outlines): height/depth use the font-wide ascender/descender for every glyph.");
    }
    return {
      unitsPerEm,
      numGlyphs,
      advances,
      cmap,
      yMin,
      yMax,
      fontAscent: fontAscentDU / unitsPerEm,
      fontDescent: fontDescentDU / unitsPerEm,
      verticalSource
    };
  } catch {
    notes.push("Glyph layout tables could not be read at all; declining.");
    return null;
  }
}
var minionMathAdapter = {
  id: "minion-math",
  name: "Minion Math",
  families: FAMILIES4,
  priority: 90,
  matches(familyName) {
    return matchByFamilyName({ families: FAMILIES4 }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    const chars = {};
    let constants;
    try {
      const math = readOpenTypeMathTable(binary);
      if (!math) {
        return null;
      }
      constants = math.constants;
      const layout = readGlyphLayout(binary, notes, math.unitsPerEm, ctx);
      if (!layout) {
        return null;
      }
      const upem = layout.unitsPerEm;
      let mapped = 0;
      let skipped = 0;
      for (const [code, gid] of layout.cmap) {
        if (code <= 0 || isControl5(code) || isPrivateUse5(code) || isSurrogate(code)) {
          skipped++;
          continue;
        }
        if (gid <= 0 || gid >= layout.numGlyphs) {
          skipped++;
          continue;
        }
        const width = layout.advances[gid] / upem;
        let height;
        let depth;
        if (layout.yMax && layout.yMin) {
          height = Math.max(0, layout.yMax[gid] / upem);
          depth = Math.max(0, -layout.yMin[gid] / upem);
        } else if (isSpacing(code)) {
          height = 0;
          depth = 0;
        } else {
          height = layout.fontAscent;
          depth = layout.fontDescent;
        }
        chars[String(code)] = [height, depth, width];
        mapped++;
      }
      if (mapped === 0) {
        notes.push("No usable codepoint could be mapped from cmap; declining.");
        return null;
      }
      notes.push(`Mapped ${mapped} codepoints; kept MathJax metrics for ${skipped} control, private-use or absent ones.`);
      if (layout.verticalSource !== "glyf") {
        notes.push("Vertical extents are a font-wide approximation (OS/2 sTypo / hhea), not per-glyph ink.");
      }
      notes.push("Stretchy delimiter sizes were left to MathJax: Minion Math is substituted into MathJax and does not own the assembly.");
      return {
        source: "opentype-math",
        chars,
        // 刻意留空：见文件头说明 / deliberately absent: see the header comment.
        delimiters: void 0,
        constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      notes.push(`Minion Math adapter failed mid-build: ${message}`);
      const count = Object.keys(chars).length;
      if (count === 0) {
        return null;
      }
      return {
        source: "opentype-math",
        chars,
        delimiters: void 0,
        constants,
        ownsStretchyAssembly: false,
        notes
      };
    }
  }
};

// src/math-standards/adapters/noto-math.ts
var notoMathAdapter = {
  id: "noto-math",
  name: "Noto Sans/Serif Math",
  families: ["Noto Sans Math", "Noto Serif Math", "Noto Sans Math Mono"],
  priority: 100,
  matches(familyName) {
    return matchByFamilyName(this, familyName);
  },
  build(binary, _ctx) {
    const font = readOpenTypeFontInfo(binary);
    if (!font) {
      return null;
    }
    const math = readOpenTypeMathTable(binary);
    const built = buildCharsFromFont(font);
    if (built.mapped === 0) {
      return null;
    }
    const notes = [
      "Noto maths fonts: coverage-first design, deliberately plain shapes.",
      math ? "Read from the font's OpenType MATH table; nothing was measured." : "No MATH table found \u2014 boxes come from the font's own hmtx/OS-2 metrics.",
      `Mapped ${built.mapped} glyphs; left ${built.skippedAbsent} uncovered ones to MathJax.`
    ];
    if (math && math.extendedShapes.size > 0) {
      notes.push(`${math.extendedShapes.size} glyphs are extended shapes.`);
    }
    return {
      source: math ? "opentype-math" : "tex-tfm",
      chars: built.chars,
      delimiters: void 0,
      ownsStretchyAssembly: false,
      constants: math ? math.constants : void 0,
      notes
    };
  }
};

// src/math-standards/adapters/fira-math.ts
var firaMathAdapter = {
  id: "fira-math",
  name: "Fira Math",
  families: ["Fira Math"],
  priority: 110,
  matches(familyName) {
    return matchByFamilyName(this, familyName);
  },
  build(binary, _ctx) {
    const font = readOpenTypeFontInfo(binary);
    if (!font) {
      return null;
    }
    const math = readOpenTypeMathTable(binary);
    const built = buildCharsFromFont(font);
    if (built.mapped === 0) {
      return null;
    }
    const notes = [
      "Fira lineage: humanist sans, large x-height and short ascenders.",
      math ? "Read from the font's OpenType MATH table; nothing was measured." : "No MATH table found \u2014 boxes come from the font's own hmtx/OS-2 metrics.",
      `Mapped ${built.mapped} glyphs; left ${built.skippedAbsent} uncovered ones to MathJax.`
    ];
    if (font.verticals.xHeight) {
      notes.push(`x-height ${font.verticals.xHeight.toFixed(3)}em, ascent ${font.verticals.ascent.toFixed(3)}em.`);
    }
    return {
      source: math ? "opentype-math" : "tex-tfm",
      chars: built.chars,
      delimiters: void 0,
      ownsStretchyAssembly: false,
      constants: math ? math.constants : void 0,
      notes
    };
  }
};

// src/math-standards/adapters/euler-math.ts
var EULER_FAMILIES = ["Euler Math", "Neo Euler", "Euler"];
var MAX_MAPPED_CODEPOINTS = 65536;
var MAX_BAND_EM = 2;
function isPrivateUse6(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isControl6(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function isSurrogate2(code) {
  return code >= 55296 && code <= 57343;
}
function sfntBase(dv) {
  try {
    if (dv.byteLength < 12) return null;
    const tag = String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3));
    if (tag === "ttcf") {
      if (dv.byteLength < 16) return null;
      return dv.getUint32(12);
    }
    const version = dv.getUint32(0);
    if (version === 65536 || tag === "OTTO" || tag === "true" || tag === "typ1") return 0;
    return null;
  } catch {
    return null;
  }
}
function findTable4(dv, base, tag) {
  try {
    if (base + 12 > dv.byteLength) return null;
    const numTables = dv.getUint16(base + 4);
    for (let i = 0; i < numTables; i++) {
      const rec = base + 12 + i * 16;
      if (rec + 16 > dv.byteLength) return null;
      const t2 = String.fromCharCode(
        dv.getUint8(rec),
        dv.getUint8(rec + 1),
        dv.getUint8(rec + 2),
        dv.getUint8(rec + 3)
      );
      if (t2 === tag) {
        return { offset: dv.getUint32(rec + 8), length: dv.getUint32(rec + 12) };
      }
    }
  } catch {
  }
  return null;
}
function readFontWide(binary) {
  try {
    const dv = new DataView(binary);
    const base = sfntBase(dv);
    if (base === null) return null;
    const out = {
      unitsPerEm: 1e3,
      typoAscender: null,
      typoDescender: null,
      hheaAscender: null,
      hheaDescender: null,
      numberOfHMetrics: null,
      numGlyphs: null
    };
    const head = findTable4(dv, base, "head");
    if (head && head.length >= 20 && head.offset + 20 <= binary.byteLength) {
      const upem = dv.getUint16(head.offset + 18);
      if (upem > 0) out.unitsPerEm = upem;
    }
    const os2 = findTable4(dv, base, "OS/2");
    if (os2 && os2.length >= 72 && os2.offset + 72 <= binary.byteLength) {
      out.typoAscender = dv.getInt16(os2.offset + 68);
      out.typoDescender = dv.getInt16(os2.offset + 70);
    }
    const hhea = findTable4(dv, base, "hhea");
    if (hhea && hhea.length >= 36 && hhea.offset + 36 <= binary.byteLength) {
      out.hheaAscender = dv.getInt16(hhea.offset + 4);
      out.hheaDescender = dv.getInt16(hhea.offset + 6);
      out.numberOfHMetrics = dv.getUint16(hhea.offset + 34);
    }
    const maxp = findTable4(dv, base, "maxp");
    if (maxp && maxp.length >= 6 && maxp.offset + 6 <= binary.byteLength) {
      out.numGlyphs = dv.getUint16(maxp.offset + 4);
    }
    return out;
  } catch {
    return null;
  }
}
function parseCmapSubtable(dv, at, tableEnd) {
  try {
    if (at + 4 > tableEnd) return null;
    const map = /* @__PURE__ */ new Map();
    const format = dv.getUint16(at);
    if (format === 12) {
      if (at + 16 > tableEnd) return null;
      const numGroups = dv.getUint32(at + 12);
      for (let g = 0; g < numGroups; g++) {
        const rec = at + 16 + g * 12;
        if (rec + 12 > tableEnd) break;
        const startChar = dv.getUint32(rec);
        const endChar = Math.min(dv.getUint32(rec + 4), 1114111);
        const startGid = dv.getUint32(rec + 8);
        for (let code = startChar; code <= endChar; code++) {
          if (map.size >= MAX_MAPPED_CODEPOINTS) return map.size > 0 ? map : null;
          const gid = startGid + (code - startChar);
          if (gid !== 0) map.set(code, gid);
        }
      }
    } else if (format === 4) {
      if (at + 14 > tableEnd) return null;
      const segCount = dv.getUint16(at + 6) >> 1;
      if (segCount < 1) return null;
      const endPos = at + 14;
      const startPos = endPos + segCount * 2 + 2;
      const deltaPos = startPos + segCount * 2;
      const rangePos = deltaPos + segCount * 2;
      if (rangePos + segCount * 2 > tableEnd) return null;
      for (let i = 0; i < segCount; i++) {
        const endCode = dv.getUint16(endPos + i * 2);
        const startCode = dv.getUint16(startPos + i * 2);
        if (startCode === 65535 || startCode > endCode) continue;
        const idDelta = dv.getInt16(deltaPos + i * 2);
        const idRangeOffset = dv.getUint16(rangePos + i * 2);
        for (let code = startCode; code <= endCode; code++) {
          if (map.size >= MAX_MAPPED_CODEPOINTS) return map.size > 0 ? map : null;
          let gid = 0;
          if (idRangeOffset === 0) {
            gid = code + idDelta & 65535;
          } else {
            const gPos = rangePos + i * 2 + idRangeOffset + (code - startCode) * 2;
            if (gPos + 2 > tableEnd) continue;
            gid = dv.getUint16(gPos);
            if (gid !== 0) gid = gid + idDelta & 65535;
          }
          if (gid !== 0) map.set(code, gid);
        }
      }
    } else if (format === 6) {
      if (at + 10 > tableEnd) return null;
      const firstCode = dv.getUint16(at + 6);
      const entryCount = dv.getUint16(at + 8);
      for (let i = 0; i < entryCount; i++) {
        const rec = at + 10 + i * 2;
        if (rec + 2 > tableEnd) break;
        const gid = dv.getUint16(rec);
        if (gid !== 0) map.set(firstCode + i, gid);
      }
    } else if (format === 0) {
      for (let code = 0; code < 256; code++) {
        const rec = at + 6 + code;
        if (rec + 1 > tableEnd) break;
        const gid = dv.getUint8(rec);
        if (gid !== 0) map.set(code, gid);
      }
    } else {
      return null;
    }
    return map.size > 0 ? map : null;
  } catch {
    return null;
  }
}
function readCmap6(binary) {
  try {
    const dv = new DataView(binary);
    const base = sfntBase(dv);
    if (base === null) return null;
    const cmap = findTable4(dv, base, "cmap");
    if (!cmap || cmap.length < 4) return null;
    const tableEnd = Math.min(cmap.offset + cmap.length, binary.byteLength);
    const numTables = dv.getUint16(cmap.offset + 2);
    const candidates = [];
    for (let i = 0; i < numTables; i++) {
      const rec = cmap.offset + 4 + i * 8;
      if (rec + 8 > tableEnd) break;
      const platform = dv.getUint16(rec);
      const encoding = dv.getUint16(rec + 2);
      const subOff = cmap.offset + dv.getUint32(rec + 4);
      if (subOff + 4 > tableEnd) continue;
      const format = dv.getUint16(subOff);
      let score = 0;
      if (format === 12) score = 4;
      else if (format === 4) score = 3;
      else if (format === 6) score = 2;
      else if (format === 0) score = 1;
      if (score === 0) continue;
      if (platform === 3 && encoding === 10) score += 3;
      else if (platform === 0) score += 2;
      else if (platform === 3 && encoding === 1) score += 1;
      candidates.push({ score, offset: subOff });
    }
    candidates.sort((a, b) => b.score - a.score);
    for (const candidate of candidates) {
      const map = parseCmapSubtable(dv, candidate.offset, tableEnd);
      if (map) return map;
    }
    return null;
  } catch {
    return null;
  }
}
function readAdvances3(binary, numberOfHMetrics, numGlyphs) {
  try {
    if (numberOfHMetrics < 1) return null;
    const dv = new DataView(binary);
    const base = sfntBase(dv);
    if (base === null) return null;
    const hmtx = findTable4(dv, base, "hmtx");
    if (!hmtx) return null;
    const count = numGlyphs !== null && numGlyphs > 0 ? numGlyphs : numberOfHMetrics;
    const need = numberOfHMetrics * 4 + Math.max(0, count - numberOfHMetrics) * 2;
    if (hmtx.offset + Math.min(need, hmtx.length) > binary.byteLength) return null;
    const out = new Uint16Array(count);
    for (let gid = 0; gid < count; gid++) {
      const metric = gid < numberOfHMetrics ? gid : numberOfHMetrics - 1;
      const rec = hmtx.offset + metric * 4;
      if (rec + 2 > tableEndOf(hmtx, binary.byteLength)) return out.length > 0 ? out : null;
      out[gid] = dv.getUint16(rec);
    }
    return out;
  } catch {
    return null;
  }
}
function tableEndOf(table, fileLength) {
  return Math.min(table.offset + table.length, fileLength);
}
var eulerMathAdapter = {
  id: "euler-math",
  name: "Euler / Neo Euler",
  families: EULER_FAMILIES,
  priority: 120,
  matches(familyName) {
    return matchByFamilyName({ families: EULER_FAMILIES }, familyName);
  },
  build(binary, ctx) {
    const notes = [];
    const chars = {};
    let constants;
    let source = "opentype-math";
    try {
      const math = readOpenTypeMathTable(binary);
      const wide = readFontWide(binary);
      if (!math && !wide) {
        return null;
      }
      const unitsPerEm = (math ? math.unitsPerEm : 0) || (wide ? wide.unitsPerEm : 0) || ctx.unitsPerEm || 1e3;
      let ascDesign = wide ? wide.typoAscender : null;
      let descDesign = wide ? wide.typoDescender : null;
      let bandSource = "OS/2 sTypoAscender/sTypoDescender";
      const typoUsable = typeof ascDesign === "number" && ascDesign > 0 && typeof descDesign === "number" && descDesign < 0;
      if (!typoUsable) {
        ascDesign = wide ? wide.hheaAscender : null;
        descDesign = wide ? wide.hheaDescender : null;
        bandSource = "hhea ascent/descent";
      }
      const height = typeof ascDesign === "number" ? ascDesign / unitsPerEm : NaN;
      const depth = typeof descDesign === "number" ? Math.abs(descDesign) / unitsPerEm : NaN;
      if (!(height > 0) || !(depth >= 0) || height > MAX_BAND_EM || depth > MAX_BAND_EM) {
        return null;
      }
      const numberOfHMetrics = wide ? wide.numberOfHMetrics : null;
      const numGlyphs = wide ? wide.numGlyphs : null;
      if (numberOfHMetrics === null) {
        return null;
      }
      const advances = readAdvances3(binary, numberOfHMetrics, numGlyphs);
      const cmap = readCmap6(binary);
      if (!advances || !cmap) {
        return null;
      }
      let skippedFiltered = 0;
      let skippedZeroAdvance = 0;
      const gidToCode = /* @__PURE__ */ new Map();
      for (const [code, gid] of cmap) {
        if (isPrivateUse6(code) || isControl6(code) || isSurrogate2(code)) {
          skippedFiltered++;
          continue;
        }
        const advance = gid >= 0 && gid < advances.length ? advances[gid] : 0;
        if (!(advance > 0)) {
          skippedZeroAdvance++;
          continue;
        }
        chars[String(code)] = [height, depth, advance / unitsPerEm];
        if (!gidToCode.has(gid)) gidToCode.set(gid, code);
      }
      if (Object.keys(chars).length === 0) {
        return null;
      }
      notes.push(
        "Euler / Neo Euler \u2014 the OpenType revival of Zapf's AMS Euler (CTAN euler-math; Neo-Euler.otf renamed Euler-Math.otf)."
      );
      notes.push(
        "Design: upright-calligraphic letterforms rather than Times-like math italics; every number here is the font's own, never inferred from Times-like conventions."
      );
      notes.push(
        `Layout band (approximation, applied per glyph): height ${height.toFixed(4)}em / depth ${depth.toFixed(4)}em from ${bandSource}; width is each glyph's real advance from hmtx. OpenType MATH carries no per-glyph vertical extents, so the band over-reserves for small glyphs \u2014 expected for Euler, whose calligraphic shapes are unusually uneven.`
      );
      if (math) {
        constants = math.constants;
        source = "opentype-math";
        const axis = math.constants.axisHeight;
        if (typeof axis === "number") {
          notes.push(
            `MATH table read: axisHeight ${axis.toFixed(4)}em \u2014 non-standard versus Times-like math fonts; used exactly as the font states it (Euler's fraction bars and minus signs sit on its own axis).`
          );
        } else {
          notes.push("MATH table read, but its axis height was not present; left undefined for MathJax.");
        }
        const italics = Object.keys(math.italicCorrection).length;
        if (italics > 0) {
          let maxId = "";
          let maxVal = -Infinity;
          for (const [gid, value] of Object.entries(math.italicCorrection)) {
            if (value > maxVal) {
              maxVal = value;
              maxId = gid;
            }
          }
          const code = gidToCode.get(Number(maxId));
          const where = code !== void 0 ? `U+${code.toString(16).toUpperCase()}` : `glyph ${maxId}`;
          notes.push(
            `Italics corrections: ${italics} entries, largest ${maxVal.toFixed(4)}em at ${where} \u2014 non-standard versus Times-like fonts, following Euler's upright-calligraphic design.`
          );
        } else {
          notes.push("Italics corrections: none in the MATH table.");
        }
        notes.push("Stretchy assemblies were readable but not exported: `delimiters` stays undefined so MathJax keeps its own brace and arrow target sizes.");
      } else {
        constants = void 0;
        source = "reference";
        notes.push("No readable MATH table in this file: constants omitted; layout boxes come from head/hhea/OS/2/cmap/hmtx only.");
      }
      notes.push(
        `Mapped ${Object.keys(chars).length} codepoints; kept MathJax metrics for ${skippedFiltered} private-use/control/surrogate and ${skippedZeroAdvance} zero-advance codepoints.`
      );
      notes.push("Stretchy delimiter sizes were left to MathJax: this font does not own the assembly.");
      return {
        source,
        chars,
        // 刻意留空，见上文注记 / Deliberately absent — see the notes above.
        delimiters: void 0,
        constants,
        ownsStretchyAssembly: false,
        notes
      };
    } catch (err) {
      if (Object.keys(chars).length > 0) {
        notes.push(`Euler adapter hit an unexpected error and returned partial metrics: ${String(err)}`);
        return {
          source,
          chars,
          delimiters: void 0,
          constants,
          ownsStretchyAssembly: false,
          notes
        };
      }
      return null;
    }
  }
};

// src/math-standards/adapters/computer-modern.ts
var TEX_DESIGN_CONSTANTS = {
  /** The classic CM ascent above the baseline. */
  ascent: 0.75,
  /** The classic CM descent below the baseline. */
  descent: 0.25,
  /** x-height of the CM design. */
  xHeight: 0.43,
  /** Cap height of the CM design. */
  capHeight: 0.67
};
var computerModernAdapter = {
  id: "computer-modern",
  name: "Computer Modern / Concrete",
  families: [
    "Computer Modern",
    "CMU Serif",
    "CMU Sans Serif",
    "CMU Bright",
    "CMU Typewriter Text",
    "Concrete",
    "Concrete Roman",
    "Dingbats"
  ],
  priority: 130,
  matches(familyName) {
    return matchByFamilyName(this, familyName);
  },
  build(binary, _ctx) {
    const font = readOpenTypeFontInfo(binary);
    if (!font) {
      return null;
    }
    const math = readOpenTypeMathTable(binary);
    const built = buildCharsFromFont(font);
    if (built.mapped === 0) {
      return null;
    }
    const verticalsLookSane = Math.abs(font.verticals.ascent - TEX_DESIGN_CONSTANTS.ascent) < 0.15;
    const notes = [
      "Computer Modern lineage: TeX TFM design constants apply.",
      math ? "Read from the font's OpenType MATH table; nothing was measured." : "No MATH table \u2014 boxes come from the font's own hmtx/OS-2 metrics.",
      `Mapped ${built.mapped} glyphs; left ${built.skippedAbsent} uncovered ones to MathJax.`
    ];
    if (!verticalsLookSane) {
      notes.push(
        `Font states ascent ${font.verticals.ascent.toFixed(3)}em against the CM design's ${TEX_DESIGN_CONSTANTS.ascent}em \u2014 kept the font's own value.`
      );
    }
    return {
      source: math ? "opentype-math" : "tex-tfm",
      chars: built.chars,
      delimiters: void 0,
      ownsStretchyAssembly: false,
      constants: math ? math.constants : void 0,
      notes
    };
  }
};

// src/math-standards/adapters/mathjax-tex.ts
var mathJaxTexAdapter = {
  id: "mathjax-tex",
  name: "MathJax TeX faces (reference)",
  // Every face name MathJax's output can be styled with, plus the two core faces
  // (`MJXZERO` for the null/fallback glyph, `MJXTEX` for the plain TeX face).
  // MathJax 输出可能用到的全部字面名，外加两个核心字面（`MJXZERO` 空字形、`MJXTEX` 常规 TeX 字面）。
  families: [
    "MJX-TEX-N",
    "MJX-TEX-B",
    "MJX-TEX-I",
    "MJX-TEX-BI",
    "MJX-TEX-MI",
    "MJX-TEX-S1",
    "MJX-TEX-S2",
    "MJX-TEX-S3",
    "MJX-TEX-S4",
    "MJX-TEX-ZERO",
    "MJX-BRK",
    "MJX-MHC-N",
    "MJX-MHC-M",
    "MJXZERO",
    "MJXTEX"
  ],
  // Beats every family-specific adapter to these names, and long before the fallback (1000),
  // so the reference is claimed here and never reaches the measuring path.
  // 抢在所有族级适配器之前认领这些名字，更远在兜底（1000）之前，使参考基准在此被点名、
  // 永远不会进入测量路径。
  priority: 5,
  /**
   * Claims a face by exact, case-insensitive name — nothing looser, so an unrelated family can
   * never be mistaken for MathJax's own faces.
   * 按精确、大小写不敏感的名字认领字面；不作更宽的匹配，以免无关字族被误认成 MathJax 自带字面。
   */
  matches(familyName) {
    try {
      return matchByFamilyName(this, familyName);
    } catch (error) {
      console.error("[mathjax-tex] family match failed:", error);
      return false;
    }
  },
  /**
   * Declines every request, with a note: these faces are MathJax's reference metrics and must be
   * left alone.
   * 拒绝一切请求，并附注：这些字面是 MathJax 的参考度量基准，必须保持原样。
   *
   * Returning `null` hands the family on to whatever the caller does with a decline, and writes
   * nothing: no `chars`, no `delimiters`, no `constants`. The caller's own font rules keep
   * MathJax's faces out of substitution in the first place.
   * 返回 `null` 表示拒绝并交还调用方处理，同时不写入任何内容：无 `chars`、无 `delimiters`、
   * 无 `constants`。调用方的字体规则本身就会把 MathJax 自带字面排除在替换之外。
   *
   * Nothing here reads `binary` or `ctx`, so nothing here can throw and no try/catch is needed.
   * 此处不读取 `binary` 或 `ctx`，因此不可能抛异常，无需 try/catch。
   */
  build(_binary, _ctx) {
    return null;
  }
};

// src/math-standards/fallback-measure.ts
var PROBE_SIZE = 200;
var NOT_A_GLYPH = "\u{10FFFD}";
function isPrivateUse7(code) {
  return code >= 57344 && code <= 63743 || code >= 983040 && code <= 1048573 || code >= 1048576 && code <= 1114109;
}
function isControl7(code) {
  return code < 32 || code >= 127 && code <= 159;
}
function measureWith(ctx, family, text) {
  ctx.font = `${PROBE_SIZE}px "${family.replace(/"/g, "")}"`;
  const m = ctx.measureText(text);
  return {
    width: m.width,
    ascent: m.actualBoundingBoxAscent || 0,
    descent: m.actualBoundingBoxDescent || 0
  };
}
function sameInk(a, b) {
  return a.width === b.width && a.ascent === b.ascent && a.descent === b.descent;
}
var measurementFallbackAdapter = {
  id: "fallback-measure",
  name: "Measured (fallback)",
  // Claims nothing by name: it is reached only when every named adapter declines.
  families: [],
  priority: 1e3,
  matches(_familyName) {
    return true;
  },
  build(_binary, ctx) {
    const familyName = (ctx.familyName || "").trim();
    if (!familyName) {
      return null;
    }
    const canvas = typeof document !== "undefined" ? document.createElement("canvas") : null;
    const c2d = canvas ? canvas.getContext("2d") : null;
    if (!c2d) {
      return null;
    }
    const notes = [];
    const notdef = measureWith(c2d, familyName, NOT_A_GLYPH);
    const chars = {};
    let measured = 0;
    let skippedMissing = 0;
    const ranges = [
      [32, 126],
      // ASCII printable
      [160, 255],
      // Latin-1 supplement
      [8192, 8303],
      // general punctuation
      [8304, 8351],
      // super/subscripts
      [8352, 8383],
      // currency
      [8448, 8527],
      // letterlike
      [8592, 8703],
      // arrows
      [8704, 8959],
      // math operators
      [8960, 9215],
      // misc technical
      [9632, 9727],
      // geometric shapes
      [9728, 9983],
      // misc symbols
      [10176, 10223],
      // misc math symbols-A
      [10624, 10751],
      // misc math symbols-B
      [10752, 11007],
      // supplemental math operators
      [119808, 120831]
      // math alphanumerics
    ];
    for (const [from, to] of ranges) {
      for (let code = from; code <= to; code++) {
        if (isPrivateUse7(code) || isControl7(code)) {
          continue;
        }
        const text = String.fromCodePoint(code);
        const ink = measureWith(c2d, familyName, text);
        if (sameInk(ink, notdef)) {
          skippedMissing++;
          continue;
        }
        const width = ink.width / PROBE_SIZE;
        const ascent = ink.ascent / PROBE_SIZE;
        const descent = ink.descent / PROBE_SIZE;
        const height = Math.max(0, ascent);
        const depth = Math.max(0, descent);
        if (!(width > 0)) {
          skippedMissing++;
          continue;
        }
        chars[String(code)] = [height, depth, width];
        measured++;
      }
    }
    if (measured === 0) {
      notes.push("No glyph of the probed set could be measured; leaving MathJax metrics in place.");
      return null;
    }
    notes.push(`Measured ${measured} glyphs; kept MathJax metrics for ${skippedMissing} absent or unusable ones.`);
    notes.push("Stretchy delimiter sizes were left to MathJax: this font does not own the assembly.");
    if (skippedMissing > 0) {
      notes.push(`Presence detection uses a missing-codepoint baseline, not zero-width, because canvas falls back silently.`);
    }
    return {
      source: "measured",
      chars,
      // Deliberately absent: see the note above — braces and arrows are assembled from
      // MathJax's own pieces, so their target sizes must stay MathJax's.
      delimiters: void 0,
      ownsStretchyAssembly: false,
      notes
    };
  }
};

// src/math-standards/index.ts
var adapters = [
  xitsMathAdapter,
  stixTwoMathAdapter,
  latinModernMathAdapter,
  texGyreTermesMathAdapter,
  texGyrePagellaMathAdapter,
  libertinusMathAdapter,
  asanaMathAdapter,
  cambriaMathAdapter,
  minionMathAdapter,
  notoMathAdapter,
  firaMathAdapter,
  eulerMathAdapter,
  computerModernAdapter,
  mathJaxTexAdapter,
  // Last: the only path that measures, so it only sees fonts nothing above claims.
  measurementFallbackAdapter
].sort((a, b) => a.priority - b.priority);
function findMathFontAdapter(familyName) {
  for (const adapter of adapters) {
    if (adapter.matches(familyName)) {
      return adapter;
    }
  }
  return null;
}
function buildMathMetrics(binary, familyName, unitsPerEm) {
  const ctx = { familyName, unitsPerEm };
  const named = adapters.filter((a) => a.id !== measurementFallbackAdapter.id && a.matches(familyName));
  const pool = named.length > 0 ? named : [measurementFallbackAdapter];
  for (const adapter of pool) {
    try {
      const metrics = adapter.build(binary, ctx);
      if (metrics) {
        return { metrics, adapterId: adapter.id, adapterName: adapter.name };
      }
    } catch {
      continue;
    }
  }
  return null;
}

// src/plugin.ts
var browserNavigator = window.navigator;
var RECORDED_META_KEYS = ["platform", "os", "model", "hostname", "firstSeen", "lastSeen"];
var SEEN_REFRESH_MS = 6 * 60 * 60 * 1e3;
var FONT_CSS_SNIPPET = "local-font-loader";
var FONT_FACES_ID = "local-font-loader-faces";
var FONT_GLYPHS_ID = "local-font-loader-glyphs";
var MATH_ADOPTION_RETRY_MS = 5e3;
var LocalFontLoaderPlugin = class extends import_obsidian11.Plugin {
  /**
   * This device's stable id.
   *
   * Deliberately not part of `settings`: that object syncs, and a synced identity would make
   * every device believe it is the same one. It lives in device-local storage instead.
   */
  currentDeviceId;
  /** When the math metric adoption was last attempted, so the retry below cannot thrash. */
  _mathAdoptionAttemptAt = 0;
  /** MathJax's original glyph metrics, kept so adoption can be undone. */
  _mathFontSnapshot = null;
  /**
   * Which adaptation layer produced the math metrics currently in place.
   *
   * Recorded rather than recomputed so the status command reports what actually happened —
   * "measured" and "read from the font's own MATH table" are very different answers to the
   * question the command exists to answer, and only the code that did the work knows which one
   * it was.
   */
  _mathAdaptationLayer = null;
  /**
   * Where the math metrics came from, in words a person can act on.
   *
   * Kept apart from the layer name so the status command can say 'the font's own MATH table'
   * rather than an adapter id: the question is whether the numbers are the font's intent or a
   * guess, not which module produced them.
   */
  _mathAdaptationSource = "MathJax's own metrics";
  /**
   * Codepoint ranges the configured math font does not cover, phrased for the status command.
   *
   * A gap is not an error — Libertinus carries no Fraktur, Latin Modern no lowercase Script — but
   * glyphs in those ranges have to come from somewhere, and that somewhere is MathJax's own
   * faces. Stating the gap is what stops a missing letter looking like a bug in the font.
   */
  _mathCoverageGaps = [];
  /** The CSS text last applied per id, to skip no-op updates. */
  _appliedCss = /* @__PURE__ */ new Map();
  /** Documents receiving session-local font faces, including desktop popouts. */
  _fontDocuments = /* @__PURE__ */ new Set();
  /** The portable CSS each id currently contributes to the snippet. */
  _snippetCss = /* @__PURE__ */ new Map();
  /** True once the snippet is enabled in Obsidian's CSS snippets. */
  _snippetEnabled = false;
  /** Serializes snippet writes, so the file never holds a half-updated mix of two applies. */
  _snippetSync = Promise.resolve();
  _isScanning = false;
  _isSaving = false;
  _dataReloadTimer = null;
  /**
   * Whether loadSettings() found settings on disk, as opposed to finding nothing at all.
   *
   * Read by _persistStartupState(): a plugin that has not seen the file yet must not write one.
   */
  _settingsFilePresent = false;
  // Log level control
  _logEnabled = false;
  // logging disabled by default
  _log(...args) {
    if (this._logEnabled) {
      console.log(...args);
    }
  }
  _logError(...args) {
    console.error(...args);
  }
  /**
    * Compares two settings objects for full structural equality (JSON-safe).
    * Used to determine whether a data.json change originated from this plugin's own writes.
    * Returns false on serialization failure (conservative: prefer reloading over missing a sync).
   */
  /**
   * Whether a file read back as a complete settings document.
   *
   * A file a sync service is still writing reads back as null or an empty object — it has been
   * truncated and not yet filled. Treating that as 'the settings' is what turned a sync into a
   * reset: the in-memory configuration was replaced with the defaults, and the write that follows
   * then persisted those defaults over the real file. A snapshot from another device always
   * carries at least one of these fields, because `loadSettings` guarantees them, so requiring
   * one is enough to tell 'still being written' apart from 'real content, just different'.
   */
  _isCompleteSettingsSnapshot(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return false;
    }
    const record = data;
    return Array.isArray(record.presets) || Array.isArray(record.availableFonts) || typeof record.fontSourceDir === "string";
  }
  _settingsEqual(a, b) {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (error) {
      this._logError("[Local Font Loader] _settingsEqual \u6BD4\u8F83\u5931\u8D25:", error);
      return false;
    }
  }
  // saveSettings debounce optimization
  _saveSettingsTimer = null;
  /** Debounce handle for the size layer, which is rebuilt on every keystroke in its fields. */
  _fontSizeApplyTimer = null;
  _debouncedSaveSettings() {
    if (this._saveSettingsTimer) {
      window.clearTimeout(this._saveSettingsTimer);
    }
    this._saveSettingsTimer = window.setTimeout(() => {
      this.saveData(this.settings).catch((error) => this._logError("[Local Font Loader] Failed to save settings:", error));
      this._saveSettingsTimer = null;
    }, 300);
  }
  // Generate unicode-range (based on scope configuration)
  getUnicodeRange(scope) {
    const ranges = [];
    if (scope?.letters !== false) {
      ranges.push("U+0041-005A", "U+0061-007A");
    }
    if (scope?.numbers !== false) {
      ranges.push("U+0030-0039");
    }
    if (scope?.punctuation !== false) {
      ranges.push("U+0020-002F", "U+003A-0040", "U+005B-0060", "U+007B-007E");
    }
    if (scope?.symbols !== false) {
      ranges.push("U+00A0-00FF");
    }
    return ranges.length > 0 ? ranges.join(", ") : null;
  }
  /**
    * Escapes quotes and backslashes in CSS strings so font family names cannot break @font-face/font-family syntax.
    * @param {string} str The family name
    * @returns {string} The escaped string
   */
  _escapeCssString(str) {
    return String(str).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/'/g, "\\'");
  }
  /**
   * Builds every high-priority code-font rule from one shared template:
   * inline code, multi-line code blocks and code block line numbers.
   *
   * Priority:
   * User CSS snippets commonly scope code-font rules with a `:root` prefix and repeat the
   * container classes, e.g. `:root .markdown-preview-view code:not(pre code)` (specificity
   * 2-0-3) or `:root .markdown-source-view.mod-cm6 .cm-inline-code` (4-0-0). A selector that
   * cannot outrank those loses even though both sides use `!important`, because specificity
   * is compared before source order.
   *
   * Two things give us the margin, applied uniformly to every selector below:
   *   1. the shared `:root body` scope prefix — one class-level weight plus one element-level;
   *   2. each selector keeps its NATURAL container classes (`.markdown-preview-view`,
   *      `.markdown-source-view.mod-cm6`, …) instead of a bare tag, which is what the DOM
   *      actually looks like anyway.
   * Together they clear the snippet rules: inline code reaches 3-0-4 in reading view and
   * 5-0-1 in the editor, against the snippet's 2-0-3 and 4-0-0.
   *
   * Note this is a deliberate escalation over that snippet — if the snippet is later given
   * more container classes, the margin shrinks.
   *
   *
   * @param {string} fontFamily The raw (unescaped) monospace family name
   * @returns {string} The CSS text
   */
  _buildCodeFontRules(fontFamily) {
    const fontStack = `"${this._escapeCssString(fontFamily)}", monospace`;
    const PRIORITY_SCOPE = ":root body";
    const emitRule = (comment, selectors, extraDeclarations = "") => {
      let css2 = `/* ${comment} */
`;
      css2 += selectors.map((selector) => `${PRIORITY_SCOPE} ${selector}`).join(",\n") + " {\n";
      css2 += `  font-family: ${fontStack} !important;
`;
      if (extraDeclarations) {
        css2 += extraDeclarations;
      }
      css2 += `}

`;
      return css2;
    };
    let css = `/* Code Block Font (High Priority) */
`;
    css += emitRule("Inline code", [
      ".markdown-preview-view.markdown-rendered code:not(pre code)",
      ".markdown-preview-view code:not(pre code)",
      ".markdown-rendered code:not(pre code)",
      ".markdown-source-view.mod-cm6.cm-s-obsidian .cm-inline-code",
      ".markdown-source-view.mod-cm6 .cm-inline-code",
      ".cm-inline-code",
      "code:not(pre code)"
    ]);
    css += emitRule("Code blocks", [
      ".markdown-preview-view.markdown-rendered pre code",
      ".markdown-preview-view pre code",
      ".markdown-preview-view pre",
      ".markdown-source-view.mod-cm6.cm-s-obsidian .cm-line.HyperMD-codeblock",
      ".markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock",
      ".markdown-source-view.mod-cm6.cm-s-obsidian .cm-line:has(.cm-hmd-codeblock)",
      ".markdown-source-view.mod-cm6 .cm-line:has(.cm-hmd-codeblock)",
      ".HyperMD-codeblock",
      ".cm-s-obsidian pre.HyperMD-codeblock",
      "pre code",
      "pre"
    ]);
    css += emitRule("Code block line numbers", [
      ".code-styler-line-number",
      ".cm-gutter.cm-lineNumbers",
      ".cm-lineNumbers .cm-gutterElement"
    ]);
    return css;
  }
  /**
   * Builds the high-priority UI-font rules from one shared selector list.
   *
   * Why direct rules instead of variables:
   * Obsidian core writes its appearance font settings onto <body>, so a declaration the plugin
   * makes on :root never wins inside the body. Declaring `--font-interface` is therefore not
   * enough — floating UI that has no rule of its own (a Notice, a tooltip) simply inherits the
   * core font. Only a direct `font-family` rule on the element is authoritative.
   *
   * Floating UI belongs to the UI font: notices, tooltips, the command palette, completion
   * suggestions and hover previews are chrome, not document content.
   *
   * Each selector is emitted under both `body …` and `body.is-mobile …`, because Obsidian's
   * mobile stylesheet outranks a plain `body …` selector on several of these elements.
   *
   * @param {string} uiFontFamily The CSS family list, already escaped and quoted
   * @returns {string} The CSS text
   */
  _buildUiFontRules(uiFontFamily) {
    const UI_SELECTORS = [
      // Workspace chrome
      ".workspace",
      ".workspace-leaf-content",
      ".workspace-tab-header",
      ".workspace-tab-header-container",
      ".nav-file-title",
      ".nav-folder-title",
      ".tree-item-inner",
      ".sidebar",
      ".sidebar-content",
      // Tab header: the breadcrumb path and the editable note title
      // The header carries the file path and the inline title of the open note, and is
      // chrome rather than document content, so it belongs to the UI font. Each level is
      // listed because Obsidian styles them individually.
      ".view-header-title-container",
      ".view-header-title-parent",
      ".view-header-breadcrumb",
      ".view-header-breadcrumb-separator",
      ".view-header-title",
      // In-note chrome
      // The note title and the properties panel are chrome, not document content: the
      // title is also where Obsidian puts file-level controls, and the properties panel
      // reads file metadata. Without these, both inherit the body text font — and the
      // property cells fall all the way through to Obsidian's own interface font.
      //
      // The title needs its container classes spelled out: Obsidian ships
      // `.inline-title:not([data-level])` at specificity 2-0-0 pointing at a variable it
      // never defines, so a bare `body .inline-title` (1-0-1) loses and the element just
      // inherits the text font instead.
      ".markdown-preview-view .inline-title",
      ".markdown-source-view .inline-title",
      ".inline-title",
      // Obsidian scopes several of its own property rules under .metadata-container
      // (e.g. `.metadata-container .metadata-add-button` at 2-0-0), so the bare form
      // alone loses on specificity. Both forms are emitted for every element here.
      ".metadata-container",
      ".metadata-properties-heading",
      ".metadata-container .metadata-properties-heading",
      ".metadata-property",
      ".metadata-container .metadata-property",
      ".metadata-property-key",
      ".metadata-container .metadata-property-key",
      ".metadata-property-key-input",
      ".metadata-container .metadata-property-key-input",
      ".metadata-property-value",
      ".metadata-container .metadata-property-value",
      ".metadata-input-longtext",
      ".metadata-container .metadata-input-longtext",
      ".metadata-input-text",
      ".metadata-container .metadata-input-text",
      ".metadata-add-button",
      ".metadata-container .metadata-add-button",
      ".multi-select-pill",
      ".multi-select-pill-content",
      // Menus, modals and settings
      ".menu",
      ".menu-item",
      ".modal",
      ".modal-content",
      ".setting-item",
      ".setting-item-name",
      ".setting-item-description",
      // Floating UI
      ".notice",
      ".notice-container",
      ".tooltip",
      ".prompt",
      ".prompt-input",
      ".suggestion-container",
      ".suggestion-item",
      ".popover",
      ".hover-popover",
      ".cm-tooltip",
      ".cm-tooltip-autocomplete"
    ];
    let css = `/* UI Elements (High Priority) */
`;
    css += UI_SELECTORS.map((selector) => `body ${selector}`).join(",\n") + ",\n";
    css += UI_SELECTORS.map((selector) => `body.is-mobile ${selector}`).join(",\n") + " {\n";
    css += `  font-family: ${uiFontFamily}, sans-serif !important;
`;
    css += `}

`;
    return css;
  }
  async onload() {
    this._log("[Local Font Loader] Plugin loading...");
    this._fontDocuments.add(document);
    this.app.workspace.iterateAllLeaves((leaf) => {
      this._fontDocuments.add(leaf.view.containerEl.ownerDocument);
    });
    this.registerEvent(this.app.workspace.on("window-open", (_win, openedWindow) => {
      this._fontDocuments.add(openedWindow.document);
      this._applyRuntimeFontFaces(this._appliedCss.get(FONT_FACES_ID) || "");
    }));
    this.registerEvent(this.app.workspace.on("window-close", (_win, closedWindow) => {
      this._fontDocuments.delete(closedWindow.document);
    }));
    await this._sanitizePersistedFontSnippet();
    try {
      await this.loadSettings();
      this._log("[Local Font Loader] Settings loaded successfully");
      if (!this.settings.presets || this.settings.presets.length === 0) {
        this._logError("[Local Font Loader] Critical: presets array is empty or undefined");
        throw new Error("Settings validation failed: presets missing");
      }
      const deviceId = await this._getOrCreateLocalDeviceId();
      this.currentDeviceId = deviceId;
      if (!this.settings.deviceNameMap) {
        this.settings.deviceNameMap = {};
      }
      if (!this.settings.deviceMeta) {
        this.settings.deviceMeta = {};
      }
      if (!this.settings.deviceAliases) {
        this.settings.deviceAliases = {};
      }
      await this.repairDeviceList();
      const activeDeviceId = this.currentDeviceId;
      const deviceInfo = this._detectDeviceInfo();
      const previousMeta = this.settings.deviceMeta[activeDeviceId];
      const legacyShape = previousMeta ? Object.keys(previousMeta).some((key) => !RECORDED_META_KEYS.includes(key)) : false;
      const metaChanged = !previousMeta || previousMeta.platform !== deviceInfo.platform || previousMeta.os !== deviceInfo.os || previousMeta.model !== deviceInfo.model || previousMeta.hostname !== deviceInfo.hostname || legacyShape;
      const seenAt = (/* @__PURE__ */ new Date()).toISOString();
      const lastSeenTime = previousMeta && previousMeta.lastSeen ? Date.parse(previousMeta.lastSeen) : Number.NaN;
      const seenStale = Number.isNaN(lastSeenTime) || Date.now() - lastSeenTime > SEEN_REFRESH_MS;
      const lifetime = {
        firstSeen: previousMeta && previousMeta.firstSeen || seenAt,
        lastSeen: seenStale ? seenAt : previousMeta.lastSeen
      };
      const isKnownDevice = Boolean(this.settings.deviceNameMap[activeDeviceId]);
      const storedName = this.settings.deviceNameMap[activeDeviceId];
      const generatedNameOutdated = isKnownDevice && this._isGeneratedDeviceName(storedName, previousMeta) && storedName !== this._getDefaultDeviceName(deviceInfo);
      if (!isKnownDevice) {
        this.settings.deviceMeta[activeDeviceId] = { ...deviceInfo, ...lifetime };
        this.settings.deviceNameMap[activeDeviceId] = this._getDefaultDeviceName(deviceInfo);
        await this._persistStartupState();
        this._log(`[Local Font Loader] New device registered: ${activeDeviceId} (${this.settings.deviceNameMap[activeDeviceId]})`);
      } else if (metaChanged || generatedNameOutdated || seenStale) {
        this.settings.deviceMeta[activeDeviceId] = { ...deviceInfo, ...lifetime };
        if (generatedNameOutdated) {
          this.settings.deviceNameMap[activeDeviceId] = this._getDefaultDeviceName(deviceInfo);
          this._log(`[Local Font Loader] Default device name refreshed: ${storedName} -> ${this.settings.deviceNameMap[activeDeviceId]}`);
        }
        await this._persistStartupState();
        this._log(`[Local Font Loader] Device metadata refreshed: ${activeDeviceId}`);
      } else {
        this._log(`[Local Font Loader] Device recognized: ${activeDeviceId}`);
      }
      await this._ensureDevicePreset();
      this._log("[Local Font Loader] Device preset ensured");
    } catch (error) {
      this._logError("[Local Font Loader] Failed during initialization:", error);
    }
    this.addRibbonIcon("type", "Local Font Loader", () => {
      this.app.setting.open();
      this.app.setting.openTabById("local-font-loader");
    });
    this.addCommand({
      id: "open-settings",
      name: "Open Settings",
      callback: () => {
        this.app.setting.open();
        this.app.setting.openTabById("local-font-loader");
      }
    });
    this.addCommand({
      id: "reload-fonts",
      name: "Reload Fonts",
      callback: async () => {
        await this.applyFonts();
        new import_obsidian11.Notice("\u2713 Fonts reloaded");
      }
    });
    this.addCommand({
      id: "rescan-fonts",
      name: "Rescan Fonts",
      callback: async () => {
        await this.scanFonts();
        new import_obsidian11.Notice("\u2713 Font list updated");
      }
    });
    this.addCommand({
      id: "show-font-status",
      name: "Show font status",
      callback: () => {
        try {
          new FontStatusModal(this.app, this._collectFontStatusRows()).open();
        } catch (error) {
          this._logError("[Local Font Loader] Could not show the font status:", error);
          new import_obsidian11.Notice("Could not show the font status");
        }
      }
    });
    this.addSettingTab(new FontManagerSettingTab(this.app, this));
    this.registerEvent(this.app.workspace.on("css-change", () => {
      this._ensureSnippetEnabled();
      this._snippetSync = this._snippetSync.then(() => this._sanitizePersistedFontSnippet()).catch((error) => this._logError("[Local Font Loader] Could not sanitize the synced snippet:", error));
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      void this._retryMathMetricAdoption();
    }));
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file.path === `${this.manifest.dir}/data.json`) {
          this._log("[Local Font Loader] data.json modified, checking for content changes...");
          if (this._dataReloadTimer) {
            window.clearTimeout(this._dataReloadTimer);
          }
          this._dataReloadTimer = window.setTimeout(() => {
            void this._reloadSettingsFromDisk();
          }, 500);
        }
      })
    );
    if (this.settings.availableFonts.length === 0) {
      this._log("[Local Font Loader] Font list is empty, scanning...");
      await this.scanFonts();
    }
    try {
      await this._refreshFontExistence();
      this._log("[Local Font Loader] Font existence check completed");
    } catch (error) {
      this._logError("[Local Font Loader] Font existence check failed:", error);
    }
    this.applyFontSizes();
    if (this.settings.autoLoadOnStartup) {
      this._log("[Local Font Loader] Auto-loading fonts...");
      try {
        await this.applyFonts();
        this._log("[Local Font Loader] Fonts applied successfully");
      } catch (error) {
        this._logError("[Local Font Loader] Failed to apply fonts:", error);
        new import_obsidian11.Notice("\u26A0\uFE0F Local Font Loader: \u5B57\u4F53\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u63A7\u5236\u53F0\u65E5\u5FD7", 5e3);
      }
    } else {
      this._log("[Local Font Loader] Auto-load disabled, skipping font application");
    }
    this._log("[Local Font Loader] \u2713 Plugin loaded");
  }
  onunload() {
    this._log("[Local Font Loader] Plugin unloading");
    if (this._saveSettingsTimer) {
      window.clearTimeout(this._saveSettingsTimer);
      this._saveSettingsTimer = null;
    }
    if (this._dataReloadTimer) {
      window.clearTimeout(this._dataReloadTimer);
      this._dataReloadTimer = null;
    }
    if (this._fontSizeApplyTimer) {
      window.clearTimeout(this._fontSizeApplyTimer);
      this._fontSizeApplyTimer = null;
    }
    this.removeFontStyles();
    this._fontDocuments.clear();
    const presetStyle = document.getElementById("local-font-loader-preset-styles");
    if (presetStyle) presetStyle.remove();
  }
  /**
   * Builds the global preset a pre-preset configuration migrates into.
   *
   * Its fonts come from the top-level fields those versions wrote. A file that never had them
   * yields an empty preset, which is the correct outcome: there is nothing to carry over.
   *
   * @param data - The settings file as read from disk
   * @returns The default preset
   */
  _buildLegacyDefaultPreset(data) {
    return {
      id: "default-preset",
      name: "Default",
      targetDevices: [],
      // empty array means the global default
      fonts: data.fonts || {},
      latinFontEnabled: data.latinFontEnabled || false,
      latinFontScope: data.latinFontScope || {},
      headingApplyToFileTitle: data.headingApplyToFileTitle || false
    };
  }
  async loadSettings() {
    const hadSettings = Boolean(this.settings && Object.keys(this.settings).length > 0);
    const data = await this.loadData();
    this._settingsFilePresent = Boolean(data && Object.keys(data).length > 0);
    if (!this._isCompleteSettingsSnapshot(data)) {
      if (hadSettings) {
        this._log("[Local Font Loader] data.json read back incomplete; keeping the settings already in memory");
        return;
      }
      this._log("[Local Font Loader] No usable settings on disk; starting from the defaults");
    }
    if (!this._isCompleteSettingsSnapshot(data) && this.settings && this._settingsFilePresent === false) {
      this._log("[Local Font Loader] data.json read back incomplete; keeping the settings already in memory");
      return;
    }
    if (!this._isCompleteSettingsSnapshot(data) && this.settings && Object.keys(this.settings).length > 0 && this._settingsFilePresent) {
      this._log("[Local Font Loader] data.json read back incomplete; keeping the settings already in memory");
      return;
    }
    if (data && (!data.presets || data.presets.length === 0)) {
      this._log("[Local Font Loader] Legacy configuration detected, migrating into a default preset");
      data.presets = [this._buildLegacyDefaultPreset(data)];
      this._log("[Local Font Loader] Legacy configuration migrated");
    } else if (data && !data.presets.some((p) => p.id === "default-preset")) {
      this._log("[Local Font Loader] Default preset missing, adding it back");
      data.presets.unshift(this._buildLegacyDefaultPreset(data));
    }
    if (data && data.deviceId !== void 0) {
      delete data.deviceId;
    }
    if (data && data.deviceName !== void 0) {
      delete data.deviceName;
    }
    if (data && !data.deviceFingerprints) {
      data.deviceFingerprints = {};
    }
    if (data && !data.deviceNameMap) {
      data.deviceNameMap = {};
    }
    if (data && !data.deviceAliases) {
      data.deviceAliases = {};
    }
    this.settings = Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_SETTINGS)), data);
    this.settings.fontSizes = normalizeFontSizeSettings(this.settings.fontSizes);
  }
  async saveSettings() {
    this._isSaving = true;
    try {
      await this.saveData(this.settings);
    } finally {
      this._isSaving = false;
    }
  }
  /**
   * Persists state the plugin derived on startup: device registration and its refresh.
   *
   * Deliberately a no-op while no settings file has been loaded. On a device whose data.json
   * has not arrived from sync yet, `loadData()` returns nothing and the settings in memory are
   * the defaults — writing them would put a fresh-install snapshot where the synced file was
   * about to land, and sync would then carry that over every other device. Worse, the empty
   * default preset it leaves behind used to trip the migration in loadSettings() on those
   * devices and take their presets with it.
   *
   * The in-memory state is kept either way, so nothing is lost: the first save that follows a
   * real load persists it, and if no file ever arrives this is a fresh install whose defaults
   * are written by that first user-initiated change.
   */
  async _persistStartupState() {
    if (!this._settingsFilePresent) {
      this._log("[Local Font Loader] No settings file loaded yet; not writing startup state");
      return;
    }
    await this.saveSettings();
  }
  // ============================================================================
  // Preset Management Methods (New)
  // ============================================================================
  /**
   * Get the preset assigned to the current device
   * @returns {Object} The preset object
   */
  _getDevicePreset() {
    const deviceId = this.currentDeviceId;
    let preset = this.settings.presets.find(
      (p) => p.targetDevices.includes(deviceId)
    );
    if (!preset) {
      preset = this.settings.presets.find((p) => p.id === "default-preset");
    }
    if (!preset) {
      preset = this.settings.presets[0];
    }
    return preset;
  }
  /**
    * Returns the current device preset's font configuration context (unifies the Latin determination source across convert/apply methods).
   * @returns {{fontsConfig:Object, latinFontEnabled:boolean, latinFontScope:Object}}
   */
  _getDeviceFontContext() {
    const devicePreset = this._getDevicePreset();
    return {
      fontsConfig: devicePreset?.fonts || {},
      latinFontEnabled: devicePreset?.latinFontEnabled || false,
      latinFontScope: devicePreset?.latinFontScope || {}
    };
  }
  /**
   * Create a new preset
   * @param {string} name - The preset name
   */
  async createPreset(name) {
    const defaultPreset = this.settings.presets.find((p) => p.id === "default-preset");
    const newPreset = {
      id: this._generateUUID(),
      name,
      targetDevices: [],
      // new presets start empty, awaiting device assignment
      // Clone the global preset's font config
      fonts: defaultPreset ? JSON.parse(JSON.stringify(defaultPreset.fonts)) : { ui: "", text: "", heading: "", monospace: "", math: "", latin: "" },
      latinFontEnabled: defaultPreset ? defaultPreset.latinFontEnabled : false,
      latinFontScope: defaultPreset ? JSON.parse(JSON.stringify(defaultPreset.latinFontScope)) : { letters: true, numbers: true, punctuation: true, symbols: true },
      headingApplyToFileTitle: defaultPreset ? defaultPreset.headingApplyToFileTitle : false
    };
    this.settings.presets.push(newPreset);
    await this.saveSettings();
  }
  /**
   * Rename a preset
   * @param {string} presetId - The preset ID
   * @param {string} newName - The new name
   */
  async renamePreset(presetId, newName) {
    const preset = this.settings.presets.find((p) => p.id === presetId);
    if (preset) {
      preset.name = newName;
      await this.saveSettings();
    }
  }
  /**
   * Delete a preset (with a warning modal and protection for the default preset)
   * @param {string} presetId - The preset ID
   */
  async deletePreset(presetId) {
    if (presetId === "default-preset") {
      new import_obsidian11.Notice(t("cannotDeleteDefaultPreset"), 3e3);
      return;
    }
    const preset = this.settings.presets.find((p) => p.id === presetId);
    if (!preset) return;
    this.settings.presets = this.settings.presets.filter((p) => p.id !== presetId);
    await this.saveSettings();
  }
  /**
   * Assign a device to the specified preset (supports dragging into the global preset)
   * @param {string} deviceId - The device ID
   * @param {string} targetPresetId - The target preset ID
   */
  async assignDeviceToPreset(deviceId, targetPresetId) {
    bindDeviceToPreset(this.settings.presets, deviceId, targetPresetId);
    inheritSimilarDevicePresets(this.settings.presets, this.settings.deviceMeta, this.settings.deviceAliases);
    await this.saveSettings();
    await this.applyFonts();
  }
  /**
   * Duplicate a preset for the current device
   * @param {string} sourcePresetId - The source preset ID
   * @param {string} newPresetName - The new preset name (usually "<original name>_Copy")
   */
  async copyPresetForDevice(sourcePresetId, newPresetName) {
    const sourcePreset = this.settings.presets.find((p) => p.id === sourcePresetId);
    if (!sourcePreset) return;
    const newPreset = {
      ...structuredClone(sourcePreset),
      id: this._generateUUID(),
      name: newPresetName,
      // use the passed-in name ("<original>_Copy")
      targetDevices: [this.currentDeviceId]
      // new preset contains only the current device
    };
    this.settings.presets.push(newPreset);
    await this.assignDeviceToPreset(this.currentDeviceId, newPreset.id);
  }
  /**
   * Generate a UUID
   * @returns {string} The UUID string
   */
  _generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  /**
   * Remove a device from presets (used to clean up ghost devices)
   * @param {string} deviceId - The device ID to remove
   */
  async removeDeviceFromPresets(deviceId) {
    this.settings.presets.forEach((preset) => {
      preset.targetDevices = preset.targetDevices.filter((id) => id !== deviceId);
    });
    if (this.settings.deviceNameMap && this.settings.deviceNameMap[deviceId]) {
      delete this.settings.deviceNameMap[deviceId];
    }
    if (this.settings.deviceMeta && this.settings.deviceMeta[deviceId]) {
      delete this.settings.deviceMeta[deviceId];
    }
    await this.saveSettings();
  }
  /**
   * Lists devices that can be safely pruned: not this device, not bound to any preset,
   * and no longer referenced by the name map.
   *
   * The legacy fingerprint ledger is deliberately left untouched — a device that has not yet
   * been opened since the upgrade still needs its fingerprint entry to migrate onto its
   * original id. Pruning it would strand that device with a brand-new id and break its
   * preset bindings.
   *
   *
   * @returns {Array<{id: string, name: string}>} The prunable devices
   */
  getPrunableDevices() {
    const boundDeviceIds = /* @__PURE__ */ new Set();
    this.settings.presets.forEach((preset) => {
      (preset.targetDevices || []).forEach((id) => boundDeviceIds.add(id));
    });
    const prunable = [];
    Object.keys(this.settings.deviceNameMap || {}).forEach((deviceId) => {
      if (deviceId === this.currentDeviceId) return;
      if (boundDeviceIds.has(deviceId)) return;
      prunable.push({ id: deviceId, name: this._getDeviceName(deviceId) });
    });
    return prunable;
  }
  /**
   * Removes stale device entries from the name map and metadata.
   *
   * Also drops metadata orphaned by an earlier removal: a device id present in deviceMeta but
   * absent from deviceNameMap can no longer be listed or cleaned from the UI, so leaving it
   * would make the two maps drift apart silently.
   *
   * @returns {Promise<number>} How many devices were pruned
   */
  async pruneUnboundDevices() {
    const prunable = this.getPrunableDevices();
    const nameMap = this.settings.deviceNameMap || {};
    prunable.forEach(({ id }) => {
      delete this.settings.deviceNameMap[id];
      if (this.settings.deviceMeta) {
        delete this.settings.deviceMeta[id];
      }
    });
    let orphanCount = 0;
    Object.keys(this.settings.deviceMeta || {}).forEach((id) => {
      if (!nameMap[id]) {
        delete this.settings.deviceMeta[id];
        orphanCount++;
      }
    });
    if (prunable.length > 0 || orphanCount > 0) {
      await this.saveSettings();
    }
    this._log(`[Local Font Loader] Pruned ${prunable.length} unbound device(s), ${orphanCount} orphaned metadata entr(ies)`);
    return prunable.length + orphanCount;
  }
  /**
   * Collapses device entries that describe the same physical device.
   *
   * `data.json` is synced, so a conflict unions both sides' device maps. A device's identity is
   * minted into device-local storage, which a vault copy, a cleared cache or a reinstall does
   * not carry over — so one physical device can be registered under several ids, and each merge
   * keeps them all. This pass finds those sets, keeps one id per device, and moves everything
   * that referenced the others onto the survivor: preset bindings, the display name, the
   * metadata, and the legacy fingerprint ledger.
   *
   * The plan itself is computed by `device-repair.ts`, which is pure data in and data out, so
   * the decision can be checked without a running app.
   *
   * @returns {Promise<number>} How many duplicate groups were merged
   */
  async repairDeviceList() {
    const plan = planDeviceRepair({
      nameMap: this.settings.deviceNameMap || {},
      meta: this.settings.deviceMeta || {},
      aliases: this.settings.deviceAliases || {},
      now: Date.now()
    });
    plan.ambiguous.forEach((group) => {
      const names = group.ids.map((id) => this._getDeviceName(id)).join(", ");
      this._log(`[Local Font Loader] Similar devices kept separate (history: ${group.history}): ${names}`);
    });
    if (!plan.changed) {
      return 0;
    }
    const removedIds = /* @__PURE__ */ new Set();
    plan.merges.forEach((merge) => {
      if (merge.name) {
        this.settings.deviceNameMap[merge.canonicalId] = merge.name;
      }
      if (merge.meta) {
        this.settings.deviceMeta[merge.canonicalId] = { ...merge.meta };
      }
      merge.removedIds.forEach((id) => removedIds.add(id));
    });
    removedIds.forEach((id) => {
      delete this.settings.deviceNameMap[id];
      delete this.settings.deviceMeta[id];
    });
    this.settings.presets.forEach((preset) => {
      preset.targetDevices = remapDeviceIds(preset.targetDevices, plan.aliases);
    });
    Object.keys(this.settings.deviceFingerprints || {}).forEach((fingerprint) => {
      const claimed = this.settings.deviceFingerprints[fingerprint];
      const mapped = resolveDeviceAlias(claimed, plan.aliases);
      if (mapped !== claimed) {
        this.settings.deviceFingerprints[fingerprint] = mapped;
      }
    });
    this.settings.deviceAliases = plan.aliases;
    const adopted = resolveDeviceAlias(this.currentDeviceId, plan.aliases);
    if (adopted !== this.currentDeviceId) {
      this._log(`[Local Font Loader] Device id adopted from repair: ${this.currentDeviceId} -> ${adopted}`);
      this.currentDeviceId = adopted;
      await this._persistLocalDeviceId(adopted);
    }
    await this.saveSettings();
    const merged = plan.merges.length;
    this._log(`[Local Font Loader] Device list repaired: ${merged} duplicate group(s) merged`);
    new import_obsidian11.Notice(t("deviceListRepaired").replace("{0}", String(merged)), 4e3);
    return merged;
  }
  /**
   * Get the display name of a device (for UI rendering)
   * @param {string} deviceId - The device ID
   * @returns {string} - The device name
   */
  _getDeviceName(deviceId) {
    if (this.settings.deviceNameMap && this.settings.deviceNameMap[deviceId]) {
      return this.settings.deviceNameMap[deviceId];
    }
    return deviceId;
  }
  /**
   * Get the platform type of a device.
   *
   * Prefers the metadata a device recorded about itself; the legacy fingerprint ledger is
   * only a fallback for entries created before deviceMeta existed.
   *
   * @param {string} deviceId - The device ID
   * @returns {string} - The platform type: 'mobile' or 'desktop', or 'unknown' if not found
   */
  _getDevicePlatform(deviceId) {
    const meta = this.settings.deviceMeta && this.settings.deviceMeta[deviceId];
    if (meta && meta.platform) {
      return meta.platform;
    }
    if (this.settings.deviceFingerprints) {
      for (const [fingerprint, id] of Object.entries(this.settings.deviceFingerprints)) {
        if (id === deviceId) {
          return fingerprint.split("-")[0];
        }
      }
    }
    return "unknown";
  }
  /**
   * Update a device name (supports editing the current or other devices)
   * @param {string} deviceId - The device ID
   * @param {string} newName - The new name
   */
  async updateDeviceName(deviceId, newName) {
    const trimmedName = newName.trim();
    if (!trimmedName) return;
    if (!this.settings.deviceNameMap) {
      this.settings.deviceNameMap = {};
    }
    this.settings.deviceNameMap[deviceId] = trimmedName;
    await this.saveSettings();
  }
  /**
   * Resolves this installation's stable device id, creating it exactly once.
   *
   * The id is the single source of truth for identity: names, models and hostnames are only
   * ever displayed, never used to match a device, so renaming a device or upgrading its OS
   * can never fork it into a second entry.
   *
   * It is kept in Obsidian's device-local storage, which lives in the app profile rather than
   * the vault — so it is neither synced between devices nor carried over by a vault copy.
   * Once written it is authoritative for the life of the installation: this method returns
   * the stored value unchanged and never re-derives it, with one exception — a device-list
   * repair that collapsed this id into a survivor (see `repairDeviceList`) has the device adopt
   * the survivor instead, because the stored id no longer names an entry in the synced maps.
   *
   * @returns {Promise<string>} The device id
   */
  async _getOrCreateLocalDeviceId() {
    const STORAGE_KEY = "local-font-loader-device-id";
    let storedId = null;
    try {
      storedId = this.app.loadLocalStorage(STORAGE_KEY);
    } catch (error) {
      this._logError("[Local Font Loader] Failed to read device-local id:", error);
    }
    if (import_obsidian11.Platform.isMobile) {
      const derivedId = await this._getPlatformDeviceId();
      if (derivedId) {
        if (storedId && storedId !== derivedId) {
          await this._adoptDerivedDeviceId(storedId, derivedId);
        }
        if (storedId !== derivedId) {
          await this._persistLocalDeviceId(derivedId);
        }
        return derivedId;
      }
      this._logError("[Local Font Loader] No platform device identity available; falling back to the stored id");
    }
    if (storedId && typeof storedId === "string") {
      const adoptedId = resolveDeviceAlias(storedId, this.settings.deviceAliases || {});
      if (adoptedId !== storedId) {
        await this._persistLocalDeviceId(adoptedId);
        this._log(`[Local Font Loader] Device id adopted from a device-list repair: ${storedId} -> ${adoptedId}`);
        return adoptedId;
      }
      if (this._sealLegacyEntries(storedId)) {
        await this.saveSettings();
        this._log(`[Local Font Loader] Legacy ledger sealed for held id: ${storedId}`);
      }
      return storedId;
    }
    const deviceId = await this._claimLegacyDeviceId() || this._generateUUID();
    await this._persistLocalDeviceId(deviceId);
    return deviceId;
  }
  /**
   * Writes a device id into device-local storage and verifies it stuck.
   *
   * A silent write failure would hand this device a new identity on every launch, which is
   * precisely the duplication the identity system exists to prevent, so the value is read back
   * rather than trusted.
   *
   * @param {string} deviceId - The id to store
   */
  async _persistLocalDeviceId(deviceId) {
    const STORAGE_KEY = "local-font-loader-device-id";
    try {
      this.app.saveLocalStorage(STORAGE_KEY, deviceId);
      const confirmed = this.app.loadLocalStorage(STORAGE_KEY);
      if (confirmed !== deviceId) {
        this._logError(`[Local Font Loader] Device id did not persist (wrote ${deviceId}, read back ${confirmed}); this device may register again on the next launch.`);
      } else {
        this._log(`[Local Font Loader] Device id persisted: ${deviceId}`);
      }
    } catch (error) {
      this._logError("[Local Font Loader] Failed to persist device-local id:", error);
    }
  }
  /**
   * This device's id as the platform reports it, on mobile only.
   *
   * The raw identifier is hashed rather than stored: the id ends up in `data.json`, which users
   * sync and some keep in version control, and a platform identifier has no business travelling
   * there. The platform is folded into the hash so an Android id can never collide with an iOS
   * one, and the digest is laid out like the uuid the desktop path mints so ids read the same
   * wherever they are displayed.
   *
   * @returns {Promise<string|null>} The derived id, or null when the platform cannot supply one
   */
  async _getPlatformDeviceId() {
    try {
      const deviceBridge = window.Capacitor?.Plugins?.Device;
      if (!deviceBridge || typeof deviceBridge.getId !== "function") {
        return null;
      }
      const { identifier } = await deviceBridge.getId();
      if (!identifier) {
        return null;
      }
      return await this._hashDeviceIdentifier(`${import_obsidian11.Platform.isAndroidApp ? "android" : "ios"}:${identifier}`);
    } catch (error) {
      this._logError("[Local Font Loader] Failed to read the platform device identifier:", error);
      return null;
    }
  }
  /**
   * Hashes a platform identifier into the id this plugin stores.
   *
   * `crypto.subtle` is available in both contexts the plugin runs in: the desktop `app://`
   * document and the mobile `http://localhost/` one, which the webview treats as a secure
   * context. A missing implementation returns null rather than falling back to a weaker hash —
   * two different hashes for one device would fork its identity, which is the whole failure this
   * code exists to avoid.
   *
   * @param {string} value - The platform identifier, already prefixed with its platform
   * @returns {Promise<string|null>} The device id, or null when hashing is unavailable
   */
  async _hashDeviceIdentifier(value) {
    if (!window.crypto || !window.crypto.subtle) {
      this._logError("[Local Font Loader] crypto.subtle is unavailable; cannot derive a device id");
      return null;
    }
    const digest = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    const hex = Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
  }
  /**
   * Hands the entry a device held under its stored id over to its derived id.
   *
   * Without this the first launch on the new identity registers a second row, so every mobile
   * device would gain a duplicate instead of losing one. The name, the recorded history, the
   * preset bindings and the legacy ledger entry all follow, so only the id itself changes.
   *
   * @param {string} fromId - The id the device held in storage
   * @param {string} toId - The id derived from the platform
   */
  async _adoptDerivedDeviceId(fromId, toId) {
    const nameMap = this.settings.deviceNameMap || {};
    const meta = this.settings.deviceMeta || {};
    if (nameMap[fromId] && !nameMap[toId]) {
      nameMap[toId] = nameMap[fromId];
    }
    if (meta[fromId] && !meta[toId]) {
      meta[toId] = meta[fromId];
    }
    delete nameMap[fromId];
    delete meta[fromId];
    this.settings.deviceNameMap = nameMap;
    this.settings.deviceMeta = meta;
    const aliases = { [fromId]: toId };
    this.settings.presets.forEach((preset) => {
      preset.targetDevices = remapDeviceIds(preset.targetDevices, aliases);
    });
    Object.keys(this.settings.deviceFingerprints || {}).forEach((fingerprint) => {
      if (this.settings.deviceFingerprints[fingerprint] === fromId) {
        this.settings.deviceFingerprints[fingerprint] = toId;
      }
    });
    if (!this.settings.deviceAliases) {
      this.settings.deviceAliases = {};
    }
    this.settings.deviceAliases[fromId] = toId;
    await this.saveSettings();
    this._log(`[Local Font Loader] Device id derived from the platform: ${fromId} -> ${toId}`);
  }
  /**
   * Adopts this device's id from the legacy fingerprint ledger, and seals it.
   *
   * The ledger entry is consumed rather than read: every fingerprint pointing at the claimed
   * id is deleted. Two identical devices (same model, screen, locale and core count) produce
   * the same fingerprint, so without sealing they would both migrate onto the same id and be
   * permanently conflated — the exact duplication this ledger was meant to prevent. A device
   * arriving second now finds nothing to claim and mints its own UUID.
   *
   * This runs at most once per installation, because the resulting id is persisted locally.
   *
   * @returns {Promise<string|null>} The claimed id, or null when there is nothing to claim
   */
  async _claimLegacyDeviceId() {
    const ledger = this.settings.deviceFingerprints;
    if (!ledger) {
      return null;
    }
    const fingerprint = this._generateDeviceFingerprint();
    const claimedId = ledger[fingerprint];
    if (!claimedId) {
      return null;
    }
    this._sealLegacyEntries(claimedId);
    await this.saveSettings();
    this._log(`[Local Font Loader] Legacy device id claimed and sealed: ${claimedId}`);
    return claimedId;
  }
  /**
   * Deletes every legacy ledger entry pointing at an id that is now held by a real device.
   *
   * An id is held permanently once a device has it, so the ledger must stop offering it to
   * anyone else. Identical devices produce identical fingerprints, and a stale entry would
   * otherwise let a second one migrate onto an identity that is already in use.
   *
   * @param {string} deviceId - The id to seal
   * @returns {boolean} True when the ledger was modified
   */
  _sealLegacyEntries(deviceId) {
    const ledger = this.settings.deviceFingerprints;
    if (!ledger) {
      return false;
    }
    let changed = false;
    Object.keys(ledger).forEach((key) => {
      if (ledger[key] === deviceId) {
        delete ledger[key];
        changed = true;
      }
    });
    return changed;
  }
  /**
   * Detects platform, OS, OS version and — where the user agent exposes it — the device model.
   *
   * Match order matters: an Android UA also contains "Linux" and an iOS UA also contains
   * "Mac OS X", so those two must be tested before the desktop branches — otherwise their
   * branches are unreachable and every Android reports as Linux.
   *
   * No OS version is recorded anywhere, on purpose: a system upgrade would otherwise change
   * the stored metadata and make every synced device look like it had changed.
   *
   * @returns {{platform: string, os: string, model: string, hostname: string}}
   */
  _detectDeviceInfo() {
    const ua = browserNavigator.userAgent;
    const platform = import_obsidian11.Platform.isMobile ? "mobile" : "desktop";
    const hostname = this._getDesktopHostname();
    if (import_obsidian11.Platform.isIosApp || /iPhone|iPad|iPod/.test(ua)) {
      const isTablet = import_obsidian11.Platform.isTablet || /iPad/.test(ua);
      return {
        platform: "mobile",
        os: isTablet ? "ipados" : "ios",
        model: isTablet ? "iPad" : /iPod/.test(ua) ? "iPod" : "iPhone",
        hostname: ""
      };
    }
    if (/Android/.test(ua)) {
      const platformBlock = (ua.match(/\(([^)]*)\)/) || [])[1] || "";
      const segments = platformBlock.split(";").map((segment) => segment.trim());
      const androidIndex = segments.findIndex((segment) => /^Android\s/i.test(segment));
      let model = "";
      for (let i = androidIndex >= 0 ? androidIndex + 1 : 0; i < segments.length; i++) {
        const segment = segments[i];
        if (!segment) {
          continue;
        }
        if (/^wv$/i.test(segment)) {
          continue;
        }
        if (/^[a-z]{2}(-[A-Za-z]{2})?$/.test(segment)) {
          continue;
        }
        model = segment.replace(/\s*Build\/.*$/i, "").trim();
        break;
      }
      return {
        platform: "mobile",
        os: "android",
        model,
        hostname: ""
      };
    }
    const nodePlatform = this._getDesktopOsPlatform();
    if (nodePlatform === "win32") {
      return { platform, os: "windows", model: "", hostname };
    }
    if (nodePlatform === "darwin") {
      return { platform: "desktop", os: "macos", model: "", hostname };
    }
    if (nodePlatform) {
      return { platform: "desktop", os: "linux", model: "", hostname };
    }
    if (/Windows/.test(ua)) {
      return { platform, os: "windows", model: "", hostname };
    }
    if (/Mac OS X|Macintosh/.test(ua)) {
      return { platform: "desktop", os: "macos", model: "", hostname };
    }
    if (/Linux|X11/.test(ua)) {
      return { platform: "desktop", os: "linux", model: "", hostname };
    }
    return { platform, os: "unknown", model: "", hostname };
  }
  /**
   * Reads this desktop's OS from Node, which the mobile WebView does not have.
   *
   * Kept separate from the UA path so the desktop branch never has to sniff a user agent, and
   * returns null (rather than throwing) wherever Node is out of reach.
   *
   * @returns Node's `process.platform` value, or null when unavailable
   */
  _getDesktopOsPlatform() {
    if (!import_obsidian11.Platform.isDesktopApp) {
      return null;
    }
    try {
      const process = window.process;
      return process?.platform ?? null;
    } catch (error) {
      this._logError("[Local Font Loader] Could not read the desktop platform:", error);
      return null;
    }
  }
  /**
   * Reads the machine's hostname.
   *
   * Desktop only: it goes through Node's `os` module, which the mobile WebView does not have.
   * Guarded on both the platform check and a try/catch, because a plugin that throws during
   * device detection would fail to load entirely.
   *
   *
   * @returns {string} The hostname, or an empty string when unavailable
   */
  _getDesktopHostname() {
    if (!import_obsidian11.Platform.isDesktopApp) {
      return "";
    }
    try {
      const nodeRequire = window.require;
      const os = nodeRequire?.("os");
      if (!os) return "";
      return String(os.hostname() || "").trim();
    } catch (error) {
      this._logError("[Local Font Loader] Failed to read hostname:", error);
      return "";
    }
  }
  /**
   * Tells whether a name is one this plugin generated rather than one the user typed.
   *
   * Only generated names are ever refreshed on upgrade — a user-chosen name is never
   * overwritten.
   *
   * @param {string} name - The stored device name
   * @param {object} [meta] The device's recorded metadata, when available
   * @returns {boolean} True when the name matches a generated default
   */
  _isGeneratedDeviceName(name, meta) {
    return isGeneratedDeviceName(name, meta);
  }
  /**
   * Get the default device name.
   *
   * Names the device after what it actually is, because "Desktop-Linux" and "Mobile-Android"
   * are indistinguishable across several machines: the hostname on a desktop, the model on a
   * phone. The platform + OS form is only a fallback for the cases where neither is available.
   *
   * @param {object} [deviceInfo] Pre-computed info from _detectDeviceInfo()
   * @returns {string} The default device name
   */
  _getDefaultDeviceName(deviceInfo) {
    const info = deviceInfo || this._detectDeviceInfo();
    if (info.hostname) {
      return info.hostname;
    }
    if (info.model) {
      return info.model;
    }
    const osLabels = {
      ios: "iOS",
      ipados: "iPadOS",
      android: "Android",
      windows: "Windows",
      macos: "Mac",
      linux: "Linux",
      unknown: "Unknown"
    };
    const osLabel = osLabels[info.os] || "Unknown";
    const platform = info.platform === "mobile" ? "Mobile" : "Desktop";
    return `${platform}-${osLabel}`;
  }
  /**
   * Get the OS key recorded for a device, for icon and model rendering.
   * @param {string} deviceId - The device ID
   * @returns {string} One of 'android' | 'ios' | 'ipados' | 'windows' | 'macos' | 'linux' | 'unknown'
   */
  _getDeviceOs(deviceId) {
    const meta = this.settings.deviceMeta && this.settings.deviceMeta[deviceId];
    return meta && meta.os ? meta.os : "unknown";
  }
  /**
   * Get the machine name recorded for a device (desktops only; empty elsewhere).
   *
   * This is what makes a renamed desktop still identifiable: the display name is
   * user-editable, so the machine it actually is has to be shown separately.
   *
   * @param {string} deviceId - The device ID
   * @returns {string} The hostname, or an empty string
   */
  _getDeviceHostname(deviceId) {
    const meta = this.settings.deviceMeta && this.settings.deviceMeta[deviceId];
    return meta && meta.hostname ? meta.hostname : "";
  }
  /**
   * Get the model string recorded for a device (may be empty when the UA omits it).
   * @param {string} deviceId - The device ID
   * @returns {string} The model, or an empty string
   */
  _getDeviceModel(deviceId) {
    const meta = this.settings.deviceMeta && this.settings.deviceMeta[deviceId];
    return meta && meta.model ? meta.model : "";
  }
  /**
   * Generate a device fingerprint.
   *
   * MIGRATION ONLY — this is no longer an identity source. Screen size, timezone offset and
   * language all drift (rotation, split screen, DST, zoom), so a fingerprint-based id
   * produced a new "device" on nearly every launch. It is kept solely to map already-installed
   * devices onto their previous id once.
   *
   *
   * @returns {string} The device fingerprint
   */
  _generateDeviceFingerprint() {
    const platform = import_obsidian11.Platform.isMobile ? "mobile" : "desktop";
    const ua = browserNavigator.userAgent;
    const features = [
      ua,
      `${screen.width}x${screen.height}`,
      // screen resolution
      `${screen.availWidth}x${screen.availHeight}`,
      // available screen size
      (/* @__PURE__ */ new Date()).getTimezoneOffset().toString(),
      // timezone offset
      browserNavigator.language,
      // language
      browserNavigator.hardwareConcurrency || "unknown"
      // CPU core count
    ];
    const hash = (str) => {
      let h = 0;
      for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h = h & h;
      }
      return Math.abs(h).toString(36);
    };
    const fingerprint = hash(features.join("|"));
    return `${platform}-${fingerprint}`;
  }
  /**
   * Ensure the device preset exists
   */
  async _ensureDevicePreset() {
    let changed = false;
    if (!this.settings.presets.some((preset) => preset.id === "default-preset")) {
      const base = this.settings.presets[0] || DEFAULT_SETTINGS.presets[0];
      this.settings.presets.unshift({
        ...structuredClone(base),
        id: "default-preset",
        name: "Default",
        targetDevices: []
      });
      changed = true;
    }
    const inherited = inheritSimilarDevicePresets(
      this.settings.presets,
      this.settings.deviceMeta,
      this.settings.deviceAliases
    );
    if (inherited > 0) {
      this._log(`[Local Font Loader] Inherited presets for ${inherited} similar device(s)`);
    }
    if (changed || inherited > 0) {
      await this._persistStartupState();
    }
  }
  // ============================================================================
  // Font Scanning (original methods)
  // ============================================================================
  /**
   * Creates a folder together with every missing folder above it.
   *
   * `adapter.mkdir` creates a single level and fails when the parent is not there yet. That
   * goes unnoticed on desktop, where these folders tend to already exist, and breaks mobile:
   * a configured path such as `Components/Library/Fonts/B64Font` is three levels deep, and the
   * failed mkdir left the conversion with nowhere to write its output.
   *
   * @param path - The vault-relative folder path
   */
  async _ensureFolder(path) {
    const segments = String(path || "").split("/").filter(Boolean);
    let current = "";
    for (const segment of segments) {
      current = current ? `${current}/${segment}` : segment;
      try {
        if (!await this.app.vault.adapter.exists(current)) {
          await this.app.vault.adapter.mkdir(current);
        }
      } catch (error) {
        this._logError(`[Local Font Loader] Could not create the folder ${current}:`, error);
      }
    }
  }
  // Scan the font directory (using the built-in metadata parser)
  /**
   * Import fonts from a file list
   * @param {FileList} files - The list of font files selected by the user
   */
  async importFontsFromFiles(files) {
    this._log(`[Local Font Loader] Starting to import ${files.length} font files...`);
    let imported = 0;
    for (const file of files) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const targetDir = `${this.settings.fontSourceDir}/Imported`;
        const targetPath = `${targetDir}/${file.name}`;
        await this._ensureFolder(targetDir);
        await this.app.vault.adapter.writeBinary(targetPath, arrayBuffer);
        imported++;
        this._log(`[Local Font Loader] Imported: ${file.name}`);
      } catch (error) {
        this._logError(`[Local Font Loader] Failed to import ${file.name}:`, error);
      }
    }
    this._log(`[Local Font Loader] Import completed: ${imported}/${files.length} fonts`);
    return imported;
  }
  async scanFonts() {
    const startTime = performance.now();
    if (this._isScanning) {
      this._log("[Local Font Loader] Scan already in progress, ignoring duplicate call");
      return;
    }
    this._isScanning = true;
    try {
      this._log("[Local Font Loader] Scanning font family folders...");
      await this._ensureFolder(this.settings.fontSourceDir);
      const dirList = await this.app.vault.adapter.list(this.settings.fontSourceDir);
      const fontDirs = dirList.folders;
      this._log(`[Local Font Loader] Found ${fontDirs.length} font family folders`);
      const previousFonts = this.settings.availableFonts;
      this.settings.availableFonts = [];
      this.settings.fontFamilies = [];
      const fontMap = /* @__PURE__ */ new Map();
      for (const fontDir of fontDirs) {
        try {
          const folderName = fontDir.split("/").pop();
          const metadataPath = `${fontDir}/.fontfamily.json`;
          let metadata = null;
          try {
            const metadataContent = await this.app.vault.adapter.read(metadataPath);
            metadata = JSON.parse(metadataContent);
            this._log(`[Local Font Loader] Reading family metadata: ${metadata.familyName || folderName}`);
          } catch {
            this._log(`[Local Font Loader] Metadata file not found: ${metadataPath}, will auto-scan`);
          }
          const family = {
            familyName: metadata?.familyName || folderName,
            folderPath: fontDir,
            hasRegular: false,
            hasItalic: false,
            hasBold: false,
            hasBoldItalic: false
          };
          if (metadata && metadata.variants) {
            for (const [variantType, filename] of Object.entries(metadata.variants)) {
              const fontPath = `${fontDir}/${filename}`;
              try {
                if (!await this.app.vault.adapter.exists(fontPath)) {
                  throw new Error("font file missing");
                }
                const basename = filename ?? "";
                const name = basename.replace(/\.(ttf|otf|woff|woff2)$/i, "");
                const ext = (basename.split(".").pop() || "").toLowerCase();
                const fontInfo = {
                  name,
                  path: fontPath,
                  basename,
                  ext,
                  familyName: family.familyName,
                  // use the correct family name from the metadata
                  variantType
                };
                if (!fontMap.has(name)) {
                  fontMap.set(name, fontInfo);
                }
                if (variantType === "regular") family.hasRegular = true;
                else if (variantType === "italic") family.hasItalic = true;
                else if (variantType === "bold") family.hasBold = true;
                else if (variantType === "bolditalic") family.hasBoldItalic = true;
                this._log(`[Local Font Loader] Identified font: ${family.familyName} (${variantType})`);
              } catch {
                this._log(`[Local Font Loader] Font file does not exist: ${fontPath}`);
              }
            }
          } else {
            const files = await this.app.vault.adapter.list(fontDir);
            const fontFiles = files.files.filter((f) => /\.(ttf|otf|woff|woff2)$/i.test(f));
            this._log(`[Local Font Loader] Auto-scanning ${fontFiles.length} font files in ${folderName}...`);
            const scanPromises = fontFiles.map(async (fontPath) => {
              try {
                const basename = fontPath.split("/").pop() || "";
                const name = basename.replace(/\.(ttf|otf|woff|woff2)$/i, "");
                const ext = (basename.split(".").pop() || "").toLowerCase();
                const arrayBuffer = await this.app.vault.adapter.readBinary(fontPath);
                const fontMetadata = parseFontMetadata(arrayBuffer);
                const realFamilyName = fontMetadata?.familyName || family.familyName;
                const variantType = fontMetadata?.variantType || "regular";
                const fontInfo = {
                  name,
                  path: fontPath,
                  basename,
                  ext,
                  familyName: realFamilyName,
                  // use the correct family name from the font itself
                  variantType
                };
                this._log(`[Local Font Loader] Auto-detected: ${realFamilyName} (${variantType})`);
                return { success: true, fontInfo, variantType };
              } catch (error) {
                this._logError(`[Local Font Loader] Failed to scan font: ${fontPath}`, error);
                return { success: false, fontPath, error };
              }
            });
            const scanResults = await Promise.all(scanPromises);
            for (const result of scanResults) {
              if (result.success) {
                const scannedFont = result.fontInfo;
                if (scannedFont && !fontMap.has(scannedFont.name)) {
                  fontMap.set(scannedFont.name, scannedFont);
                }
                if (result.variantType === "regular") family.hasRegular = true;
                else if (result.variantType === "italic") family.hasItalic = true;
                else if (result.variantType === "bold") family.hasBold = true;
                else if (result.variantType === "bolditalic") family.hasBoldItalic = true;
              }
            }
          }
          if (family.hasRegular || family.hasItalic || family.hasBold || family.hasBoldItalic) {
            this.settings.fontFamilies.push(family);
          }
        } catch (error) {
          this._logError(`[Local Font Loader] Failed to process font family: ${fontDir}`, error);
        }
      }
      for (const prevFont of previousFonts) {
        if (fontMap.has(prevFont.name)) continue;
        let stillExists = false;
        if (prevFont.path) {
          try {
            stillExists = await this.app.vault.adapter.exists(prevFont.path);
          } catch {
            stillExists = false;
          }
        }
        if (!stillExists) {
          const { exists, ...cleanFont } = prevFont;
          fontMap.set(prevFont.name, cleanFont);
        }
      }
      this.settings.availableFonts = Array.from(fontMap.values());
      await this.saveSettings();
      await this._refreshFontExistence();
      const endTime = performance.now();
      this._log(`[Local Font Loader] Scan completed: ${this.settings.fontFamilies.length} font families, ${this.settings.availableFonts.length} variants, took ${(endTime - startTime).toFixed(2)}ms`);
    } catch (error) {
      const endTime = performance.now();
      this._logError(`[Local Font Loader] \u626B\u63CF\u5931\u8D25\uFF0C\u8017\u65F6 ${(endTime - startTime).toFixed(2)}ms:`, error);
      await this.saveSettings();
    } finally {
      this._isScanning = false;
    }
  }
  /**
   * Adopts the configured math font's own metrics into MathJax's layout tables.
   *
   * MathJax lays out maths from a pre-built metric table, not from the font file: each glyph
   * carries [height, depth, width] computed offline for MathJax's own TeX fonts, and every
   * padding, script offset and stretchy-assembly width is derived from those numbers. Swapping
   * the font that draws a glyph without swapping those numbers leaves the glyph from one font
   * laid out with another font's geometry — which is what puts a gap between a radical's hook
   * and its bar, and makes superscripts drift away from their base.
   *
   * This measures the rendered font and writes the measurements back, so MathJax recomputes
   * its geometry from what is actually drawn. Measuring the rendered font rather than the
   * declared one also means a glyph the family lacks is measured as the fallback that will
   * draw it, which is the honest answer.
   *
   * Cost is paid once per font change, never per render: afterwards MathJax works from the
   * table exactly as it always did.
   *
   * @param {string} familyName - The configured math font family
   * @returns {boolean} True when metrics were adopted
   */
  /**
   * MathJax's CHTML font table — the metrics maths is laid out from.
   *
   * Reached through the output jax, not through the config. `config.chtml.font` holds the font
   * *name* (`"mathjax-tex"` on MathJax 4.1.3, the build Obsidian 1.14 ships), and reading the
   * table there is what made this whole step a silent no-op: the shape guard failed, adoption
   * returned before measuring anything, and maths kept rendering in the user's font while being
   * laid out with MathJax's own metrics.
   *
   * @returns the table, or null when MathJax is not up or nothing carries one yet
   */
  _getMathFontData() {
    try {
      const mathJax = window.MathJax;
      const candidates = [
        mathJax?.startup?.output?.font,
        mathJax?.startup?.document?.outputJax?.font
      ];
      for (const candidate of candidates) {
        const variant = candidate?.variant;
        if (variant && typeof variant === "object") {
          return candidate;
        }
      }
      return null;
    } catch (error) {
      this._logError("[Local Font Loader] Could not reach MathJax's font table:", error);
      return null;
    }
  }
  /**
   * Waits for MathJax to build the font table maths is laid out from.
   *
   * The table does not exist until MathJax initialises, and MathJax initialises when the first
   * formula is typeset — not when the app starts. The apply that follows a font change runs in
   * the first second of a session, so asking once means asking too early.
   *
   * @returns the table, or null when it never appeared within the budget
   */
  async _waitForMathFontData(attempts = 24, delayMs = 250) {
    for (let attempt = 0; attempt < attempts; attempt++) {
      const fontData = this._getMathFontData();
      if (fontData) {
        return fontData;
      }
      await new Promise((resolve) => window.setTimeout(resolve, delayMs));
    }
    return null;
  }
  /**
   * Waits for the math font to be usable, up to a few seconds.
   *
   * `document.fonts.load()` resolves immediately — with nothing — when no declared face matches
   * the request yet, which is exactly the state of a cold start: the faces arrive with the CSS
   * snippet, and Obsidian re-reads that a moment after it is written. One attempt is therefore
   * not enough to tell "this font is missing" from "this font is not there yet".
   *
   * @param familyName - The configured math font family
   * @returns whether the font is available for measuring
   */
  async _waitForMathFont(familyName, attempts = 12, delayMs = 250) {
    for (let attempt = 0; attempt < attempts; attempt++) {
      try {
        await document.fonts.load(`16px "${familyName}"`);
      } catch (error) {
        this._logError(`[Local Font Loader] Could not load math font "${familyName}":`, error);
      }
      if (document.fonts.check(`16px "${familyName}"`)) {
        return true;
      }
      await new Promise((resolve) => window.setTimeout(resolve, delayMs));
    }
    return false;
  }
  /**
   * Adopts the math font's metrics once MathJax is ready, if the apply was too early.
   */
  async _retryMathMetricAdoption() {
    try {
      const preset = this._getDevicePreset();
      const familyName = preset && preset.fonts ? preset.fonts.math : "";
      if (!familyName || this._mathFontSnapshot) {
        return;
      }
      const now = Date.now();
      if (now - this._mathAdoptionAttemptAt < MATH_ADOPTION_RETRY_MS) {
        return;
      }
      this._mathAdoptionAttemptAt = now;
      const adopted = await this._adoptMathFontMetrics(familyName);
      if (adopted) {
        await this._afterMetricAdoption();
        this._log("[Local Font Loader] Math font metrics adopted on a later attempt");
      }
    } catch (error) {
      this._logError("[Local Font Loader] Could not adopt the math font metrics:", error);
    }
  }
  /**
   * What has to happen once the metrics are in place, from whichever path adopted them.
   *
   * The box overrides come first because they are what makes the new numbers reach the screen;
   * the MathJax pass afterwards is what puts every glyph back on a rule of its own.
   */
  async _afterMetricAdoption() {
    this.applyCss(this._buildMathGlyphRules(), FONT_GLYPHS_ID);
    await this._rebuildMathJaxStyles();
    this._refreshMathViews();
  }
  /**
   * One row per font category, saying which font is configured and how it is being adapted.
   *
   * The adaptation column is deliberately a list. A category is often served by more than one
   * layer — a family adapter reading that family's own metrics, with the measurement fallback
   * covering whatever the family does not ship — and naming only the font would hide that. Where
   * a layer could not be identified, the row says so rather than implying a single clean answer.
   */
  _collectFontStatusRows() {
    const preset = this._getDevicePreset();
    const fonts = preset && preset.fonts || {};
    const categories = [
      { key: "ui", label: "Interface" },
      { key: "text", label: "Text" },
      { key: "heading", label: "Heading" },
      { key: "monospace", label: "Monospace" },
      { key: "math", label: "Math" }
    ];
    return categories.map(({ key, label }) => {
      const family = (fonts[key] || "").trim();
      const variants = (this.settings.availableFonts || []).filter(
        (f) => f.familyName && f.familyName === family || f.name === family
      );
      const row = {
        category: label,
        family,
        adaptation: [],
        source: "",
        files: variants.map((v) => v.variantType).join(", "),
        gaps: []
      };
      if (!family) {
        return row;
      }
      if (key === "math") {
        if (this._mathAdaptationLayer) {
          row.adaptation.push(this._mathAdaptationLayer);
          row.source = this._mathAdaptationSource;
        } else {
          row.adaptation.push("Not worked out yet \u2014 formulas use the MathJax defaults for now");
          row.source = "The MathJax defaults";
        }
        row.adaptation.push("Braces and arrows keep the MathJax sizes \u2014 those pieces come from MathJax itself");
        for (const gap of this._mathCoverageGaps) {
          row.gaps.push(gap);
        }
      } else {
        row.adaptation.push("Used as-is through CSS");
        row.source = "Not applicable \u2014 text is laid out by the text engine";
      }
      return row;
    });
  }
  /**
   * Asks the font's own adapter for its metrics, by reading the font file.
   *
   * @param familyName - the configured math family
   * @returns the metrics plus which adapter produced them, or null when no adapter claims the family
   */
  /**
   * What the standards layer said about a family.
   *
   * 'unclaimed' means no family adapter wanted it, so measuring is still fair game. A
   * 'declined' is different and final: an adapter matched the family and refused to size it,
   * which is what the MathJax reference adapter does for its own faces. Measuring after that
   * refusal would undo it, so the caller must not fall through.
   */
  async _resolveMathMetricsFromStandards(familyName) {
    try {
      const adapter = findMathFontAdapter(familyName);
      if (!adapter) {
        return { kind: "unclaimed" };
      }
      const record = (this.settings.availableFonts || []).find(
        (f) => f.familyName && f.familyName === familyName || f.name === familyName
      );
      if (!record || !record.path) {
        return { kind: "declined", adapterName: adapter.name };
      }
      if (!await this.app.vault.adapter.exists(record.path)) {
        return { kind: "declined", adapterName: adapter.name };
      }
      const binary = await this.app.vault.adapter.readBinary(record.path);
      const result = buildMathMetrics(binary, familyName);
      if (!result) {
        return { kind: "declined", adapterName: adapter.name };
      }
      this._log(`[Local Font Loader] Math metrics from "${result.adapterName}" (${result.metrics.source})`);
      return { kind: "metrics", metrics: result.metrics, adapterName: result.adapterName };
    } catch (error) {
      this._logError("[Local Font Loader] Could not read the math font's own metrics:", error);
      return { kind: "unclaimed" };
    }
  }
  /**
   * Writes resolved metrics into MathJax's table.
   *
   * Only `variant.*.chars` is touched. `delimiters.*.HDW` sizes the stretchy assemblies MathJax
   * draws from its own private-use pieces, so those targets are MathJax's to set no matter which
   * font is substituted — overwriting them is what put braces at the wrong height before.
   *
   * @returns whether anything was adopted
   */
  _applyMathMetrics(fontData, metrics, adapterName) {
    try {
      this._restoreMathFontMetrics();
      const snapshot = { chars: [], delimiters: [] };
      let adopted = 0;
      for (const variantName of Object.keys(fontData.variant ?? {})) {
        const chars = fontData.variant[variantName]?.chars;
        if (!chars) {
          continue;
        }
        for (const code of Object.keys(metrics.chars)) {
          const wanted = metrics.chars[code];
          const entry = chars[code];
          if (!Array.isArray(entry) || entry.length < 3) {
            continue;
          }
          const before = [Number(entry[0]), Number(entry[1]), Number(entry[2])];
          if (before[0] === wanted[0] && before[1] === wanted[1] && before[2] === wanted[2]) {
            continue;
          }
          snapshot.chars.push({ variantName, code, values: before });
          entry[0] = wanted[0];
          entry[1] = wanted[1];
          entry[2] = wanted[2];
          adopted++;
        }
      }
      if (adopted === 0) {
        this._log("[Local Font Loader] The family adapter found nothing to change; leaving MathJax metrics as they are.");
        return false;
      }
      this._mathFontSnapshot = snapshot;
      this._mathAdaptationLayer = `${adapterName} \u2014 ${adopted} glyph sizes read from the font`;
      this._mathAdaptationSource = metrics.source === "opentype-math" ? "Its own OpenType MATH table" : metrics.source === "tex-tfm" ? "The TeX design constants this font follows" : metrics.source === "measured" ? "Worked out from rendered text \u2014 a guess, not the font\u2019s own numbers" : "Read from the font file";
      this._mathCoverageGaps = metrics.gaps ?? [];
      for (const note of metrics.notes ?? []) {
        this._log(`[Local Font Loader] ${adapterName}: ${note}`);
      }
      this._log(`[Local Font Loader] Adopted ${adopted} glyph boxes from ${adapterName}; delimiter sizes left to MathJax.`);
      return true;
    } catch (error) {
      this._logError("[Local Font Loader] Could not apply the font's own metrics:", error);
      return false;
    }
  }
  async _adoptMathFontMetrics(familyName) {
    const mathJax = window.MathJax;
    if (!familyName || !mathJax || !document.fonts) {
      return false;
    }
    const fontData = await this._waitForMathFontData();
    if (!fontData) {
      this._log("[Local Font Loader] MathJax's font table never became available; metrics not adopted");
      return false;
    }
    const fromStandard = await this._resolveMathMetricsFromStandards(familyName);
    if (fromStandard.kind === "metrics") {
      return this._applyMathMetrics(fontData, fromStandard.metrics, fromStandard.adapterName);
    }
    if (fromStandard.kind === "declined") {
      this._mathAdaptationLayer = `${fromStandard.adapterName} declined \u2014 MathJax's own numbers kept`;
      this._mathAdaptationSource = "The MathJax defaults";
      this._log(`[Local Font Loader] ${fromStandard.adapterName} declined this family; nothing measured.`);
      return false;
    }
    if (!await this._waitForMathFont(familyName)) {
      this._log(`[Local Font Loader] Math font "${familyName}" did not become available; metrics not adopted`);
      return false;
    }
    const canvas = createEl("canvas");
    canvas.width = 8;
    canvas.height = 8;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return false;
    }
    const SIZE = 200;
    const measure = (char) => {
      try {
        ctx.font = `${SIZE}px "${familyName}"`;
        const m = ctx.measureText(char);
        return {
          h: (m.actualBoundingBoxAscent || 0) / SIZE,
          d: (m.actualBoundingBoxDescent || 0) / SIZE,
          w: m.width / SIZE
        };
      } catch {
        return null;
      }
    };
    this._restoreMathFontMetrics();
    const snapshot = { chars: [], delimiters: [] };
    let adopted = 0;
    Object.keys(fontData.variant).forEach((variantName) => {
      const chars = fontData.variant[variantName].chars;
      if (!chars) return;
      Object.keys(chars).forEach((code) => {
        const entry = chars[code];
        if (!Array.isArray(entry) || entry.length < 3) return;
        const extra = entry[3] || {};
        const codePoint = Number(code);
        const isMathItalicRange = codePoint >= 119860 && codePoint <= 119911;
        const drawChar = isMathItalicRange ? String.fromCodePoint(codePoint) : extra.c ? String(extra.c) : String.fromCodePoint(codePoint);
        const measured = measure(drawChar);
        if (!measured || measured.w === 0 && measured.h === 0) {
          return;
        }
        snapshot.chars.push({ variantName, code, values: [Number(entry[0]), Number(entry[1]), Number(entry[2])] });
        entry[0] = measured.h;
        entry[1] = measured.d;
        entry[2] = measured.w;
        adopted++;
      });
    });
    Object.keys(fontData.delimiters || {}).forEach((code) => {
      const delimiter = fontData.delimiters[code];
      if (!delimiter || !Array.isArray(delimiter.HDW)) return;
      const measured = measure(String.fromCodePoint(Number(code)));
      if (!measured || measured.w === 0 && measured.h === 0) return;
      snapshot.delimiters.push({ code, values: delimiter.HDW.slice() });
      delimiter.HDW = [measured.h, measured.d, measured.w];
    });
    this._mathFontSnapshot = snapshot;
    this._mathAdaptationLayer = `Worked out by rendering the text \u2014 ${adopted} glyph sizes measured`;
    this._mathAdaptationSource = "Worked out from rendered text \u2014 a guess, not the font\u2019s own numbers";
    this._mathCoverageGaps = [];
    this._log(`[Local Font Loader] Math font metrics adopted from "${familyName}": ${adopted} glyphs, ${snapshot.delimiters.length} delimiters`);
    return true;
  }
  /**
   * Puts MathJax's original metrics back.
   */
  _restoreMathFontMetrics() {
    const snapshot = this._mathFontSnapshot;
    if (!snapshot) {
      return;
    }
    const fontData = this._getMathFontData();
    if (!fontData) {
      this._mathFontSnapshot = null;
      return;
    }
    snapshot.chars.forEach(({ variantName, code, values }) => {
      const chars = fontData.variant[variantName] && fontData.variant[variantName].chars;
      if (chars && chars[code]) {
        chars[code][0] = values[0];
        chars[code][1] = values[1];
        chars[code][2] = values[2];
      }
    });
    snapshot.delimiters.forEach(({ code, values }) => {
      if (fontData.delimiters && fontData.delimiters[code]) {
        fontData.delimiters[code].HDW = values.slice();
      }
    });
    this._log(`[Local Font Loader] Math font metrics restored (${snapshot.chars.length} glyphs)`);
    this._mathFontSnapshot = null;
  }
  /**
   * Makes MathJax rebuild its stylesheet so adopted metrics take effect.
   *
   * MathJax caches generated CSS, and in adaptive mode only ever adds rules for glyphs it has
   * not yet emitted — so clearing the cache alone leaves the sheet with holes instead of a
   * clean rebuild. Adaptive mode is therefore switched off for the rebuild, which is what makes
   * it emit everything.
   *
   * The rebuild is driven by a throwaway typeset rather than by re-rendering open notes:
   * a note in editing mode has no preview to rerender, so relying on views would leave the
   * stylesheet deleted and the maths unstyled. Typesetting one isolated formula regenerates it
   * deterministically, wherever the user happens to be.
   *
   * @returns {Promise<boolean>} True when the stylesheet was rebuilt
   */
  /**
   * Per-glyph rules carrying height, depth and advance, generated for the whole table.
   *
   * The variant is part of the selector: MathJax marks the maths it lays out with a `TEX-*`
   * class, so the unguarded rules cover the plain variant and the guarded ones override them
   * for bold, italic and bold-italic, which share the same glyph classes.
   *
   * @returns the CSS block, or an empty string when there is no table to read
   */
  _buildMathGlyphRules() {
    try {
      const fontData = this._getMathFontData();
      if (!fontData || !fontData.variant) {
        return "";
      }
      const guards = {
        normal: "",
        bold: ".TEX-B",
        italic: ".TEX-I",
        "bold-italic": ".TEX-BI"
      };
      const original = /* @__PURE__ */ new Map();
      for (const saved of this._mathFontSnapshot?.chars ?? []) {
        original.set(`${saved.variantName}@${saved.code}`, saved.values.map((v) => Number(v).toFixed(4)).join(","));
      }
      let css = "/* Per-glyph boxes that differ from MathJax's own, so display does not depend on its stylesheet */\n";
      let count = 0;
      for (const variantName of Object.keys(guards)) {
        const variant = fontData.variant[variantName];
        const chars = variant && variant.chars;
        if (!chars) {
          continue;
        }
        const guard = guards[variantName];
        for (const code of Object.keys(chars)) {
          const entry = chars[code];
          if (!Array.isArray(entry) || entry.length < 3) {
            continue;
          }
          const height = Number(entry[0]);
          const depth = Number(entry[1]);
          const width = Number(entry[2]);
          if (!Number.isFinite(height) || !Number.isFinite(depth) || !Number.isFinite(width)) {
            continue;
          }
          const key = `${variantName}@${code}`;
          const now = [height, depth, width].map((v) => v.toFixed(4)).join(",");
          if (original.get(key) === now) {
            continue;
          }
          const glyphClass = "mjx-c" + Number(code).toString(16).toUpperCase();
          css += `body mjx-c.${glyphClass}${guard} {
`;
          css += `  padding-top: ${Math.max(0, height).toFixed(4)}em !important;
`;
          css += `  padding-right: ${Math.max(0, width).toFixed(4)}em !important;
`;
          css += `  padding-bottom: ${Math.max(0, depth).toFixed(4)}em !important;
`;
          css += `  padding-left: 0 !important;
`;
          css += `}
`;
          count++;
        }
      }
      return count ? css + "\n" : "";
    } catch (error) {
      this._logError("[Local Font Loader] Could not generate the per-glyph rules:", error);
      return "";
    }
  }
  async _rebuildMathJaxStyles() {
    return !!document.getElementById("MJX-CHTML-styles");
  }
  /**
   * Re-renders open reading views so the rebuilt stylesheet reaches them.
   */
  _refreshMathViews() {
    try {
      this.app.workspace.iterateAllLeaves((leaf) => {
        const view = leaf.view;
        if (view && view.previewMode && typeof view.previewMode.rerender === "function") {
          view.previewMode.rerender(true);
        }
      });
    } catch (error) {
      this._logError("[Local Font Loader] Failed to refresh math views:", error);
    }
  }
  /**
   * Judges whether a math font can lay out correctly under MathJax CHTML.
   *
   * MathJax bakes per-glyph padding computed from its own TeX fonts, which use Computer Modern
   * metrics: digit 0.5em, plus 0.778em, math-italic x 0.557em, and a surd whose ink spans
   * 0.2031em below and 0.8125em above the baseline. A substituted font aligns only when its
   * own metrics land near those — otherwise radicals grow a gap between the hook and the bar,
   * and scripts drift away from their base. Nothing in the CSS can compensate, so the honest
   * move is to say so rather than silently render it wrong.
   *
   * The measurement runs on the rendered font, not on its declared name: a glyph the family
   * lacks is served by a fallback face, and canvas reports that face's metrics — so the verdict
   * follows what actually gets drawn.
   *
   * @param {string} familyName - The font family to inspect
   * @returns {{status: string, deviations: Array, missing?: string[]}}
   *          status is 'ok' | 'mismatch' | 'notMathFont' | 'unavailable'
   */
  _evaluateMathFont(familyName) {
    const REFERENCE = {
      surdAbove: 0.8125,
      surdBelow: 0.2031,
      mathItalicX: 0.557,
      digitOne: 0.5,
      plus: 0.778
    };
    const TOLERANCE = 0.1;
    if (!familyName || typeof document === "undefined" || !document.fonts) {
      return { status: "unavailable", deviations: [] };
    }
    try {
      if (!document.fonts.check(`16px "${familyName}"`)) {
        return { status: "unavailable", deviations: [] };
      }
    } catch {
      return { status: "unavailable", deviations: [] };
    }
    const canvas = createEl("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return { status: "unavailable", deviations: [] };
    }
    const SIZE = 200;
    const advanceOf = (char) => {
      try {
        ctx.font = `${SIZE}px "${familyName}"`;
        return ctx.measureText(char).width / SIZE;
      } catch {
        return 0;
      }
    };
    const inkOf = (char) => {
      try {
        ctx.font = `${SIZE}px "${familyName}"`;
        const metrics = ctx.measureText(char);
        return {
          above: (metrics.actualBoundingBoxAscent || 0) / SIZE,
          below: (metrics.actualBoundingBoxDescent || 0) / SIZE
        };
      } catch {
        return { above: 0, below: 0 };
      }
    };
    const surd = inkOf("\u221A");
    const measured = {
      surdAbove: surd.above,
      surdBelow: surd.below,
      mathItalicX: advanceOf("\u{1D465}"),
      digitOne: advanceOf("1"),
      plus: advanceOf("+")
    };
    const missing = [];
    if (measured.mathItalicX <= 0) missing.push("\u{1D465}");
    if (measured.surdAbove <= 0) missing.push("\u221A");
    if (missing.length > 0) {
      return { status: "notMathFont", deviations: [], missing };
    }
    const deviations = [];
    Object.keys(REFERENCE).forEach((metric) => {
      const actual = measured[metric];
      if (!actual) return;
      const ratio = Math.abs(actual - REFERENCE[metric]) / REFERENCE[metric];
      if (ratio > TOLERANCE) {
        deviations.push({
          metric,
          actual: Number(actual.toFixed(3)),
          expected: REFERENCE[metric],
          percent: Math.round(ratio * 100)
        });
      }
    });
    return {
      status: deviations.length > 0 ? "mismatch" : "ok",
      deviations
    };
  }
  /**
   * Check whether a font exists in the vault
   * @param {string} fontName - The font name or family name
   * @returns {boolean} Whether the font exists
   */
  isFontAvailable(fontName) {
    if (!fontName || fontName === "use-text-font" || fontName === "use-ui-font") {
      return true;
    }
    return this.settings.availableFonts.some(
      (f) => (f.familyName || f.name) === fontName
    );
  }
  // Runtime cache of font source-file existence (memory only, not persisted; name -> boolean)
  _fontExistsMap = {};
  /**
    * Checks at startup / after scanning whether each availableFonts entry's source file exists, writing results to the runtime cache.
    * Results are not persisted; they live only in memory for the current session.
   */
  async _refreshFontExistence() {
    const fonts = this.settings.availableFonts || [];
    const map = {};
    await Promise.all(fonts.map(async (font) => {
      let exists = false;
      if (font.path) {
        try {
          exists = await this.app.vault.adapter.exists(font.path);
        } catch (error) {
          this._logError(`[Local Font Loader] \u68C0\u67E5\u5B57\u4F53\u5B58\u5728\u6027\u5931\u8D25: ${font.path}`, error);
          exists = false;
        }
      }
      map[font.name] = exists;
    }));
    this._fontExistsMap = map;
  }
  /**
    * Reads a font's runtime existence status (defaults to "exists" for conservative display before refresh).
    * @param {Object} font The font object
    * @returns {boolean} Whether the source file exists
   */
  _getFontExists(font) {
    return this._fontExistsMap[font.name] !== false;
  }
  /**
   * Applies the editor / reading view / interface text sizes.
   *
   * Written under its own stylesheet id, so it is independent of the font layer: a vault with
   * no font configured still gets its sizes, and "Apply fonts" never takes them away.
   */
  applyFontSizes() {
    try {
      const css = buildFontSizeCss(this.settings.fontSizes);
      this.applyCss(css ? `/* Local Font Loader - Font Sizes */

${css}` : "", FONT_SIZES_CSS_ID);
    } catch (error) {
      this._logError("[Local Font Loader] Failed to apply font sizes:", error);
    }
  }
  /**
   * Coalesces repeated size changes — a slider drag or a run of keystrokes — into one write.
   */
  _debouncedApplyFontSizes() {
    if (this._fontSizeApplyTimer) {
      window.clearTimeout(this._fontSizeApplyTimer);
    }
    this._fontSizeApplyTimer = window.setTimeout(() => {
      this._fontSizeApplyTimer = null;
      this.applyFontSizes();
    }, 120);
  }
  // Apply fonts config (load from cache only)
  async applyFonts() {
    const startTime = performance.now();
    try {
      this._log("[Local Font Loader] Starting to apply fonts...");
      const devicePreset = this._getDevicePreset();
      if (!devicePreset) {
        this._log("[LocalFontLoader] No preset found for current device, using default preset");
        return;
      }
      const fontsConfig = devicePreset.fonts || {};
      const latinFontEnabled = devicePreset.latinFontEnabled || false;
      const headingApplyToFileTitle = devicePreset.headingApplyToFileTitle || false;
      const usedFonts = /* @__PURE__ */ new Set();
      const usedFamilies = /* @__PURE__ */ new Set();
      const missingFonts = [];
      for (const fontName of Object.values(fontsConfig)) {
        if (fontName) {
          if (!this.isFontAvailable(fontName)) {
            missingFonts.push(fontName);
            this._log(`[Local Font Loader] \u26A0\uFE0F Font "${fontName}" not found in vault, will fallback to system default`);
            continue;
          }
          usedFonts.add(fontName);
          const fonts = this.settings.availableFonts.filter(
            (f) => f.name === fontName || f.familyName === fontName
          );
          if (fonts.length > 0) {
            const familyName = fonts[0].familyName || fontName;
            usedFamilies.add(familyName);
          }
        }
      }
      if (missingFonts.length > 0) {
        new import_obsidian11.Notice(t("fontMissingWarning"), 5e3);
      }
      if (usedFonts.size === 0) {
        this._log("[Local Font Loader] No fonts configured");
        this._removeGeneratedStyles(FONT_FACES_ID);
        this._removeGeneratedStyles(FONT_GLYPHS_ID);
        this._removeGeneratedStyles("local-font-loader-vars");
        this._restoreMathFontMetrics();
        return;
      }
      this._log("[Local Font Loader] Fonts to load:", Array.from(usedFonts));
      this._log("[Local Font Loader] Font families involved:", Array.from(usedFamilies));
      let fontFaceCss = "/* Local Font Loader - Font Faces */\n\n";
      let loadedCount = 0;
      let failedFonts = [];
      for (const familyOrFontName of usedFamilies) {
        try {
          const familyFonts = this.settings.availableFonts.filter(
            (f) => f.familyName && f.familyName === familyOrFontName || f.name === familyOrFontName
          );
          if (familyFonts.length === 0) {
            this._log(`[Local Font Loader] Font family not found: ${familyOrFontName}`);
            failedFonts.push(`${familyOrFontName} (\u672A\u627E\u5230)`);
            continue;
          }
          this._log(`[Local Font Loader] Loading font family: ${familyOrFontName}, contains ${familyFonts.length} variants`);
          const deviceFontContext = this._getDeviceFontContext();
          const results = await Promise.all(familyFonts.map(async (font) => {
            const fontResourceSrc = this._getFontResourceSrc(font);
            if (!fontResourceSrc) {
              return { success: false, font, error: new Error("no resource URL") };
            }
            const built = this._buildFontFaceCss(font, deviceFontContext, fontResourceSrc);
            this._log(`[Local Font Loader] \u2713 Resolved variant: ${font.name} (${font.subfamilyName || "Unknown"})`);
            return { success: true, css: built.css, font };
          }));
          for (const result of results) {
            if (result.success) {
              fontFaceCss += result.css + "\n";
              loadedCount++;
            } else {
              failedFonts.push(`${result.font.name} (\u8BFB\u53D6\u5931\u8D25: ${result.error?.message ?? "unknown"})`);
            }
          }
        } catch (error) {
          this._logError(`[Local Font Loader] \u2717 \u65E0\u6CD5\u52A0\u8F7D\u5B57\u4F53\u5BB6\u65CF ${familyOrFontName}:`, error);
          failedFonts.push(`${familyOrFontName} (\u8BFB\u53D6\u5931\u8D25: ${error.message})`);
        }
      }
      this._log(`[Local Font Loader] @font-face CSS total size: ${(fontFaceCss.length / 1024 / 1024).toFixed(2)} MB`);
      this.applyCss(fontFaceCss, FONT_FACES_ID);
      let varsCss = "/* Local Font Loader - Variables */\n\n";
      const cssVarsMap = {
        ui: ["--font-interface", "--font-interface-override"],
        text: [
          "--font-text",
          "--font-text-override",
          // Print / PDF export. Obsidian's own chain is
          //   --font-print: var(--font-print-override), var(--font-text-override), …,
          // and it writes --font-print-override inline on <body> as well, so the
          // export leads with Obsidian's font until these are declared too. Printing
          // also redefines --font-text as var(--font-print), so the two have to agree.
          "--font-print",
          "--font-print-override",
          "--font-default",
          "--default-font",
          "--font-family-editor",
          "--font-text-theme",
          "--font-editor"
        ],
        monospace: [
          "--font-monospace",
          "--font-monospace-override",
          "--font-monospace-default",
          "--font-monospace-theme",
          "--font-code"
        ]
      };
      const buildFontStack = (key, fontFamily) => {
        const separatesLatin = latinFontEnabled && fontsConfig.latin && (key === "text" || key === "ui" && this.settings.latinFontForUI);
        if (separatesLatin && fontsConfig.latin) {
          return `"${this._escapeCssString(fontsConfig.latin)}", "${this._escapeCssString(fontFamily)}", sans-serif`;
        }
        const fallback = key === "monospace" ? "monospace" : "sans-serif";
        return `"${this._escapeCssString(fontFamily)}", ${fallback}`;
      };
      const fontDeclarations = [];
      for (const [key, cssVars] of Object.entries(cssVarsMap)) {
        if (!fontsConfig[key]) {
          continue;
        }
        const stack = buildFontStack(key, fontsConfig[key]);
        for (const cssVar of cssVars) {
          fontDeclarations.push(`${cssVar}: ${stack} !important;`);
        }
      }
      if (fontDeclarations.length > 0) {
        for (const scope of [":root", "body"]) {
          varsCss += `${scope} {
`;
          for (const declaration of fontDeclarations) {
            varsCss += `  ${declaration}
`;
          }
          varsCss += "}\n\n";
        }
        this._log(`[Local Font Loader] ${fontDeclarations.length} font variables declared on :root and re-declared on <body> to override Obsidian core inline styles`);
      }
      if (fontsConfig.ui && latinFontEnabled && fontsConfig.latin && this.settings.latinFontForUI) {
        varsCss += this._buildUiFontRules(`"${this._escapeCssString(fontsConfig.latin)}", "${this._escapeCssString(fontsConfig.ui)}"`);
        this._log(`[Local Font Loader] Latin font also applied to UI elements (desktop + mobile)`);
      } else if (fontsConfig.ui) {
        varsCss += this._buildUiFontRules(`"${this._escapeCssString(fontsConfig.ui)}"`);
        this._log(`[Local Font Loader] UI font applied (workspace chrome + floating UI)`);
      }
      if (fontsConfig.text) {
        varsCss += `/* Body Text Font */
`;
        let textFontFamily = `"${this._escapeCssString(fontsConfig.text)}"`;
        if (latinFontEnabled && fontsConfig.latin) {
          textFontFamily = `"${this._escapeCssString(fontsConfig.latin)}", "${this._escapeCssString(fontsConfig.text)}"`;
          this._log(`[Local Font Loader] Enable Latin font separation: ${fontsConfig.latin} (Latin) + ${fontsConfig.text} (Non-Latin)`);
          if (this.settings.latinFontForUI) {
            this._log(`[Local Font Loader] Latin font also applied to UI elements`);
          }
        }
        varsCss += `.markdown-preview-view,
`;
        varsCss += `.markdown-source-view,
`;
        varsCss += `.cm-s-obsidian,
`;
        varsCss += `.cm-s-obsidian .cm-line,
`;
        varsCss += `.markdown-source-view.mod-cm6 .cm-content {
`;
        varsCss += `  font-family: ${textFontFamily} !important;
`;
        varsCss += `}

`;
      }
      if (fontsConfig.monospace) {
        varsCss += this._buildCodeFontRules(fontsConfig.monospace);
        this._log(`[Local Font Loader] Code font applied (inline code, code blocks, line numbers)`);
      }
      if (fontsConfig.heading) {
        varsCss += `/* Heading Font */
`;
        let headingFontFamily = "";
        const headingValue = fontsConfig.heading;
        if (headingValue === "use-text-font") {
          if (fontsConfig.text) {
            headingFontFamily = fontsConfig.text;
            if (latinFontEnabled && fontsConfig.latin) {
              headingFontFamily = `"${this._escapeCssString(fontsConfig.latin)}", "${this._escapeCssString(fontsConfig.text)}"`;
            } else {
              headingFontFamily = `"${this._escapeCssString(headingFontFamily)}"`;
            }
          }
        } else if (headingValue === "use-ui-font") {
          if (fontsConfig.ui) {
            headingFontFamily = `"${this._escapeCssString(fontsConfig.ui)}"`;
          }
        } else if (headingValue) {
          headingFontFamily = `"${this._escapeCssString(headingValue)}"`;
        }
        if (headingFontFamily) {
          varsCss += `.markdown-preview-view h1, .markdown-preview-view h2,
`;
          varsCss += `.markdown-preview-view h3, .markdown-preview-view h4,
`;
          varsCss += `.markdown-preview-view h5, .markdown-preview-view h6,
`;
          varsCss += `.cm-header-1, .cm-header-2, .cm-header-3,
`;
          varsCss += `.cm-header-4, .cm-header-5, .cm-header-6`;
          if (headingApplyToFileTitle) {
            varsCss += `,
.inline-title`;
          }
          varsCss += ` {
  font-family: ${headingFontFamily} !important;
}

`;
          this._log(`[Local Font Loader] Apply heading font: ${headingFontFamily}${headingApplyToFileTitle ? " (including file title)" : ""}`);
        }
      }
      if (fontsConfig.math) {
        varsCss += `/* LaTeX Math Font (High Priority) - Fixes MathJax CHTML content */
`;
        const mathItalicUpperStart = 119860;
        const mathItalicLowerStart = 119886;
        for (let i = 0; i < 26; i++) {
          const upperCode = mathItalicUpperStart + i;
          const lowerCode = mathItalicLowerStart + i;
          varsCss += `body .mjx-c${upperCode.toString(16).toUpperCase()}.TEX-I::before { content: "${String.fromCodePoint(upperCode)}" !important; }
`;
          varsCss += `body .mjx-c${lowerCode.toString(16).toUpperCase()}.TEX-I::before { content: "${String.fromCodePoint(lowerCode)}" !important; }
`;
        }
        varsCss += `
/* Apply fonts */
`;
        const sizeVariantGuard = [1, 2, 3, 4].map((n) => `:not(.TEX-S${n})`).join("");
        varsCss += `/* Italic variables */
`;
        varsCss += `body mjx-c.TEX-I${sizeVariantGuard},
`;
        varsCss += `body mjx-c.TEX-I${sizeVariantGuard}::before {
`;
        varsCss += `  font-family: '${this._escapeCssString(fontsConfig.math)}', MJXTEX-I, MJXZERO, serif !important;
`;
        varsCss += `  font-style: normal !important;
`;
        varsCss += `}

`;
        varsCss += `/* Numbers and operators */
`;
        varsCss += `body mjx-mn mjx-c${sizeVariantGuard},
`;
        varsCss += `body mjx-mn mjx-c${sizeVariantGuard}::before,
`;
        varsCss += `body mjx-mo mjx-c${sizeVariantGuard},
`;
        varsCss += `body mjx-mo mjx-c${sizeVariantGuard}::before,
`;
        varsCss += `body mjx-c:not(.TEX-I)${sizeVariantGuard},
`;
        varsCss += `body mjx-c:not(.TEX-I)${sizeVariantGuard}::before {
`;
        varsCss += `  font-family: '${this._escapeCssString(fontsConfig.math)}', MJXZERO, MJXTEX, serif !important;
`;
        varsCss += `}

`;
        varsCss += `/* Glyphs are clipped to their box by MathJax; that net is for its own fonts */
`;
        varsCss += `body mjx-c { clip-path: none !important; }

`;
        varsCss += `/* Container */
`;
        varsCss += `body mjx-container,
`;
        varsCss += `body.is-mobile mjx-container {
`;
        varsCss += `  font-family: '${this._escapeCssString(fontsConfig.math)}', MJXZERO, MJXTEX, serif !important;
`;
        varsCss += `}

`;
        varsCss += `/* Stretchy assembly pieces \u2014 keep MathJax's own glyphs */
`;
        const stretchyScopes = [
          "mjx-stretchy-h mjx-c",
          "mjx-stretchy-v mjx-c",
          "mjx-stretchy-h mjx-ext mjx-c",
          "mjx-stretchy-v mjx-ext mjx-c"
        ];
        stretchyScopes.forEach((scope, index) => {
          varsCss += `body ${scope}:not(.TEX-I)${sizeVariantGuard},
`;
          varsCss += `body ${scope}:not(.TEX-I)${sizeVariantGuard}::before`;
          varsCss += index === stretchyScopes.length - 1 ? " {\n" : ",\n";
        });
        varsCss += `  font-family: MJXZERO, MJXTEX, serif !important;
`;
        varsCss += `}

`;
        this._log(`[Local Font Loader] Math font applied with high priority selectors`);
        window.setTimeout(() => {
          this._adoptMathFontMetrics(fontsConfig.math).then((adopted) => {
            if (!adopted) return;
            return this._afterMetricAdoption();
          }).catch((error) => {
            this._logError("[Local Font Loader] Failed to adopt math font metrics:", error);
          });
        }, 300);
      }
      this.applyCss(varsCss, "local-font-loader-vars");
      const endTime = performance.now();
      this._log(`[Local Font Loader] \u2713 Fonts applied successfully. Loaded ${loadedCount} variants, failed ${failedFonts.length}. Time: ${(endTime - startTime).toFixed(2)}ms`);
      if (failedFonts.length > 0) {
        this._log(`[Local Font Loader] Failed fonts:`, failedFonts);
      }
    } catch (error) {
      const endTime = performance.now();
      this._logError(`[Local Font Loader] Apply fonts\u5931\u8D25\uFF0C\u8017\u65F6 ${(endTime - startTime).toFixed(2)}ms:`, error);
    }
  }
  /**
   * Resolves a font file to a CSS `url("…")` value through Obsidian's resource API.
   *
   * `getResourcePath` is the supported way to point the webview at a file inside the vault —
   * the adapter chooses the URI supported by the current desktop or mobile runtime. The returned path is session-specific (it embeds the current
   * vault location), so callers must resolve it at load time instead of persisting it.
   *
   * @param {Object} font The font object
   * @returns {string|null} the `url(...)` value, or null when no resource URL is available
   */
  _getFontResourceSrc(font) {
    try {
      const resourcePath = this.app.vault.adapter.getResourcePath((0, import_obsidian11.normalizePath)(font.path));
      if (!resourcePath) {
        return null;
      }
      const escaped = String(resourcePath).replace(/\\/g, "\\\\").replace(/"/g, "%22");
      return `url("${escaped}")`;
    } catch (error) {
      this._logError("[Local Font Loader] getResourcePath failed; this font cannot be applied", error);
      return null;
    }
  }
  /**
    * Builds a single font's @font-face CSS (config-driven unicode-range determination and family-name escaping).
    *
    * `srcValue` is the rule's `src:` — a resource URL resolved by `_getFontResourceSrc`. The rule
    * used to carry a base64 data URI instead, which is what the font cache existed to produce;
    * pointing at the file directly made that whole pipeline unnecessary.
    *
    * @param {Object} font     The font object
    * @param {Object} ctx      Context from _getDeviceFontContext()
    * @param {string} srcValue Full `src:` value, e.g. `url("app://…")`
   * @returns {{css:string, fontFamily:string, variantType:string, fontWeight:number, fontStyle:string}}
   */
  _buildFontFaceCss(font, ctx, srcValue) {
    const { fontsConfig, latinFontEnabled, latinFontScope } = ctx;
    const fontFamily = font.familyName || font.name;
    const variantType = font.variantType || "regular";
    const isLatinFont = latinFontEnabled && fontsConfig.latin && (fontFamily === fontsConfig.latin || font.name === fontsConfig.latin);
    const needsUnicodeRange = isLatinFont;
    let fontWeight = 400;
    let fontStyle = "normal";
    switch (variantType) {
      case "italic":
        fontStyle = "italic";
        break;
      case "bold":
        fontWeight = 700;
        break;
      case "bolditalic":
        fontWeight = 700;
        fontStyle = "italic";
        break;
    }
    let css = `/* ${this._escapeCssString(fontFamily)} - ${variantType} */
`;
    css += `@font-face {
`;
    css += `  font-family: '${this._escapeCssString(fontFamily)}';
`;
    css += `  src: ${srcValue};
`;
    css += `  font-style: ${fontStyle};
`;
    css += `  font-weight: ${fontWeight};
`;
    css += `  font-display: swap;
`;
    if (needsUnicodeRange) {
      const unicodeRange = this.getUnicodeRange(latinFontScope);
      if (unicodeRange) {
        css += `  unicode-range: ${unicodeRange};
`;
      }
    }
    css += `}
`;
    return { css, fontFamily, variantType, fontWeight, fontStyle };
  }
  /**
   * Keep font resource URLs in DOM styles for this session only. PDF export clones these
   * style nodes, while the synced snippet carries only portable variables and layout rules.
   */
  _applyRuntimeFontFaces(css) {
    for (const doc of this._fontDocuments) {
      let element = doc.getElementById(FONT_FACES_ID);
      if (!css) {
        element?.remove();
        continue;
      }
      if (!element) {
        element = doc.createElement("style");
        element.id = FONT_FACES_ID;
        doc.head.appendChild(element);
      }
      if (element.textContent !== css) element.textContent = css;
    }
  }
  /** Remove font rules written by older versions, including their print-media form. */
  async _sanitizePersistedFontSnippet() {
    const customCss = this.app.customCss;
    if (!customCss) return;
    const path = customCss.getSnippetPath(FONT_CSS_SNIPPET);
    const css = await this._readSnippet(path);
    if (css === null) return;
    const portable = css.replace(/@font-face\s*\{[^}]*\}/gi, "");
    if (portable === css) return;
    try {
      await this.app.vault.adapter.write(path, portable);
      this._forceSnippetReload(path);
    } catch (error) {
      this._logError("[Local Font Loader] Could not remove stale font URLs from the snippet:", error);
    }
  }
  /** Apply generated CSS without persisting session-specific font addresses. */
  applyCss(css, cssId) {
    if (this._appliedCss.get(cssId) === css) {
      return;
    }
    if (!css) {
      this._removeGeneratedStyles(cssId);
      return;
    }
    if (cssId === FONT_FACES_ID) {
      this._applyRuntimeFontFaces(css);
    } else {
      this._snippetCss.set(cssId, css);
    }
    this._queueSnippetSync();
    this._appliedCss.set(cssId, css);
  }
  /**
   * Removes one generated stylesheet.
   *
   * @param cssId - The id the stylesheet was applied under
   */
  _removeGeneratedStyles(cssId) {
    if (cssId === FONT_FACES_ID) this._applyRuntimeFontFaces("");
    const element = document.getElementById(cssId);
    if (element) {
      element.remove();
    }
    if (this._snippetCss.delete(cssId)) {
      this._queueSnippetSync();
    }
    this._appliedCss.delete(cssId);
  }
  /**
   * Queues a snippet rewrite, chained onto the one before it.
   *
   * Both applies of a font change (the `@font-face` rules, then the variables) land in the
   * snippet, so they settle into a single write rather than racing over the same file.
   */
  _queueSnippetSync() {
    this._snippetSync = this._snippetSync.then(() => this._syncSnippet()).catch((error) => this._logError("[Local Font Loader] Could not write the CSS snippet:", error));
  }
  /**
   * Puts the generated snippet back on when something else switched it off.
   *
   * The snippet carries font variables and layout rules, and it can be turned off outside this
   * plugin — Appearance → CSS snippets is one click, and a snippet manager plugin can do the
   * same. Reacting matters because `applyCss` skips an unchanged stylesheet: in a session where
   * nothing else changes there is no later apply to notice. Obsidian fires `css-change` on
   * exactly that toggle, so that is what this listens to.
   *
   * Does nothing while the snippet is already on, or once the plugin holds no generated CSS —
   * the state after the user clears the fonts — so it neither fights a deliberate shutdown nor
   * loops with its own `setCssEnabledStatus` call.
   */
  _ensureSnippetEnabled() {
    const customCss = this.app.customCss;
    if (!customCss || this._snippetCss.size === 0) {
      return;
    }
    const isSnippetEnabled = customCss.enabledSnippets ? customCss.enabledSnippets.has(FONT_CSS_SNIPPET) : this._snippetEnabled;
    if (isSnippetEnabled) {
      return;
    }
    this._snippetEnabled = true;
    customCss.setCssEnabledStatus(FONT_CSS_SNIPPET, true);
    this._log(`[Local Font Loader] The "${FONT_CSS_SNIPPET}" snippet was switched off elsewhere; switching it back on.`);
  }
  async _syncSnippet() {
    const customCss = this.app.customCss;
    if (!customCss) {
      this._logError("[Local Font Loader] No CSS snippets on this platform: the fonts cannot be applied.");
      return;
    }
    const css = this._renderSnippetCss();
    const isSnippetEnabled = customCss.enabledSnippets ? customCss.enabledSnippets.has(FONT_CSS_SNIPPET) : this._snippetEnabled;
    if (!css) {
      if (!isSnippetEnabled) {
        return;
      }
      this._snippetEnabled = false;
      customCss.setCssEnabledStatus(FONT_CSS_SNIPPET, false);
      this._log(`[Local Font Loader] No generated CSS left; the "${FONT_CSS_SNIPPET}" snippet is switched off.`);
      return;
    }
    const snippetPath = customCss.getSnippetPath(FONT_CSS_SNIPPET);
    const onDisk = await this._readSnippet(snippetPath);
    if (onDisk === css) {
      if (!isSnippetEnabled) {
        this._snippetEnabled = true;
        customCss.setCssEnabledStatus(FONT_CSS_SNIPPET, true);
        this._log(`[Local Font Loader] The "${FONT_CSS_SNIPPET}" snippet was switched off; switching it back on.`);
      }
      return;
    }
    await this._ensureFolder(snippetPath.split("/").slice(0, -1).join("/"));
    await this.app.vault.adapter.write(snippetPath, css);
    this._forceSnippetReload(snippetPath);
    if (!isSnippetEnabled) {
      this._snippetEnabled = true;
      customCss.setCssEnabledStatus(FONT_CSS_SNIPPET, true);
      this._log(`[Local Font Loader] Enabling the "${FONT_CSS_SNIPPET}" snippet (nothing else can reach the PDF export).`);
    }
    this._log(`[Local Font Loader] Applied ${(css.length / 1024).toFixed(1)} KB of portable CSS through the "${FONT_CSS_SNIPPET}" snippet.`);
  }
  /**
   * The snippet's text as it is on disk, or null when there is no readable file.
   *
   * @param snippetPath - The vault-relative path of the snippet
   */
  async _readSnippet(snippetPath) {
    try {
      const adapter = this.app.vault.adapter;
      if (!await adapter.exists(snippetPath)) {
        return null;
      }
      return await adapter.read(snippetPath);
    } catch (error) {
      this._logError("[Local Font Loader] Could not read the snippet back before writing it:", error);
      return null;
    }
  }
  /** Invalidate Obsidian's lazy snippet cache after writing or sanitizing portable CSS. */
  _forceSnippetReload(snippetPath) {
    try {
      const customCss = this.app.customCss;
      customCss?.csscache?.delete(snippetPath);
      customCss?.requestLoadSnippets?.();
    } catch (error) {
      this._logError("[Local Font Loader] Could not ask Obsidian to re-read the snippet:", error);
    }
  }
  /** The synced snippet never contains font faces or device-specific resource URLs. */
  _renderSnippetCss() {
    return Array.from(this._snippetCss.entries()).filter(([cssId]) => cssId !== FONT_FACES_ID).map(([, css]) => css).join("\n");
  }
  removeFontStyles() {
    this._removeGeneratedStyles(FONT_FACES_ID);
    this._removeGeneratedStyles(FONT_GLYPHS_ID);
    this._removeGeneratedStyles("local-font-loader-vars");
    this._removeGeneratedStyles(FONT_SIZES_CSS_ID);
    this._restoreMathFontMetrics();
  }
  /**
   * Adopts a settings change that appeared on disk, if it is a real one.
   *
   * Split out of the file-watcher callback so a read that came back mid-write can be retried
   * without re-arming the whole listener.
   */
  async _reloadSettingsFromDisk() {
    try {
      if (this._isSaving) {
        this._log("[Local Font Loader] Save in progress, skipping reload");
        return;
      }
      const data = await this.loadData();
      if (!this._isCompleteSettingsSnapshot(data)) {
        this._log("[Local Font Loader] data.json is incomplete on disk; waiting for the write to finish");
        if (this._dataReloadTimer) {
          window.clearTimeout(this._dataReloadTimer);
        }
        this._dataReloadTimer = window.setTimeout(() => {
          void this._reloadSettingsFromDisk();
        }, 1500);
        return;
      }
      if (this._settingsEqual(data, this.settings)) {
        this._log("[Local Font Loader] data.json content unchanged, skipping reload");
        return;
      }
      await this.loadSettings();
      this._log("[Local Font Loader] Settings reloaded from data.json");
      try {
        await this.repairDeviceList();
        await this._ensureDevicePreset();
      } catch (error) {
        this._logError("[Local Font Loader] Device-list repair failed:", error);
      }
      if (this.settings.autoLoadOnStartup) {
        this._log("[Local Font Loader] Re-applying fonts after settings reload...");
        try {
          await this.applyFonts();
          this._log("[Local Font Loader] Fonts re-applied successfully");
        } catch (error) {
          this._logError("[Local Font Loader] Failed to re-apply fonts:", error);
        }
      }
      this.applyFontSizes();
      this.app.workspace.trigger("local-font-loader:settings-changed");
    } catch (error) {
      this._logError("[Local Font Loader] Failed to reload settings from data.json:", error);
    }
  }
};

// src/main.ts
module.exports = LocalFontLoaderPlugin;
/**
 * Local Font Loader — plugin entry point.
 *
 * @version 1.8.0
 * @license MIT
 *
 * This file is the build input. The plugin Obsidian loads is the bundled `main.js` at the
 * repository root, produced by `bun run build`; edit the modules under `src/`, never the bundle.
 */
