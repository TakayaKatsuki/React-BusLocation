import React, { VFC } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import image from "../img/top-icon.png";
import Image from "next/image";
import Menu from './Menu';



const Header: VFC = () => {
  return (
    <header className='wf-roundedmplus1c'>
      <Navbar expand='false' bg='light' sticky='top' fixed='top'>
        <Container fluid>
          <Navbar.Brand className='extra-bold d-flex me-auto'>
            のっティバスどこ
            <Image src={image} height="30" width="23.37" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Collapse>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              className='bg-light wf-roundedmplus1c'
            >
              <Menu />
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header