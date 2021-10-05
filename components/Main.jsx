import React from 'react';
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

const DATA = [
    {
        title: 'Для мамы',
        data: [
            { title: 'Шорты', description: 'Крутые шорты' },
            { title: 'Прокладки', description: 'Хорошие прокладки' },
        ],
    },
    {
        title: 'Для малыша',
        data: [
            { title: 'Подгузники', description: 'Крутые подгузники' },
            {
                title: 'Одноразовые пеленки 60*90',
                description: 'Хорошие пеленки',
            },
            {
                title: 'Пеленка хлопковая или муслиновая (замена полотенцу)',
                description: 'Хорошие пеленки',
            },
        ],
    },
    {
        title: 'Маме после родов',
        data: [
            {
                title: 'Прокладки послеродовые',
                description: 'Крутые прокладки',
            },
            {
                title: 'Бумага туалетная',
                description: 'Хорошая бумага',
            },
            {
                title: 'Махровое полотенце для душа',
                description: 'Хорошее полотенце',
            },
        ],
    },
    // {
    //     title: 'Sides',
    //     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    // },
    // {
    //     title: 'Drinks',
    //     data: ['Water', 'Coke', 'Beer'],
    // },
    // {
    //     title: 'Desserts',
    //     data: ['Cheese Cake', 'Ice Cream'],
    // },
];

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

const Main = ({ navigation }) => (
    <SafeAreaView>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <BouncyCheckbox
                        text={item.title}
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
                            console.log(item);
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

export default Main;
