import React, { Component } from 'react';
import { connect } from 'react-redux'

class ActivityDetails extends Component {
  render() {
    const { events } = this.props;
    return (
    	<div>
    		ActivityDetails
    	</div>
    )
  }
}

const mapState = (state) => ({
  events: state.getIn(['events', 'events'])
})

export default connect(mapState)(ActivityDetails);


