import React from 'react'

import { Container } from './styles'

import BookImg from '../../../assets/img/book1.png'

const BookItem = () => {
  return (
    <Container>
      <button>
        <img src={BookImg} alt="book-cover" />
        <span className="bookTitle">Good to Great</span>
        <span className="bookDescription">by Jim Collins</span>
      </button>
    </Container>
  )
}

export default BookItem