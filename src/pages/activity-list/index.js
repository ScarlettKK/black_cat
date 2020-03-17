import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Button } from 'antd'
import eventsApi from '../../api/events'
import authenticationApi from '../../api/authentication'
import { axiosToken } from '../../api/encapsulation'
import ActivityItem from '../../components/activity-item'
import localStorage, { USER_TOKEN, USER_ID } from '../../util/localStorage'

class ActivityList extends Component {
  render() {
    const { loginStatus } = this.props;
    if(loginStatus) {
      return (
        <div>
          <ActivityItem/>
          <Button 
            onClick={this.logout.bind(this)}
          >Logout</Button>
        </div>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
  componentDidMount() {
    eventsApi.getEvents()
  }
  logout() {
    authenticationApi.logout().then((res) => {
      const ifSuccess = (res.status === 200)
      if(ifSuccess) {
          localStorage.delete(USER_TOKEN)
          localStorage.delete(USER_ID)

          axiosToken.delete();
      }
    })
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['user', 'login'])
})

export default connect(mapState)(ActivityList);


