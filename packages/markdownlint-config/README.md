# Markdownlint Config

[![npm version](https://badge.fury.io/js/@lehoczky%2Fmarkdownlint-config.svg)](https://badge.fury.io/js/@lehoczky%2Fmarkdownlint-config)

Shared [markdownlint](https://github.com/DavidAnson/markdownlint) configuration for projects with [prettier](https://prettier.io/).

## 💿 Installation

```sh
pnpm add -D markdownlint-cli2 prettier @lehoczky/markdownlint-config
```

## 💻 Usage

`.markdownlint.cjs`:

```js
module.exports = require("@lehoczky/markdownlint-config")
```

Example command:

```json
{
  "scripts": {
    "markdownlint:fix": "markdownlint-cli2 \"**/*.md\" \"!**/node_modules\""
  }
}
```
