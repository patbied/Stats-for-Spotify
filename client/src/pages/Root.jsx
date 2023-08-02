import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = () => {


 

  return (
    <>
    <Header/>
    <Container className='bgMain'  style={{minHeight:'100vh'}} fluid>
    <Outlet/>
    </Container>
    <Footer/>
    </>
  )
}

export default Root