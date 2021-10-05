import React, { useState } from 'react';
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

export default function First({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Main');
                    }}
                >
                    <View style={styles.itemFirst}>
                        <Text style={styles.text}>НА РОДЫ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemSecond}>
                        <Text style={styles.text}>МАМЕ ПОСЛЕ РОДОВ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemThird}>
                        <Text style={styles.text}>ДЛЯ МАЛЫША</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemFour}>
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
    itemFirst: {
        borderRadius: 10,
        backgroundColor: '#d8629c',
        height: 100,
        margin: 10,
        justifyContent: 'center',
    },
    itemSecond: {
        borderRadius: 10,
        backgroundColor: '#529cd9',
        height: 100,
        margin: 10,
        justifyContent: 'center',
    },
    itemThird: {
        borderRadius: 10,
        backgroundColor: '#a7bf56',
        height: 100,
        margin: 10,
        justifyContent: 'center',
    },
    itemFour: {
        borderRadius: 10,
        backgroundColor: '#ebae44',
        height: 100,
        margin: 10,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
});
