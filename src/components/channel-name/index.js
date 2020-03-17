import React, { Component } from 'react';
import { ChannelNameWrapper } from './style'

class ChannelName extends Component {
  render() {
    return (
    	<ChannelNameWrapper>
            {this.props.channelName}
        </ChannelNameWrapper>
    )
  }
}

export default ChannelName;



