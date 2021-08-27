import React from 'react'

import { SearchInput, Container } from './styles'

import SearchIcon from '../../assets/icons/search.svg'

const Search = () => {
  return (
    <Container>
      <img src={SearchIcon} alt="search-icon"/>
      <SearchInput 
        placeholder="Search book"
      />
    </Container>
  )
}

export default Search