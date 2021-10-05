import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {
    const [items, setItems] = useState([
        { name: 'Name', anons: 'Anons', full: 'Full', key: '1' },
    ]);

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Главная страница</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Products', item);
                        }}
                    >
                        <Text>{item.name}</Text>
                        <Text>{item.anons}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
