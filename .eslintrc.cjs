module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:tailwindcss/recommended",
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import', 'react'],
  rules: {
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    "import/newline-after-import": "warn",
    "tailwindcss/no-custom-classname": "off",
    '@typescript-eslint/no-unused-vars': ['off', { 'argsIgnorePattern': '^_$' }],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },
}
