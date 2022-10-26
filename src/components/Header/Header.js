import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import img from './coding-logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';

import TogglesMain from '../Toggles/TogglesMain';

const Header = () => {
  const { user, logOut } = useContext(authContext)
  const HandleClick = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image roundedCircle src={img} style={{ height: '40px' }}></Image> <span className='text-info fw-bold'>Coding School</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-light me-3' to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <Link className='text-light me-3' to="/courses" style={{ textDecoration: 'none' }}>Courses</Link>
            <Link className='text-light me-3' to="/faq" style={{ textDecoration: 'none' }}>FAQ</Link>
            <Link className='text-light me-3' to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
          </Nav>
          <Nav>
            {
              user?.uid ? <button onClick={HandleClick} className='btn btn-info me-3 text-light'>SignOut</button> :
                <div>
                  <button className='btn btn-warning me-3'><Link className='text-dark fw-bold' style={{ textDecoration: 'none' }} to='/signIn'>SignIn</Link></button>
                  <button className='btn btn-info me-3'><Link className='text-light fw-bold' style={{ textDecoration: 'none' }} to='/signUp'>SignUp</Link></button>
                </div>
            }

            <Image title={user?.displayName} roundedCircle src={user?.photoURL} style={{ height: '40px', width: '40px' }}></Image>
            <div>
              <TogglesMain></TogglesMain>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;