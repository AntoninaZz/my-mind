import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    img: {
        width: 248,
        height: 248,
        resizeMode: 'contain',
    },
    button: {
        width: 160,
        height: 40,
        borderRadius: 50,
        paddingHorizontal: 8,
        backgroundColor: "#6EBCF7",
    },
    btnLabel: {
        color: 'white',
        fontWeight: 400,
        fontSize: 24,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Baloo2_400Regular',
    }
});

export default styles;