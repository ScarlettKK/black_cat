import { fromJS } from 'immutable';

const defaultChannels = fromJS({
    channels: {}
})

export default (state = defaultChannels, action) => {
	switch(action.type) {
		case 'set_channels':
			return state.merge({
                channels: action.channels
            })
		default:
			return state;
	}	
}
