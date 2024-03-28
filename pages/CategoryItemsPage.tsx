import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useDebugValue, useState } from "react";
import SafeAreaContainer from "../components/SafeAreaContainer";
import { ClockIcon } from "react-native-heroicons/solid";

const CategoryItemsPage = () => {
  return (
    <SafeAreaContainer>
      <View className="px-8 py-10">
        <Text className="text-2xl font-bold">Category Name</Text>
      </View>
      <ScrollView>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return <CategoryItem key={idx} />;
          })}
      </ScrollView>
    </SafeAreaContainer>
  );
};

const CategoryItem = () => {
  const [detailShown, setDetailShown] = useState(false);
  const onShowDetails = () => {
    setDetailShown((p) => !p);
  };
  return (
    <View className="pb-12">
      <View className="w-full aspect-video">
        <Image
          className=" h-full object-contain w-full"
          source={require("../assets/baby/baby-1.jpg")}
        />
      </View>

      <View className="relative flex-row justify-between px-8 pt-4 items-center">
        <Text className="font-bold text-xl pb-2">Title of the content</Text>
        <View className="flex-row items-center">
          <ClockIcon
            size={30}
            color={"#aaa"}
          />
          <Text className="text-neutral-500">15 MIN</Text>
        </View>

        <View className="absolute top-full left-0 w-full">
          <Text>Description</Text>
        </View>
      </View>
      <Pressable onPress={onShowDetails}>
        <Text className="px-8 text-accent text-xl font-bold">Details</Text>
      </Pressable>

      <View></View>
    </View>
  );
};

export default CategoryItemsPage;
