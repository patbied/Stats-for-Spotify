import React from 'react'
import { Alert } from 'react-bootstrap'
const AlertPopup = ({variant, message}) => {
  return (
    <Alert variant={variant} dismissible>
    {message ? message : 'An error occured.'}

  </Alert>
  )
}

export default AlertPopup