import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { EmptyState, Header, UserMenu } from '@brightlayer-ui/react-native-components';
import { Avatar } from 'react-native-paper';
import { LocalStorage } from '../store/local-storage';
import { useSecurityActions } from '@brightlayer-ui/react-native-auth-workflow';
import * as Colors from '@brightlayer-ui/colors';

const Event = { name: 'event', direction: 'rtl' };
const MenuIcon = { name: 'menu', direction: 'ltr' };
const LockIcon = { name: 'lock', direction: 'ltr' };
const ExitToAppIcon = { name: 'exit-to-app', direction: 'ltr' };
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
    const securityHelper = useSecurityActions();

    const changePassword = () => {
        securityHelper.showChangePassword();
    };

    const logOut = () => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    const menuItems = [
        { title: 'Change Password', icon: LockIcon, onPress: () => changePassword() },
        { title: 'Log Out', icon: ExitToAppIcon, onPress: () => logOut() },
    ];

    return (
        <>
            <Header
                title={'Page One'}
                icon={MenuIcon}
                onIconPress={() => {
                    navigation.openDrawer();
                }}
                actionItems={[
                    {
                        component: (
                            <UserMenu
                                menuItems={menuItems}
                                avatar={
                                    <Avatar.Text
                                        label="UN"
                                        size={40}
                                        color={Colors.blue[500]}
                                        style={{ backgroundColor: Colors.blue[50] }}
                                    />
                                }
                            />
                        ),
                    },
                ]}
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
