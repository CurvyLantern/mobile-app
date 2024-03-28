import { View, Text, Button } from "react-native";
import React from "react";
import BaseButton from "./ui/button/BaseButton";
import { useNavigation } from "@react-navigation/native";

const Temp = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <BaseButton
        onPress={() => {
          navigate("Login");
        }}>
        <Text>Login</Text>
      </BaseButton>

      <BaseButton
        onPress={() => {
          navigate("Category");
        }}>
        <Text>Category</Text>
      </BaseButton>
    </View>
  );
};

export default Temp;
