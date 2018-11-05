/*
 * @Author: wutao
 * @Date: 2018-11-05 10:31:58
 * @Last Modified by: wutao
 * @Last Modified time: 2018-11-06 00:27:07
 * 
 * @providesModule scofAssets (废弃)
 * 不使用 fbjs 自带的 providesModule 是因为 在 0.57+ 的 RN 版本中已经废弃掉了这个 feature,
 * 详见: https://github.com/facebook/react-native/commit/eeab57aa26385656cc69f057c9db5c7f4da293ff,
 * 现使用的是 babel-plugin-module-resolver, https://github.com/tleunen/babel-plugin-module-resolver
 */

// components export files

import Tip from './tip'

export {
  Tip
}