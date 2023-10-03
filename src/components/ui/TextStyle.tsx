import { Dimensions, Text } from "react-native";
import { styled } from "@gluestack-style/react";

const TextStyle = styled(Text, {
  variants: {
    variant: {
      white: {
        color: "$primary0",
        marginTop: "50%",
        fontSize: 18,
        fontWeight: "200",
        textAlign: "center",
      },
      black: {
        color: "$primary1",
        fontSize: 18,
        fontWeight: "200",
        textAlign: "center",
      },
      textSubmit: {
        textAlign: "center",
        fontSize: 18,
        color: "#FFF",
      },
      textContinue: {
        padding: 10,
        fontSize: 15,
        paddingVertical: 18,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
      },
      AddressText: {
        fontSize: 16,
        fontWeight: "400",
        flexWrap: "wrap", // Allow text to wrap to multiple lines
        maxWidth: Dimensions.get("window").width - 120, // Adjust max width as needed
      },
      ChangeAddressButtonText: {
        fontSize: 15,
        color: "#FFF",
        padding: 10,
        fontWeight: "bold",
      },
      ConfirmText: {
        textAlign: "center",
        fontSize: 18,
        color: "#FFF",
      },
    },
  },
});

export default TextStyle;
