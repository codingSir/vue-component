module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": [1, 2], //缩进风格
        "quotes": [0, "single"],
        "quote-props": [0, "always"],
        "prettier/prettier": 0,
        "no-undef": 0, // 允许未定义的变量
        "no-unused-vars": 0, // 允许未使用的变量
        'vue/html-self-closing': 'off',
    }
};
