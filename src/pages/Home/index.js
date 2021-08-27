import React from 'react'

import { Container } from './styles'

import SearchInput from '../../components/SearchInput'
import WelcomeHeader from '../../components/WelcomeHeader'
import BottomMenu from '../../components/BottomMenu'
import BookList from '../../components/BookList'

const Home = () => {
  return (
    <Container>

      <SearchInput />

      <WelcomeHeader userName="Yago Cunha"/>

      <BookList />

      <BottomMenu />
      
    </Container>
  )
}

export default Home