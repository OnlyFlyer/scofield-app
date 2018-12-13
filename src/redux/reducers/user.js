/**
 * Redux base config and will to do something
 * @summary Reducer in User
 * @author Mark Scofiled
 * Created at     : 2018-12-13 14:00:13 
 * Last modified  : 2018-12-13 16:07:21
 */

import { ActionTypes } from 'config'

const initState = {
  firstName: '', // 名字
  lastName: '', // 姓氏
  userName: '', // 用户名字 -- 是否重复/失焦验证请求
  password: '', // 用户密码 -- 强 or 弱, 本地验证
  mobilePhone: '', // 手机号码 -- 手机号合法性验证
  email: '', // 邮箱地址 -- 邮箱合法性验证
  idCard: '', // 身份证号 -- 身份证号合法性验证
  gender: '', // 性别 F/M/ Male/Female
  loginIp: '', // 登录 IP
  isLogin: false
}

// 把想说的话写下来, 别人为你读
// 关键信息加密
// 通过 mobilePhone/email/userName + password 登录

export default (state = initState, action = {}) => {
  switch (action.type) {
    /**
     * login
     */
    case ActionTypes.LOGIN:
      return action.data
    /**
     * logout
     */
    case ActionTypes.LOGOUT:
      return action.data
    /**
     * init state
     */
    default:
      return state
  }
}