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
        headerTitle: '',
        headerBackground: () => (
          <LinearGradient
            style={styles.container}
            colors={['#43BCF0', "#711280"]}
            start={{ x: 1, y: 0.8 }}
            end={{ x: 1, y: 1 }} />
        ),
        headerRight: () => (
          <TouchableOpacity style={styles.info} onPress={() => router.push({ pathname: `/info` })}>
            <Image source={require('../assets/images/info.png')} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={styles.header} onPress={() => router.replace({ pathname: `/` })}>
            <Image source={require('../assets/images/favicon.png')} style={styles.headerImg} />
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
      {/* <LinearGradient
        style={[styles.container, styles.levels]}
        colors={['#43BCF0', '#541896', "#711280"]}
        start={{ x: 1.2, y: 0.8 }}
        end={{ x: 1, y: 1 }} >

      </LinearGradient> */}
    </SafeAreaView>
  );
}
