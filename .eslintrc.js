module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-var': 'error',
        'no-console': 'error',
        'prefer-const': 'error',
        curly: ['error', 'multi-line'],
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/newline-after-import': 'error',
        'import/imports-first': ['error', 'absolute-first'],
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
