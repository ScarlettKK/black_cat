import { fromJS } from 'immutable';

const defaultParticipants = fromJS({
    going: [],
    likes: []
})

export default (state = defaultParticipants, action) => {
	switch(action.type) {
		case 'set_going_participants':
			return state.merge({
                going: action.going
            })
        case 'set_likes_participants':
            return state.merge({
                likes: action.likes
            })
		default:
			return state;
	}	
}