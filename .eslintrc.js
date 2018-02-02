// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: 'airbnb-base',
  'rules': {
    "semi": [2, "never"],
    "arrow-body-style": ["error", "always"],
    "operator-assignment": [0, "never"],
    "no-console": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "linebreak-style": 0,
    "no-undef": 0,
    "no-param-reassign": 0,
    "no-new": 0,
    "no-return-await": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
