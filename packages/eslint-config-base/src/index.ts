import "eslint-plugin-only-warn"

import type { Linter } from "eslint"
import gitignore from "eslint-config-flat-gitignore"

import { commonIgnores } from "./configs/commonIgnores.js"
import { javascript } from "./configs/javascript.js"
import { jsdoc } from "./configs/jsdoc.js"
import { prettier } from "./configs/prettier.js"
import { promises } from "./configs/promises.js"
import { simpleImportSort } from "./configs/simple-import-sort.js"
import { unicorn } from "./configs/unicorn.js"

export interface ConfigLehoczkyBaseOptions {
  withPrettier?: boolean
}

export const configLehoczkyJavascript = (
  options: ConfigLehoczkyBaseOptions = {},
): Linter.Config[] => {
  const { withPrettier = true } = options

  const config = [
    gitignore({ name: "lehoczky/ignores/gitignore", strict: false }),
    ...commonIgnores,
    ...javascript,
    ...unicorn,
    ...simpleImportSort,
    ...promises,
    ...jsdoc,
  ]
  if (withPrettier) {
    config.push(prettier)
  }
  return config
}

export default configLehoczkyJavascript
