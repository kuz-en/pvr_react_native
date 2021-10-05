import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gStyle } from '../styles/style';

export default function Products({ route }) {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{route.params.title}</Text>
            <Text style={gStyle.title}>{route.params.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
