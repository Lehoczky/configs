import { configLehoczkyVue } from "@lehoczky/eslint-config-vue"

export default [
  ...configLehoczkyVue({
    parserOptionsForTypeChecking: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  }),
]
