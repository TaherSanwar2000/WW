import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../Screen/Registration";
import AddressInfo from "../Screen/Address/AddressInfo";
import Login from "../Screen/public/login";
import ChangeAddress from "../Screen/Address/ChangeAddress";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegMobile"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddressInfo"
        component={AddressInfo}
        options={{
          headerTitle: "Pickup Address", // Set your custom header title here
          headerTitleAlign: "center", // Center-align the header title
          headerTintColor:'#8bbe1b'
        }}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
