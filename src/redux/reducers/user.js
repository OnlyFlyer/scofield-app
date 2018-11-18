import { ActionTypes } from 'config'

const initState = {
  userName: '',
  password: '',
  mobilePhone: '',
  firstName: '',
  lastName: '',
  isLogin: false
}

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