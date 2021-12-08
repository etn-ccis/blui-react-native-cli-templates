/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Linking, View, Animated, Easing } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Divider, Provider as ThemeProvider, useTheme } from 'react-native-paper';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
import { Body1, Header, H4 } from '@brightlayer-ui/react-native-components';
import Logo from './assets/images/Logo.svg';

const styles = (theme) =>
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
            color: theme.colors.text,
            padding: 8,
        },
    });

const OpenURLButton = (props) => {
    const { url, title } = props;
    const theme = useTheme();
    const defaultStyles = styles(theme);

    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <Button onPress={() => handlePress()} labelStyle={defaultStyles.openURLButtonText} uppercase={false}>
            {title}
        </Button>
    );
};

const App = () => {
    const theme = useTheme();
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
        <ThemeProvider theme={BLUIThemes.blue}>
            <SafeAreaProvider>
                <Header title={'Brightlayer UI React Native'} />
                <SafeAreaView style={defaultStyles.content}>
                    <ScrollView>
                        <View style={defaultStyles.pxbLogoWrapper}>
                            <Animated.View style={[defaultStyles.pxbLogo, { transform: [{ rotate: spin }] }]}>
                                <Logo height={100} width={100} fill={'#007bc1'} />
                            </Animated.View>
                        </View>
                        <H4 style={defaultStyles.title}>
                            Welcome to PX <H4 color={'primary'}>Blue</H4>.
                        </H4>
                        <Body1 style={defaultStyles.subtitle}>
                            Edit <Body1 style={defaultStyles.bold}>App.js</Body1> and save to reload.
                        </Body1>
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
                        <OpenURLButton title={'Visit Us on GitHub'} url={'https://github.com/brightlayer-ui'} />
                        <OpenURLButton
                            title={'Design Pattern Source on GitHub'}
                            url={'https://github.com/brightlayer-ui/react-native-design-patterns'}
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

export default App;
