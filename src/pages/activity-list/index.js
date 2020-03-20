import React, { Component } from 'react';

import Header from '../../components/header'
import { ActivityListWrapper } from './style'
import List from './list'

class ActivityList extends Component {
  render() {
    return (
      <ActivityListWrapper>
        <Header/>
        <List/>
      </ActivityListWrapper>
    )
  }
  
}

export default ActivityList;


