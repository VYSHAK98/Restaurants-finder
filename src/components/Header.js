import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar className="bg-danger">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/5N837VkG/png-clipart-restaurant-chef-logo-menu-chef-logo-logo-monochrome-thumbnail-removebg-preview.png"
                width="60"
                height="50"
                className="d-inline-block align-top"
              />{' '}
              <b className='fs-3 text-white'>Find With Me</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header