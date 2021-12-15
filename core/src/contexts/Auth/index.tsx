import React, { ReactNode } from "react";
import {
  STORAGE_IS_AUTHENTICATED,
  STORAGE_USER,
} from "../../constants/storage";
import { usePersistedState } from "../../hooks/usePersistedState";

type User = {
  name: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: User;
  setUser: (user: User) => void;
  loggout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = React.createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = usePersistedState(
    STORAGE_IS_AUTHENTICATED,
    false
  );
  const [user, setUser] = usePersistedState(STORAGE_USER, {} as User);

  const loggout = React.useCallback(() => {
    setUser({} as User);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, loggout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return React.useContext(AuthContext);
}
