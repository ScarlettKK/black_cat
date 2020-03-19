import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/personal'>
            <Avatar imgUrl={avatarImg}/>
          </Link>
        </AvatarWrapper>
    	</HeaderWrapper>
    )
  }
  
}

export default Header;


