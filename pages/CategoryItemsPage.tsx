import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useDebugValue, useState } from "react";
import SafeAreaContainer from "../components/SafeAreaContainer";
import {
  ClockIcon,
  XMarkIcon as CrossIcon,
  EllipsisHorizontalIcon as ThreeDotsIcon,
} from "react-native-heroicons/solid";
import { Path, Svg } from "react-native-svg";
import clsx from "clsx";
import BasicAppHeader from "../components/headers/BasicAppHeader";
import Triangle from "../components/ui/shapes/Triangle";

const CategoryItemsPage = ({ route }) => {
  const { cid } = route.params;
  return (
    <>
      <BasicAppHeader title={`Category Name ${cid}`} />

      <View className="px-8 py-10">
        <Text className="text-2xl font-bold">Category Name {cid}</Text>
      </View>
      <ScrollView>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            return (
              <CategoryItem
                duration={"15 min"}
                key={idx}
              />
            );
          })}
      </ScrollView>
    </>
  );
};

type CategoryItemProps = {
  duration: string;
};
const CategoryItem = ({ duration }: CategoryItemProps) => {
  const [detailShown, setDetailShown] = useState(false);

  const toggleDetails = () => {
    setDetailShown((p) => !p);
  };

  return (
    <View className="pb-12">
      <View className="items-end px-8">
        <ThreeDotsIcon
          size={40}
          color={"#aaa"}
        />
      </View>
      <View className="w-full aspect-video">
        <Image
          className=" h-full object-contain w-full"
          source={require("../assets/baby/baby-1.jpg")}
        />
      </View>

      <View className="relative">
        <View className=" flex-row justify-between px-8 py-4 items-center ">
          <Text className="font-bold text-xl pb-2">Title of the content</Text>
          <View className="flex-row items-center">
            <ClockIcon
              size={30}
              color={"#aaa"}
            />
            <Text className="text-neutral-500">{duration}</Text>
          </View>
        </View>
        {detailShown ? (
          <CategoryDetails
            closeDetail={toggleDetails}
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                natus, dolorum minima magni saepe nobis perspiciatis aperiam totam
                tempora in."
            title="Description"
          />
        ) : null}
        <Pressable
          onPress={toggleDetails}
          className={clsx({
            hidden: detailShown,
          })}>
          <Text className="px-8 text-accent text-xl font-bold">Details</Text>
        </Pressable>
      </View>

      <View></View>
    </View>
  );
};

type CategoryDetailsProps = {
  title: string;
  details: string;
  closeDetail: () => void;
};
const CategoryDetails = ({
  details,
  title,
  closeDetail,
}: CategoryDetailsProps) => {
  return (
    <View
      className="absolute w-full top-full pt-10 pb-20 px-8 overflow-hidden"
      style={styles.popover}>
      <View className="flex-row  justify-between">
        <Text className="text-2xl text-white mb-5">{title}</Text>
        <Pressable
          onPress={closeDetail}
          className="">
          <CrossIcon
            size={30}
            color={"#fff"}
          />
        </Pressable>
      </View>
      <Text className="text-sm text-white">{details}</Text>
      <View className="absolute -top-1 left-12">
        <Triangle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  triangle: {
    // clipPath: clip-path: polygon(0 0, 48% 100%, 100% 0);
  },

  popover: {
    // top: "100%",
    zIndex: 10,
    backgroundColor: "rgba(17,27,47,0.9)",
  },
});

export default CategoryItemsPage;
