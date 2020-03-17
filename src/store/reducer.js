import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import eventReducer from './events'

export default combineReducers({
	user: userReducer,
	events: eventReducer
})