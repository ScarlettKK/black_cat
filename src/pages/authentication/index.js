import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../api/authentication'
import { connect } from 'react-redux'
import { LoginWrapper, Mask, TitileBox, LoginBox, Input, Button } from './style'

class Authentication extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { loginStatus } = this.props;
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <Mask/>
          <TitileBox>
            <p>FIND THE MOST LOVED ACTIVITIES</p>
            <h1>BLACK CAT</h1>
            {/* <img/> */}
          </TitileBox>
          <LoginBox>
            <Input 
              value={this.state.username}
              onChange={this.handleInputChange.bind(this, 'username')}
              placeholder="User Name"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange.bind(this, 'password')}
              placeholder="Password"
            />
            <Button onClick={this.login.bind(this)}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
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

const mapState = (state) => ({
	  loginStatus: state.getIn(['user', 'login'])
})

export default connect(mapState)(Authentication);
