import { Pressable, Animated, useAnimatedValue } from 'react-native';
import styles from '../styles/style';

const GameTile = ({ src, grid }) => {
    const size = grid < 4 ? styles.tileBig : grid < 6 ? styles.tileMedium : styles.tileSmall;
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
            <Animated.Image source={require('@/assets/images/tile.png')} style={[styles.image, size, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], }]} />
            <Animated.Image source={src} style={[styles.image, size, styles.tileIn, { transform: [{ scaleX: rotateAnim }, { perspective: 1000 },], zIndex: zIndexAnim, }]} />
        </Pressable>
    );
}

export default GameTile;