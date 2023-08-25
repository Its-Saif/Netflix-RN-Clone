import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/login";
import Register from "./src/Screens/Register";
import Splash from "./src/Screens/Splash";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <>
      <NavigationContainer>
        {/* <KeyboardAvoidingView behavior={ Platform.OS === "ios" ? "padding"} > */}
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              guestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              guestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              guestureDirection: "horizontal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
