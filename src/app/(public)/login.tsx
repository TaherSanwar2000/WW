import React, { useRef, useState } from "react";
import { View, ToastAndroid } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Container from "../../components/ui/Container";
import TextStyle from "../../components/ui/TextStyle";
import { router } from "expo-router";
import TouchableStyle from "../../components/ui/TouchableStyle";

const Login = () => {
  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const checkValid = phoneInput.current?.isValidNumber(value);

  const CheckPhoneNum = () => {
    if (checkValid) {
      router.push({ pathname: "/Registration", params: { phone: value } });
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

      <TouchableStyle onPress={CheckPhoneNum}>
        <TextStyle>Continue</TextStyle>
      </TouchableStyle>
    </Container>
  );
};

export default Login;
