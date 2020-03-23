import React, { Component } from 'react';
import { connect } from 'react-redux'

import { 
    SearchResultWrapper,
    SearchResultCount,
    SearchContent,
    ClearSearch
 } from './style'
import eventsApi from '../../../api/events'

class SearchResult extends Component {
  render() {
    const { events, searchValue, isSearch } = this.props;
    const resultNumber = events.length;
    if(isSearch)
      return (
          <SearchResultWrapper>
              <SearchResultCount>{resultNumber} Results</SearchResultCount>
              <SearchContent>Searched for {searchValue}</SearchContent>
              <ClearSearch onClick={this.clearSearch.bind(this)}>CLEAR SEARCH</ClearSearch>
          </SearchResultWrapper>
      )
    else
     return ''
  }

  clearSearch() {
    this.props.setIsSearch()
    eventsApi.getEvents()
  }
}

const mapState = (state) => ({
    events: state.getIn(['events', 'events']),
    searchValue: state.getIn(['events', 'searchValue']),
    isSearch: state.getIn(['events', 'isSearch'])
})

const mapDispatch = (dispatch) => ({
  setIsSearch() {
    dispatch({
      type: 'set_isSearch',
      isSearch: false
    });
  }
});

export default connect(mapState, mapDispatch)(SearchResult);


