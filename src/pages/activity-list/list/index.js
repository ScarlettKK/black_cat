import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import eventsApi from '../../../api/events'
import ActivityItem from '../../../components/activity-item'
import { ActivityListBody } from './style'
import NoActivity from '../../../components/no-activity'

class List extends Component {
  render() {
    const { events, isSearch } = this.props;
    return (
        <ActivityListBody className={ isSearch? 'startSearch' : ''}>
          {
            events.length > 0 ? events.map((event) => {
              return (
                <Link key={event.id} to={'/details/' + event.id} className="resetLinkAtyle">
                  <ActivityItem event={event} key={event.id}/>
                </Link>
              )
            })
            :
            <NoActivity/>
          }
        </ActivityListBody>
    )
  }
  componentDidMount() {
    eventsApi.getEvents()
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['user', 'login']),
  events: state.getIn(['events', 'events']),
  isSearch: state.getIn(['events', 'isSearch'])
})

export default connect(mapState)(List);


