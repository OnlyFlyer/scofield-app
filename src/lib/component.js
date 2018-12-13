/**
 * Extend React's Component, Add some
 * customer feature, example: router: push, pop etc.
 * @summary Base Component
 * @author Mark Scofiled
 * Created at     : 2018-12-13 16:29:35 
 * Last modified  : 2018-12-13 16:31:49
 */

import React, { Component } from 'react'
import Request from './request'

export default class ScofComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  /**
   * @desc 获取路由中带来的数据
   * @param {String} dataName 
   */
  getRouteData (dataName) {}

  router () {
    return {
      /**
       * @desc 路由栈末尾新增一个路由
       * @param {String} routeName
       * @param {Object} params
       * @param {*} actions
       *（去往下一个页面）
       */
      push: (routeName, params, actions) => {},
      /**
       * @desc 从路由栈末尾减少一个路由
       *（返回上一个页面）
       */
      pop: () => {},
      /**
       * @desc 返回到路由栈中的某个路由
       * ，并删除从该路由到路由栈末尾的所
       * 有其他路由
       * @param {String} routeName
       */
      back: (routeName) => {},
      /**
       * @desc 重置路由栈, 并 push 传
       * 入的路由
       * @param {String} routeName
       * @param {Object} params
       */
      reset: (routeName, params) => {}
    }
  }

  /**
   * @desc 封装统一的请求方法
   * @param {String} apiKey 
   * @param {Object} params 
   */
  request (apiKey, params) {}
}
