import React, { Component } from 'react';
import { connect } from 'react-redux'
import SVG from 'react-inlinesvg';

import api from '../../api/authentication'
import { LoginWrapper, Mask, TitileBox, LoginBox, Input, Button } from './style'
import logoImg from '../../static/svg/logo-cat.svg'
import userImg from '../../static/svg/user.svg'
import passwordImg from '../../static/svg/password.svg'

class Authentication extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <LoginWrapper>
        <Mask/>
        <TitileBox>
          <p>FIND THE MOST LOVED ACTIVITIES</p>
          <h1>BLACK CAT</h1>
          <span className="circle-outer">
            <span className="circle-inner">
              <SVG src={logoImg}/>
            </span>
          </span>
        </TitileBox>
        <LoginBox>
          <SVG src={userImg} className="user"/>
          <Input 
            value={this.state.username}
            onChange={this.handleInputChange.bind(this, 'username')}
            placeholder="User Name"
          />
          <SVG src={passwordImg}/>
          <Input
            value={this.state.password}
            onChange={this.handleInputChange.bind(this, 'password')}
            placeholder="Password"
          />
          <Button onClick={this.login.bind(this)}>SIGN IN</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }

  handleInputChange(type, event) {
    const newState = {}
    newState[type] = event.target.value;
    this.setState(newState)
  }

  login() {
    api.login(this.state)
  }
}

export default Authentication;
