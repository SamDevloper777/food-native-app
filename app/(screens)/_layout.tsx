import ProtectedRoute from "@/utils/protectedRoute";
import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <ProtectedRoute>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="customizeThali" />
      </Stack>
    </ProtectedRoute>
  );
}