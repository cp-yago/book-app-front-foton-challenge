import React from 'react'

import { LoadMoreButton } from './styles'

const Button = ({ onClick }) => {
  return (
    <LoadMoreButton 
      type="button"
      onClick={onClick}
    >
      Load more
    </LoadMoreButton>
  )
}

export default Button