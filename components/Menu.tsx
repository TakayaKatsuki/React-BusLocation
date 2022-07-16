import React, { VFC } from 'react'
import { Offcanvas, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const IconStyle: React.CSSProperties = {
  height: "20px",
}
//BootstrapのNav.Linkを拡張
const MenuButton = styled(Nav.Link)`
  padding: 1rem;
  color: black;
  &:hover{
    background-color: var(--bs-gray-200);
    color: black;
  }
`

const Menu:VFC = () => {
  return (
    <div className='wf-roundedmplus1c regular'>
      <Offcanvas.Header closeButton>
        <h4>メニュー</h4>
      </Offcanvas.Header>
      <hr />
      <Nav className='d-flex flex-column text-center '>
        <MenuButton className='disabled'>
          <FontAwesomeIcon style={IconStyle} icon={faMap}/>
          バスどこマップ
        </MenuButton>
        <MenuButton href="#" className=''>
          <FontAwesomeIcon style={IconStyle} icon={faBuilding} />{' '}
          近隣の施設検索
        </MenuButton>
        <MenuButton className=''>
          <FontAwesomeIcon style={IconStyle} icon={faCircleInfo} />{' '}
          お知らせ
        </MenuButton>
        <MenuButton href="https://goo.gl/forms/kI5PV0gUbs13fVhK2" className=''>
          <FontAwesomeIcon style={IconStyle} icon={faEnvelope} />{' '}
          アンケート
        </MenuButton>
      </Nav>
    </div>
  )
}

export default Menu