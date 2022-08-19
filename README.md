# `seguro-platform` README

The Seguro Platform application.

## Install

```bash
yarn
```

Notice:

There are two dependencies (`"@conet-project/seguro-gateway": "0.15.2"`,
`"@conet-project/seguro-worker-lib": "^0.10.1"`) are not published in npm repository, so when you install those two
dependencies, you should follow the steps below:

1. clone the them in your local disk by using `git clone` command, and those two packages code url
   are: `https://github.com/CoNET-project/seguro-worker-lib.git`
   and `https://github.com/CoNET-project/seguro-gateway.git`

3. go to the `seguro-worker-lib` and `seguro-gateway` folder, and run `npm link` to link the two folder in the global of
   your environment

4. run `npm run build` in the `seguro-worker-lib` and `seguro-gateway` respectively and then ensure that you can find
   the `build` folder in both two projects

5. go to your `seguro-platform` and run `npm link @conet-project/seguro-worker-lib @conet-project/seguro-gateway`

6. finished

## Build

### Web

```bash
yarn build:web
```

### Desktop

#### macOS

```bash
yarn build:desktop:mac
```

#### Windows

```bash
yarn build:desktop:win
```

#### Linux

```bash
yarn build:desktop:lin
```

## Develop

### App

```bash
yarn start
```

### Storybook

```bash
yarn start:storybook
```

## Test

```bash
yarn test
```

## Lint

```bash
yarn lint
```

## Dependencies

### Upgrade

```bash
yarn upgrade-interactive --latest
```
