import { Dimensions, View } from "react-native";
import { styled } from "@gluestack-style/react";

const Container = styled(View, {
  variants: {
    variant: {
      bgWhite: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bg: "$primary0",
      },
      bgGreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bg: "#8bbe1b",
      },
      TextBoxContainer: {
        width: "90%",
        alignItems: "center",
        ":checked": {
          bottom: 90,
        },
      },
      ButtonContainer: {
        flex: 1,
        height: 100,
        width: "100%",
        justifyContent: "flex-end",
        ":hover": {
          justifyContent: "center",
          bottom: 45,
        },
      },
      mapContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "$primary0",
      },
      AddressInfo: {
        flexDirection: "row",
        width: Dimensions.get("window").width,
        marginVertical: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
      },
      SaveAddress: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 5,
        marginTop: "5%",
      },
      ConfirmButton: {
        justifyContent: "flex-end",
        flex: 1,
        height: 100,
        width: "100%",
      },
    },
  },
});

export default Container;
