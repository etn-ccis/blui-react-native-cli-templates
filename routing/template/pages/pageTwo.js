import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { EmptyState, Header, wrapIcon } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
const Event = wrapIcon({ IconClass: MatIcon, name: 'event', flip: false });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: false });

const styles = () =>
    StyleSheet.create({
        content: {
            flex: 1,
        },
        scrollViewContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

const PageTwo = ({ navigation }) => {
    const defaultStyles = styles();

    return (
        <>
            <Header
                title={'Page Two'}
                navigation={{
                    icon: MenuIcon,
                    onPress: () => {
                        navigation.openDrawer();
                    },
                }}
            />
            <SafeAreaView style={defaultStyles.content}>
                <ScrollView contentContainerStyle={defaultStyles.scrollViewContent}>
                    <EmptyState
                        IconClass={Event}
                        title={'Coming Soon'}
                        description={'Replace this page with your own content'}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default PageTwo;
