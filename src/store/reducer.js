import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import eventsReducer from './events'
import eventReducer from './event'
import participantsReducer from './participants'
import commentsReducer from './comments'
import channelsReducer from './channels'


export default combineReducers({
	user: userReducer,
	events: eventsReducer,
	event: eventReducer,
	participants: participantsReducer,
	comments: commentsReducer,
	channels: channelsReducer
})