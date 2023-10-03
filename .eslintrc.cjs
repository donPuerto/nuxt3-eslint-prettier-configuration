module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:@typescript-eslint/recommend', 'plugin:vue/vue3-recommended'],
  plugins: [],
  rules: {
    avoidEscape: true,
    allowTemplateLiterals: true,

  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
        // 'vue/attributes-order': ['error', {
        //   order: [
        //     'DEFINITION',
        //     'LIST_RENDERING',
        //     'CONDITIONALS',
        //     'RENDER_MODIFIERS',
        //     'GLOBAL',
        //     ['UNIQUE', 'SLOT'],
        //     'TWO_WAY_BINDING',
        //     'OTHER_DIRECTIVES',
        //     'OTHER_ATTR',
        //     'EVENTS',
        //     'CONTENT'
        //   ],
        //   alphabetical: false
        // }]

        'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
        "vue/component-tags-order": ["error", {
          "order": ['script:not([setup])', 'script[setup]', "template", "style"]
        }]

      }
    }

  ]
}
