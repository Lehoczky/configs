import type { ConfigLehoczkyBaseOptions } from "@lehoczky/eslint-config-base"
import { configLehoczkyJavascript } from "@lehoczky/eslint-config-base"
import { prettier } from "@lehoczky/eslint-config-base/configs/prettier"
import type { Linter } from "eslint"

import { typescript } from "./configs/typescript.js"
import { typescriptTypeChecked } from "./configs/typescript-type-checked.js"
import type { ParserOptions } from "./types/parserOptions.js"

export type { ParserOptions }

export interface ConfigLehoczkyTSOptions extends ConfigLehoczkyBaseOptions {
  parserOptionsForTypeChecking?: ParserOptions
}

export const configLehoczkyTypescript = (
  options: ConfigLehoczkyTSOptions = {},
): Linter.Config[] => {
  const { withPrettier = true, parserOptionsForTypeChecking } = options

  const config = [
    // Prettier config needs to be the last, so we can't
    // enable it here
    ...configLehoczkyJavascript({ withPrettier: false }),
    ...typescript,
  ]
  if (parserOptionsForTypeChecking) {
    config.push(...typescriptTypeChecked(parserOptionsForTypeChecking))
  }
  if (withPrettier) {
    config.push(prettier)
  }
  return config
}

export default configLehoczkyTypescript
