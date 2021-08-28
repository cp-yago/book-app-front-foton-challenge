import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

import { Container } from './styles'
import BookCover from './BookCover'

import Book1 from '../../assets/img/book1.png'

const BookDetail = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState({})

  const getBook = useCallback(async () => {
    const response = await api.get(`/books/${bookId}`)
    if (response) {
      setBook(response.data)
    } 
  }, [bookId, setBook])

  useEffect(() => {
    if (bookId) {
      getBook()
    }
  }, [bookId, getBook])

  return (
    <Container>
      <BookCover bookCoverUrl={Book1} />
      <div className="bookTitleContainer">
        <span className="bookTitle">{book.name}</span>
        <span className="bookSubTitle">:{book.description}</span><br />
        <span className="authorName">{book.author}</span>
      </div>
      <div className="descriptionContainer">
        <p>
          How do successful companies create products people can’t put down?

          Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?Why do some products capture widespread attention while others flop?
        </p>
      </div>
    </Container>
  )
}

export default BookDetail