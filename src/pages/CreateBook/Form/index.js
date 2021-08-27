import React from 'react'

import { Container } from './styles'
import DefaultInput from '../../../components/DefaultInput'
import DefaultTextArea from '../../../components/DefaultTextArea'
import DefaultButton from '../../../components/DefaultButton'

const Form = () => {
  return (
    <Container>
      <DefaultInput label="Name" />
      <DefaultInput label="Author" />
      <DefaultTextArea label="Description" />
      <DefaultButton>Add new book</DefaultButton>
    </Container>
  )
}

export default Form