import { Stack } from "expo-router";
import './global.css';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}