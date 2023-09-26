import { View } from "react-native";
import { styled } from "@gluestack-style/react";

const TextBoxStyle = styled(View, {
  bg: "$primary0",
  w: "90%",
  rounded: 5,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  paddingVertical: 12,
  marginVertical: "2%",
});

export default TextBoxStyle;