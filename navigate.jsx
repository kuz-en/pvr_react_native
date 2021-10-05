import React from 'react';
import Main from './components/Main';
import Products from './components/Products';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{
                        title: 'Главная!',
                    }}
                />
                <Stack.Screen
                    name='Products'
                    component={Products}
                    options={{ title: 'Описание...' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
