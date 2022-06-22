import React, { VFC } from 'react'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
  align-items: center;
`

const DisableContent = styled.span`
  /* color: white; */
//   margin-left: 2rem;
//   @media screen and (maxwidth: 575px) {
//     display: none;
// } 
`

const IconStyle: React.CSSProperties = {
  height: "20px",
}


const Header: VFC = () => {
  return (
    <HeaderWrapper>
      <Container fluid>
        <Navbar expand='false' bg='light' sticky='top' fixed='top'>
          <Navbar.Brand className='d-flex me-auto'>
            のっティバスどこ
            <Image src=''></Image>
          </Navbar.Brand>
          <Nav className="flex-row">
            <Nav.Link data-target="bg_onetime_popup" className='mr-3'>
              <FontAwesomeIcon style={ IconStyle } icon={ faInfo } />{' '}
              <DisableContent>お知らせ</DisableContent>
            </Nav.Link>
            <Nav.Link href="https://goo.gl/forms/kI5PV0gUbs13fVhK2" className='mr-3'>
              <FontAwesomeIcon style={ IconStyle } icon={ faEnvelope } />{' '}
              <DisableContent>アンケート</DisableContent>
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

              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
          
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}
export default Header