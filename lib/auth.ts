import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface TokenCache {
  getToken: (key: string) => Promise<string | undefined | null>;
  saveToken: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => void;
}

export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

// Implementing a custom TokenCache interface
const customTokenCache = {
  getToken: async (key: string) => {
    try {
      const token = await AsyncStorage.getItem(key);
      return token;
    } catch (e) {
      console.error("Failed to retrieve token:", e);
      return null;
    }
  },
  saveToken: async (key: string, token: string) => {
    try {
      await AsyncStorage.setItem(key, token);
    } catch (e) {
      console.error("Failed to save token:", e);
    }
  },
  clearToken: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("Failed to remove token:", e);
    }
  },
};

export default customTokenCache;
