import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../Screen/Registration";
import RegMobile from "../Screen/RegMobile";
import AddressInfo from "../Screen/Address/AddressInfo";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegMobile"
        component={RegMobile}
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
    </Stack.Navigator>
  );
}

export default MyStack;
