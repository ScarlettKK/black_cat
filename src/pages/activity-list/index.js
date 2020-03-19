import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom';
import eventsApi from '../../api/events'
// import authenticationApi from '../../api/authentication'
// import { initUserMessage } from '../../api/encapsulation'
import ActivityItem from '../../components/activity-item'
// import localStorage, { USER_TOKEN, USER_ID } from '../../util/localStorage'
import Header from '../../components/header'
import { ActivityListWrapper, ActivityListBody } from './style'
import { Link } from 'react-router-dom'

class ActivityList extends Component {
  render() {
    // const { loginStatus } = this.props;
    // if(loginStatus) {
    const { events } = this.props;
    return (
      <ActivityListWrapper>
        <Header/>
        <ActivityListBody>
          {
            events.map((event) => {
              // return <li key={index} onClick={() => {
              //   handleDeleteItem(index)
              // }}>{item}</li>
              return (
                <Link key={event.id} to={'/details/' + event.id} className="resetLinkAtyle">
                  <ActivityItem event={event} key={event.id}/>
                </Link>
              )
            })
          }
          {/* <button 
            onClick={this.logout.bind(this)}
          >Logout</button> */}
        </ActivityListBody>
      </ActivityListWrapper>
    )
    // } else {
    //   return <Redirect to='/login'/>
    // }
  }
  componentDidMount() {
    this.props.getEvents()
  }
  // logout() {
  //   authenticationApi.logout().then((res) => {
  //     const ifSuccess = (res.status === 200)
  //     if(ifSuccess) {
  //         localStorage.delete(USER_TOKEN)
  //         localStorage.delete(USER_ID)

  //         initUserMessage.delete();
  //     }
  //   })
  // }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['user', 'login']),
  events: state.getIn(['events', 'events'])
})

const mapDispatch = (dispatch) => ({
	getEvents(){
		dispatch(() => {
      eventsApi.getEvents().then((res) => {
        const data = res.data;
        if(data) {
          const action = {
            type: 'set_events',
            events: data.events
          }
          dispatch(action)
        }
      })
    })
	}
})

export default connect(mapState, mapDispatch)(ActivityList);


