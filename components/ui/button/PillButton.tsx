import { PropsWithChildren } from "react";
import BaseButton from "./BaseButton";
import { Text } from "react-native";

type PillButtonProps = PropsWithChildren & {
  onPress;
};

const PillButton: React.FC<PillButtonProps> = () => {
  return (
    <BaseButton
      onPress={(evt) => {
        console.log("hello");
        console.log(evt, "evt");
      }}>
      <Text>Sign In</Text>
    </BaseButton>
  );
};

export default PillButton;
