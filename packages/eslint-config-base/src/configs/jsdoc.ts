import type { Linter } from "eslint"
import jsdocPlugin from "eslint-plugin-jsdoc"

export const jsdoc: Linter.Config[] = [
  {
    name: "lehoczky/javascript/jsdoc",
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      "jsdoc/check-alignment": "warn",
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-property-names": "warn",
      "jsdoc/tag-lines": [
        "warn",
        "always",
        {
          startLines: 1,
          applyToEndTag: false,
          tags: {
            param: {
              lines: "never",
            },
          },
        },
      ],
      "jsdoc/no-defaults": "warn",
    },
  },
]
