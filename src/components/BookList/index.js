import React from 'react'

import { Container } from './styles'
import BookItem from './BookItem'

const BookList = () => {
  return (
    <Container>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </Container>
  )
}

export default BookList