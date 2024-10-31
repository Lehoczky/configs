# Eslint Config Vitest

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-vitest.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-vitest)

ESLint configuration for project using [vitest](https://vitest.dev/). Compared to other configs in this repository, this one cannot be used on its own, it needs another config as a base, like [`@lehoczky/eslint-config-base`](../eslint-config-base/) or [`@lehoczky/eslint-config-typescript`](../eslint-config-typescript/).

## 💿 Installation

```sh
pnpm add -D vitest @lehoczky/eslint-config-vitest
```

## 💻 Usage

`eslint.config.mjs`:

```js
import { configLehoczkyJavascript } from "@lehoczky/eslint-config-base"
import { configLehoczkyVitest } from "@lehoczky/eslint-config-vitest"

/** @type {import("eslint").Linter.Config[]} */
export default [...configLehoczkyJavascript(), ...configLehoczkyVitest()]
```
