import MenuButton from "@/components/ui/button/MenuButton";
import React from "react";
import { Image, Text, View } from "react-native";

type AppBarProps = { title: string };
const BasicAppBar = ({ title }: AppBarProps) => {
  return (
    <View className="px-14 py-9 flex-row items-center border-b-2 border-neutral-200">
      <View>
        <Image
          source={require("@@/assets/logo/logo-small.png")}
          style={{
            objectFit: "contain",
            width: 52,
            height: 35,
          }}
        />
      </View>

      <View className="mx-auto">
        <Text className="text-[27px] font-aeonisBold">{title}</Text>
      </View>

      <MenuButton />
    </View>
  );
};

export default BasicAppBar;
