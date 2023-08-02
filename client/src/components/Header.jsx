import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { Button } from 'react-bootstrap';
import useAuth from '../context/useAuth';
const Header = () => {

    
  const {auth,logout} = useAuth()

  const logoutHandler = () => {
    logout()
  }



    return (
      <Navbar expand='md' className='customNavbar' style={{backgroundColor: 'red !important'}}>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand className='colorMain' href=""><h3>Stats for Spotify</h3></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse> 
          <Nav className="ms-auto centerOnCollapse">
          <LinkContainer to="/about">  
          <Nav.Link className='colorMain'><Button className='btnCustom'>About</Button></Nav.Link>
          </LinkContainer>
          {auth 
          &&
          
          
            <> 
          
          <LinkContainer to="/top-artists">
          <Nav.Link className='colorMain'><Button className='btnCustom'>View Top Artists</Button></Nav.Link>
          </LinkContainer>

          <LinkContainer to="/top-tracks">
          <Nav.Link className='colorMain'><Button className='btnCustom'>View Top Tracks</Button></Nav.Link>
          </LinkContainer>

          

          <Nav.Link className='colorMain'><Button onClick={logoutHandler} className='btnCustom'>Logout</Button></Nav.Link>
          
          </>
          
          
          }
          </Nav>
          </Navbar.Collapse>
          

          
        </Container>
      </Navbar>
    )
}

export default Header