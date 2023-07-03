"use client";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";

const Page = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB8gLCZYWQcsr2kyt2prmt6N2vWVtClNPk",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          style={{ width: "200px", height: "400px" }}
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default Page;
