import { useState, VFC } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import Map from "./MapActivity/Map";
import { routeData } from "~/utils/data";

//type-interface
type data = {
	id: number
	color: string
	center: {lat: number, lng: number}
}
//styled-components
const MapTab = styled(Nav)`
	height: 50px;
	align-items: end;
`
const TabButton = styled(Nav.Link)`
	border: none !important;
	display: grid;
	align-items: center;
	height: 40px;
	&:hover{
		height: 50px !important;
	}
	&.active{
		height: 50px;
	}
`
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
		<MapTab justify variant="tabs" className="d-flex flex-row bg-light" defaultActiveKey={"1"} >
			{routeData.map( data => (
					<TabButton 
						key={data.id} 
						eventKey={data.id}
						style={{backgroundColor: data.color, color: "white"}}
						className='medium'
						onClick={() => {
							setRoute(data)
						}}
						>
							<span className='d-md-none'>{data.name.replace("ルート","")}</span>
							<span className='d-none d-md-grid'>{data.name}</span>
					</TabButton>
				))}
		</MapTab>
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