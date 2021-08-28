import React from 'react'

import { SearchInput, Container } from './styles'

import SearchIcon from '../../assets/icons/search.svg'

const Search = ({ onChange }) => {
  return (
    <Container>
      <img src={SearchIcon} alt="search-icon"/>
      <SearchInput 
        placeholder="Search book"
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  )
}

export default Search