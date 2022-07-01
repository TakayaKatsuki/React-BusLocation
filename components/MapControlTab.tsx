import { ReactNode, VFC } from "react";
import { Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import Map from "./Map";
import styled from "styled-components";


// const ExtendsNavLink = styled(Nav.Link)` 
// 	background-color: ${props => props.primary ? 'white' : 'palevioletred'};
// `

const MapControlTab: VFC = () => {
	const route = ["中央ルート", "南部ルート", "西部ルート", "北部ルート", "のんキールート"];
	
  return(
	<>
	    <Nav justify variant="tabs" className="d-flex flex-row " defaultActiveKey={"中央ルート"}>
				{route.map( route => (
					<Nav.Link key={route} eventKey={route} className="">{route}</Nav.Link>
					))}
			</Nav>
			<div className="">
				<Map />
			</div>

	</>
	)
}


export default MapControlTab 