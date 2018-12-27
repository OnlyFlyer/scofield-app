/**
 * long description for the file
 * @summary Entry Component
 * @author Mark Scofiled
 * Created at     : 2018-12-13 16:36:36 
 * Last modified  : 2018-12-27 11:45:43
 */


import React from 'react'
import { Provider, connect } from 'react-redux'

import { ActionTypes, RequestPath } from '@config'
import { Component } from '@lib'
import { Actions, Reducers, Store } from '@redux'

import SplashScreen from './src/view/splash_screen'
import configureStore from '@redux/store'
import EntryComponent from './src/view'

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
  }

  _initComplete = () => {
    this.setState({
      initComplete: true
    })
  }

  render() {
    const { initComplete = false, store } = this.state
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
        <EntryComponent />
      </Provider>
    );
  }
}
