import { fromJS } from 'immutable';

const defaultEvents = fromJS({
	events: [],
	searchValue: '',
	isSearch: false
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
		case 'set_isSearch':
			return state.merge({
                isSearch: action.isSearch
			})
		default:
			return state;
	}	
}