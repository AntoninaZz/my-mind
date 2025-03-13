import { Stack } from "expo-router";
import { Alert, SafeAreaView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';
import { LevelContextProvider } from '@/app-context/level-context-provider';
import styles from '@/styles/style';

import { LogLevel, OneSignal } from 'react-native-onesignal';
import Constants from "expo-constants";

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

// Also need enable notifications to complete OneSignal setup
OneSignal.Notifications.requestPermission(true);

import appsFlyer from 'react-native-appsflyer';

appsFlyer.initSdk(
  {
    devKey: 'K2***********99', //add your key to work
    isDebug: true,
    appId: '41*****44',
    onInstallConversionDataListener: true, //Optional
    onDeepLinkListener: true, //Optional
    timeToWaitForATTUserAuthorization: 10 //for iOS 14.5
  },
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
);

import app from '@/scripts/firebaseConfig';

export default function RootLayout() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  let [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
  });

  async function getCountry() {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    await Location.getCurrentPositionAsync({}).then((res) => {
      return fetch(`http://api.geonames.org/countryCodeJSON?lat=${res.coords.latitude}&lng=${res.coords.longitude}&username=aazdebska`);
    })
      .then((response) => response.json())
      .then((json) => setCountry(json.countryName))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getCountry();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          style={styles.container}
          colors={['#43BCF0', '#541896', "#711280"]}
          start={{ x: 1.8, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.1, 0.56, 0.8]}>
          <Image source={require('../assets/images/icon.png')} style={styles.img} />
        </LinearGradient>
      </SafeAreaView>
    );
  } else {
    if (errorMsg) {
      Alert.alert(errorMsg);
    } else if (country == "Ukraine") {
      return (
        <LevelContextProvider>
          <Stack>
            <Stack.Screen name="index" options={{ title: '' }} />
            <Stack.Screen name="levels" options={{ title: '' }} />
            <Stack.Screen name="info" options={{ title: '' }} />
            <Stack.Screen name="[level]" options={{ title: '' }} />
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
