import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false,
    user: {}
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'set_login_data':
			return state.merge({
                login: action.login,
                user: action.user
            })
		default:
			return state;
	}	
}