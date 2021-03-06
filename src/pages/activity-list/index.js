import React, { Component } from 'react';

import Header from '../../components/header'
import { ActivityListWrapper, ActivityListContent } from './style'
import List from './list'
import Search from './search'
import SearchResult from './search/searchResult'

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
          <SearchResult/>
          <List/> 
        </ActivityListContent>
        <Search isSearch={this.state.isSearch} showActivitySearch={this.showActivitySearch.bind(this)}/>
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


