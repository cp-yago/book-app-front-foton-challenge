import React from 'react'

import { Button } from './styles'

const DefaultButton = ({ children }) => {
  return (
    <Button type="submit">
      {children}
    </Button>
  )
}

export default DefaultButton