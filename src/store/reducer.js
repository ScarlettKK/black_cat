import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import eventsReducer from './events'
import eventReducer from './event'


export default combineReducers({
	user: userReducer,
	events: eventsReducer,
	event: eventReducer
})