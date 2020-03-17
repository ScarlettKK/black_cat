import React, { Component } from 'react';
import { connect } from 'react-redux'

class Personal extends Component {
  render() {
    return (
    	<div>
    		Personal
    	</div>
    )
  }
}

const mapState = (state) => {
  console.log(state)
  return state.user;
}

export default connect(mapState)(Personal);

