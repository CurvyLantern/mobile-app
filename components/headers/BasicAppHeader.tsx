import { View, TextInput, Image, Text } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import MenuButton from "../ui/button/MenuButton";
import SearchBar from "../inputs/SearchBar";
import BasicAppBar from "./BasicAppBar";

type AppHeaderProps = {
  title: string;
};
const BasicAppHeader = ({ title }: AppHeaderProps) => {
  return (
    <View className="flex">
      <BasicAppBar title={title} />

      <View className="pt-8 px-8">
        <SearchBar />
      </View>
    </View>
  );
};

export default BasicAppHeader;
