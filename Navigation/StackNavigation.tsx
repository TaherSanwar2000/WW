import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../src/app/(public)/Registration";
import Login from "../src/app/(public)/login";
import AddressInfo from "../src/app/(public)/Map/Index";
import ChangeAddress from "../src/app/(public)/ChangeAddress";

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
