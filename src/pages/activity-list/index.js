import React, { Component } from 'react';
import { connect } from 'react-redux'
import eventsApi from '../../api/events'
import ActivityItem from '../../components/activity-item'
import Header from '../../components/header'
import { ActivityListWrapper, ActivityListBody } from './style'
import { Link } from 'react-router-dom'

class ActivityList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ActivityListWrapper>
        <Header/>
        <ActivityListBody>
          {
            events.map((event) => {
              return (
                <Link key={event.id} to={'/details/' + event.id} className="resetLinkAtyle">
                  <ActivityItem event={event} key={event.id}/>
                </Link>
              )
            })
          }
        </ActivityListBody>
      </ActivityListWrapper>
    )
  }
  componentDidMount() {
    this.props.getEvents()
  }
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


