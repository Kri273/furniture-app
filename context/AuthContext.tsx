import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "@furniture_app_token";
const USER_KEY = "@furniture_app_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Kontrolli, kas kasutaja on juba sisse loginud (token olemas)
  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const storedUser = await AsyncStorage.getItem(USER_KEY);

      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load auth:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // MOCK: Simuleerime API kutsumist
      // Hiljem asenda seda päris backend API-ga
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simuleerime võrgupäringu viivitust

      // Mock kasutaja andmed
      const mockUser: User = {
        id: "1",
        name: "Test User",
        email: email,
      };

      // Salvesta "token" ja kasutaja andmed
      const mockToken = "mock-jwt-token-" + Date.now();
      await AsyncStorage.setItem(TOKEN_KEY, mockToken);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      setUser(mockUser);

      // Suuna tabs lehele
      router.replace("/(tabs)/home");
    } catch (error) {
      console.error("Sign in failed:", error);
      throw error;
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      // MOCK: Simuleerime API kutsumist
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock kasutaja loomine
      const mockUser: User = {
        id: "1",
        name: name,
        email: email,
      };

      // Salvesta "token" ja kasutaja andmed
      const mockToken = "mock-jwt-token-" + Date.now();
      await AsyncStorage.setItem(TOKEN_KEY, mockToken);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      setUser(mockUser);

      // Suuna tabs lehele
      router.replace("/(tabs)/home");
    } catch (error) {
      console.error("Sign up failed:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      // Eemalda token ja kasutaja andmed
      await AsyncStorage.removeItem(TOKEN_KEY);
      await AsyncStorage.removeItem(USER_KEY);

      setUser(null);

      // Suuna tagasi auth lehele
      router.replace("/(auth)");
    } catch (error) {
      console.error("Sign out failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
