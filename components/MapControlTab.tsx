import { ReactNode, useState, VFC } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import Map from "./Map";
import { routeData } from "../src/utils/data";

// const ExtendsNavLink = styled(Nav.Link)` 
// 	background-color: ${props => props.primary ? 'white' : 'palevioletred'};
// `


const MapControlTab: VFC = () => {
	const [route, setRoute] = useState<Number>(1)

	const routes = routeData
	
	
  return(
	<>
		<Nav justify variant="tabs" className="d-flex flex-row " defaultActiveKey={"1"} >
			{routes.map( route => (
				<Nav.Link 
					key={route.id} 
					eventKey={route.id}
					onSelect={() => setRoute(route.id)}
					className=""
					>
						{route.name}
				</Nav.Link>
				))}
		</Nav>
		<div className="">
			<Map />
		</div>

	</>
	)
}


export default MapControlTab 