import { SafeAreaView, ImageBackground, TouchableOpacity, Image, Text, Animated, useAnimatedValue } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styles from '../styles/style';

import GameTile from '@/components/gameTite';
import { GAME_IMAGES } from "@/constants/images";
import { IMAGE_BACKGROUND } from "@/constants/images";
import { makeGame } from '@/makeGame';

const LevelScreen = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
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
            <ImageBackground source={IMAGE_BACKGROUND[params.level]} resizeMode="cover" style={[styles.container, styles.levels]} >
                {makeGame(GAME_IMAGES[params.level]).map((img, i) => (<GameTile src={img} key={i} grid={GAME_IMAGES[params.level].length} />))}
            </ImageBackground>
        </SafeAreaView>
    );
}

export default LevelScreen;