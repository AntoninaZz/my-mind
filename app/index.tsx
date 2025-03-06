import { Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter } from 'expo-router';
import styles from '../styles/style';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        style={styles.container}
        colors={['#43BCF0', '#541896', "#711280"]}
        start={{ x: 1.2, y: 0.8 }}
        end={{ x: 1, y: 1 }} >
        <Stack.Screen options={{ headerShown: false, }} />
        <Image source={require('../assets/images/icon.png')} style={styles.img} />
        <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: `/level` })}>
          <Text style={styles.btnLabel}>Start</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}