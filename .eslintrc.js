module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
