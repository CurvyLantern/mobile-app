import { View, Text, Image } from "react-native";
import React from "react";
import MenuButton from "../ui/button/MenuButton";

type AppBarProps = { title: string };
const BasicAppBar = ({ title }: AppBarProps) => {
  return (
    <View className="px-14 py-9 flex-row items-center border-b-2 border-neutral-200">
      <View>
        <Image
          source={require("../../assets/logo/logo-small.png")}
          style={{
            objectFit: "contain",
            width: 52,
            height: 35,
          }}
        />
      </View>

      <View className="mx-auto">
        <Text className="text-[27px] font-bold font-aeonis">{title}</Text>
      </View>

      <MenuButton />
    </View>
  );
};

export default BasicAppBar;
