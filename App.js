import "react-native-gesture-handler";

import RootLayout from "./layouts/RootLayout";


import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useCustomFont } from "./hooks/useCustomFont";
import { StatusBar } from "react-native";
import SafeAreaContainer from "./components/SafeAreaContainer";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useCustomFont();

  useLayoutEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView])

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
      <StatusBar animated={true} backgroundColor={'#111B2F'} barStyle="light-content" networkActivityIndicatorVisible={true} />
      <NavigationContainer >
        <AuthProvider>
          <RootLayout />
        </AuthProvider >
      </NavigationContainer>
    </>
  );
}
