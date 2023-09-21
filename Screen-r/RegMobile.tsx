import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Container from "../StyledComponent-r/Registration/Container";
import TextStyle from "../StyledComponent-r/Registration/TextStyle";

const RegMobile = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <Container variant="solid" >
      <StatusBar backgroundColor="#8bbe1b" />
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

      <TouchableOpacity
        style={styles.ContinueButton}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          {
            checkValid
              ? navigation.navigate("Registration", { phone: value })
              : ToastAndroid.show("Enter valid number", ToastAndroid.SHORT);
          }
        }}
      >
        <Text style={styles.textContinue}>Continue</Text>
      </TouchableOpacity>
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

export default RegMobile;
