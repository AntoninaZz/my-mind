import { SafeAreaView, ImageBackground, TouchableOpacity, Image, Text, Animated, useAnimatedValue } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import styles from '../styles/style';

import GameTile from '@/components/gameTite';
import { GAME1_IMAGES } from "@/constants/images";
import { makeGame } from '@/makeGame'

const Game = () => {
    const router = useRouter();
    const rotateAnim = useAnimatedValue(1); //scaleX
    const zIndexAnim = useAnimatedValue(-1); //zIndex
    const toggleAnimation = () => {
        Animated.sequence([
            Animated.timing(rotateAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(zIndexAnim, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Baloo2_400Regular', },
                headerShadowVisible: false,
                headerTitle: () => (
                    <TouchableOpacity onPressOut={() => router.replace({ pathname: `/` })}>
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
                    <TouchableOpacity onPressOut={() => router.replace({ pathname: `/level` })}>
                        <Image source={require('../assets/images/back.png')} style={[styles.infoIcon, styles.backIcon]} />
                    </TouchableOpacity>
                ),
                headerBackVisible: false,
                headerBackTitle: '',
            }} />
            <ImageBackground source={require('@/assets/images/bg1.png')} resizeMode="cover" style={[styles.container, styles.levels]} >
                {makeGame(GAME1_IMAGES).map((img, i) => (<GameTile src={img} key={i} />))}
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Game;