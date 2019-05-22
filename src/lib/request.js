import axios from 'axios'
import DeviceInfo from 'react-native-device-info'
import { RequestPath, host } from '@config'

const api = RequestPath.api
let ipAddr = ''
const deviceUUID = DeviceInfo.getUniqueID() // uniqueID
const systemName = DeviceInfo.getSystemName() // IOS/Android/iPad,WindowsPhone/~~
const systemVersion = DeviceInfo.getSystemVersion() // 系统版本
const deviceName = DeviceInfo.getDeviceName() // iPhone X/iPhone 8
const isEmulator = DeviceInfo.isEmulator() // Yes or No emulator
DeviceInfo.getIPAddress()
  .then(ip => {
    ipAddr = ip
  })
  .catch(err => {
    ipAddr = '127.0.0.1'
    console.log('==============get ipaddr failed======================')
    console.log(err)
    console.log('====================================')
  })

// 先不管登入登出接口
// const login = RequestPath.login

// 默认 host 为正式环境, 具体需要从全局拿到测试变量, 改变 host 地址
let getHost = host.getHost(true)

export default function (apiName, params) {
  return new Promise((resolve, reject) => {
    // 缺少从全局拿测试变量判断是否改变 host 地址
    let url = `${getHost}${api}/${apiName}`
    let config = {
      url,
      method: 'post',
      timeout: 5000
    }

    config.data = {
      deviceUUID,
      systemName,
      systemVersion,
      deviceName,
      isEmulator,
      ipAddr,
      headers: {
        cookie: `xhfyr`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      ...params
    }

    axios(url, config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
