import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const useAuth = () => {
  const { navigate } = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const login = useCallback(async () => {
    setIsLoggedIn(true);
    setUser({ name: "Lana D Rhodes" });

    setTimeout(() => {
      navigate("Category");
    }, 1000);
  }, []);
  const logout = useCallback(async () => {
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
};

export default useAuth;
