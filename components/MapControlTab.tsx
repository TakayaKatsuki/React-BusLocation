import { useState, VFC } from "react";
import { Nav } from "react-bootstrap";
import styled, { CSSProperties } from "styled-components";

import Map from "./MapActivity/Map";
import { routeData } from "../src/utils/data";

type location = {
	lat: number
	lng: number
}

const ColorBar = styled.div`
	height: 5px;
	width: 100vw;
	background-color: ${props => props.color};
`

const MapControlTab: VFC = () => {
	const [route, setRoute] = useState<number>(1)
	const [center, setCenter] = useState<location>({lat: 36.527153, lng: 136.613836})
	const [color, setColor] = useState<string>("#f44336")
	
  return(
	<>
		<Nav justify variant="tabs" className="d-flex flex-row " defaultActiveKey={"1"} >
			{routeData.map( data => (
					<Nav.Link 
						key={data.id} 
						eventKey={data.id}
						style={{backgroundColor: data.color, color: "white"}}
						onClick={() => {
							setRoute(data.id)
							setCenter(data.center)
							setColor(data.color)
						}}
						>
							{data.name}
					</Nav.Link>
				))}
		</Nav>
		<ColorBar color={color}/>
		<div >
			<Map 
				route={route}
				center={center}
				/>
		</div>

	</>
	)
}


export default MapControlTab 