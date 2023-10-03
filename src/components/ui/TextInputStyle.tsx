import { TextInput } from "react-native";
import { styled } from "@gluestack-style/react";

const TextInputStyle = styled(TextInput, {
  variants: {
    variant: {
      userInput: {
        marginLeft: "5%",
        color: "#000000",
      },
      userAddressInput: {
        fontSize: 16,
        color: "#000000",
        padding: 8,
        marginLeft: 5,
      },
    },
  },
});

export default TextInputStyle;
