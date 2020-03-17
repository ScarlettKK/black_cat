import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../api/authentication'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { axiosToken } from '../../api/encapsulation'
import localStorage, { USER_TOKEN, USER_ID } from '../../util/localStorage'

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
        <div>
          User Name: 
          <Input 
            value={this.state.username}
            onChange={this.handleInputChange.bind(this, 'username')}
          />
          Password: 
          <Input 
            value={this.state.password}
            onChange={this.handleInputChange.bind(this, 'password')}
          />
          <Button 
            onClick={this.login.bind(this)}
          >Login</Button>
        </div>
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
      console.log(res)
      const ifSuccess = (res.status === 200)
      if(ifSuccess) {
          const result = res.data;
          const user = result.user;
          localStorage.set(USER_TOKEN, result.token)
          localStorage.set(USER_ID, user.id)

          const action = {
            type: 'set_user_data',
            login: true,
            ...user
          }
          console.log(action)
          this.props.changeUserData(action);

          axiosToken.set();
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
