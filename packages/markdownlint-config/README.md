# Markdownlint Config

[![npm version](https://badge.fury.io/js/@lehoczky%2Fmarkdownlint-config.svg)](https://badge.fury.io/js/@lehoczky%2Fmarkdownlint-config)

Shared [markdownlint](https://github.com/DavidAnson/markdownlint) configuration, for projects using [prettier](https://prettier.io/).

## 💿 Installation

```sh
pnpm add -D markdownlint-cli2 @lehoczky/markdownlint-config
```

## 💻 Usage

`.markdownlint.mjs`:

```js
import { markdownlintConfigLehoczky } from "@lehoczky/markdownlint-config"

export default markdownlintConfigLehoczky
```

Example command:

```json
{
  "scripts": {
    "markdownlint:fix": "markdownlint-cli2 \"**/*.md\" \"!**/node_modules\""
  }
}
```
