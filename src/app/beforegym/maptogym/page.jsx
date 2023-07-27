"use client";
import PageButton from "../../components/PageButton";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Page = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNiwaexHioOYkyYdV3nBRKo07-D8CO94s", // Replace with your actual Google Maps API key
    libraries: ["places"],
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const handleMapClick = useCallback((event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  const handlePlaceSelect = () => {
    const place = autocomplete.getPlace();
    if (place.geometry) {
      setSelectedLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    } else {
      console.error("No location data available for the selected place.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
          setCurrentLocation({
            lat: 40.6892,
            lng: -74.0445,
          });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation({
        lat: 40.6892,
        lng: -74.0445,
      });
    }
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className="map-container">
          <h2 className="heading-secondary">Select your Gym location</h2>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            style={{ width: "200px", height: "400px" }}
            center={currentLocation || undefined} // Set the currentLocation as the center if available
            zoom={10}
            onClick={handleMapClick}
            options={{ disableDefaultUI: true }} // Add this options prop to disable the default UI controls
          >
            <Autocomplete
              onLoad={(autocomplete) => {
                setAutocomplete(autocomplete);
              }}
              onPlaceChanged={handlePlaceSelect}
            >
              <input
                type="text"
                placeholder="Search for a location"
                className="map-input"
                style={{}}
              />
            </Autocomplete>
            {selectedLocation && (
              <Marker
                position={selectedLocation}
                icon={{
                  url: "/marker.svg", // Replace with your own marker icon
                  scaledSize: new window.google.maps.Size(40, 40),
                  anchor: { x: 20, y: 40 },
                }}
              />
            )}
          </GoogleMap>
        </div>
      )}

      {selectedLocation && (
        <div className="continue-btn">
          <PageButton
            text={"Open in Google Maps"}
            url={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
            arrow={"/nextarrow.svg"}
            newTab={true}
          />
        </div>
      )}

      <div className="continue-btn">
        <PageButton
          text={"Guided Audio"}
          url="/beforegym/guidedaudio"
          arrow={"/nextarrow.svg"}
        />
      </div>
    </div>
  );
};

export default Page;
