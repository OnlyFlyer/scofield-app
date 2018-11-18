/*
 * @Author: wutao
 * @Date: 2018-11-06 00:30:31
 * @Last Modified by: wutao
 * @Last Modified time: 2018-11-06 00:32:08
 */

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <TouchableOpacity>
        <View>
          <Text>This is a page component</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
