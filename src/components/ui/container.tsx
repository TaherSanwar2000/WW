import { styled } from "@gluestack-style/react";
import { View } from "react-native";

const Container = styled(View, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",

  variants: {
    variant: {
      solid: {
        bg: "$primary0",
      },
      subtle: {
        bg: "#8bbe1b",
      },
      flex1: {
        flex: 1,
      },
    },
  },
});

export default Container;
