import React from 'react'
import { ListGroup, Row, Image} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import logo from '../assets/images/spotify-logo.png'
const RecentlyPlayedItem = ({data}) => {
    dayjs.extend(relativeTime)
    // console.log(data)
  return (
    <ListGroup.Item className='customListgroupItem'>
        <Row> 
        <Col xd={4} sm={4} md={4} lg={4}>
            <span> <a href={data?.track?.external_urls?.spotify} target="_blank"><Image src={logo} style={{maxHeight:'30px',maxWidth:'30px'}}/></a><span className='colorWhite'> Song: </span>{data?.track?.name}</span>
        </Col>
        <Col xd={4} sm={4} md={4} lg={4}>
            <span><span className='colorWhite'>Artist: </span>{data?.track?.artists[0]?.name}</span>
        </Col>
        <Col xd={4} sm={4} md={4} lg={4}>
            <span><span className='colorWhite'>Time: </span>{dayjs(data?.played_at).fromNow()}</span>
        </Col>
        </Row>
    </ListGroup.Item>
  )
}

export default RecentlyPlayedItem