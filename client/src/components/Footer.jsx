import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='colorMain footer text-center '>
        <span>This website was made by Patrick Biedermann using the amazing Spotify API.<br/></span>
        <span>I am in NO WAY related to, or associated with Spotify.<br/></span>
        <span>To view how your data is handled and more about this page head over to the <Link className='customAWhite' to='/about'>About</Link> page.<br/></span>

        
        </div>
  )
}

export default Footer