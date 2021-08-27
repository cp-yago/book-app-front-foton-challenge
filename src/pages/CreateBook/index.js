import React from 'react'

import { Container } from './styles'
import BottomMenu from '../../components/BottomMenu'
import Heading from './Heading'
import Form from './Form'

const CreateBook = () => {
  return (
    <Container>
      <Heading title="Add a new book"/>
      <Form />
      <BottomMenu />
    </Container>
  )
}

export default CreateBook