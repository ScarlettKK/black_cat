import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import eventsReducer from './events'
import eventReducer from './event'
import participantsReducer from './participants'
import commentsReducer from './comments'


export default combineReducers({
	user: userReducer,
	events: eventsReducer,
	event: eventReducer,
	participants: participantsReducer,
	comments: commentsReducer
})