import React, { Component } from 'react';
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
          onClick={this.login.bind(this)}
        >Login</Button>
        <Button 
          onClick={this.logout.bind(this)}
        >Logout</Button>
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

  logout() {
    api.logout();
  }
}

export default Authentication;
