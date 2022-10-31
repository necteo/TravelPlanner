import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../Styles";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          marginTop: 43,
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "gray",
        }}
      >
        <Image
          source={require("../icon/none_image.png")}
          style={{ width: 45, height: 35, marginLeft: 20 }}
        ></Image>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <Text
            style={{
              borderRadius: 20,
              borderWidth: 3,
              fontSize: 16,
              width: 55,
              height: 40,
              textAlign: "center",
              paddingTop: 8,
            }}
          >
            CODE
          </Text>
          <Text
            style={{
              borderRadius: 20,
              borderWidth: 3,
              fontSize: 16,
              width: 55,
              height: 40,
              textAlign: "center",
              marginLeft: 20,
              paddingTop: 8,
            }}
          >
            NEW
          </Text>
        </View>
      </View>
    </View>
  );
};
