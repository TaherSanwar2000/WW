import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const Maps = () => {
  const navigation = useNavigation();

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
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              flexWrap: "wrap", // Allow text to wrap to multiple lines
              maxWidth: Dimensions.get("window").width - 120, // Adjust max width as needed
            }}
            numberOfLines={2} // Limit to 2 lines
          >
            {displayCurrentAddress}
          </Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "#ffa500", borderRadius: 5 }}
          onPress={() => navigation.navigate("ChangeAddress")}
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

      <View style={styles.InputBox}>
        <TextInput
          style={styles.textBoxStyle}
          value={houseNum}
          onChangeText={(text) => setHouseNum(text)}
          placeholder="House/Block/Flat/Building"
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.textBoxStyle}
          value={street}
          onChangeText={(text) => setHouseNum(text)}
          placeholder="Street,Society or Landmark"
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          flex: 1,
          height: 100,
          width: "100%",
        }}
      >
        <TouchableOpacity style={{ backgroundColor: "#ffa500", padding: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFF" }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Maps;
const styles = StyleSheet.create({
  textBoxStyle: {
    fontSize: 16,
    color: "#000000",
    padding: 8,
    marginLeft: 5,
  },
  InputBox: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 5,
    marginTop: "5%",
  },
});