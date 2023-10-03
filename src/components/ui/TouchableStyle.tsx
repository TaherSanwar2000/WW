import { TouchableOpacity } from "react-native";
import { styled } from "@gluestack-style/react";

const TouchableStyle = styled(TouchableOpacity, {
  variants: {
    variant: {
      submitButton: {
        backgroundColor: "#ffa500",
        padding: 15,
        ":checked": {
          height: 50,
        },
      },
      ContinueButton: {
        width: "30%",
        backgroundColor: "#ffa500",
        borderRadius: 3,
      },
      ChangeButton: {
        backgroundColor: "#ffa500",
        borderRadius: 5,
      },
      ConfirmButton: {
        backgroundColor: "#ffa500",
        padding: 10,
      },
    },
  },
});

export default TouchableStyle;
