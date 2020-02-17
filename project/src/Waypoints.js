import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Waypoints.css';

const position = [51.505, -0.09]

class Waypoints extends Component {

render () {
  return (
    <Map center={position} zoom={13} id="mapid">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
  )
}
}

export default Waypoints;