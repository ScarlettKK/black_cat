import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Authentication from '../pages/authentication'
import Personal from '../pages/personal'
import ActivityList from '../pages/activity-list'
import ActivityDetails from '../pages/activity-details'
import store from '../store'

import { initUserMessage } from '../api/encapsulation'

class Router extends Component {
  constructor(props) {
	  super(props)
	  initUserMessage.set()
  }
  render() {
    return (
    	<Provider store={store}>
    		<BrowserRouter>
				  <Route path='/' exact component={ActivityList}></Route>
    			<Route path='/login' exact component={Authentication}></Route>
    			<Route path='/personal' exact component={Personal}></Route>
				  <Route path='/details/:id' exact component={ActivityDetails}></Route>
    		</BrowserRouter>
    	</Provider>
    )
  }
}

export default Router;
