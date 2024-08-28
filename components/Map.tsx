import { View, Text } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore } from "@/store";
import { calculateRegion } from "@/lib/map";

const Map = () => {
  // const region = {}
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      showsPointsOfInterest={false}
      tintColor="black"
      mapType="mutedStandard"
      className="w-full h-full rounded-2xl"
      showsUserLocation={true}
      userInterfaceStyle="light"
      initialRegion={region}
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
