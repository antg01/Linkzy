import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

// Local imports
import ProfileNavigator from "./ProfileNavigator";
import EventNavigator from "./EventNavigator";
import SearchNavigator from "./SearchNavigator";

// Main navigation (Bottom Tab)
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Profile" tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main navigation options
const tabOptions = {
  activeBackgroundColor: "#b80733",
  inactiveBackgroundColor: "#b80733",
  activeTintColor: "#FFF",
  inactiveTintColor: "#000",
  showLabel: false,
};

export default MainNavigator;
