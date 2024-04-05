import { Image, ImageBackground, Pressable, Text, View } from "react-native";

import useAuth from "@/hooks/useAuth";
import {
  LoginStackParamList,
  RootDrawerScreenProps,
} from "@/types/navigation.types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordForm from "./nested/ForgotPasswordForm";
import LoginForm from "./nested/LoginForm";
import RegisterForm from "./nested/RegisterForm";
import SignInOptions from "./nested/SignInOptions";

type LoginScreenProps = RootDrawerScreenProps<"Login">;

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login } = useAuth();
  return (
    <ImageBackground
      source={require("../../../assets/images/login-bg-img.png")}
      className="flex-1 relative">
      <View className="w-full top-0 left-0 h-full absolute bg-primary flex-1 opacity-50"></View>

      <View className=" flex-1">
        <View className="container flex-row items-center  space-x-2 pt-6">
          <View className="flex-1 items-center">
            <Image
              source={require("../../../assets/logo/logo.png")}
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

        <View className=" flex-1">
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "transparent",
              },
              animation: "slide_from_bottom",
            }}
            initialRouteName="SignInOptions">
            <Stack.Screen
              name="SignInOptions"
              component={SignInOptions}
            />

            <Stack.Screen
              name="LoginForm"
              component={LoginForm}
            />

            <Stack.Screen
              name="RegisterForm"
              component={RegisterForm}
            />

            <Stack.Screen
              name="ForgotPasswordForm"
              component={ForgotPasswordForm}
            />
          </Stack.Navigator>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
