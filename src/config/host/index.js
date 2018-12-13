/**
 * @summary host config, include getHost methods
 * @author Mark Scofiled
 * Created at     : 2018-12-13 17:15:29 
 * Last modified  : 2018-12-13 17:23:28
 */

export default {
  // isTest 为 true, 返回测试服务器地址, 否则返回线上地址
  getHost: (isTest) => (isTest ? `http://www.baidu.com` : `http://www.sss.com/`)
}