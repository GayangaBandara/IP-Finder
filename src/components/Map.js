import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker as AdvancedMarker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ lat, lon }) => {
  const center = {
    lat: lat,
    lng: lon,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDlDgLUIfGOg43875IhmJmd2rXQ8BF-_cI">
      {" "}
      {/* Ensure the API key is correctly set */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <AdvancedMarker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
