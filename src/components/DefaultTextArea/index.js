import React from 'react'

import { Container } from './styles'

const DefaultInput = ({ label }) => {
  return (
    <Container>
      <span>{label}</span>
      <input />
    </Container>
  )
}

export default DefaultInput