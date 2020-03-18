import React, { Component } from 'react';
import { AvatarWrapper } from './style'

class Avatar extends Component {
  render() {
    return (
    	<AvatarWrapper>
        <img src={this.props.imgUrl} alt="user header"/>
      </AvatarWrapper>
    )
  }
  
}

export default Avatar;



