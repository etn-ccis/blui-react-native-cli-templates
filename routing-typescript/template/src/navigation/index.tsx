import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
// Your Three Pages (replace with your actual page components)
import Home from '../screens/home'; // Replace with your Home screen component path
import PageOne from '../screens/pageOne'; // Replace with your PageOne screen component path
import PageTwo from '../screens/pageTwo'; // Replace with your PageTwo screen component path
import { NavigationDrawer } from './navigation-drawer';

const Drawer = createDrawerNavigator();

// Type definitions for navigation parameters (optional)
export type RootStackParamList = {
    Home: undefined;
    PageOne: undefined;
    PageTwo: undefined;
};
const CustomDrawerContent = (props: any): any => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);
const MainRouter = (): ReactNode => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStyle: { backgroundColor: 'transparent' },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            useLegacyImplementation={false}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="PageOne" component={PageOne} />
            <Drawer.Screen name="PageTwo" component={PageTwo} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default MainRouter;
