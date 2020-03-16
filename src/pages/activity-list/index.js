import React, { Component } from 'react';
import { Button } from 'antd'
import eventsApi from '../../api/events'
import authenticationApi from '../../api/authentication'
import history from '../../api/history'

class ActivityList extends Component {
  render() {
    return (
    	<div>
    		ActivityList
        <Button 
          onClick={this.logout.bind(this)}
        >Logout</Button>
    	</div>
    )
  }
  componentDidMount() {
    eventsApi.getEvents()
  }
  logout() {
    authenticationApi.logout().then((ifSuccess) => {
      if(ifSuccess)
        history.push('/login')
    });
  }
}

export default ActivityList;


