import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false,
	user: {},
	liked: [],
	going: [],
	past: []
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'set_login_data':
			return state.merge({
                login: action.login,
                user: action.user
			})
		case 'set_user_liked':
			return state.merge({
                liked: action.liked
			})
		case 'set_user_going':
			return state.merge({
                going: action.going
			})
		case 'set_user_past':
			return state.merge({
                past: action.past
            })
		default:
			return state;
	}	
}