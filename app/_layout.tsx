import { Stack } from "expo-router";
import { Alert } from "react-native";
import AppLoading from 'expo-app-loading';
import { LevelContextProvider } from '@/app-context/level-context-provider';
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styles from '@/styles/style';

export default function RootLayout() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
  });

  async function getCurrentLocation() {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  async function getCountry(latitude, longitude) {
    await fetch(`http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=aazdebska`)
      .then((response) => response.json())
      .then((json) => setCountry(json.countryName))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCurrentLocation();
    getCountry(location?.coords.latitude, location?.coords.longitude);
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (errorMsg) {
      Alert.alert(errorMsg);
    } else if (country == "Ukraine") {
      return (
        <LevelContextProvider>
          <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="level" options={{ title: 'Level' }} />
          </Stack>
        </LevelContextProvider>
      );
    } else {
      return (
        <WebView
          style={styles.container}
          source={{ uri: 'https://uk.wikipedia.org/wiki/' }}
        />
      );
    }
  }
}
