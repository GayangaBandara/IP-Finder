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

const darkModeOptions = {
  styles: [
    // Custom map styles for dark mode can be added here.
    { elementType: "geometry", stylers: [{ color: "#212121" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    // Add more customization as needed
  ],
};

const Map = ({ lat, lon, darkMode }) => {
  const center = {
    lat: lat,
    lng: lon,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={darkMode ? darkModeOptions : {}}
      >
        <AdvancedMarker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
