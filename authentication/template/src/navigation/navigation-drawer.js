import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@pxblue/react-native-components';
import React, { useState, useCallback } from 'react';
import * as Colors from '@pxblue/colors';

export const navGroupItems = [
    {
        title: 'Home Page',
        itemID: 'Home',
        icon: { name: 'home' },
    },
    {
        title: 'Page One',
        itemID: 'PageOne',
        icon: { name: 'looks-one' },
    },
    {
        title: 'Page Two',
        itemID: 'PageTwo',
        icon: { name: 'looks-two' },
    },
];

export const NavigationDrawer = ({ navigation }) => {
    const [selected, setSelected] = useState('Home');
    const selectItem = useCallback(
        (id) => {
            navigation.navigate(id);
            setSelected(id);
        },
        [navigation]
    );

    return (
        <Drawer activeItem={selected} onItemSelect={(id) => selectItem(id)}>
            <DrawerHeader
                title={'PX Blue'}
                subtitle={'React Native Project'}
                fontColor={Colors.white[50]}
                icon={{ name: 'menu' }}
                onIconPress={() => {
                    navigation.closeDrawer();
                }}
            />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} hidePadding={false} />
            </DrawerBody>
        </Drawer>
    );
};
