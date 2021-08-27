import React from 'react'

import { Container } from './styles'

const Heading = ({ title }) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}

export default Heading