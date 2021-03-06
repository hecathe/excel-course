module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': 'off',
    'operator-linebreak': 'off',
    'no-new-object': 'off',
    // 'no-extend-native': 'off'
  },
  plugins: ['jest'],
};
