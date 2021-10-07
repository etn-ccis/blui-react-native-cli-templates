import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { EmptyState, Header } from '@pxblue/react-native-components';
const Event = {name: 'event', direction: 'rtl'};
const MenuIcon = {name: 'menu', direction: 'ltr'};

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

const PageOne = ({ navigation }) => {
    const defaultStyles = styles();

    return (
        <>
            <Header
                title={'Page One'}
                icon={MenuIcon}
                onIconPress={() => {
                    navigation.openDrawer();
                }}
            />
            <SafeAreaView style={defaultStyles.content}>
                <ScrollView contentContainerStyle={defaultStyles.scrollViewContent}>
                    <EmptyState
                        icon={Event}
                        title={'Coming Soon'}
                        description={'Replace this page with your own content'}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default PageOne;
