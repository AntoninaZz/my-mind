import { Pressable, Animated, useAnimatedValue, } from 'react-native';
import React, { useEffect, useContext } from 'react';
import styles from '../styles/style';
import '@/global';
import { LevelContext } from '@/app-context/level-context';

const GameTile = ({ src, grid }) => {
    const size = grid < 8 ? styles.tileBig : grid < 12 ? styles.tileMedium : styles.tileSmall;
    const rotateAnim = useAnimatedValue(1); //scaleX
    const zIndexAnim = useAnimatedValue(-1); //zIndex
    const { gameResult, updateState } = useContext(LevelContext);

    useEffect(() => {
        previousTile = undefined;
        counter = 0;
        win = undefined;
        lose = undefined;
        Animated.sequence([
            Animated.timing(rotateAnim, {
                toValue: 0,
                duration: 250,
                delay: 500,
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
            },),
            Animated.timing(rotateAnim, {
                toValue: 0,
                duration: 250,
                delay: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(zIndexAnim, {
                toValue: -1,
                duration: 0,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            },)
        ]).start();
    }, [rotateAnim, zIndexAnim]);

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

    function handlePress(src) {
        toggleAnimation();
        counter++;
        switch (previousTile) {
            case undefined:
                previousTile = src;
                break;
            case src:
                previousTile = undefined;
                if(counter == grid) {
                    updateState({win: true});
                }
                break;
            default:
                updateState({lose: true});
                break;
        }
    }

    return (
        <Pressable onPress={() => handlePress(src)}>
            <Animated.Image source={require('@/assets/images/tile.png')} style={[styles.image, size, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], }]} />
            <Animated.Image source={src} style={[styles.image, size, styles.tileIn, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], zIndex: zIndexAnim, }]} />
        </Pressable>
    );
}

export default GameTile;