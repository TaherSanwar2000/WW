import {
  Text,
  StatusBar,
  Keyboard,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Container from "../../../components/ui/Container";
import TextStyle from "../../../components/ui/TextStyle";
import TextBoxStyle from "../../../components/ui/TextBoxStyle";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../../../gluestack-style.config";
import { router, useRouter, useSearchParams } from "expo-router";
import TextInputStyle from "../../../components/ui/TextInputStyle";
import TouchableStyle from "../../../components/ui/TouchableStyle";

const Registration = () => {
  const route = useRouter();
  const param = useSearchParams();
  console.log(param.phone);

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
        router.push("/Map/Index");
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
    <StyledProvider config={config}>
      <Container variant="bgGreen">
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Container
          variant="TextBoxContainer"
          states={{ checked: isKeyboardOpen }}
        >
          <TextStyle variant="white">Please enter your mobile number</TextStyle>

          <TextBoxStyle>
            <FontAwesomeIcon name="phone" size={30} color="#8bbe1b" />
            <Text style={{ marginLeft: "5%" }}>{param.phone}</Text>
          </TextBoxStyle>

          <TextBoxStyle>
            <FontAwesomeIcon name="user" size={30} color="#8bbe1b" />
            <TextInputStyle
              variant="userInput"
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
            <TextInputStyle
              variant="userInput"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                validateEmail(text);
              }}
              onBlur={() => validateEmail(email)}
              placeholder="email"
            />
          </TextBoxStyle>

          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </Container>

        <Container variant="ButtonContainer" states={{ hover: isKeyboardOpen }}>
          <TouchableStyle
            variant="submitButton"
            states={{ checked: isKeyboardOpen }}
            onPress={handleSubmit}
          >
            <TextStyle variant="textSubmit">Submit</TextStyle>
          </TouchableStyle>
        </Container>
      </Container>
    </StyledProvider>
  );
};

export default Registration;
const styles = StyleSheet.create({
  errorText: {
    color: "#8b0000",
  },
});
