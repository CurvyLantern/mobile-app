import "react-native-gesture-handler";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import {
  RootDrawerParamList,
  RootDrawerScreenProps,
} from "../types/navigation.types";
import CategoryItemsScreen from "../screens/CategoryScreen/CategoryItemsScreen";
import FriendsScreen from "../screens/FriendsScreen/FriendsScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import { Image, Linking, View, Text, Pressable } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { useAuthContext } from "../contexts/AuthContext";
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootLayout = () => {
  const { isLoggedIn } = useAuthContext();

  console.log(isLoggedIn, "Nasim ");
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      initialRouteName={isLoggedIn ? "Category" : "Login"}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerType: "slide",
        unmountOnBlur: true,
      }}
      backBehavior="history">
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
      />

      <Drawer.Screen
        name="CategoryItem"
        component={CategoryItemsScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="Friends"
        component={FriendsScreen}
      />

      <Drawer.Screen
        name="Profile"
        component={SettingsScreen}
      />

      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{}}
      />

      {/* <SafeAreaContainer > */}
      {/* <RootLayout> */}
      {/* <LoginPage /> */}
      {/* <CategoryPage /> */}
      {/* </RootLayout> */}
      {/* </SafeAreaContainer> */}
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { logout, isLoggedIn } = useAuthContext();
  return (
    <DrawerContentScrollView {...props}>
      <View className="items-center w-full py-14 space-y-7">
        <View className="w-28 h-28 rounded-full ">
          <Image
            className="object-contain w-full h-full rounded-full"
            width={112}
            height={112}
            source={require("../../assets/images/avatars/avatar1.png")}
          />
        </View>
        <Text className="text-3xl font-bold text-center">Name Surname</Text>
      </View>

      {isLoggedIn ? (
        <>
          <CustomDrawerItem
            Icon={AdjustmentsHorizontalIcon}
            title="Settings"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />
          <CustomDrawerItem
            Icon={ArrowLeftStartOnRectangleIcon}
            title="Logout"
            onPress={() => {
              logout().then((res) => {
                navigation.navigate("Login");
              });
            }}
          />
        </>
      ) : (
        <>
          <CustomDrawerItem
            Icon={HomeIcon}
            title="Home"
            onPress={() => {
              navigation.navigate("Category");
            }}
          />
          <CustomDrawerItem
            Icon={UserIcon}
            title="Sign In"
            onPress={() => {
              navigation.navigate("LoginForm");
            }}
          />
        </>
      )}
    </DrawerContentScrollView>
  );
};

type CustomDrawerItemProps = {
  Icon: (props: any) => React.JSX.Element;
  title: string;
  onPress: () => void;
};
const CustomDrawerItem = ({ Icon, title, onPress }: CustomDrawerItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="px-6">
      <View className="flex-row items-center space-x-4 pl-6 py-11 border-b-2 border-lightBlue">
        <Icon
          size={30}
          color={"#3FB0DB"}
        />
        <Text className="text-[28px]">{title}</Text>
      </View>
    </Pressable>
  );
};

export default RootLayout;
