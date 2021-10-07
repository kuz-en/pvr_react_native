import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
//forChildbirth

const DATA = [
    {
        title: 'Для мамы',
        key: 'A',

        data: [
            {
                title: 'Шорты',
                description: 'Крутые шорты',
                checked: false,
                key: '1',
            },
            {
                title: 'Прокладки',
                description: 'Хорошие прокладки',
                checked: false,
                key: '2',
            },
        ],
    },
    {
        title: 'Для малыша',
        key: 'B',
        data: [
            {
                title: 'Подгузники',
                description: 'Крутые подгузники',
                checked: false,
                key: '3',
            },
            {
                title: 'Одноразовые пеленки 60*90',
                description: 'Хорошие пеленки',
                checked: false,
                key: '4',
            },
            {
                title: 'Пеленка хлопковая или муслиновая (замена полотенцу)',
                description: 'Хорошие пеленки',
                checked: false,
                key: '5',
            },
        ],
    },
    {
        title: 'Маме после родов',
        key: 'C',
        data: [
            {
                title: 'Прокладки послеродовые',
                description: 'Крутые прокладки',
                checked: false,
                key: '6',
            },
            {
                title: 'Бумага туалетная',
                description: 'Хорошая бумага',
                checked: false,
                key: '7',
            },
            {
                title: 'Махровое полотенце для душа',
                description: 'Хорошее полотенце',
                checked: false,
                key: '8',
            },
        ],
    },
];

export default function Main({ navigation }) {
    const [value, setValue] = useState(DATA);
    const { getItem, setItem, removeItem } = useAsyncStorage('@storage_key');

    const readItemFromStorage = async () => {
        const jsonValue = await getItem();
        if (jsonValue === null) {
            return DATA;
        } else {
            const item = JSON.parse(jsonValue); //TODO: обработать ошибки
            setValue(item);
            console.log(item);
            return item;
        }
    };

    const writeItemToStorage = async (newValue) => {
        //newValue.checked = !newValue.checked;
        const jsonValue = JSON.stringify(newValue); //TODO: обработать ошибки
        await setItem(jsonValue);
        setValue(newValue);
    };

    useEffect(() => {
        readItemFromStorage();
        //        removeItem('@storage_key');
    }, []);

    return (
        <SafeAreaView>
            <SectionList
                sections={value}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <BouncyCheckbox
                            isChecked={item.checked}
                            text={item.title}
                            onPress={() => {
                                item.checked = !item.checked;
                                writeItemToStorage(value);
                            }}
                            textStyle={{
                                fontSize: 20,
                                color: 'black',
                                maxWidth: 240, // под мой айфон, поработать со стилями еще
                            }}
                        />

                        <Octicons
                            name='info'
                            size={24}
                            color='silver'
                            onPress={() => {
                                navigation.navigate('Products', item);
                            }}
                        />
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {},
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
    },
    title: {
        fontSize: 24,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
});
