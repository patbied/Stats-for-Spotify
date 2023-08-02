import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useRecentlyPlayed } from '../hooks/useRecentlyPlayed'
import RecentlyPlayedItem from './RecentlyPlayedItem'
const RecentlyPlayed = () => {
    const {data,isLoading,isError} = useRecentlyPlayed()
  return (
    <ListGroup >
        {data?.items?.map((item,index) => (
            <RecentlyPlayedItem data={item} key={index}/>
        ))}
    </ListGroup>
  )
}

export default RecentlyPlayed