import { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";

import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import MenuButton from "../components/ui/button/MenuButton";
import { fontNames } from "../hooks/useCustomFont";
import { cs } from "../libs/utils";

const filters = ["fitler1", "filter2", "filter3"];
const sortOptions = ["popularity", "newest", "oldest"];

const Categories = [
  {
    id: "a",
    title: "Category 1",
    subtitle: "Accompanying text",
    uri: require("../assets/baby/baby-1.jpg"),
  },
  {
    id: "b",
    title: "Category 2",
    subtitle: "Accompanying text",

    uri: require("../assets/baby/baby-1.jpg"),
  },
  {
    id: "c",
    title: "Category 3",
    subtitle: "Accompanying text",

    uri: require("../assets/baby/baby-1.jpg"),
  },
];

const CategoryPage = () => {
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
    <View>
      <View className="px-14 py-9  flex-row items-center border-b-2 border-neutral-200">
        <View>
          <Image
            source={require("../assets/logo/logo-small.png")}
            style={{
              objectFit: "contain",
              width: 52,
              height: 35,
            }}
          />
        </View>

        <View className="mx-auto">
          <Text className="text-[27px] font-bold font-aeonis">Categories</Text>
        </View>

        <MenuButton />
      </View>

      <View className="pt-8 px-8">
        <View className="flex-row items-center bg-neutral-300 px-4 space-x-3 rounded-full">
          <MagnifyingGlassIcon
            size={20}
            color={"#808184"}
            // width={35}
            // height={35}
          />

          <View className="flex-1">
            <TextInput
              className="w-full py-2 text-lg"
              onChangeText={setQuery}
              value={query}
              placeholder="Search"
              keyboardType="web-search"
            />
          </View>
        </View>
      </View>

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

      <ScrollView horizontal>
        <View className="flex-row justify-between px-7 space-x-5">
          {filters.map((filterName) => {
            return (
              <Pressable
                key={filterName}
                onPress={onFilterPress(filterName)}
                className={cs({
                  "bg-neutral-400 rounded-full py-2 px-4 items-center min-w- max-w-[144px]":
                    true,
                  "bg-accent text-white": filter === filterName,
                })}>
                <Text className="text-white">{filterName}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

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

      <ScrollView horizontal>
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
      </ScrollView>

      {/* <FlatList
        className="px-7 pt-12"
        data={Categories}
        renderItem={({ item }) => <CategoryItem {...item} />}
        keyExtractor={(item) => item.id}
      /> */}

      <ScrollView className="px-7 pt-12">
        {Categories.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              {...item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

type ItemProps = {
  title: string;
  subtitle: string;
  uri: any;
};
const CategoryItem = ({ title, uri, subtitle }: ItemProps) => {
  return (
    <View className="flex-row my-4">
      <Image
        source={uri}
        className="w-20 h-20 rounded-md"
      />
      <View className="pl-6 justify-center">
        <Text className="text-2xl font-bold">{title}</Text>
        <Text className="text-sm">{subtitle}</Text>
      </View>
    </View>
  );
};

export default CategoryPage;
