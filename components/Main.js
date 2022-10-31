import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Members = () => {
  return (
    <View
      style={{
        borderTopWidth: 2,
        backgroundColor: "gray",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
      }}
    >
      <Member></Member>
      <Member></Member>
    </View>
  );
};

const Plan = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
        padding: 10,
      }}
    >
      {/* 위쪽 */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ height: 45, width: 50, marginLeft: 10, marginTop: 5 }}
          source={require("../icon/none_image.png")}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25, width: 215 }}>Title</Text>
            <Image
              source={require("../icon/dots.png")}
              style={{ height: 40, width: 40 }}
            ></Image>
          </View>
          <Text>20XX.01.10~20XX.01.12</Text>
        </View>
      </View>
      {/* 아래쪽 */}
      <View style={{ alignItems: "flex-end" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Image
            style={{ height: 25, width: 45, marginLeft: 5 }}
            source={require("../icon/people.png")}
          ></Image>
          <TouchableOpacity onPress={() => navigation.navigate("TravelGraph")}>
            <Image
              style={{ height: 45, width: 45, marginLeft: 15 }}
              source={require("../icon/right_arrow.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Members></Members>
    </View>
  );
};

const Member = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Image
        source={require("../icon/person.png")}
        style={{ width: 40, height: 40 }}
      ></Image>
      <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20, width: 160 }}>
        이름
      </Text>
      <Image
        source={require("../icon/minus.png")}
        style={{ width: 30, height: 30 }}
      ></Image>
    </View>
  );
};

export const Plans = ({ viewHeight, navigation }) => {
  return (
    <View>
      <ScrollView style={{ height: viewHeight }}>
        <Plan navigation={navigation}></Plan>
        <Plan></Plan>
        <Plan></Plan>
      </ScrollView>
    </View>
  );
};
