module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'], // Ignore the ESLint config file itself from linting
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // Turn off the rule for interface name prefixes
    '@typescript-eslint/explicit-function-return-type': 'off', // Turn off the rule for explicit return types on functions
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off the rule for explicit boundary types
    '@typescript-eslint/no-explicit-any': 'off', // Turn off the rule for usage of the `any` type
    "linebreak-style": 0, // Turn off the rule for linebreak styles to avoid conflicts between different operating systems and Prettier
    'prettier/prettier': ['error', { "endOfLine": "auto"}, { usePrettierrc: true }],  

  },
};
