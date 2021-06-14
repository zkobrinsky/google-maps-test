import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Icon from "./Icon";

export default function Map() {
  const defaultProps = {
    center: { lat: 40.70467577099661, lng: -74.01772759657958 },
    zoom: 11,
  };

  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const getDirections = value => () => {
    console.log(value);
  };

  return (
    <div className="map-container" style={{ height: "100vh", width: "100%" }}>
      {location ? (
        <GoogleMapReact
          defaultCenter={location}
          defaultZoom={defaultProps.zoom}
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        >
          <div lat={location.lat} lng={location.lng}>
            <Icon text={"Zach"}></Icon>
          </div>

          {/* map through available spots from API */}
          <div
            lat={40.834}
            lng={-73.9}
            onClick={getDirections({ lat: 40.834, lng: -73.9 })}
          >
            <Icon text={"test"}></Icon>
          </div>
        </GoogleMapReact>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
}
