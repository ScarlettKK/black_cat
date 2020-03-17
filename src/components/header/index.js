import React, { Component } from 'react';
import { HeaderWrapper, SearchButton, Logo, AvatarWrapper } from './style'
import logoImg from '../../static/svg/logo-cat.svg'
import avatarImg from '../../static/avatar.jpeg'
import Avatar from '../avatar'

class Header extends Component {
  render() {
    return (
    	<HeaderWrapper>
    		<SearchButton>
        </SearchButton>
        <Logo src={logoImg}/>
        <AvatarWrapper>
          <Avatar imgUrl={avatarImg}/>
        </AvatarWrapper>
    	</HeaderWrapper>
    )
  }
  
}

export default Header;


