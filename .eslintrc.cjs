/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2022: true },
  
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' },    

  },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
