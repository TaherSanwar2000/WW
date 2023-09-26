import {
  Text,
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Container from "../../StyledComponent/Registration/Container";
import TextBoxStyle from "../../StyledComponent/Registration/TextBoxStyle";
import TextStyle from "../../StyledComponent/Registration/TextStyle";

const Registration = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { phone } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Add event listeners for keyboard events
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
        console.log(isKeyboardOpen);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    // Clean up listeners when component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [isKeyboardOpen]);

  const validateEmail = (text) => {
    // Email validation logic (you can customize this)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(text)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateName = (text) => {
    // Name validation logic (you can customize this)
    if (text.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError("");
    }
  };

  const handleSubmit = () => {
    // Check if there are any validation errors
    if (!nameError && !emailError) {
      if (name !== "" && email !== "") {
        navigation.navigate("AddressInfo");
      } else {
        ToastAndroid.show("Please enter details", ToastAndroid.SHORT);
      }
      // Validation successful, proceed with submission
    } else {
      // Validation failed, show error message(s)
      ToastAndroid.show("Please enter detail correctly", ToastAndroid.SHORT);
    }
  };

  return (
    <Container variant="bgGreen">
      <StatusBar backgroundColor="transparent" translucent={true} />

      <View
        style={{
          width: "90%",
          alignItems: "center",
          bottom: isKeyboardOpen ? 90 : null,
        }}
      >
        <TextStyle variant="white">Please enter your mobile number</TextStyle>

        <TextBoxStyle>
          <FontAwesomeIcon name="phone" size={30} color="#8bbe1b" />
          <Text style={{ marginLeft: "5%" }}>{phone}</Text>
        </TextBoxStyle>

        <TextBoxStyle>
          <FontAwesomeIcon name="user" size={30} color="#8bbe1b" />
          <TextInput
            style={{ marginLeft: "5%", color: "#000000" }}
            value={name}
            onChangeText={(text) => {
              setName(text);
              validateName(text);
            }}
            onBlur={() => validateName(name)}
            placeholder="Name"
          />
        </TextBoxStyle>
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

        <TextBoxStyle>
          <MaterialCommunityIcon name="email" size={30} color="#8bbe1b" />
          <TextInput
            style={{ marginLeft: "5%", color: "#000000" }}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
            onBlur={() => validateEmail(email)}
            placeholder="email"
          />
        </TextBoxStyle>

        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View
        style={{
          justifyContent: isKeyboardOpen === false ? "flex-end" : null,
          flex: 1,
          height: 100,
          width: "100%",
          bottom: isKeyboardOpen ? 70 : null,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ffa500",
            padding: 15,
            height: isKeyboardOpen ? 50 : null,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFF" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Registration;
const styles = StyleSheet.create({
  errorText: {
    color: "#8b0000",
  },
});
