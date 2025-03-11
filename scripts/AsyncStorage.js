import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('level', value);
    } catch (e) {
        console.log('Saving error: ', e);
    }
};

export const getData = async () => {
    try {
        let value = await AsyncStorage.getItem('level');
        if (value == null) {
            storeData('0');
        }
        return parseInt(value);
    } catch (e) {
        console.log('Error reading value: ', e);
    }
};