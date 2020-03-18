import { fromJS } from 'immutable';

const defaultEvents = fromJS({
    event: {}
})

export default (state = defaultEvents, action) => {
	switch(action.type) {
		case 'set_event':
			return state.merge({
                event: action.event
            })
		default:
			return state;
	}	
}
