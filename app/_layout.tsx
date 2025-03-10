import { Stack } from "expo-router";
import AppLoading from 'expo-app-loading';
import { LevelContextProvider } from '@/app-context/level-context-provider'
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (<LevelContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="level" options={{ title: 'Level' }} />
      </Stack></LevelContextProvider>
    );
  }
}
