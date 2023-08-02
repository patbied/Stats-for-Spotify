import React, {useEffect, useState} from 'react'
import { useTopTracks } from '../hooks/useTopTracks'
import Loader from './Loader'
import { Row,Col } from 'react-bootstrap'
import _ from 'lodash'
import ReqCard from './ReqCard'
const DisplayTop = ({time_range,limit,typeReq,idxSkip}) => {
    const [DataChunk, setDataChunk] = useState([])
    const {data,isLoading,isError} = useTopTracks({time_range,limit,typeReq})
    useEffect(() => {
        if (data){
            // console.log(data.items)
            setDataChunk(_.chunk(data.items,3))
            // console.log(data)
            // console.log(_.chunk(data.items,3))
        }

    },[data])
    
  return (
    <> 
    {isLoading ? 
        (<Loader/>) 
        : 
        // <h1>Loaded</h1>
        DataChunk && DataChunk?.map((arr,arrIndex) => { 
                return (<Row key={arrIndex+idxSkip}> 
                {arr?.map((arrItem) => {
                    return <Col  key={arrItem?.id} xs={12} sm={6} md={4} lg={4}><ReqCard typeReq={typeReq} data={arrItem}/></Col>
                })}
                </Row>)
            })
            } 
            </>
  )
 
}

export default DisplayTop