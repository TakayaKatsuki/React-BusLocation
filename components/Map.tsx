import { ReactNode, VFC } from 'react'
import GoogleMapReact from "google-map-react";
import mapoptions from './MapActivity/MapStyle'
import { CSSProperties } from 'styled-components';

type Props = {
  options?: any
}
const mapSize = {

}
const containerStyle: CSSProperties = {
  width: "100vw",
  height: "100%"
};

const center = {
  lat: 36.527153, 
  lng: 136.613836 
};

const Map: VFC = ({ options }:Props) => {
  return (
    <div id='map-canvas' className="" style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyAWn2P6KSq0O7akTgkAYCvlSy_W1hDTgNQ", language:'ja'}}
        center={center}
        zoom={15}
        >
      </GoogleMapReact>
    </div>
  );
};

export default Map;