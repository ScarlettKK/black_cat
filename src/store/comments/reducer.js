import { fromJS } from 'immutable';

const defaultComments = fromJS({
    comments: []
})

export default (state = defaultComments, action) => {
	switch(action.type) {
		case 'set_comments':
			return state.merge({
                comments: action.comments
            })
		default:
			return state;
	}	
}