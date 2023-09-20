import { StyledProvider,  } from "@gluestack-style/react";
import { config } from "./gluestack-style.config";
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation'


export default function App() {
  return (
    <NavigationContainer>
    <StyledProvider config={config}>
      <StackNavigation/>
    </StyledProvider>
    </NavigationContainer>
  );
}


