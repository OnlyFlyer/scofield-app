import React from 'react'
import { View, Text, Image } from 'react-native'

import { Component } from '@lib'
import { Icon } from '@scofAssets'

export default class TestB extends Component {
  render () {
    return (
      <View>
        <Text>I am Test B</Text>
        <Image source={Icon.ICON_MINE_NOR} style={{ width: 24, height: 24 }} />
      </View>
    )
  }
}
