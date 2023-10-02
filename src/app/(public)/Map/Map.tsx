import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import Container from "../../../components/ui/Container";
import { router } from "expo-router";
import TextStyle from "../../../components/ui/TextStyle";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../../gluestack-style.config";
import TouchableStyle from "../../../components/ui/TouchableStyle";
import TextInputStyle from "../../../components/ui/TextInputStyle";

const Maps = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [street, setStreet] = useState("");

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
      let address = `${item.district} ${item.city} ${item.region} ${item.postalCode} ${item.country}`;
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
    <StyledProvider config={config}>
      <Container variant="mapContainer">
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
            <>
              <Marker
                coordinate={currentLocation}
                title="Your Location"
                pinColor="red"
              >
                <Callout>
                  <Text>I'm here</Text>
                </Callout>
              </Marker>
              <Circle
                center={currentLocation}
                radius={10} // Radius in meters, adjust as needed
                fillColor="#fffdfa" // Fill color of the circle
                strokeColor="#ffa500" // Stroke color of the circle
              />
            </>
          )}
        </MapView>

        <Container variant="AddressInfo">
          <Entypo
            name="location-pin"
            size={30}
            color="red"
            style={{ marginLeft: 5 }}
          />
          <View>
            <TextStyle
              variant="AddressText"
              numberOfLines={2} // Limit to 2 lines
            >
              {displayCurrentAddress}
            </TextStyle>
          </View>
          <TouchableStyle
            variant="ChangeButton"
            onPress={() => router.push("../ChangeAddress")}
          >
            <TextStyle variant="ChangeAddressButtonText">Change</TextStyle>
          </TouchableStyle>
        </Container>

        <Container variant="SaveAddress">
          <TextInputStyle
            variant="userAddressInput"
            value={houseNum}
            onChangeText={(text) => setHouseNum(text)}
            placeholder="House/Block/Flat/Building"
          />
        </Container>
        <Container variant="SaveAddress">
          <TextInputStyle
            variant="userAddressInput"
            value={street}
            onChangeText={(text) => setStreet(text)}
            placeholder="Street,Society or Landmark"
          />
        </Container>
        <Container variant="ConfirmButton">
          <TouchableStyle variant="ConfirmButton">
            <TextStyle variant="ConfirmText">Confirm</TextStyle>
          </TouchableStyle>
        </Container>
      </Container>
    </StyledProvider>
  );
};

export default Maps;
