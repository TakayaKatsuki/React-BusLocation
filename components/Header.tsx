import React, { VFC } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons'
import image from "../img/top-icon.png";
import Image from "next/image";

const IconStyle: React.CSSProperties = {
  height: "20px",
}

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
              className='wf-roundedmplus1c'
              >
              <Offcanvas.Header closeButton>
                <h4>メニュー</h4>
              </Offcanvas.Header>
              {/* コンポーネント化↓ */}
              <Nav variant='tabs' className='flex-column text-center'>
                <Nav.Link className='mr-3'>
                  <FontAwesomeIcon style={ IconStyle } icon={ faInfo } />{' '}
                  お知らせ
                </Nav.Link>
                <Nav.Link href="https://goo.gl/forms/kI5PV0gUbs13fVhK2" className='mr-3'>
                  <FontAwesomeIcon style={ IconStyle } icon={ faEnvelope } />{' '}
                  アンケート
                </Nav.Link>
                <Nav.Link className='mr-3'>
                  {/* アイコン適当なので変える */}
                  <FontAwesomeIcon style={ IconStyle } icon={ faBox }/>{' '}
                  近隣の施設検索
                </Nav.Link>
              </Nav>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header