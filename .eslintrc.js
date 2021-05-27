module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['!.eslintrc.js'],
  extends: [
    '@nuxt/typescript-eslint',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    strict: ['error', 'global']
  }
}
