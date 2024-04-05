import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useMemo } from "react";

export const fontNames = {
  aeonisMedium: "AeonisMedium",
  aeonisBold: "AeonisBold",
  aeonisBoldExtended: "AeonisBoldExtended",
  aeonisExtended: "AeonisExtended",
  montserrat: "Montserrat",
} as const;

SplashScreen.preventAutoHideAsync();

export const useCustomFont = () => {
  const [fontsLoaded, fontError] = useFonts({
    [fontNames.aeonisMedium]: require("../../assets/fonts/AeonisMedium.ttf"),
    [fontNames.aeonisBold]: require("../../assets/fonts/AeonisBold.ttf"),
    [fontNames.aeonisBoldExtended]: require("../../assets/fonts/AeonisBoldExtended.ttf"),
    [fontNames.aeonisExtended]: require("../../assets/fonts/AeonisExtended.ttf"),
    [fontNames.montserrat]: require("../../assets/fonts/Montserrat.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  console.log(fontError, "fontErro");

  return useMemo(() => {
    return { fontsLoaded, onLayoutRootView };
  }, [fontsLoaded, onLayoutRootView]);
};
