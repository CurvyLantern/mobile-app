import { PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: async () => {},
  logout: async () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoggedIn, login, logout, user } = useAuth();
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
