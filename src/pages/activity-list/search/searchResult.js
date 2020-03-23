import React, { Component } from 'react';

import { 
    SearchResultWrapper,
    SearchResultCount,
    SearchContent,
    ClearSearch
 } from './style'

class SearchResult extends Component {
  render() {
    return (
        <SearchResultWrapper>
            <SearchResultCount>14 Results</SearchResultCount>
            <SearchContent>Searched for Channel</SearchContent>
            <ClearSearch>CLEAR SEARCH</ClearSearch>
        </SearchResultWrapper>)
  }
}

export default SearchResult;


