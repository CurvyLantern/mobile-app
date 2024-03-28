import { PropsWithChildren } from "react";

import { StatusBar, Platform, StyleSheet, SafeAreaView } from "react-native";
const SafeAreaContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <SafeAreaView style={styles.safeStyle}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaContainer;
