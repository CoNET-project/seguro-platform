# `seguro-platform` CHANGELOG

## `0.7.0`

### Additions

- Add detection of touch devices.
- Add `detectWindowInnerSize` function in `utilities.ts` and tests in `utilities.test.ts`
- Add `detectTouchDevice` function in `utilities.ts` and tests in `utilities.test.ts`
- Add `windowInnerSize` state into `appStateReducer`.
- Add `isTouchDevice` state into `appStateReducer`.
- Add `windowInnerSize` and `isTouchDevice` action creators into `appStateActions.ts`.
- Add dispatch functions for `windowInnerSize` and `isTouchDevice` into `useAppState.ts`.
- Temporary display of `windowInnerSize` and `isTouchDevice` in `LaunchScreen.tsx`.

### Changes

- None.

### Fixes

- None.

---

## `0.6.0`

### Additions

- Add IconButton component.
- Add Storybook RootDecorator component that wraps the story in the app context providers.
- Add Storybook CanvasDecorator component with theme switcher.
- Add Testing Library module that re-exports a version of `render` wrapped in the app context providers.
- Add Jest mocks for `matchMedia` browser API.

### Changes

- Upgrade dependencies.

### Fixes

- None.

---

## `0.5.0`

### Additions

- Setup localization system with automatic preferred locale detection for supported languages / fallback to en-US locale.
- Add support for zh-CN locale.
- Add support for en-US locale.
- Add locale switch debug command.

### Changes

- Improve store reducer property types.

### Fixes

- None.

---

## `0.4.0`

### Additions

- Setup theming system with dark / light theme and automatic preferred theme detection.
- Add debug commands in development mode.

### Changes

- Dispatch non-component actions using action creator functions instead of manually constructing action objects.

### Fixes

- None.

---

## `0.3.0`

### Additions

- Setup bridge service.
- Display launch screen while app is initializing.
- Display unlock screen when app is initialized.
- Show "hello world" message from bridge service.

### Changes

- None.

### Fixes

- None.

---

## `0.2.0`

### Additions

- Add storybook, lint, and dependency upgrade instructions to the README.

### Changes

- Upgrade dependencies.

### Fixes

- None.

---

## `0.1.0`

### Additions

- Add initial project.

### Changes

- None.

### Fixes

- None.

---

## `major.minor.patch`

### Additions

- None.

### Changes

- None.

### Fixes

- None.
