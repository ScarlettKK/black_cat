import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { HeaderWrapper, SearchButton, Logo, AvatarWrapper } from './style'
import logoImg from '../../static/svg/logo-cat.svg'
import Avatar from '../avatar'

class Header extends Component {
  render() {
    const { user } = this.props
    return (
    	<HeaderWrapper>
    		<SearchButton>
        </SearchButton>
        <Link to='/'>
          <Logo src={logoImg}/>
        </Link>
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


