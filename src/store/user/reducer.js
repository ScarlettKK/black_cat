import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false,
    username: '',
    email: '',
    avatar: ''
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'set_user_data':
			return state.merge({
                login: action.login,
                username: action.username,
                email: action.email,
                avatar: action.avatar
            })
		default:
			return state;
	}	
}