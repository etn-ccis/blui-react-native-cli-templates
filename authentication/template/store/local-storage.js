import { LOCAL_USER_DATA, REMEMBER_ME_DATA } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

// For cross compatibility pretend AsyncStorage is just window local storage
const window = {
    localStorage: {
        getItem: (key) => AsyncStorage.getItem(key),
        setItem: (key, value) => AsyncStorage.setItem(key, value),
        removeItem: (key) => AsyncStorage.removeItem(key),
    },
};

async function readAuthData() {
    const jsonUserData = (await window.localStorage.getItem(LOCAL_USER_DATA)) || '{}';
    const userData = JSON.parse(jsonUserData);
    const jsonRememberMeData = (await window.localStorage.getItem(REMEMBER_ME_DATA)) || '{}';
    const rememberMeData = JSON.parse(jsonRememberMeData);

    return {
        userId: userData.userId,
        email: userData.user,
        rememberMeData: rememberMeData,
    };
}

function saveAuthCredentials(user, userId) {
    const userData = {
        user: user,
        userId: userId,
    };
    void window.localStorage.setItem(LOCAL_USER_DATA, JSON.stringify(userData));
}
function saveRememberMeData(user, rememberMe) {
    const RememberMeData = {
        user: rememberMe ? user : '',
        rememberMe: rememberMe,
    };
    void window.localStorage.setItem(REMEMBER_ME_DATA, JSON.stringify(RememberMeData));
}
function clearAuthCredentials() {
    void window.localStorage.removeItem(LOCAL_USER_DATA);
}
function clearRememberMeData() {
    void window.localStorage.removeItem(REMEMBER_ME_DATA);
}
export const LocalStorage = {
    readAuthData,
    saveAuthCredentials,
    saveRememberMeData,
    clearAuthCredentials,
    clearRememberMeData,
};
