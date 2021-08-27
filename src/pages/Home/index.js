import React from 'react'

import { Container } from './styles'

import SearchInput from '../../components/SearchInput'
import WelcomeHeader from '../../components/WelcomeHeader'
import BottomMenu from '../../components/BottomMenu'

const Home = () => {
  return (
    <Container>
      <SearchInput />
      <WelcomeHeader userName="Yago Cunha"/>
      <BottomMenu />
    </Container>
  )
}

export default Home