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
    eventsApi.getEvents()
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['user', 'login']),
  events: state.getIn(['events', 'events'])
})

export default connect(mapState)(ActivityList);


