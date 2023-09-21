import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const Maps = () => {
  const navigation = useNavigation();

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

  const handleRegionChangeComplete = (region, details) => {
    console.log("Current Region:", region);
    getCurrentLocation(region.latitude, region.longitude);
  };

  const getCurrentLocation = async (latitude, longitude) => {
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    console.log(response);
    for (let item of response) {
      let address = `${item.district} ${item.city} ${item.postalCode}`;
      setDisplayCurrentAddress(address);
    }
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [currentLocation, setCurrentLocation] = useState(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Handle permission denial here
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <MapView
        style={{
          height: "50%",
          width: Dimensions.get("window").width,
        }}
        region={mapRegion}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {/* Add a Marker component for the current location */}
        {currentLocation && (
          <Marker
            coordinate={currentLocation}
            title="Your Location"
            pinColor="red"
          />
        )}
      </MapView>

      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width,
          marginVertical: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Entypo
          name="location-pin"
          size={30}
          color="red"
          style={{ marginLeft: 5 }}
        />
        <View style={{ marginLeft: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            {displayCurrentAddress}
          </Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "#ffa500", borderRadius: 5 }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#FFF",
              padding: 10,
              fontWeight: "bold",
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Maps;
