import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../api/authentication'
import { connect } from 'react-redux'
import { initUserMessage } from '../../api/encapsulation'
import localStorage, { USER_TOKEN } from '../../util/localStorage'
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
    api.login(this.state).then((res) => {
      const ifSuccess = (res.status === 200)
      if(ifSuccess) {
          const result = res.data;
          const user = result.user;
          localStorage.set(USER_TOKEN, result.token)

          const action = {
            type: 'set_login_data',
            login: true,
            user: user
          }
          this.props.changeUserData(action);

          initUserMessage.set();
      }
    })
  }
}

const mapState = (state) => ({
	  loginStatus: state.getIn(['user', 'login'])
})


const mapDispatch = (dispatch) => ({
	changeUserData(action){
		dispatch(action)
	}
})

export default connect(mapState, mapDispatch)(Authentication);
