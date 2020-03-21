import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import userApi from '../../../api/user'
import ActivityItem from '../../../components/activity-item'
import { ActivityListBody } from './style'

class Likes extends Component {
  render() {
    const { events } = this.props;
    return (
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
    )
  }
  componentDidMount() {
    userApi.getUserEvents({type:'liked'});
  }
}

const mapState = (state) => ({
  events: state.getIn(['user', 'liked'])
})

export default connect(mapState)(Likes);


