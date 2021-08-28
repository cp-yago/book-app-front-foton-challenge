import React from 'react'

import { Container } from './styles'

import Texture1 from '../../../assets/textures/texture1.png'
import Texture2 from '../../../assets/textures/texture2.png'
import Texture3 from '../../../assets/textures/texture3.png'
import Texture4 from '../../../assets/textures/texture4.png'
import Texture5 from '../../../assets/textures/texture5.png'

const BookCover = ({ bookCoverUrl }) => {
  return (
    <Container>
      <img src={Texture1} alt="texture" className="texture1"/>
      <img src={Texture2} alt="texture" className="texture2"/>
      <img src={Texture3} alt="texture" className="texture3"/>
      <img src={Texture4} alt="texture" className="texture4"/>
      <img src={Texture5} alt="texture" className="texture5"/>
      <img src={bookCoverUrl} alt="book-cover" className="bookCover" />
    </Container>
  )
}

export default BookCover