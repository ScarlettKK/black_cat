import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SVG from 'react-inlinesvg';

import { HeaderWrapper, SearchButton, Logo, AvatarWrapper } from './style'
import logoImg from '../../static/svg/logo-cat.svg'
import searchLogo from '../../static/svg/search.svg'
import homeLogo from '../../static/svg/home.svg'
import Avatar from '../avatar'

class Header extends Component {
  render() {
    const { user, containSearch, searchClick } = this.props

    return (
    	<HeaderWrapper>
        {
          containSearch === 'true' ?
          (<SearchButton onClick={searchClick}>
            <SVG src={searchLogo} />
          </SearchButton>) 
          :
          (<Link to='/'>
            <SearchButton>
              <SVG src={homeLogo} />
            </SearchButton>
          </Link>)
        }
    		
        <Logo>
          <SVG src={logoImg}/>
        </Logo>
       
        <AvatarWrapper>
          <Link to='/personal'>
            <Avatar imgUrl={user.avatar}/>
          </Link>
        </AvatarWrapper>
    	</HeaderWrapper>
    )
  }
}

const mapState = (state) => ({
  user: state.getIn(['user', 'user'])
})

export default connect(mapState)(Header);


