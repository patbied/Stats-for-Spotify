import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useRecentlyPlayed } from '../hooks/useRecentlyPlayed'
import RecentlyPlayedItem from './RecentlyPlayedItem'
import Loader from './Loader'
const RecentlyPlayed = () => {
    const {data,isLoading,isError,error} = useRecentlyPlayed()
    useEffect(() => {
      // console.log(data)
    },[data])
    useEffect(() => {
      if (isError){
        console.log("is err",isError)
        console.log(error)
      }
      
    },[error,isError])
  
  
    if (isError){
      return <p>An error occured.</p>
    }
    if (isLoading){
      return  <Loader/>
    }  
    
    return (
    <ListGroup >
        {data?.items?.map((item,index) => (
            <RecentlyPlayedItem data={item} key={index}/>
        ))}
    </ListGroup>
    )
  
}

export default RecentlyPlayed