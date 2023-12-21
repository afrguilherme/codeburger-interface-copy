import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessageStyles } from './styles'

export function Error({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>
}

Error.propTypes = {
  children: PropTypes.string
}
