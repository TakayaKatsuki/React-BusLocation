// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';


export type User = {
  id: number
  name: string
}

export type route = {
  id: number
  name: string
  color: string
  center: [number, number]
}

export type Busstop = {
  id: string
  location: string
  lat: string
  lng: string
}

export type facilityCard = {
  name: string
  lat: number
  lng: number
}
