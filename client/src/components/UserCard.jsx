import React from 'react'
import { Card,ListGroup } from 'react-bootstrap'
const UserCard = ({data}) => {
  return (
    <Card className='customCard'>
    {/* {data?.images && (
        <Card.Img variant="top" src={data?.images[0].url} rounded/>
    )} */}
    
    <Card.Body>
      <Card.Title></Card.Title>
    </Card.Body>
    <Card.Body>
      <Card.Text> Welcome to Stats for Spotify, {data?.display_name}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default UserCard