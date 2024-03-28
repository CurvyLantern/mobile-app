import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {
  DrawerScreenProps,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

export type RootDrawerParamList = {
  // Home: NavigatorScreenParams<HomeTabParamList>;
  // PostDetails: { id: string };
  // NotFound: undefined;
  Login: undefined;
  Category: undefined;
  CategoryItem: undefined;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type RootDrawerNavigationProp =
  DrawerNavigationProp<RootDrawerParamList>;

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

// export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<HomeTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
