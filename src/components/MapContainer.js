import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapContainer extends React.Component {
  render() {
    let styles = {
      height: '25em',
      width: '52.5%',
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
})(MapContainer)