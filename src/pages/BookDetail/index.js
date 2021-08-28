import React from 'react'

import { Container } from './styles'
import BookCover from './BookCover'

import Book1 from '../../assets/img/book1.png'

const BookDetail = () => {
  return (
    <Container>
      <BookCover bookCoverUrl={Book1} />
      <div className="bookTitleContainer">
        <span className="bookTitle">Hooked</span>
        <span className="bookSubTitle">: How to Build Habid-Forming Products</span><br />
        <span className="authorName">Nir Eyal</span>
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