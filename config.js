module.exports = {
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  plugins: [
      'react',
      'async-await'
  ],
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
    commonjs: true
  },
  globals: {
    document: false,
    window: false
  },
  rules: {
    "semi": ["error", "never"],
    "no-console": 1,
    "no-unused-vars": 1,
    "no-case-declarations": 1,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'always', {'null': 'ignore'}],
    'handle-callback-err': [2, '^(err|error)$' ],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': [2, 'prefer-single'],
    "react/jsx-key": 1,
    "react/prop-types": 1,
    "react/no-string-refs": 1,
    "react/display-name": 1,
    "react/no-unescaped-entities": 1,
    "react/jsx-no-target-blank": 1,
    "react/no-find-dom-node": 1,
    "react/no-deprecated": 1,
  }
}
