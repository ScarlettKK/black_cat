import React, { Component } from 'react';
import api from '../../api/events'

class ActivityList extends Component {
  render() {
    return (
    	<div>
    		ActivityList
    	</div>
    )
  }
  componentDidMount() {
    api.getEvents()
  }
}

export default ActivityList;


