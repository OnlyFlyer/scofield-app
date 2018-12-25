/**
 * long description for the file
 * @summary Entry Component
 * @author Mark Scofiled
 * Created at     : 2018-12-13 16:36:36 
 * Last modified  : 2018-12-25 16:55:15
 */


import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Provider } from 'react-redux'
import { ActionTypes, RequestPath } from '@config'
import { Component } from '@lib'

import SplashScreen from './src/view/splash_screen'
import configureStore from './src/redux/store'
import Home from './src/view/home'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {}
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initComplete: false,
      hasLoadInfo: false,
      store: configureStore(this._changeLoadInfo)
    }
  }

  _changeLoadInfo = () => {
    this.setState({hasLoadInfo: true})
  }

  componentDidMount () {
    this._testRequest()
    // this.setState({
    //   initComplete: true
    // })
  }

  _testRequest = async () => {
    try {
      const res = await this.request('haha', { haha: 'hehe', hehe: 'haha' })
      console.log('===============test request=====================');
      console.log(res);
      console.log('====================================');
    } catch (err) {
      console.log(err)
    }
  }

  _initComplete = () => {
    this.setState({
      initComplete: true
    })
  }
  render() {
    const { initComplete = false, store, hasLoadInfo = true } = this.state
    if (!initComplete) {
      return (
        <SplashScreen
          showBtn
          // showBtn={hasLoadInfo}
          initEnd={this._initComplete}
        />
      )
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        {/* <Home /> */}
      </Provider>
    );
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
