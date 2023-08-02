import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row } from 'react-bootstrap';
import DisplayTop from './DisplayTop';
import _ from 'lodash'

const TopTrackTabs = () => {
  return (
    <div className='customDiv'> 
 
    <Tabs
      defaultActiveKey="Short"
      id="uncontrolled-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Short" title="Short">
        <DisplayTop time_range='short_term' limit='10' idxSkip={0} typeReq='tracks'/>
      </Tab>

      <Tab eventKey="Medium" title="Medium">
        <DisplayTop time_range='medium_term' limit='10' idxSkip={10} typeReq='tracks'/>
      </Tab>

      <Tab eventKey="Long" title="Long">
      <DisplayTop time_range='long_term' limit='10' idxSkip={20} typeReq='tracks'/>
      </Tab>
    </Tabs>
  
    </div>
  )
}

export default TopTrackTabs