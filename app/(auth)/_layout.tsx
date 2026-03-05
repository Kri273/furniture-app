import { ThemedView } from "@/components/ThemedView";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Montserrat weights
    "Montserrat-Thin": require("@/assets/images/fonts/Montserrat/static/Montserrat-Thin.ttf"),
    "Montserrat-ExtraLight": require("@/assets/images/fonts/Montserrat/static/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("@/assets/images/fonts/Montserrat/static/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("@/assets/images/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("@/assets/images/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("@/assets/images/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("@/assets/images/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("@/assets/images/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
    "Montserrat-Black": require("@/assets/images/fonts/Montserrat/static/Montserrat-Black.ttf"),

    // DM Sans weights
    "DM-Sans-Thin": require("@/assets/images/fonts/DM_Sans/static/DMSans-Thin.ttf"),
    "DM-Sans-ExtraLight": require("@/assets/images/fonts/DM_Sans/static/DMSans-ExtraLight.ttf"),
    "DM-Sans-Light": require("@/assets/images/fonts/DM_Sans/static/DMSans-Light.ttf"),
    "DM-Sans-Regular": require("@/assets/images/fonts/DM_Sans/static/DMSans-Regular.ttf"),
    "DM-Sans-Medium": require("@/assets/images/fonts/DM_Sans/static/DMSans-Medium.ttf"),
    "DM-Sans-SemiBold": require("@/assets/images/fonts/DM_Sans/static/DMSans-SemiBold.ttf"),
    "DM-Sans-Bold": require("@/assets/images/fonts/DM_Sans/static/DMSans-Bold.ttf"),
    "DM-Sans-ExtraBold": require("@/assets/images/fonts/DM_Sans/static/DMSans-ExtraBold.ttf"),
    "DM-Sans-Black": require("@/assets/images/fonts/DM_Sans/static/DMSans-Black.ttf"),

    // Gelasio 
    "Gelasio-Medium": require("@/assets/images/fonts/Gelasio/static/Gelasio-Medium.ttf"),

    // Nunito Sans
    "Nunito-Sans": require("@/assets/images/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
    "Nunito-Sans-Italic": require("@/assets/images/fonts/Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf")

  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="signin" />
      </Stack>
      <StatusBar style="auto" />
    </ThemedView>
  );
}
