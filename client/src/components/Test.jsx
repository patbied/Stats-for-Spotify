import React, { useEffect } from 'react'
import useAuth from "../context/useAuth";

const test = () => {
    const {auth,setAuth} = useAuth()
    useEffect(() => {
        console.log(auth)
    },[auth])

  return (
    <div className='colorMain'>test</div>
  )
}

export default test