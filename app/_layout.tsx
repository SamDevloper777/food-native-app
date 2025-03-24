import { Stack } from "expo-router";
import './global.css';
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import store from "@/utils/store";

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}