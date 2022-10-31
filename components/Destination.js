import React from "react";
import { View, Image, TextInput } from "react-native";

export const Destination = () => {
  return (
    <View
      style={{
        backgroundColor: "#cfd4da",
        borderRadius: 20,
        height: 550,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../icon/none_image.png")}
          style={{ height: 100, width: 100, marginLeft: 30, marginTop: 50 }}
        ></Image>

        <TextInput
          style={{
            fontSize: 20,
            marginLeft: 10,
            marginTop: 60,
            width: 150,
            height: 20,
            borderBottomWidth: 1,
          }}
        >
          제목을 입력하세요
        </TextInput>
      </View>
    </View>
  );
};
