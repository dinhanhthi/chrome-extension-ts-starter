module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:tailwindcss/recommended',
    'prettier' // make sure it's the last one,
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['tailwindcss', 'prettier'],
  rules: {
    'import/no-unresolved': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/iframe-has-title': 0,
    'no-const-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-irregular-whitespace': 1,
    'no-unused-vars': 1,
    'prettier/prettier': ['warn', { singleQuote: true, trailingComma: true }],
    quotes: ['warn', 'single'],
    'spaced-comment': [1, 'always']
  }
}
