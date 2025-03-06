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
    header: {
        width: '100vw',
    },
    headerImg: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    info: {
        padding: 25,
    },
    levels: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 25,
        alignContent: 'flex-start',
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
    }
});

export default styles;