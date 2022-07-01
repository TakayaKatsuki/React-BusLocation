import { ReactNode, VFC } from 'react'
import GoogleMapReact from "google-map-react";
import options from './MapActivity/MapStyle'

type Props = {
  options?: any
}

const center = {
  lat: 36.527153, 
  lng: 136.613836 
};

const Map: VFC = ({ options }:Props) => {
  return (
    <div id='map-canvas' className="row-expanded" style={{ height:"100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyAWn2P6KSq0O7akTgkAYCvlSy_W1hDTgNQ", language:'ja'}}
        center={center}
        zoom={16}
        // options={options}
        >
      </GoogleMapReact>
    </div>
  );
};

export default Map;