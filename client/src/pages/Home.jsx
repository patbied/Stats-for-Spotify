import React from 'react'

import {useEffect, useState } from 'react'
import useAuth from '../context/useAuth'
import { Container, Row } from 'react-bootstrap'
import { useProfile } from '../hooks/useProfile'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import RecentlyPlayed from '../components/RecentlyPlayed'
import {Button} from 'react-bootstrap'
const Home = () => {
    const {auth} = useAuth()
    const {data,isLoading} = useProfile()



    useEffect(() => {
        // if (auth){
        //     setUserInfo(useProfile())
        // }
        
    },[auth])




    
   




   
  return (
    <> 
    
        {/* <Row className='p-2'> 
            {tokenError && <AlertPopup variant={'danger'} message={tokenError}></AlertPopup>}
            {tokenSuccess && <AlertPopup variant={'success'} message={"Succesfully logged in."}></AlertPopup>}
        </Row> */}
        <div  className='text-center colorMain'> 
        {isLoading 
        ? 
        <div className='customDiv'> 
        <Loader/>
        </div>
        :
        <> 
        {auth ?
        (
            <>
        <div className='customDiv'> 
        {/* <UserCard data={data}/> */}
        <h2 className='customh2'>Recently Played Songs</h2>
        <RecentlyPlayed/>
        </div>
            </>
        ): (
            <div className='customDiv'> 
            <p>The website uses cookies to keep you logged in.</p>
            <p>NOTE: This website is using Spotify's development mode which allows 25 authorized Users to access this website.</p>
            <p>I am in the progress of obtaining extended features. If you would like to try the application now, please email me at: <a className='customAWhite' href="mailto:spotifystats1@gmail.com">spotifystats1@gmail.com</a></p>
            <a className='customA' href="api/login"><Button className='btnCustom'>Login</Button></a>
            </div>
        )}
        </>
        
        }
        </div>

    </>
  )
}

export default Home