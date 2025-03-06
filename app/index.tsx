import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#43BCF0', '#541896', "#711280"]}
      start={{ x: 1.2, y: 0.8 }}
      end={{ x: 1, y: 1 }}

    >
      <Text>Home screen</Text>
      <Link href="/level">
        Go to About screen
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // background: linear-gradient(191.46deg, #43BCF0 -32.01%, #541896 55.91%, #711280 116.41%);

  },
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});