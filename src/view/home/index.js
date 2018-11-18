/*
 * @Author: wutao
 * @Date: 2018-11-04 10:02:34
 * @Last Modified by: wutao
 * @Last Modified time: 2018-11-04 10:06:32
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Home extends Component {
  render () {
    return (
      <View style={{ marginTop: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#f00' }}>这是首页</Text>
      </View>
    )
  }
}