/**
 * Export all routers in this Apps
 * @summary short description for the file
 * @author Mark Scofiled
 *
 * Created at     : 2018-12-27 12:07:26 
 * Last modified  : 2018-12-27 12:08:56
 */

import Home from './home'
import Mine from './mine'

export default {
  ...Home,
  ...Mine
}