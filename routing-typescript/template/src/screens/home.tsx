/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React, { useCallback } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Linking,
    TextStyle,
    ViewStyle,
    View,
    Animated,
    Easing,
    Image,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Divider, Text, Provider as ThemeProvider } from 'react-native-paper';
import { ExtendedTheme, useExtendedTheme, blue } from '@brightlayer-ui/react-native-themes';
import { Header } from '@brightlayer-ui/react-native-components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

const styles = (
    theme: ExtendedTheme
): StyleSheet.NamedStyles<{
    content: ViewStyle;
    pxbLogoWrapper: ViewStyle;
    pxbLogo: ViewStyle;
    title: TextStyle;
    subtitle: TextStyle;
    bold: TextStyle;
    divider: ViewStyle;
    openURLButtonText: TextStyle;
}> =>
    StyleSheet.create({
        content: {
            flex: 1,
        },
        pxbLogoWrapper: {
            justifyContent: 'center',
            marginTop: 16,
        },
        pxbLogo: {
            alignSelf: 'center',
            height: 100,
            width: 100,
        },
        title: {
            textAlign: 'center',
            marginBottom: 16,
        },
        subtitle: {
            textAlign: 'center',
        },
        bold: {
            fontWeight: 'bold',
        },
        divider: {
            marginVertical: 24,
        },
        openURLButtonText: {
            color: theme.colors.primary,
            padding: 8,
        },
    });

const OpenURLButton = (props: any): JSX.Element => {
    const { url, title } = props;
    const theme = useExtendedTheme();
    const defaultStyles = styles(theme);

    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <Button
            onPress={(): Promise<void> => handlePress()}
            labelStyle={defaultStyles.openURLButtonText}
            uppercase={false}
        >
            {title}
        </Button>
    );
};

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<AppProps> = ({ navigation }): JSX.Element => {
    const theme = useExtendedTheme();
    const defaultStyles = styles(theme);
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <ThemeProvider theme={blue}>
            <SafeAreaProvider>
                <Header
                    title={'Home Page'}
                    icon={{ name: 'menu' }}
                    onIconPress={(): void => {
                        navigation.openDrawer();
                    }}
                />
                <SafeAreaView style={defaultStyles.content}>
                    <ScrollView>
                        <View style={defaultStyles.pxbLogoWrapper}>
                            <Animated.View style={[defaultStyles.pxbLogo, { transform: [{ rotate: spin }] }]}>
                                <Image source={require('../../assets/images/Logo.png')} />
                            </Animated.View>
                        </View>
                        <Text variant={'headlineLarge'} style={defaultStyles.title}>
                            Welcome to Brightlayer{' '}
                            <Text variant={'headlineLarge'} style={{ fontSize: 34, color: theme.colors.primary }}>
                                UI
                            </Text>
                            .
                        </Text>
                        <Text variant={'bodyLarge'} style={defaultStyles.subtitle}>
                            Edit{' '}
                            <Text variant={'bodyLarge'} style={defaultStyles.bold}>
                                ./src/screen/home.tsx
                            </Text>{' '}
                            and save to reload.
                        </Text>
                        <Divider style={defaultStyles.divider} />
                        <OpenURLButton
                            title={'Brightlayer UI Documentation'}
                            url={'https://brightlayer-ui.github.io/'}
                        />
                        <OpenURLButton
                            title={'React Native Getting Started Guide'}
                            url={'https://brightlayer-ui.github.io/development/frameworks-mobile/react-native'}
                        />
                        <OpenURLButton
                            title={'Design Pattern Descriptions'}
                            url={'https://brightlayer-ui.github.io/patterns'}
                        />
                        <OpenURLButton
                            title={'React Native Component Library'}
                            url={'https://brightlayer-ui-components.github.io/react-native/'}
                        />
                        <OpenURLButton title={'Visit Us on GitHub'} url={'https://github.com/etn-ccis?q=blui'} />
                        <OpenURLButton
                            title={'Design Pattern Source on GitHub'}
                            url={'https://github.com/etn-ccis/blui-react-native-design-patterns'}
                        />
                        <OpenURLButton title={'Release Roadmap'} url={'https://brightlayer-ui.github.io/roadmap'} />
                        <OpenURLButton
                            title={'Send Feedback or Suggestions'}
                            url={'https://brightlayer-ui.github.io/community/contactus'}
                        />
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default Home;
