import { PropsWithChildren, useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import MenuButton from "../../../components/ui/button/MenuButton";
import { fontNames } from "../../hooks/useCustomFont";
import { cs } from "../../../libs/utils";
import clsx from "clsx";
import { Path, Svg, Text as SvgText } from "react-native-svg";
import { Link, useLinkProps } from "@react-navigation/native";
import BasicAppHeader from "../../../components/headers/BasicAppHeader";

const filters = [
  "fitler1 name",
  "filter2 name",
  "filter3 name",
  "filter4 name",
  "filter5 name",
];
const sortOptions = ["popularity", "newest", "oldest"];

const Categories = [
  {
    id: "a",
    title: "Category 1",
    subtitle: "Accompanying text",
    uri: require("../../../assets/baby/baby-1.jpg"),
  },
  {
    id: "b",
    title: "Category 2",
    subtitle: "Accompanying text",

    uri: require("../../../assets/baby/baby-1.jpg"),
  },
  {
    id: "c",
    title: "Category 3",
    subtitle: "Accompanying text",

    uri: require("../../../assets/baby/baby-1.jpg"),
  },
  {
    id: "d",
    title: "Category 4",
    subtitle: "Accompanying text",

    uri: require("../../../assets/baby/baby-1.jpg"),
  },
  {
    id: "e",
    title: "Category 4",
    subtitle: "Accompanying text",

    uri: require("../../../assets/baby/baby-1.jpg"),
  },
];

const CategoryScreen = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(filters[0]);
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const onFilterPress = useCallback((f: string) => {
    return () => {
      setFilter(f);
    };
  }, []);

  const onSortPress = useCallback((f: string) => {
    return () => {
      setSortBy(f);
    };
  }, []);

  return (
    <>
      <BasicAppHeader title="Category" />

      <View className="px-8 pt-12 pb-9">
        <Text
          className="text-4xl font-bold"
          style={{
            fontFamily: fontNames.aeonisMedium,
            fontSize: 40,
          }}>
          Category
        </Text>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View className="flex-row justify-between px-7 space-x-5">
            {filters.map((filterName) => {
              const f = filter === filterName;
              return (
                <Pressable
                  key={filterName}
                  onPress={onFilterPress(filterName)}
                  className={cs({
                    "rounded-full px-1 items-center w-36 h-8": true,
                    "bg-accent text-white": f,
                  })}>
                  <Text
                    className={clsx([
                      f ? "text-white" : "text-basicGrey",
                      "text-lg font-medium",
                    ])}>
                    {filterName}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View className="px-8 pt-8 pb-6">
        <Text
          className="text-4xl font-bold"
          style={{
            fontFamily: fontNames.aeonisMedium,
            fontSize: 23,
          }}>
          Sort By
        </Text>
      </View>

      <View className="flex-row justify-between px-7 space-x-5">
        {sortOptions.map((sortName) => {
          return (
            <Pressable
              key={sortName}
              onPress={onSortPress(sortName)}
              className={cs({
                "bg-white border-2  rounded-lg py-2 px-4 items-center min-w- max-w-[144px]":
                  true,
                "bg-accent border-0": sortBy === sortName,
              })}>
              <Text
                className={cs(
                  sortBy === sortName ? "text-white" : "text-black",
                  "capitalize"
                )}>
                {sortName}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* <FlatList
        className="px-7 pt-12"
        data={Categories}
        renderItem={({ item }) => <CategoryItem {...item} />}
        keyExtractor={(item) => item.id}
      /> */}

      {/* <ScrollView className="px-7 pt-12">
        {Categories.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              {...item}
            />
          );
        })}
      </ScrollView> */}
      <View className="flex-1 w-full container pt-14">
        <FlatList
          contentContainerStyle={{ gap: 30 }}
          data={Categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CategoryItem {...item} />;
          }}
        />
      </View>
    </>
  );
};

type ItemProps = {
  title: string;
  subtitle: string;
  uri: any;
  id: string;
};
const CategoryItem = ({ title, uri, id, subtitle }: ItemProps) => {
  const { onPress } = useLinkProps({
    to: {
      screen: "CategoryItem",
      params: {
        cid: id,
      },
    },
  });
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row">
        <View className="w-1/4 flex-row">
          <Image
            source={uri}
            className="w-full aspect-square rounded-md"
          />
        </View>
        <View className="pl-6 justify-center ">
          <Text className="text-2xl font-bold">{title}</Text>
          <Text className="text-sm">{subtitle}</Text>
        </View>

        <View className="ml-auto  flex-row items-center space-x-2">
          <View className="relative items-center justify-center">
            <OctaveSvg />
            <Text className="text-white absolute">5</Text>
          </View>
          <Text className="text-basicGrey text-lg font-medium">videos</Text>
        </View>
      </View>
    </Pressable>
  );
};

const OctaveSvg = ({ children }: PropsWithChildren) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 28.53 27.86">
      <Path
        fill={"#bbbdbf"}
        d="M22.61 25.14a4 4 0 0 0-1.77.13q-1.515.465-2.37 1.8c-.53.84-1.36 1.02-2.19.47a4.1 4.1 0 0 0-1.74-.67c-.59-.08-1.14.1-1.67.33-.21.09-.41.19-.59.33-.78.6-1.78.29-2.25-.49-.81-1.31-2.04-1.93-3.58-1.95-.17 0-.33.03-.5.04-.86.05-1.51-.54-1.57-1.4-.13-1.74-1.01-2.98-2.61-3.67-.87-.38-1.18-1.18-.81-2.05.69-1.59.5-3.09-.58-4.45-.58-.73-.48-1.6.25-2.17 1.38-1.09 1.92-2.51 1.6-4.24-.16-.89.36-1.61 1.24-1.76 1.7-.29 2.87-1.25 3.39-2.9.28-.89 1.17-1.32 2.03-1.03 1.61.55 3.06.2 4.3-.97.7-.66 1.45-.66 2.16 0 1.25 1.18 2.71 1.5 4.34.96.9-.3 1.67.09 1.96.99.55 1.67 1.7 2.65 3.44 2.95.85.14 1.38.88 1.22 1.73-.33 1.77.23 3.2 1.65 4.3.66.51.77 1.42.24 2.07-1.12 1.4-1.33 2.92-.6 4.57.35.79.02 1.63-.79 1.97-1.64.7-2.53 1.95-2.66 3.73-.06.8-.68 1.38-1.54 1.36Z"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
