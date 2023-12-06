import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginPage";
import HomeScreen from "./src/screens/Home";
import RegisterScreen from "./src/screens/RegisterPage";
import MyTabs from "./src/tabs/tabs";
import { store } from "./src/redux/store";
import { Provider as ReduxProvider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginPage" component={LoginScreen} />
          <Stack.Screen name="RegisterPage" component={RegisterScreen} />
          <Stack.Screen name="Navigator" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};
export default App;
