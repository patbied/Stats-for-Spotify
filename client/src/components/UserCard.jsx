import React from 'react'
import { Card,ListGroup } from 'react-bootstrap'
const UserCard = ({data}) => {
  return (
    <Card className='customCard'>
    {data?.images && (
        <Card.Img variant="top" src={data?.images[0]} />
    )}
    
    <Card.Body>
      <Card.Title>Welcome to Spotify Stats, {data?.display_name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group">
        <ListGroup.Item className='customListgroupItem'>Country: {data?.country}</ListGroup.Item>
        <ListGroup.Item className='customListgroupItem'>Email: {data?.email}</ListGroup.Item>
        <ListGroup.Item className='customListgroupItem'>Followers: {data?.followers?.total}</ListGroup.Item>
      </ListGroup>
    {/* <Card.Body>
      <Card.Link href={data?.href}>Card Link</Card.Link>
    </Card.Body> */}
  </Card>
  )
}

export default UserCard