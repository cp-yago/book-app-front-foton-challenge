import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import BookImg from '../../../assets/img/book1.png'

const BookItem = ({ id, title, description }) => {
  const history = useHistory()

  const navigateToBookDetail = useCallback((bookId) => {
    history.push(`/book/${bookId}`)
  }, [history])

  return (
    <Container>
      <button type="button" onClick={() => navigateToBookDetail(id)}>
        <img src={BookImg} alt="book-cover" />
        <span className="bookName">{title}</span>
        <span className="bookDescription">{description}</span>
      </button>
    </Container>
  )
}

export default BookItem