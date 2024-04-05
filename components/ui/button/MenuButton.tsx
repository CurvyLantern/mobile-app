import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { RootDrawerNavigationProp } from "../../../src/types/navigation.types";

const MenuButton = () => {
  const navigation = useNavigation<RootDrawerNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <View style={styles.wrapper}>
        <View style={styles.btn1}></View>
        <View style={styles.btn2}></View>
        <View style={styles.btn3}></View>
      </View>
    </Pressable>
  );
};

const btnStyle = {
  height: 2,
  width: "100%",
  backgroundColor: "#000",
  marginLeft: "auto",
} as const;
const styles = StyleSheet.create({
  wrapper: {
    width: 40,
    height: 20,
    justifyContent: "space-between",
  },
  btn1: {
    ...btnStyle,
    width: "50%",
  },
  btn2: {
    ...btnStyle,
    width: "75%",
  },
  btn3: {
    ...btnStyle,
    width: "100%",
  },
});

export default MenuButton;
