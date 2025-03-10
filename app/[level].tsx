import { SafeAreaView, ImageBackground, TouchableOpacity, Image, View, Text } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styles from '../styles/style';

import GameTile from '@/components/gameTite';
import { GAME_IMAGES } from "@/constants/images";
import { IMAGE_BACKGROUND } from "@/constants/images";
import { makeGame } from '@/makeGame';
import '@/global';

const LevelScreen = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Baloo2_400Regular', },
                headerShadowVisible: false,
                headerTitle: '',
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
            <ImageBackground source={IMAGE_BACKGROUND[params.level]} resizeMode="cover" style={[styles.container, styles.levels]} >
                {makeGame(GAME_IMAGES[params.level]).map((img, i) => (<GameTile src={img} key={i} grid={GAME_IMAGES[params.level].length * 2} />))}
                <View style={[styles.transparent, { display: win === true || lose === true ? 'flex' : 'none', }]}>
                    <View style={styles.popup}>
                        <LinearGradient
                            style={styles.banner}
                            colors={['#8864E8', "#2BD5E8"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }} >
                            <LinearGradient
                                style={styles.popupHeader}
                                colors={['#43BCF0', "#541896", "#711280"]}
                                start={{ x: 1.05, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0, 0.5, 0.9]} >
                                <Text style={[styles.text, styles.btnLabel, styles.bannerText]}>{win ? 'You won!' : 'You lost!'}</Text>
                            </LinearGradient>
                        </LinearGradient>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPressOut={() => router.navigate({ pathname: `/` })}>
                            <Image source={require('../assets/images/home.png')} style={[styles.infoIcon, styles.bannerIcon]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPressOut={() => router.back()}>
                            <Image source={win ? require('../assets/images/next.png') : require('../assets/images/back.png')} style={[styles.infoIcon, styles.bannerIcon]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default LevelScreen;