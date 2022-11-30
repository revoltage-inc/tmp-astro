module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  printWidth: 100,
  plugins: [
    // Bug: Prettier not work with plugin
    // require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-astro'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
