import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
const NotFound = props => {
    const error = useRouteError()
  return (
    <> 
    <Header/>
    <Container className='bgMain'  style={{minHeight:'100vh'}} fluid>
    <div className='text-center colorMain'>
        <h3>An error has occured</h3>
        <p>{error.statusText || error.message}</p>
    </div>
    </Container>
    </>
  )
}



export default NotFound