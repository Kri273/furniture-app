
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { ThemedView } from "@/components/ThemedView";

export default function RootLayout() {
  

  return ( 
  <ThemedView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        
      </Stack>
      <StatusBar style="auto" />
    </ThemedView>
  );
}
