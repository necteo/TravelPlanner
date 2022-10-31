import React from "react";
import { Text, View, Image } from "react-native";

const Plan = () => {
  return (
    <View>
      {/* 위쪽 */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ height: 45, width: 50, marginLeft: 10, marginTop: 10 }}
          source={require("../icon/none_image.png")}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25, width: 210, marginTop: 10 }}>
              Title
            </Text>
            <Image
              source={require("../icon/dots.png")}
              style={{ height: 40, width: 40 }}
            ></Image>
          </View>
          <Text>날짜</Text>
        </View>
      </View>
      {/* 아래쪽 */}
      <View style={{ alignItems: "flex-end" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 25, width: 45, marginTop: 40, marginLeft: 5 }}
            source={require("../icon/people.png")}
          ></Image>
          <Image
            style={{ height: 45, width: 45, marginTop: 40, marginLeft: 15 }}
            source={require("../icon/right_arrow.png")}
          ></Image>
        </View>
      </View>
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

export const PlansMember = ({ viewHeight }) => {
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
      <Plan></Plan>
      <View
        style={{
          borderTopWidth: 2,
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <Member></Member>
        <Member></Member>
      </View>
    </View>
  );
};
