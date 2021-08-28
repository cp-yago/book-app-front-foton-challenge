import React from 'react'

import { Container } from './styles'
import BookItem from './BookItem'

const BookList = ({ bookList }) => {
  return (
    <Container>
      {bookList.map(book => (
        <BookItem
        key={book.id} 
        id={book.id} 
        title={book.name} 
          description={book.description}
          onClick 
        />
      ))}
    </Container>
  )
}

export default BookList