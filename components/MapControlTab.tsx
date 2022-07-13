import { useState, VFC } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import Map from "./MapActivity/Map";
import { routeData } from "../src/utils/data";

type data = {
	id: number
	color: string
	center: {lat: number, lng: number}
}

const ColorBar = styled.div`
	height: 5px;
	width: 100vw;
	background-color: ${props => props.color};
`

const MapWrapper = styled.div`
	
`

const MapControlTab: VFC = () => {
	const [route, setRoute] = useState<data>({id: 1, color:"#f44336", center: {lat:36.527153, lng:136.613836}})

  return(
	<>
		<Nav justify variant="tabs" className="d-flex flex-row" defaultActiveKey={"1"} >
			{routeData.map( data => (
					<Nav.Link 
						key={data.id} 
						eventKey={data.id}
						style={{backgroundColor: data.color, color: "white"}}
						className='medium'
						onClick={() => {
							setRoute(data)
						}}
						>
							{data.name}
					</Nav.Link>
				))}
		</Nav>
		<ColorBar color={route.color}/>
		<div>
			<div>
				
			</div>
			<MapWrapper>	
				<Map 
					route={route.id}
					center={route.center}
					/>
			</MapWrapper>
		</div>
	</>
	)
}


export default MapControlTab 