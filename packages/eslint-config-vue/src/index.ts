import { prettier } from "@lehoczky/eslint-config-base/configs/prettier"
import type {
  ConfigLehoczkyTSOptions,
  ParserOptions,
} from "@lehoczky/eslint-config-typescript"
import { configLehoczkyTypescript } from "@lehoczky/eslint-config-typescript"
import type { Linter } from "eslint"

import { vue } from "./configs/vue.js"

export interface ConfigLehoczkyVueOptions extends ConfigLehoczkyTSOptions {}

export const configLehoczkyVue = (
  options: ConfigLehoczkyVueOptions = {},
): Linter.Config[] => {
  const { withPrettier = true, parserOptionsForTypeChecking } = options
  const enableTypeChecking = !!parserOptionsForTypeChecking

  const config = []

  if (enableTypeChecking) {
    const parserOptions = ensureVueIsInExtraFileExtensions(
      parserOptionsForTypeChecking,
    )

    config.push(
      ...configLehoczkyTypescript({
        withPrettier: false,
        parserOptionsForTypeChecking: parserOptions,
      }),
      ...vue(parserOptions),
    )
  } else {
    config.push(...configLehoczkyTypescript({ withPrettier: false }), ...vue())
  }

  if (withPrettier) {
    config.push(prettier)
  }
  return config
}

export default configLehoczkyVue

/**
 *
 * @see https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice
 */
function ensureVueIsInExtraFileExtensions(
  parserOptions: NonNullable<ParserOptions>,
): NonNullable<ParserOptions> {
  const parserOptionCopy = { ...parserOptions }

  if (!parserOptionCopy.extraFileExtensions) {
    parserOptionCopy.extraFileExtensions = []
  }

  const vueExtension = ".vue"
  if (!parserOptionCopy.extraFileExtensions.includes(vueExtension)) {
    parserOptionCopy.extraFileExtensions.push(vueExtension)
  }

  return parserOptionCopy
}
