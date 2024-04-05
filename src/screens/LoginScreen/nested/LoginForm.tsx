import { useCallback, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import ThemeConfig from "../../../constants/myTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useAuthContext } from "../../../contexts/AuthContext";

const LoginForm = ({ navigation }) => {
  const { isLoggedIn, login } = useAuthContext();
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View
      style={styles.wrapper}
      className="h-full container  justify-center">
      <Pressable
        onPress={onGoBack}
        className="flex-row items-center space-x-2 pb-10">
        <ArrowLeftIcon
          size={30}
          color={"#ffffff"}
        />
        <Text className="text-white">Go Back</Text>
      </Pressable>

      <ProfileInput
        defaultValue=""
        placeholder="Email"
        title="Username/Email"
      />

      <ProfileInput
        defaultValue=""
        placeholder="Password"
        title="Password"
        secure
      />

      <View className="pt-10">
        <Pressable
          onPress={() => {
            login();
          }}
          className="w-full h-14 rounded-full border-2 border-white items-center justify-center">
          <Text className="text-white font-semibold text-[28px]">Submit</Text>
        </Pressable>
      </View>

      <View className="pt-10">
        <Pressable
          onPress={() => {
            navigation.navigate("RegisterForm");
          }}
          className="w-full h-14 rounded-full border-2 border-white items-center justify-center">
          <Text className="text-white font-semibold text-[28px]">Register</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("ForgotPasswordForm");
        }}
        className="pt-10">
        <Text className="text-center text-secondary text-xl">
          Forgot Password ?
        </Text>
      </Pressable>
    </View>
  );
};

type ProfileInputProps = {
  title: string;
  placeholder: string;
  defaultValue: string;
  secure?: boolean;
};
const ProfileInput = ({
  title,
  placeholder,
  defaultValue,
  secure,
}: ProfileInputProps) => {
  const [v, setV] = useState(defaultValue ? defaultValue : "");
  return (
    <View className="pt-5">
      <Text className="text-white">{title}</Text>
      <TextInput
        placeholderTextColor={"#aaa"}
        className="w-full py-2 text-lg border-b-2 border-accent text-white placeholder"
        onChangeText={setV}
        value={v}
        placeholder={placeholder}
        keyboardType="web-search"
        secureTextEntry={!!secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: ThemeConfig().primary.opacity(0.4),
  },
});

export default LoginForm;
