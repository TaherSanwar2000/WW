import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
  Pressable,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Container from "../../components/ui/Container";
import TextStyle from "../../components/ui/TextStyle";
import { Link, router } from "expo-router";

const Login = () => {
  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const checkValid = phoneInput.current?.isValidNumber(value);

  const CheckPhoneNum = () => {
    if (checkValid) {
      router.push({ pathname: '/Registration', params: { phone: value } });
    } else {
      ToastAndroid.show("Enter valid number", ToastAndroid.SHORT);
    }
  };

  return (
    <Container variant="bgWhite">
      <TextStyle variant="black">Please enter your mobile number</TextStyle>
      <View style={{ marginVertical: "10%" }}>
        <PhoneInput
          containerStyle={{ backgroundColor: "#dcdcdc", borderRadius: 5 }}
          textInputStyle={{ height: 20 }}
          textContainerStyle={{
            backgroundColor: "#dcdcdc",
            height: 50,
            borderRadius: 10,
          }}
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          withDarkTheme={false}
          withShadow
          autoFocus
        />
      </View>

      <Pressable onPress={CheckPhoneNum} style={styles.ContinueButton}>
        <Text style={styles.textContinue}>Continue</Text>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  textContinue: {
    padding: 10,
    fontSize: 15,
    paddingVertical: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  ContinueButton: {
    width: "30%",
    backgroundColor: "#ffa500",
    borderRadius: 3,
  },
});

export default Login;
