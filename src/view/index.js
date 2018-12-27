import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { Component } from '@lib'
import { Action } from '@redux'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class EntryComponent extends Component {
  render () {
    console.log('=========EntryComponent=============');
    console.log(this.props)
    console.log(this.state)
    console.log('====================================');
    return (
      <View style={styles.container}>
        <Text>没有什么能够阻挡</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 是一个函数, 用于建立 store 跟 state 的关系
const mapStateToProps = (state, ownProps) => {
  console.log('===============mapStateToProps=====================');
  console.log(state);
  console.log(ownProps)
  console.log('====================================');
  return {
    userInfo: state.userInfo
  }
}

// 用于建立 组件 跟 store.dispatch 的映射关系, 可以是 object, 也可以是一个函数
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('=============mapDispatchToProps=======================');
  console.log(dispatch);
  console.log(ownProps)
  console.log('====================================');
  return {
    openApp: (data) => dispatch(Action.UserAction.openApp(data)),
    setUserInfo: (data) => dispatch(Action.UserAction.setUserInfo(data)),
    logout: () => dispatch(Action.UserAction.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryComponent)