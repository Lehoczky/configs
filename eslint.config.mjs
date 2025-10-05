// @ts-check
import { configLehoczkyVitest } from "@lehoczky/eslint-config-vitest"
import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"
import { defineConfig } from "eslint/config"
import eslintPluginAstro from "eslint-plugin-astro"

export default defineConfig([
  ...configLehoczkyVue({
    parserOptionsForTypeChecking: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
  ...configLehoczkyVitest(),
  ...eslintPluginAstro.configs["flat/recommended"],
])
