import { VFC, useEffect, useState, useRef } from 'react'
import GoogleMapReact from "google-map-react"
import options from './MapStyle'
import { Busstop } from '../../interfaces'

import CentralInfo from '~/utils/json/busstoplocation/centralBusStops.json'
import SouthInfo from '~/utils/json/busstoplocation/southBusStops.json'
import WestInfo from '~/utils/json/busstoplocation/westBusStops.json'
import NorthInfo from '~/utils/json/busstoplocation/northBusStops.json'
import NonkeyInfo from '~/utils/json/busstoplocation/nonkeyBusStops.json'
import CurrentMarker from './CurrentMarker';

type Props = {
  route: number
  center: {lat: number, lng: number}
}

type location = {
	lat: number
	lng: number
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
  const [currentPosition, setCurrentPosition] = useState<location>()
  const [mapCenter, setMapCenter] = useState<location>(center)
  const markerRef = useRef([])

  const success = (data) => {
    const currentPosition = {
      lat:data.coords.latitude,
      lng:data.coords.longitude
    }
    setCurrentPosition(currentPosition)
    setMapCenter(currentPosition)
    // console.log(currentPosition)
  }
  const error = () => {
    alert("現在地の取得に失敗しました。\n")
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);//初回レンダリングのみ

  useEffect(() => {
    try {
      const bounds = new maps.LatLngBounds()
      markerRef.current.forEach((m) => {
        m.setMap(null)
      })
      // const icons = ['central', 'south', 'west', 'north', 'nonkey'].map(route => {{
      //   // `../../../images/Map/bus-stop-${route}.webp`
      // }})
      const icons = ['central', 'south', 'west', 'north', 'nonkey']
      switch (route) {
        case 1:
          CentralInfo.central.forEach( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)},
              context: info.location,
              icon: {
                url: `../../../images/Map/bus-stop-${icons[route - 1]}.webp`,
                scaledSize: new maps.Size(27, 42)
              }
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        case 2:
          SouthInfo.south.forEach( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)},
              context: info.location,
              icon: {
                url: `../../../images/Map/bus-stop-${icons[route - 1]}.webp`,
                scaledSize: new maps.Size(27, 42)
              }
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        case 3:
          WestInfo.west.forEach( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)},
              context: info.location,
              icon: {
                url: `../../../images/Map/bus-stop-${icons[route - 1]}.webp`,
                scaledSize: new maps.Size(27, 42)
              }
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break  
        case 4:
          NorthInfo.north.forEach( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)},
              context: info.location,
              icon: {
                url: `../../../images/Map/bus-stop-${icons[route - 1]}.webp`,
                scaledSize: new maps.Size(27, 42)
              }
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
          break
        default:
          NonkeyInfo.nonkey.forEach( info => {
            const marker = new maps.Marker({
              map,
              position: {lat: parseFloat(info.lat), lng: parseFloat(info.lng)},
              context: info.location,
              icon: {
                url: `../../../images/Map/bus-stop-${icons[route - 1]}.webp`,
                scaledSize: new maps.Size(27, 42)
              }
            })
            markerRef.current.push(marker)
            bounds.extend(marker.position)
          })
      }
      map.fitBounds(bounds)  
    } catch (error) {
      
    }
  }) 

  const handleApiLoaded = (object: { map: any, maps: any}) => {
    //console.log("APILOAD")
    setMap(object.map)
    setMaps(object.maps)
  }


  return (
    <div id='map-canvas'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY, language:'ja' }}
        center={mapCenter}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={handleApiLoaded}
        // options={options}
        >
          {currentPosition ? (
            <CurrentMarker 
            lat={currentPosition.lat} 
            lng={currentPosition.lng}
            />
          ):null}
      </GoogleMapReact>
    </div>
  )
}

export default Map;