import React from "react";
import { Text, View, Image } from "react-native";

export const NonPlan = ({ viewHeight }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 25,
            textDecorationLine: "underline",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          새로운 계획을 세워봐요!!
        </Text>
        <Image
          style={{ height: 40, width: 40, marginTop: 40, marginLeft: 5 }}
          source={require("../icon/arrow.png")}
        ></Image>
      </View>
    </View>
  );
};
