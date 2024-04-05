import FriendDetails from "@/screens/FriendsScreen/FriendsItemDetails";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/solid";

type FriendListItemProps = {
  id: string;
  username: string;
  imgUrl: any;
};
const FriendListItem = ({ id, username, imgUrl }: FriendListItemProps) => {
  const [detailsShown, setDetailsShown] = useState(false);
  const onToggleDetails = () => {
    setDetailsShown((p) => !p);
  };
  return (
    <Pressable onPress={onToggleDetails}>
      <View className="flex-row space-x-5 items-center py-4">
        <View className="w-16 h-16">
          <Image
            source={imgUrl}
            className="w-full aspect-square rounded-full object-contain"
          />
        </View>
        <Text className="text-2xl font-bold mr-auto">{username}</Text>

        <View className=" ">
          <ChevronDownIcon
            size={30}
            color={"#3FB0DB"}
          />
        </View>
      </View>

      {detailsShown ? (
        <FriendDetails
          company="Company Name"
          email="email@company.com"
          phone="0601234567"
        />
      ) : null}
    </Pressable>
  );
};

export default FriendListItem;
