import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { gStyle } from '../styles/style';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function First({ navigation }) {
    const [value, setValue] = useState(0);
    const { getItem, setItem } = useAsyncStorage('@storage_key');

    const readItemFromStorage = async () => {
        const jsonValue = await getItem();
        // if (jsonValue === null) { TODO: обработать первую загрузку, когда нет стораджа
        //     return DATA;
        // } else {
        const resp = JSON.parse(jsonValue); //TODO: обработать ошибки
        let numCompletedItems = resp[0]['data'].filter(
            (item) => item.checked === true //TODO: сделать деструктуризацию
        ).length; //TODO: вынести в отдельную функцию
        let numAllItems = resp[0]['data'].length;
        setValue(numCompletedItems);

        // }
    };

    useEffect(() => {
        //readItemFromStorage();
        // const clearAll = async () => {
        //     try {
        //         await AsyncStorage.clear();
        //     } catch (e) {
        //         // clear error
        //     }
        //     console.log('Done.');
        // };
        // clearAll();
    }, [value]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         readItemFromStorage();
    //         // Do something when the screen is focused
    //         return () => {
    //             // Do something when the screen is unfocused
    //             // Useful for cleanup functions
    //         };
    //     }, [])
    // );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Main');
                    }}
                >
                    <View style={[styles.item, { backgroundColor: '#d8629c' }]}>
                        <Text style={styles.text}>НА РОДЫ</Text>
                        <Text style={styles.textQuantity}>{value} / 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.item, { backgroundColor: '#529cd9' }]}>
                        <Text style={styles.text}>МАМЕ ПОСЛЕ РОДОВ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.item, { backgroundColor: '#a7bf56' }]}>
                        <Text style={styles.text}>ДЛЯ МАЛЫША</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.item, { backgroundColor: '#ebae44' }]}>
                        <Text style={styles.text}>НА ВЫПИСКУ</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    item: {
        borderRadius: 10,
        height: 100,
        margin: 10,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'bold',
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
    },
    textQuantity: {
        fontFamily: 'bold',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
    },
});
