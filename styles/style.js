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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-evenly',
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
    },
    headerIcon: {
        width: 62,
        height: 39.18,
        resizeMode: 'contain',
    },
    infoIcon: {
        widht: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: -25,
    },
    backIcon: {
        marginRight: 0,
        marginLeft: -25,
    },
    image: {
        resizeMode: 'contain',
    },
    tile: {
        width: 130,
        height: 130,
        margin: 10,
    },
    tileBig: {
        width: 150,
        height: 150,
        margin: 7.5,
    },
    tileMedium: {
        width: 120,
        height: 120,
        margin: 7.5,
    },
    tileSmall: {
        width: 102.67,
        height: 102.67,
        margin: 5,
    },
    tileIn: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    transparent: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(53, 53, 53, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 55,
    },
    popup: {
        borderColor: 'white',
        borderRadius: 21.07,
        borderWidth: 3.51,
        overflow: 'hidden',
    },
    banner: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 55,
        paddingHorizontal: 60,
    },
    popupHeader: {
        borderRadius: 14.04,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    bannerText: {
        fontSize: 24,
    },
    bannerIcon: {
        height: 40,
        width: 40,
        margin: 10,
        marginLeft: -20,
    },
    buttonsContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
    },
    score: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 71,
    },
    scoreText: {
        fontSize: 18,
    }
});

export default styles;