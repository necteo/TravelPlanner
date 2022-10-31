import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../Styles";

export const Vote = () => {
  const path1 = { name: "여행 경로 1", count: 0, voted: false };
  const path2 = { name: "여행 경로 2", count: 0, voted: false };
  const path3 = { name: "여행 경로 3", count: 0, voted: false };
  const path4 = { name: "여행 경로 4", count: 0, voted: false };
  const path5 = { name: "여행 경로 5", count: 0, voted: false };
  const path6 = { name: "여행 경로 6", count: 0, voted: false };
  const path7 = { name: "여행 경로 7", count: 0, voted: false };
  const path8 = { name: "여행 경로 8", count: 0, voted: false };
  const pathArray = new Array(
    path1,
    path2,
    path3,
    path4,
    path5,
    path6,
    path7,
    path8
  );

  return (
    <View style={styles.scrollBox}>
      <ScrollView style={styles.pathCountBox}>
        {pathArray.map((path, id) => (
          <View style={styles.pathBox}>
            <View style={styles.pathName}>
              <Text style={styles.pathText}>{path.name}</Text>
            </View>
            <View style={styles.likeIcon}>
              <Text style={styles.likeCount}>{path.count}</Text>
              <TouchableOpacity
                onPress={() => {
                  path.count = path.count + 1;
                  path.voted = true;
                }}
              >
                <Text
                  style={{ ...styles.likeIconN, width: path.voted ? 0 : 37 }}
                >
                  <AntDesign name="like2" size={36} color="black" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  path.count = path.count - 1;
                  path.voted = false;
                }}
              >
                <Text
                  style={{ ...styles.likeIconY, width: !path.voted ? 0 : 37 }}
                >
                  <AntDesign name="like1" size={36} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
