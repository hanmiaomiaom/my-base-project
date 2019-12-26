module.exports = {
  root: true,
  env: {
    "node": true,
    "browser": true,
    "es6": true
  },
  globals: {
    "cordova": true
},
  extends: [
    'plugin:vue/essential',
],
  rules: {
    "no-console": 'off',
    "no-debugger": 'off',
    "indent": [2, 4],
    "comma-dangle":"off",
    "max-len":"off",
    "no-param-reassign":"off",
    "no-plusplus": "off",
    "linebreak-style": "off",
    // "semi": [2, "always"],//语句强制分号结尾
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
