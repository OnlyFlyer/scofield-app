import React from 'react'
import { View, Text, Image } from 'react-native'

import { Component } from '@lib'
import { Icon } from '@scofAssets'

export default class TestA extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I am Test A</Text>
        <Image source={Icon.ICON_MINE_NOR} style={{ width: 24, height: 24 }} />
      </View>
    )
  }
}
