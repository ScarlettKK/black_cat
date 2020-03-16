import React, { Component } from 'react';
import api from '../../api/authentication'
import { Input, Button } from 'antd'
import history from '../../api/history'

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
    	</div>
    )
  }

  handleInputChange(type, event) {
    const newState = {}
    newState[type] = event.target.value;
    this.setState(newState)
  }

  login() {
    api.login(this.state).then((ifSuccess) => {
      if(ifSuccess){
        history.push('/')
      }
    });
  }
}

export default Authentication;
