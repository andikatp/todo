// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { MaterialCommunityIcons } from "@react-native-community/icons";


// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const TabNavigator = () => {
//     return (
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="settings" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   };

//   const AppNavigator = () => {
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={TabNavigator} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   };
  
//   export default AppNavigator;