import React from 'react'

import { Container } from './styles'
import HiHand from '../../assets/icons/👋.svg'

const WelcomeHeader = ({ userName }) => {
  return (
    <Container>
      <span>Hi,</span>
      <span>{userName}</span>
      <img src={HiHand} alt="hi-hand" />
    </Container>
  )
}

export default WelcomeHeader