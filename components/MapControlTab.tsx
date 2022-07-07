import { ReactNode, useState, VFC } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import Map from "./Map";
import { routeData } from "../src/utils/data";

// const ExtendsNavLink = styled(Nav.Link)` 
// 	background-color: ${props => props.primary ? 'white' : 'palevioletred'};
// `
type location = {
	lat: number
	lng: number
}

const MapControlTab: VFC = () => {
	const [route, setRoute] = useState<number>(1)
	const [center, setCenter] = useState<location>({lat: 36.527153, lng: 136.613836})
	
  return(
	<>
		<Nav justify variant="tabs" className="d-flex flex-row " defaultActiveKey={"1"} >
			{routeData.map( data => (
				<Nav.Link 
					key={data.id} 
					eventKey={data.id}
					onClick={() => {
						setRoute(data.id)
						setCenter(data.center)
					}}
					className=""
					>
						{data.name}
				</Nav.Link>
				))}
		</Nav>
		<div className="">
			<Map 
				route={route}
				center={center}
				/>
		</div>

	</>
	)
}


export default MapControlTab 