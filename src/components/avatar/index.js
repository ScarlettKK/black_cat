import React, { Component } from 'react';
import { AvatarWrapper } from './style'

class Avatar extends Component {
  render() {
    return (
    	<AvatarWrapper>
            <a href={this.props.urlToPersonal}>
                <img src={this.props.imgUrl} alt="user header"/>
            </a>
        </AvatarWrapper>
    )
  }
  
}

export default Avatar;



