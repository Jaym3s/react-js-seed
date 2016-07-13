import {combineReducers} from 'redux'
import {routeReducer as router} from 'redux-simple-router'

import userReducer from './user'

export default combineReducers({
    router,
    userReducer
})
