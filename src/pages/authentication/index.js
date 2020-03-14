import React, { Component } from 'react';
import CommonButton from '../../components/common-button'
import api from '../../api/authentication'
import { Input, Button } from 'antd'

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
          content="Login"
          onClick={this.login.bind(this)}
        >Login</Button>
    	</div>
    )
  }

  handleInputChange(type, event) {
    const newState = {}
    newState[type] = event.target.value;
    this.setState(newState)
  }

  login() {
    console.log("cat")
    api.login(this.state);
  }
}

export default Authentication;
