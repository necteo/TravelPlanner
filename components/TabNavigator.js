import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import { TravelGraph } from "./TravelGraph";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TravelGraph"
      screenOptions={{ tabBarActiveTintColor: "#fb8c00" }}
    >
      <Tab.Screen
        name="TravelGraph"
        component={TravelGraph}
        options={{
          title: "홈",
          tabBarIcon: () => (
            <Image
              source={require("../icon/map.png")}
              style={{ height: 50, width: 50 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
