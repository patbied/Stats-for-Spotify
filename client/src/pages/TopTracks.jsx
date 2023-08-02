import React, {useEffect} from 'react'
import TopTrackTabs from '../components/TopTrackTab'
import { useNavigate } from 'react-router-dom'
import useAuth from '../context/useAuth'
const TopTracks = () => {
  const {auth} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth){
      navigate('/')
    }
  },[auth])
  return (
    <div className='customDiv text-center colorMain'> 
    <h2 className='customh2'>View Top 10 Tracks by Time Range</h2>
    <TopTrackTabs/>
    </div>
  )
}

export default TopTracks