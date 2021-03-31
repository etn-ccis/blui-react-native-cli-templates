import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Linking, View, Animated, Easing } from 'react-native';
import { Button, Divider, useTheme } from 'react-native-paper';
import { Body1, H4, Header, wrapIcon } from '@pxblue/react-native-components';
import Logo from '../assets/images/Logo.svg';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: false });

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

const Home = ({ navigation }) => {
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
        <>
            <Header
                title={'Home Page'}
                navigation={{
                    icon: MenuIcon,
                    onPress: () => {
                        navigation.openDrawer();
                    },
                }}
            />
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
                        Edit <Body1 style={defaultStyles.bold}>screens/home.js</Body1> and save to reload.
                    </Body1>
                    <Divider style={defaultStyles.divider} />
                    <OpenURLButton title={'PX Blue Documentation'} url={'https://pxblue.github.io/'} />
                    <OpenURLButton
                        title={'React Native Getting Started Guide'}
                        url={'https://pxblue.github.io/development/frameworks-mobile/react-native'}
                    />
                    <OpenURLButton title={'Design Pattern Descriptions'} url={'https://pxblue.github.io/patterns'} />
                    <OpenURLButton
                        title={'PX Blue React Native Component Library'}
                        url={'https://pxblue-components.github.io/react-native/'}
                    />
                    <OpenURLButton title={'Visit Us on GitHub'} url={'https://github.com/pxblue'} />
                    <OpenURLButton
                        title={'Design Pattern Source on GitHub'}
                        url={'https://github.com/pxblue/react-native-design-patterns'}
                    />
                    <OpenURLButton title={'Release Roadmap'} url={'https://pxblue.github.io/roadmap'} />
                    <OpenURLButton
                        title={'Send Feedback or Suggestions'}
                        url={'https://pxblue.github.io/community/contactus'}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Home;
