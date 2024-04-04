import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import BasicAppHeader from "../components/headers/BasicAppHeader";
import BasicAppBar from "../components/headers/BasicAppBar";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  PhoneIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import SearchBar from "../components/inputs/SearchBar";

import Triangle from "../components/ui/shapes/Triangle";

const FriendList = [
  {
    id: "a",
    username: "Lana Davidson",
    imgUrl: require("../assets/images/avatars/avatar1.png"),
  },
  {
    id: "b",
    username: "Lana Davidson2",
    imgUrl: require("../assets/images/avatars/avatar1.png"),
  },
  {
    id: "c",
    username: "Lana Davidson3",
    imgUrl: require("../assets/images/avatars/avatar1.png"),
  },
  {
    id: "d",
    username: "Lana Davidson4",
    imgUrl: require("../assets/images/avatars/avatar1.png"),
  },
];

const FriendsPage = () => {
  return (
    <>
      <BasicAppBar title="Friends" />

      <View className="container flex-row justify-between py-4">
        <Pressable className="flex-row items-center">
          <ChevronLeftIcon
            size={30}
            color={"#3FB0DB"}
          />
          <Text className="text-accent text-lg">Lists</Text>
        </Pressable>

        <Pressable>
          <PlusIcon
            size={30}
            color={"#3FB0DB"}
          />
        </Pressable>
      </View>

      <View className="container">
        <SearchBar />
      </View>

      <View className="container py-4  flex-1">
        <ScrollView>
          {FriendList.map((friend, idx) => {
            return (
              <React.Fragment key={friend.id}>
                <FriendListItem {...friend} />
                {idx !== FriendList.length - 1 ? <ItemSeparator /> : null}
              </React.Fragment>
            );
          })}
        </ScrollView>
        {/* <FlatList
          data={FriendList}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item, index, separators }) => {
            return <FriendListItem {...item} />;
          }}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </>
  );
};

const ItemSeparator = () => {
  return <View className="h-1 bg-accent"></View>;
};

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

type FriendDetailsProps = {
  company: string;
  email: string;
  phone: string;
};
const FriendDetails = ({ company, email, phone }: FriendDetailsProps) => {
  return (
    <View className="w-full py-10 px-8 overflow-hidden bg-darkBlue bg-opacity-90">
      <Text className="text-2xl pb-3 font-bold text-white">{company}</Text>
      <Text className="text-2xl pb-3 text-white">{email}</Text>
      <View className="flex-row items-center space-x-5">
        <Text className="text-2xl text-accent">{phone}</Text>
        <PhoneIcon
          size={20}
          color={"#3FB0DB"}
        />
      </View>

      <View className="absolute -top-1 left-12">
        <Triangle />
      </View>
    </View>
  );
};

export default FriendsPage;
