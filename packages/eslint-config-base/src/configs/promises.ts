import type { Linter } from "eslint"
import pluginPromise from "eslint-plugin-promise"

export const promises: Linter.Config[] = [
  {
    name: "lehoczky/javascript/promise",
    plugins: {
      promise: pluginPromise,
    },
    rules: {
      "promise/no-nesting": "warn",
      "promise/no-return-wrap": "warn",
      "promise/param-names": "warn",
      "promise/prefer-await-to-then": "warn",
    },
  },
]
