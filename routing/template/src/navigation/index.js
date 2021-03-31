import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavigationDrawer } from './navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import PageOne from '../screens/pageOne';
import PageTwo from '../screens/pageTwo';

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const CustomDrawerContent = (props) => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = () => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: 'transparent', width: '80%' }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="PageOne" component={PageOne} />
            <RootStack.Screen name="PageTwo" component={PageTwo} />
        </Drawer.Navigator>
    </NavigationContainer>
);
