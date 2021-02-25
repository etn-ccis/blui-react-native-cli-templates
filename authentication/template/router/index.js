import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavigationDrawer } from './navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import PageOne from '../pages/pageOne';
import PageTwo from '../pages/pageTwo';

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const CustomDrawerContent = (props) => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: 'transparent', width: '80%' }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="PageOne" component={PageOne} />
        <RootStack.Screen name="PageTwo" component={PageTwo} />
    </Drawer.Navigator>
);
