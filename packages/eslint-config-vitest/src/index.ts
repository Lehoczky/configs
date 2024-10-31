import vitest from "@vitest/eslint-plugin"
import type { Linter } from "eslint"

const GLOB_SRC_EXT = "?([cm])[jt]s?(x)"
const GLOB_TESTS = [`**/*.spec.${GLOB_SRC_EXT}`, `**/*.test.${GLOB_SRC_EXT}`]

export interface ConfigLehoczkyVitestOptions {
  files?: Linter.Config["files"]
}

export const configLehoczkyVitest = (
  options: ConfigLehoczkyVitestOptions = {},
): Linter.Config[] => {
  const { files = GLOB_TESTS } = options

  return [
    {
      files,
      name: "lehoczky/vitest",
      plugins: {
        vitest,
      },
      languageOptions: {
        globals: {
          ...vitest.environments.env.globals,
        },
      },
      rules: {
        ...vitest.configs.recommended.rules,
        "vitest/no-conditional-in-test": "warn",
        "vitest/no-interpolation-in-snapshots": "warn",
        "vitest/prefer-comparison-matcher": "warn",
        "vitest/prefer-each": "warn",
        "vitest/prefer-equality-matcher": "warn",
        "vitest/prefer-expect-resolves": "warn",
        "vitest/prefer-hooks-in-order": "warn",
        "vitest/prefer-hooks-on-top": "warn",
        "vitest/prefer-lowercase-title": [
          "warn",
          { ignoreTopLevelDescribe: true },
        ],
        "vitest/prefer-mock-promise-shorthand": "warn",
        "vitest/prefer-to-be": "warn",
        "vitest/prefer-to-contain": "warn",
        "vitest/prefer-to-have-length": "warn",
        "vitest/prefer-vi-mocked": "warn",
        "vitest/require-to-throw-message": "warn",
      },
    },
  ]
}

export default configLehoczkyVitest
