import type { ConfigLehoczkyBaseOptions } from "@lehoczky/eslint-config-base"
import { configLehoczkyJavascript } from "@lehoczky/eslint-config-base"
import { prettier } from "@lehoczky/eslint-config-base/configs/prettier"
import type { Linter } from "eslint"
import type { ConfigWithExtends } from "typescript-eslint"

import { typescript } from "./configs/typescript.js"
import { typescriptTypeChecked } from "./configs/typescript-type-checked.js"

export interface ConfigLehoczkyTSOptions extends ConfigLehoczkyBaseOptions {
  typeCheckWithParserOptions?: ConfigWithExtends["languageOptions"]["parserOptions"]
}

export const configLehoczkyTypescript = (
  options: ConfigLehoczkyTSOptions = {},
): Linter.Config[] => {
  const { withPrettier = true, typeCheckWithParserOptions } = options

  const config = [
    // Prettier config needs to be the last, so we can't
    // enable it here
    ...configLehoczkyJavascript({ withPrettier: false }),
    ...typescript,
  ]
  if (typeCheckWithParserOptions) {
    config.push(...typescriptTypeChecked(typeCheckWithParserOptions))
  }
  if (withPrettier) {
    config.push(prettier)
  }
  return config
}

export default configLehoczkyTypescript
