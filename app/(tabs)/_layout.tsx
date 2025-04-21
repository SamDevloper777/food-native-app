import ProtectedRoute from "@/utils/protectedRoute";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { House, PersonStanding, ShoppingBag, User } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <ProtectedRoute>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f5f5f5',
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
            elevation: 0,
          },
          tabBarActiveTintColor: '#FF5722',
          tabBarInactiveTintColor: '#B0BEC5',
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <House
                size={28}
                color={color}
                strokeWidth={focused ? 2 : 1.8}
              />
            ),
            title: "Home",
            tabBarButton: (props) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={props.onPress}
                style={props.style}
                delayLongPress={9999}
              >
                {props.children}
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="customizeOwnThali"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name="restaurant-outline"
                size={28}
                color={color}
                strokeWidth={focused ? 2 : 1.8}
              />
            ),
            title: "My Thali",
            tabBarButton: (props) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={props.onPress}
                style={props.style}
                delayLongPress={9999}
              >
                {props.children}
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <User
                size={28}
                color={color}
                strokeWidth={focused ? 2 : 1.8}
              />
            ),
            title: "Profile",
            tabBarButton: (props) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={props.onPress}
                style={props.style}
                delayLongPress={9999}
              >
                {props.children}
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
    </ProtectedRoute>
  );
}
