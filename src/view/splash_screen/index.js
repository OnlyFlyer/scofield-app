import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeviceInfo from 'react-native-device-info'

import { Img } from '@scofAssets'


class Splash extends Component {
  static defaultProps = {
    showBtn: true,
    initEnd: () => {}
  }
  constructor (props) {
    super(props)
    this.state = {}
    this.timer = setTimeout(() => {
      this.props.initEnd && this.props.initEnd()
    }, 5000)
    console.log('==============device_info======================');
    console.log('getDeviceCountry:', DeviceInfo.getDeviceCountry());
    console.log('getApplicationName()', DeviceInfo.getApplicationName());
    // console.log('getAPILevel():', DeviceInfo.getAPILevel()());
    // console.log('getBatteryLevel():', DeviceInfo.getBatteryLevel())
    console.log('getBrand():', DeviceInfo.getBrand())
    console.log('getBuildNumber()', DeviceInfo.getBuildNumber())
    console.log('getBundleId():', DeviceInfo.getBundleId())
    console.log('getDeviceCountry():', DeviceInfo.getDeviceCountry())
    console.log('getDeviceId()', DeviceInfo.getDeviceId())
    console.log('getDeviceName()', DeviceInfo.getDeviceName())
    console.log('getIPAddress()', DeviceInfo.getIPAddress())
    console.log('getSystemName()', DeviceInfo.getSystemName())
    console.log('getSystemVersion():', DeviceInfo.getSystemVersion())
    console.log('getVersion():', DeviceInfo.getVersion())
    console.log('isEmulator():', DeviceInfo.isEmulator())
    console.log('getUniqueID():', DeviceInfo.getUniqueID())
    console.log('getModel():', DeviceInfo.getModel())
    DeviceInfo.getIPAddress()
      .then(res => {
        console.log('res:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })
    console.log('====================================');
  }

  _skip = () => {
    const { initEnd } = this.props
    clearTimeout(this.timer)
    initEnd && initEnd()
  }

  _renderSkipBtn = () => {
    const { showBtn } = this.props
    const { countdownNum } = this.state
    if (showBtn) {
      return (
        <TouchableOpacity
          style={s.skipWrapper}
          activeOpacity={1}
          onPress={this._skip}
        >
          <Text style={s.skipText}>{`Skip`}</Text>
        </TouchableOpacity>
      )
    }
  }

  render () {
    return (
      <View style={s.container}>
        {this._renderSkipBtn()}
        <Image source={Img.IMG_LAUNCH} style={s.img} />
      </View>
    )
  }
}

const setState = state => ({
  userReducer: state.userReducer
})

// export default connect(setState)(Splash)
export default Splash

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  skipWrapper: {
    width: 50,
    height: 30,
    position: 'absolute',
    right: 20,
    top: 30,
    borderRadius: 3,
    zIndex: 2,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(50, 50, 50, 0.6)'
  },
  skipText: {
    color: '#fff',
    fontSize: 12
  },
  img: {
    width: '100%',
    height: '100%'
  }
})