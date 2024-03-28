import "react-native-gesture-handler";

import RootLayout from "./layouts/RootLayout";


import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useCustomFont } from "./hooks/useCustomFont";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useCustomFont();

  useLayoutEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView])

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer >
      <RootLayout />
    </NavigationContainer>
  );
}
