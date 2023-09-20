import {  Text, StatusBar, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Container from "../StyledComponent/Registration/Container";
import TextBoxStyle from "../StyledComponent/Registration/TextBoxStyle";
import TextStyle from "../StyledComponent/Registration/TextStyle";


const Registration = () => {
  const route = useRoute();
  const { phone } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        />
      </TextBoxStyle>

      <TextBoxStyle>
        <MaterialCommunityIcon name="email" size={30} color="#8bbe1b" />
        <TextInput
          style={{ marginLeft: "5%", color: "#000000" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
      </TextBoxStyle>
    </Container>
  );
};

export default Registration;


