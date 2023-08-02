import React, { useEffect } from 'react'
import TopArtistTabs from '../components/TopArtistTabs'
import { useNavigate } from 'react-router-dom'
import useAuth from '../context/useAuth'
const TopArtists = () => {
  const {auth} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth){
      navigate('/')
    }
  },[auth])
  return (
    <div className='customDiv text-center colorMain'> 
    <h2 className='customh2'>View top 10 Artists by Time Range</h2>
    <TopArtistTabs/>
    </div>
  )
}

export default TopArtists