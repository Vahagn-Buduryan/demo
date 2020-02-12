import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {

 
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div>
             
        <Map
          google={this.props.google}
          zoom={18}
          style={{ width: '890px',
            height: '500px'}}
          initialCenter={{ lat: 40.175820, lng: 44.519445}}
        >
          <Marker position={{ lat: 40.175820, lng: 44.519445}} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBUkupXTVOwss5DxlSw5lAu9J6ePp3CU1k')
})(MapContainer);

