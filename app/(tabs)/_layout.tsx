import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/icons/home-active.png")
                  : require("../../assets/images/icons/home.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                  ? require("../../assets/images/icons/favorites-active.png")
                  : require("../../assets/images/icons/favorites.png")}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                  ? require("../../assets/images/icons/profile-active.png")
                  : require("../../assets/images/icons/profile.png")}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
