import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Container from "../StyledComponent-r/Registration/Container";
import TextBoxStyle from "../StyledComponent-r/Registration/TextBoxStyle";
import TextStyle from "../StyledComponent-r/Registration/TextStyle";

const Registration = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { phone } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

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
    <Container variant="subtle">
      <StatusBar backgroundColor="transparent" translucent={true} />
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
          placeholder="Email"
        />
      </TextBoxStyle>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View
        style={{
          justifyContent: "flex-end",
          flex: 1,
          height: 100,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#ffa500", padding: 10 }}
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
