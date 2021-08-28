import React, { useEffect, useCallback, useState, useMemo } from 'react'

import { Container } from './styles'

import SearchInput from '../../components/SearchInput'
import WelcomeHeader from '../../components/WelcomeHeader'
import BottomMenu from '../../components/BottomMenu'
import BookList from '../../components/BookList'
import LoadMoreButton from '../../components/LoadMoreButton'

import api from '../../services/api'

const Home = () => {

  const initialFilters = useMemo(() => ({
    page: 0,
    pageLimit: 5,
  }), [])

  const [filters, setFilters] = useState({ ...initialFilters })
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState()

  const getBooks = useCallback(async () => {
    const params = {
      ...filters,
      name: search
    }

    const response = await api.get("/books", { params })
    if (response) {
      setBooks(response.data)
    }
  }, [search])

  const handleSearchInputChange = useCallback((value) => {
    setSearch(value)
  }, [])

  const handleLoadMore = useCallback(async () => {
    const newPage = filters.page + 6
    const newPageLimit = filters.pageLimit + 6

    const params = {
      ...filters,
      page: newPage,
      pageLimit: newPageLimit
    }

    const response = await api.get("/books", { params })
    
    // setFilters(params)

    if (response) setBooks([...books, ...response.data])

  }, [filters, books])

  useEffect(() => {
    getBooks()
  }, [getBooks, filters])

  return (
    <Container>

      <SearchInput onChange={handleSearchInputChange} />

      <WelcomeHeader userName="Yago Cunha"/>

      <BookList bookList={books} />

      <LoadMoreButton onClick={handleLoadMore} />

      <BottomMenu />
      
    </Container>
  )
}

export default Home