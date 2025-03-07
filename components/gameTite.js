import { Pressable, Animated, useAnimatedValue } from 'react-native';
import styles from '../styles/style';

const GameTile = ({src}) => {
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
        <Pressable onPress={toggleAnimation}>
            <Animated.Image source={require('@/assets/images/tile.png')} style={[styles.image, styles.tileBig, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], }]} />
            <Animated.Image source={src} style={[styles.image, styles.tileBig, styles.tileIn, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], zIndex: zIndexAnim, }]} />
        </Pressable>
    );
}

export default GameTile;