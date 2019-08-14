import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import '../index.css'

class MyMap extends React.Component {
  render() {
    let styles = {
      height: '25%',
      width: '25%'
    }
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{lat: 37.573168, lng: -122.052285}}
        style={styles}
      >
      <Marker position={{lat: 37.573168, lng: -122.052285}} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAotH75KNwOq72x2q0jc-z5oSjNi9T2d0Q'
})(MyMap)