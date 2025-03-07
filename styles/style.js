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
        fontSize: 24,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Baloo2_400Regular',
    },
    levels: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100vh',
    },
    h1: {
        fontWeight: 600,
        fontSize: 22,
        marginBottom: 30,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 400,
    },
    info: {
        display: 'flex',
        padding: 25,
        justifyContent: 'flex-start',
    }
});

export default styles;