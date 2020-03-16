import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Authentication from '../pages/authentication'
import Personal from '../pages/personal'
import ActivityList from '../pages/activity-list'
import ActivityDetails from '../pages/activity-details'

import axiosToken from '../api/axios-token'

class Router extends Component {
  constructor(props) {
	  super(props)
	  axiosToken.set()
  }
  render() {
    return (
    	<div>
    		<BrowserRouter>
    			<Route path='/login' exact component={Authentication}></Route>
    			<Route path='/personal' exact component={Personal}></Route>
				<Route path='/' exact component={ActivityList}></Route>
				<Route path='/details' exact component={ActivityDetails}></Route>
    		</BrowserRouter>
    	</div>
    )
  }
}

export default Router;
