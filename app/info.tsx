import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/style';

export default function InfoScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen options={{
                headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Baloo2_400Regular', },
                headerShadowVisible: false,
                headerTitle: () => (
                    <TouchableOpacity onPressOut={() => router.navigate({ pathname: `/` })}>
                        <Image source={require('../assets/images/headericon.png')} style={styles.headerIcon} />
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
                headerLeft: () => (
                    <TouchableOpacity onPressOut={() => router.back()}>
                        <Image source={require('../assets/images/back.png')} style={[styles.infoIcon, styles.backIcon]} />
                    </TouchableOpacity>
                ),
                headerBackVisible: false,
                headerBackTitle: '',
            }} />
            <LinearGradient
                style={[styles.container, styles.info]}
                colors={['#471280', "#43BCF0"]}
                start={{ x: 1.8, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.1, 0.8, 1]} >
                <Text style={[styles.text, styles.btnLabel, styles.h1]}>Rules</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit tincidunt praesent adipiscing in magna erat enim nec urna. Aliquet volutpat id arcu fames varius mus ultricies mollis. Adipiscing blandit cursus faucibus vel ullamcorper dignissim at...</Text>
            </LinearGradient>
        </SafeAreaView>
    );
}