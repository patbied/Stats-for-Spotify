import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/spotify-logo.png'
const ReqCard = ({data,typeReq}) => {
    const [isTrack,setIsTrack] = useState(false)
    const [titleString, setTitleString] = useState("")
    const [artistString,setArtistString] = useState("")
    useEffect(() => {
        if (typeReq==='tracks'){
            setIsTrack(true)
            if (data?.name.length>15){
                setTitleString(data?.name.substring(0,15)+'...')
            } else {
                setTitleString(data?.name)
            }
            if (data?.artists[0]?.name.length>15){
                setArtistString(data?.artists[0]?.name.substring(0,15)+'...')
            } else {
                setArtistString(data?.artists[0]?.name)
            }
        } else {
            if (data?.name.length>25){
                setArtistString(data?.name.substring(0,25)+'...')
            } else {
                setArtistString(data?.name)
            }
        }
        
        
        
        
    },[data])
  return (
    <Card  className='customCard h '>
      <Card.Img variant="top" className='customCardImage mx-auto'  src={data?.album?.images[0] ? data?.album?.images[0].url : data?.images[0]?.url} />
      <Card.Body>
        <Card.Title>
        
            {isTrack ? (
                <> 
                <a href={data?.external_urls?.spotify} target="_blank"><Image src={logo} style={{maxHeight:'30px',maxWidth:'30px'}}/></a>{titleString} <span className='colorWhite'>by</span> {artistString}
                </>
            ):(
                <><a href={data?.external_urls?.spotify} target="_blank"><Image src={logo} style={{maxHeight:'30px',maxWidth:'30px'}}/></a>{data?.name}</>
            )}
            
        </Card.Title>
        {/* <Card.Text>
          Genres: {data?.genres}
        </Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default ReqCard