
import { applyMiddleware, createStore } from 'redux'

import reducers from '../reducers'

// function configureStore (onComplete) {
//   const store = autoRehydrate()
// }

export default function configureStore (onComplete) {
  let store = createStore(reducers)
  return store
}