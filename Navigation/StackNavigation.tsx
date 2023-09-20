import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../Screen/Registration";
import RegMobile from "../Screen/RegMobile";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="RegMobile" component={RegMobile} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

export default MyStack;
