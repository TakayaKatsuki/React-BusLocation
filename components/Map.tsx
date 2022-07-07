import { ReactNode, VFC, useEffect, useState, useRef } from 'react'
import GoogleMapReact from "google-map-react";
import options from './MapActivity/MapStyle'
import { Busstop } from '../interfaces'

import CentralInfo from '../src/utils/json/busstoplocation/centralBusStops.json'
import SouthInfo from '../src/utils/json/busstoplocation/southBusStops.json'
import WestInfo from '../src/utils/json/busstoplocation/westBusStops.json'
import NorthInfo from '../src/utils/json/busstoplocation/northBusStops.json'
import NonkeyInfo from '../src/utils/json/busstoplocation/nonkeyBusStops.json'

type Props = {
  route: Number
  center: {lat: number, lng: number}
}

const Map: VFC<Props> = ({ route, center }) => {
  // const [busstop, setBusstop] = useState<Busstop[]>()

  // useEffect(() => {
  //   const fetchPost = async (): Promise<Busstop[]> => {
  //     const response = await fetch('https://firebase…') //json API
  //     return await response.json()
  //   }
  //   fetchPost().then((data) => setBusstop(data))
  // }, [])

  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)
  const markerRef = useRef([])

  useEffect(() => {
    console.log("renderEff")
    try {
      const bounds = new maps.LatLngBounds()
      markerRef.current.map((m) => {
        m.setMap(null)
      })
      switch (route) {
        case 1:
          CentralInfo.central.map( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)}
              // context: a.location
              // icon: image
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        case 2:
          SouthInfo.south.map( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)}
              // context: a.location
              // icon: image
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        case 3:
          WestInfo.west.map( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)}
              // context: a.location
              // icon: image
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break  
        case 4:
          NorthInfo.north.map( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)}
              // context: a.location
              // icon: image
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        default:
          NonkeyInfo.nonkey.map( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)}
              // context: a.location
              // icon: image
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
      }
      map.fitBounds(bounds)  
    } catch (error) {
      console.log("error")
    }
  },) 

  console.log("render")

  const handleApiLoaded = (object: { map: any, maps: any}) => {
    console.log("APILOAD")
    setMap(object.map)
    setMaps(object.maps)
  }


  return (
    <div id='map-canvas' className="row-expanded" style={{ height:"100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyAWn2P6KSq0O7akTgkAYCvlSy_W1hDTgNQ", language:'ja' }}
        center={center}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={handleApiLoaded}
        // options={options}
        >
      </GoogleMapReact>
    </div>
  )
}

export default Map;