"use client";
import React, { useEffect, useRef } from "react";

// Location constant - you can update this to your desired location
const LOCATION = {
  lat: 15.2993, // Goa, India latitude
  lng: 74.124, // Goa, India longitude
  address: "Floresta GOA by FLUID SPACE INFRA",
};

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        // Load Google Maps API
        const { Loader } = await import("@googlemaps/js-api-loader");

        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // You'll need to add this to your .env.local
          version: "weekly",
          libraries: ["places"],
        });

        const google = await loader.load();

        if (mapRef.current && !mapInstanceRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: LOCATION,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          });

          // Add a marker for the location
          const marker = new google.maps.Marker({
            position: LOCATION,
            map: map,
            title: LOCATION.address,
            animation: google.maps.Animation.DROP,
          });

          // Add an info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">${LOCATION.address}</h3>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  Your premium residential destination in Goa
                </p>
              </div>
            `,
          });

          // Show info window by default
          infoWindow.open(map, marker);

          mapInstanceRef.current = map;
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    loadMap();
  }, []);

  return (
    <div className="w-full h-[300px] lg:h-[500px] relative">
      <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold text-gray-800">Location</h3>
        <p className="text-xs text-gray-600">{LOCATION.address}</p>
      </div>
    </div>
  );
};

export default Map;
