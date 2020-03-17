import { fromJS } from 'immutable';

const defaultEvents = fromJS({
    events: []
})

export default (state = defaultEvents, action) => {
	switch(action.type) {
		case 'set_events':
			return state.merge({
                events: action.events
            })
		default:
			return state;
	}	
}