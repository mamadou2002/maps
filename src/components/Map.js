import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Map extends Component {
  state = {
    currentPosition: { lat: null, lng: null }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '400px'
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.state.currentPosition}
      >
        <Marker position={this.state.currentPosition} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_HERE'
})(Map);
