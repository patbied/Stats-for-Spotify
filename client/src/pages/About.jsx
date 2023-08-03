import React from 'react'

const About = () => {
  return (
    <div className='customDiv text-center colorMain'> 
    <h2 className='customh2'>Privacy Notice</h2>
    <p>
    This website collects personal information provided by the spotify API. No data is saved, and disappears when you close the tab. The following data is provided:
    </p>
    <ul className='customUl'>
        <li>Read user subscription type.</li>
        <li>Read email assosiated with your account.</li>
        <li>Read your library, including data like saved content.</li>
        <li>Read your private playlists</li>
        <li>Read the users and artists that you follow</li>
        <li>Read your top artists and tracks</li>
        <li>Read your recently played tracks</li>
    </ul>
    
   
    <h2 className='customh2'>About</h2>
    <p>
    Hi, welcome to the about page. Before I give a bit of info I want to repeat I am in no way associated with Spotify. My name is Patrick Biedermann,   
    and at the time of writing this I will be a sophmore in Computer Science at the university of South Florida.
    I created this website using React, Express, and the spotify API. 
    I do not expect this website to go viral, but I hope that atleast someone may use it for fun. If you would like to connect 
    add me on <a className='customAWhite' href="https://www.linkedin.com/in/patcbied/" target='_blank'>LinkedIn</a> or check out my <a className='customAWhite' href="https://github.com/patbied" target='_blank'>GitHub</a> (which may or may not be pretty empty).
    
    </p>
    </div>
  )
}

export default About