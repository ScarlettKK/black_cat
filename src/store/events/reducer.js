import { fromJS } from 'immutable';

const defaultEvents = fromJS({
	events: [],
	searchValue: ''
})

export default (state = defaultEvents, action) => {
	switch(action.type) {
		case 'set_events':
			return state.merge({
                events: action.events
			})
		case 'set_search_content':
			return state.merge({
                searchValue: action.searchValue
			})
		default:
			return state;
	}	
}