import type { Linter } from "eslint"
import type { ConfigWithExtends } from "typescript-eslint"
import ts from "typescript-eslint"

export const typescriptTypeChecked = (
  parserOptions: ConfigWithExtends["languageOptions"]["parserOptions"],
): Linter.Config[] =>
  [
    {
      name: "lehoczky/typescript/type-checked-parser-options",
      languageOptions: { parserOptions },
    },
    {
      name: "lehoczky/typescript/type-checked",
      rules: {
        "@typescript-eslint/no-confusing-void-expression": [
          "warn",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/no-deprecated": "warn",
        "@typescript-eslint/no-misused-promises": [
          "warn",
          { checksVoidReturn: false },
        ],
        "@typescript-eslint/non-nullable-type-assertion-style": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/promise-function-async": [
          "warn",
          { checkArrowFunctions: false },
        ],

        // Conflict with ESLint
        "no-throw-literal": "off",
        "@typescript-eslint/only-throw-error": [
          "warn",
          {
            allowThrowingUnknown: true,
          },
        ],
        "require-await": "off",
        "@typescript-eslint/require-await": "warn",
        "no-return-await": "off",
        "@typescript-eslint/return-await": ["warn", "always"],
        camelcase: "off",
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "property",
            format: ["camelCase"],
            filter: {
              // Ignore properties that require quotes
              regex: "^[{A-Z} | {0-9}] | [- ] | [/]",
              match: false,
            },
          },
        ],
        "prefer-promise-reject-errors": "off",
        "@typescript-eslint/prefer-promise-reject-errors": "warn",

        // Conflict with unicorn
        "unicorn/prefer-includes": "off",
        "@typescript-eslint/prefer-includes": "warn",
      },
    },
    {
      files: ["**/*.?([cm])js"],
      ...(ts.configs.disableTypeChecked as Linter.Config),
    },
  ] as Linter.Config[]
