import React, { useEffect, useCallback, useState, useMemo } from 'react'

import { Container } from './styles'

import SearchInput from '../../components/SearchInput'
import WelcomeHeader from '../../components/WelcomeHeader'
import BottomMenu from '../../components/BottomMenu'
import BookList from '../../components/BookList'

import api from '../../services/api'

const Home = () => {

  const initialFilters = useMemo(() => ({
    page: 0,
    pageLimit: 5,
  }), [])

  const [filters, setFilters] = useState({ ...initialFilters })
  const [books, setBooks] = useState([])

  const getBooks = useCallback(async (query = {}) => {
    const params = {
      ...filters,
      ...query
    }

    const response = await api.get("/books", { params })
    if (response) {
      setBooks(response.data)
    }
  }, [filters])

  const handleSearchInputChange = useCallback((value) => {
    getBooks({ name: value })
  }, [getBooks])

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <Container>

      <SearchInput onChange={handleSearchInputChange} />

      <WelcomeHeader userName="Yago Cunha"/>

      <BookList bookList={books} />

      <BottomMenu />
      
    </Container>
  )
}

export default Home