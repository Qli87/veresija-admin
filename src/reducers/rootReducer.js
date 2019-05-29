import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import userReducer from './userReducer'
import { localizeReducer } from 'react-localize-redux'


export default combineReducers({
    adminReducer,
    localize: localizeReducer,
    userReducer
})