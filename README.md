# Scofield-App · [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is my first app !

# Export Modules

BY `babel-plugin-module-resolver`

`React Native` 中的 fbjs 本身带有 `ProvidesModule`, 与 `babel-plugin-module-resolver` 功能类似,
在注释中添加 `@ProvidesModule` 即可全局引用, 但此功能备受争议, 易引发全局污染, 因此在 RN 的 V0.57 以上弃用了此功能, 所以在此使用了第三方包, 除此之外, 还有很多与之类似的第三方包, 大多需要自行配置, 若需要在 `.babelrc` 中配置的, 一些文档中写的有一些坑, 以下代码供参考。

```JavaScript

{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
          "@scofAssets": "./src/assets",
          "@components": "./src/components"
      }
    }]
  ]
}

// 不要在外面包一层 babel, 这样会报错, 直接写 plugins 这一层即可


```

# Contributing

The main purpose of this repository is to continue to improve this project, Maybe you need some standard.

## PR branch name

    `develop`

## Improve this docs

    Branch name: `doc/+ date`

    Example: `doc/2018-1118-1130`

## Bugfix

    Branch name: `bugfix/+xx`

    Example: `bugfix/export-static-resource`