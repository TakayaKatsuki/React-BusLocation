import React, { VFC } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons'
import image from "../img/top-icon.png";
import Image from "next/image";

const IconStyle: React.CSSProperties = {
  height: "20px",
}

const Header: VFC = () => {
  return (
    <header>
      <Navbar expand='false' bg='light' sticky='top' fixed='top'>
        <Container fluid>
          <Navbar.Brand className='d-flex me-auto'>
            のっティバスどこ
            <Image src={image} height="30" width="23.37" />
          </Navbar.Brand>
          <Nav className="flex-row">
            <Nav.Link data-target="bg_onetime_popup" className='mr-3'>
              <FontAwesomeIcon style={ IconStyle } icon={ faInfo } />{' '}
              お知らせ
            </Nav.Link>
            <Nav.Link href="https://goo.gl/forms/kI5PV0gUbs13fVhK2" className='mr-3'>
              <FontAwesomeIcon style={ IconStyle } icon={ faEnvelope } />{' '}
              アンケート
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Collapse>
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              >
              <Offcanvas.Header closeButton>
                <h2>施設メニュー</h2>
              </Offcanvas.Header>
              内容
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header