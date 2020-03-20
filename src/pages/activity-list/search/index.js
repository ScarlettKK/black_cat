import React, { Component } from 'react';

import { SearchWrapper } from './style'

class Search extends Component {
  render() {
    const { isSearch } = this.props;
    return (
        <SearchWrapper className = {isSearch ? 'searchOpened' : ''}>Search</SearchWrapper>
    )
  }
  
}

export default Search;


