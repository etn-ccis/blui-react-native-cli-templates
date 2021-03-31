import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { EmptyState, Header, InfoListItemProps, UserMenu, wrapIcon } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { useSecurityActions } from '@pxblue/react-native-auth-workflow';
import { LocalStorage } from '../store/local-storage';
import { Avatar } from 'react-native-paper';
import * as Colors from '@pxblue/colors';

const Event = wrapIcon({ IconClass: MatIcon, name: 'event', flip: false });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: false });
const LockIcon = wrapIcon({ IconClass: MatIcon, name: 'lock', flip: false });
const ExitToAppIcon = wrapIcon({ IconClass: MatIcon, name: 'exit-to-app', flip: false });

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
    const securityHelper = useSecurityActions();

    const changePassword = () => {
        securityHelper.showChangePassword();
    };

    const logOut = () => {
        LocalStorage.clearAuthCredentials();
        securityHelper.onUserNotAuthenticated();
    };

    const menuItems: InfoListItemProps[] = [
        { title: 'Change Password', IconClass: LockIcon, onPress: () => changePassword() },
        { title: 'Log Out', IconClass: ExitToAppIcon, onPress: () => logOut() },
    ];

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
