import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { EmptyState, Header, wrapIcon } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
const Event = wrapIcon({ IconClass: MatIcon, name: 'event', flip: false });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: false });

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
    navigation: StackNavigationProp<RootStackParamList, 'PageOne'>;
};

const PageOne: React.FC<AppProps> = ({ navigation }): JSX.Element => {
    const defaultStyles = styles();

    return (
        <>
            <Header
                title={'Page One'}
                navigation={{
                    icon: MenuIcon,
                    onPress: (): void => {
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

export default PageOne;
