import React, { Component } from 'react';
import { connect } from 'react-redux'

import { 
    SearchResultWrapper,
    SearchResultCount,
    SearchContent,
    ClearSearch
 } from './style'

class SearchResult extends Component {
  render() {
    const { events, searchValue } = this.props;
    const resultNumber = events.length;
    return (
        <SearchResultWrapper>
            <SearchResultCount>{resultNumber} Results</SearchResultCount>
            <SearchContent>Searched for {searchValue}</SearchContent>
            <ClearSearch>CLEAR SEARCH</ClearSearch>
        </SearchResultWrapper>)
  }
}

const mapState = (state) => ({
    events: state.getIn(['events', 'events']),
    searchValue: state.getIn(['events', 'searchValue'])
})

export default connect(mapState)(SearchResult);


