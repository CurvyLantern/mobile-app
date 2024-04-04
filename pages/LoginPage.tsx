import { Image, ImageBackground, Pressable, Text, View } from "react-native";

import { Bars4Icon as IconBar } from "react-native-heroicons/solid";
import { RootDrawerScreenProps } from "../types/navigation.types";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

type LoginPageProps = RootDrawerScreenProps<"Login">;

const LoginPage = ({ navigation }: LoginPageProps) => {
  const { login } = useAuth();
  return (
    <ImageBackground
      source={require("../assets/images/login-bg-img.png")}
      className="flex-1 relative">
      <View className="w-full top-0 left-0 h-full absolute bg-primary flex-1 opacity-50"></View>

      <View className="px-14 flex-1">
        <View className="flex-row items-center  space-x-2 pt-6">
          <View className="flex-1 items-center">
            <Image
              source={require("../assets/logo/logo.png")}
              style={{
                objectFit: "contain",
                width: "85%",
                maxWidth: 315,
              }}
            />
          </View>

          {/* <Pressable onPress={navigation.toggleDrawer}>
            <IconBar
              size={40}
              color={"#fff"}
            />
          </Pressable> */}
        </View>

        <View className="gap-8 mt-auto pb-24">
          <View className=" ">
            <TouchableOpacity
              onPress={login}
              className="w-full h-14 rounded-full border-2 border-white items-center justify-center">
              <Text className="text-white font-semibold text-[28px]">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Pressable className="w-full h-14 rounded-full border-2 border-white items-center justify-center">
              <Text className="text-white font-semibold text-[28px]">
                Register
              </Text>
            </Pressable>
          </View>

          <View>
            <Text className="text-center text-secondary text-xl">
              Forgot Password ?
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginPage;
