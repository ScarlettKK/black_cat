import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Authentication from '../pages/authentication'
import Personal from '../pages/personal'
import ActivityList from '../pages/activity-list'
import ActivityDetails from '../pages/activity-details'

class Router extends Component {
  render() {
    return (
    	<div>
    		<BrowserRouter>
    			<Route path='/' exact component={Authentication}></Route>
    			<Route path='/personal' exact component={Personal}></Route>
				<Route path='/list' exact component={ActivityList}></Route>
				<Route path='/details' exact component={ActivityDetails}></Route>
    		</BrowserRouter>
    	</div>
    )
  }
}

export default Router;
