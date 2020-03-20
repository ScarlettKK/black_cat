import React, { Component } from 'react';

import Header from '../../components/header'
import { ActivityListWrapper, ActivityListContent } from './style'
import List from './list'
import Search from './search'

class ActivityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false
    }
  }

  render() {
    return (
      <ActivityListWrapper>
        <ActivityListContent className = {this.state.isSearch ? 'searchOpenedList' : ''}>
          <Header containSearch="true" searchClick={this.showActivitySearch.bind(this)}/>
          <List/> 
        </ActivityListContent>
        <Search isSearch={this.state.isSearch}/>
      </ActivityListWrapper>
    )
  }
                                                                                    
  showActivitySearch() {
    this.setState((prevState) => {
      return {
        isSearch: !prevState.isSearch
      }
    })
  }
}

export default ActivityList;


