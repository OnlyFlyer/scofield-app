/*
 * @Author: wutao
 * @Date: 2018-11-05 10:33:49
 * @Last Modified by: wutao
 * @Last Modified time: 2018-11-06 00:24:41
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Tip extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View>
        <Text>This is a Tips !</Text>
      </View>
    )
  }
}