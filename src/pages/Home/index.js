import React, { useEffect, useCallback, useState } from 'react'

import { Container } from './styles'

import SearchInput from '../../components/SearchInput'
import WelcomeHeader from '../../components/WelcomeHeader'
import BottomMenu from '../../components/BottomMenu'
import BookList from '../../components/BookList'

import api from '../../services/api'

const Home = () => {
  const [books, setBooks] = useState([])

  const getBooks = useCallback(async () => {
    const response = await api.get("/books")
    if (response) {
      setBooks(response.data)
    }
  }, [])

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <Container>

      <SearchInput />

      <WelcomeHeader userName="Yago Cunha"/>

      <BookList bookList={books} />

      <BottomMenu />
      
    </Container>
  )
}

export default Home