import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginPage from "../pages/LoginPage";
import CategoryPage from "../pages/CategoryPage";
import { RootDrawerParamList } from "../types/navigation.types";
import CategoryItemsPage from "../pages/CategoryItemsPage";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RootLayout = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerType: "slide",
      }}>
      <Drawer.Screen
        name="Login"
        component={LoginPage}
      />
      <Drawer.Screen
        name="Category"
        component={CategoryPage}
      />

      <Drawer.Screen
        name="CategoryItem"
        component={CategoryItemsPage}
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

export default RootLayout;
