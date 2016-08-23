import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

// import root reducer
import rootReducer from './reducers/index'

import example from './data/example'

// create an object for the default data
const defaultState = {
	example
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export const history = syncHistoryWithStore(browserHistory, store)

export default store
