import React, { useCallback, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import PhotoPicker from "@/components/picker/PhotoPicker";

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
      <Text className="text-basicGrey">{title}</Text>
      <TextInput
        className="w-full py-2 text-lg border-b-2 border-accent "
        onChangeText={setV}
        value={v}
        placeholder={placeholder}
        keyboardType="web-search"
        secureTextEntry={!!secure}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const navigation = useNavigation();
  const onCancel = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View className="flex-1">
      <View className="px-14 py-6 flex-row items-center border-b-2 border-neutral-200">
        <Pressable onPress={onCancel}>
          <Text className="text-lg">Cancel</Text>
        </Pressable>

        <View className="mx-auto">
          <Text className="text-[27px] font-bold font-aeonis">
            Edit Profile
          </Text>
        </View>

        <Pressable>
          <Text className="text-lg">Save</Text>
        </Pressable>
      </View>

      <View className="w-4/5 pt-12 self-center flex-1">
        <View>
          <PhotoPicker />
        </View>

        <View className="pt-10">
          <ProfileInput
            title="Your Email"
            placeholder="Enter your email"
            defaultValue="namesurname@gmail.com"
          />
          <ProfileInput
            secure
            title="Your Password"
            placeholder="Enter Your password"
            defaultValue="password"
          />
          <ProfileInput
            title="Your Phone"
            placeholder="Your phone"
            defaultValue="+14151110000"
          />
          <ProfileInput
            title="City, State"
            placeholder="Your City"
            defaultValue="San Francisco, CA"
          />
          <ProfileInput
            title="Country"
            placeholder="Your Country"
            defaultValue="USA"
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
