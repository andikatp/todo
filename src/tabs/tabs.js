import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import List from "./screens/ListTodo";
import AddList from "./screens/AddList";
import AddCategory from "./screens/AddCategory";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LIST"
        component={List}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="waves" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ADD LIST"
        component={AddList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-road" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ADD CATEGORY"
        component={AddCategory}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
