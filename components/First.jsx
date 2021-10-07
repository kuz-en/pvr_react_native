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
                    <View style={[styles.item, { backgroundColor: '#d8629c' }]}>
                        <Text style={styles.text}>НА РОДЫ</Text>
                        <Text style={styles.textQuantity}>10 / 32</Text>
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
