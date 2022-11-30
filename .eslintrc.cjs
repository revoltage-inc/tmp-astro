module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['eslint-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
}
