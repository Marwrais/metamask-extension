module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],

//module
  rules: {
    '@babel/no-invalid-this': 'error',
    // Prettier handles this
    '@babel/semi': 'off',
  },
};
