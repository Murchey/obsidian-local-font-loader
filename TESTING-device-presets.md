# Device preset validation

Validated on 2026-10-24 using Obsidian 1.14.5 in a new empty vault with an independent application
profile. The personal vault was not used. Runtime inspection and actions ran through
chrome-devtools-mcp against the test vault's main `app://obsidian.md/index.html` window.

## Automated checks

Run `bun test`, `bun run typecheck`, and `bun run build`. Individual commands use a six-second
deadline. Device tests cover matching, conflicting assignments, explicit global choices, invalid
targets, repeated passes, generic Apple families, different OS values, stale aliases, alias cycles,
hostname safety, copy/save/apply flow and default-preset recreation.

## Empty-vault runtime checks

1. Load the build in a fresh vault containing no notes or fonts. Open plugin settings in the main
   window. Confirm desktop displays both Android and iOS limitation paragraphs.
2. Seed test device metadata: two Android phones sharing a model, two tablets sharing another
   model, and the test desktop. Rename one phone. Bind only that phone to a custom preset.
3. Ensure presets: the other phone inherits the custom preset; the tablets stay global; all five
   device IDs survive. The editable device name does not affect matching.
4. Assign to a nonexistent preset. Confirm rejection leaves every binding unchanged.
5. Move the inherited phone back to the global preset. Ensure presets again: the explicit choice
   survives and exactly one default preset remains.
6. Assign the desktop to a custom preset, then copy a different preset for it. Confirm the desktop
   has exactly one binding, uses the copy, and the same binding is saved on disk.
7. Re-render settings. Confirm the global zone displays explicit global devices alongside devices
   without an explicit binding. Check the console for errors.
8. Switch the isolated test instance to Obsidian's mobile layout. Reopen settings after the app
   reloads. Confirm every card is non-draggable and has a move button.
9. Open a move menu. Confirm it lists presets and marks the current assignment. Select the global
   preset and confirm the new binding is saved, the menu closes and no hidden select remains.
10. Scroll the settings panel. Confirm no device binding changes.
11. Reload Obsidian through its native reload command. Confirm version 1.7.2, the selected copied
    preset, explicit global choices, one default preset and all five device IDs survive.
12. Return to desktop layout and dispatch a drag-start/drop/drag-end sequence for a tablet into a
    custom preset. Confirm the second same-model tablet inherits the assignment and both bindings
    are saved. Confirm the console has no warning/error messages after the final reload and drop.

Mobile layout checks validate desktop-hosted UI behavior. No Android/iOS device was connected for
this run, so native WebView, physical touch/long-press and real scroll-versus-tap gestures remain
unverified. Do not report these checks as mobile hardware tests.
