import { ActionTypes } from '@config'

export default {
  logout: () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT, data: {} })
  },
  openApp: (data) => (dispatch) => {
    dispatch({ type: ActionTypes.OPEN_APP, data })
  },
  setUserInfo: (userInfo) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN, data: userInfo })
  }
}