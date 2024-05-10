import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { EmptyState, Header } from '@brightlayer-ui/react-native-components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

const styles = (): StyleSheet.NamedStyles<{
    content: ViewStyle;
    scrollViewContent: ViewStyle;
}> =>
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

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'PageTwo'>;
};

const PageTwo: React.FC<AppProps> = ({ navigation }): JSX.Element => {
    const defaultStyles = styles();

    return (
        <>
            <Header
                title={'Page Two'}
                icon={{ name: 'menu' }}
                onIconPress={(): void => {
                    navigation.openDrawer();
                }}
            />
            <SafeAreaView style={defaultStyles.content}>
                <ScrollView contentContainerStyle={defaultStyles.scrollViewContent}>
                    <EmptyState
                        icon={{ name: 'event' }}
                        title={'Coming Soon'}
                        description={'Replace this page with your own content'}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default PageTwo;
