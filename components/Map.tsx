import { ReactNode, VFC, useEffect, useState } from 'react'
import GoogleMapReact from "google-map-react";/* > npm i google-map-react */
import options from './MapActivity/MapStyle'
import { Busstop } from '../interfaces'
import CentralInfo from '../src/utils/json/busstoplocation/centralBusStops.json'

type Props = {
  route: string
}

const center = {
  lat: 36.527153,
  lng: 136.613836
}




const Map: VFC = ({ route }:Props) => {
  // const [busstop, setBusstop] = useState<Busstop[]>()

  // useEffect(() => {
  //   const fetchPost = async (): Promise<Busstop[]> => {
  //     const response = await fetch('https://fairbase…') //json API
  //     return await response.json()
  //   }
  //   fetchPost().then((data) => setBusstoplocation(data))
  // }, [route])


  let busstopMarker: any[] = []
  const handleApiLoaded = ({ map, maps }) => {
    busstopMarker = CentralInfo.central.map( a => (
      new maps.Marker({
        map,
        position: {lat: parseFloat(a.lat), lng: parseFloat(a.lng)}
        // context: a.location
        // icon: image
    })))
  }

  return (
    <div id='map-canvas' className="row-expanded" style={{ height:"100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyAWn2P6KSq0O7akTgkAYCvlSy_W1hDTgNQ", language:'ja' }}
        center={center}
        zoom={16}
        onGoogleApiLoaded={handleApiLoaded}
        yesIWantToUseGoogleMapApiInternals={true}
        // options={options}
        >
      </GoogleMapReact>
    </div>
  )
}

export default Map;