import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./loginScreen";
import RegisScreen from "./regist";
import Ionicons from "@expo/vector-icons/Ionicons";
import Front from "./front";
import HomeScreen from "./home";
import About from "./about";
import OrderScreen from "./orderScreen";
import MapsScreen from "./Maps";
import Profile from "./profile";
import Update from "./update";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = ({route}) => {
  const user = route.params
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = "home";
          } else if (rn === "About") {
            iconName = "information";
          }
          return <Ionicons name={iconName} size={24} color="black" />;
        },
        tabBarStyle: {
          height: 50,
          backgroundColor: "bisque"
        },
      })}
    >
      <Tab.Screen
        initialParams={user}
        name="Home"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front" >
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Regis" component={RegisScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Front" component={Front} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Maps" component={MapsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Update" component={Update} options={{ headerShown: false }} />

        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
