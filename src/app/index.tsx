import { StyledProvider } from "@gluestack-style/react";
import { config } from "../../gluestack-style.config";
import Login from "./(public)/login";
import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <StyledProvider config={config}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar backgroundColor="#8bbe1b" />
        <Login />
      </View>
    </StyledProvider>
  );
}
