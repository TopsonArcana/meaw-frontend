import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import React from "react";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 13.844691, lng: 100.567988 }} onClick={props.onMapClick}>
      {props.markers.map(
        marker => {
        console.log(marker)
        return <Marker position={marker} />
      }
      )}
    </GoogleMap>
  ))
);

export default Map;