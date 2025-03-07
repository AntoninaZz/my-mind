import { Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/style';

import { LEVEL_IMAGES } from '@/constants/images';

export default function LevelScreen() {
  const router = useRouter();

  let levels = ['/', '/', '/'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{
        headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Baloo2_400Regular', },
        headerShadowVisible: false,
        headerTitle: () => (
          <TouchableOpacity style={styles.header} onPressOut={() => router.replace({ pathname: `/` })}>
            <Image source={require('../assets/images/favicon.png')} />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
        headerBackground: () => (
          <LinearGradient
            style={styles.container}
            colors={['#43BCF0', "#711280"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }} />
        ),
        headerRight: () => (
          <TouchableOpacity onPressOut={() => router.push({ pathname: `/info` })}>
            <Image source={require('../assets/images/info.png')} />
          </TouchableOpacity>
        ),
        headerBackVisible: false,
        headerBackTitle: '',
      }} />
      <ImageBackground source={require('@/assets/images/bg.png')} resizeMode="cover" style={[styles.container, styles.levels]} >
        {LEVEL_IMAGES.map((level, i) => (
          <TouchableOpacity key={i} onPress={() => router.push({ pathname: '/' })}>
            <Image source={level} />
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </SafeAreaView>
  );
}
