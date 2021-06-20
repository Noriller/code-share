module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'react/no-unescaped-entities': ['error', {
      forbid: [{
        char: '>',
        alternatives: ['&gt;'],
      }, {
        char: '}',
        alternatives: ['&#125;'],
      }],
    }],
    'import/extensions': [
      'error',
      'never',
      {
        svg: 'always',
        ico: 'always',
        png: 'always',
        jpg: 'always',
        json: 'always',
        css: 'always',
        ignorePackages: true,
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
};
