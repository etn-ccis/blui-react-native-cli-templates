import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
import { MainRouter } from './router';
import { ProjectAuthUIActions } from './actions/AuthUIActions';
import { ProjectRegistrationUIActions } from './actions/RegistrationUIActions';
import {
    SecurityContextProvider,
    AuthNavigationContainer,
    AuthUIContextProvider,
    useSecurityActions,
} from '@pxblue/react-native-auth-workflow';
import { useLinking } from '@react-navigation/native';
import { authLinkMapping, resolveInitialState } from './router/DeepLinking';

export const AuthUIConfiguration = (props) => {
    const securityContextActions = useSecurityActions();
    return (
        <AuthUIContextProvider
            authActions={ProjectAuthUIActions(securityContextActions)}
            registrationActions={ProjectRegistrationUIActions}
            showSelfRegistration={true}
            allowDebugMode={true}
            contactEmail={'something@email.com'}
            contactPhone={'1-800-123-4567'}
            contactPhoneLink={'1-800-123-4567'}
            // projectImage={require('./src/assets/images/some_image.png')}
        >
            {props.children}
        </AuthUIContextProvider>
    );
};

export const App = () => {
    const ref = React.useRef(null);
    const { getInitialState } = useLinking(ref, authLinkMapping);
    const [initialState, setInitialState] = React.useState();
    React.useEffect(() => {
        resolveInitialState(getInitialState, setInitialState);
    }, [getInitialState]);

    return (
        <ThemeProvider theme={PXBThemes.blue}>
            <SecurityContextProvider>
                <AuthUIConfiguration>
                    <AuthNavigationContainer initialState={initialState} ref={ref}>
                        <MainRouter />
                    </AuthNavigationContainer>
                </AuthUIConfiguration>
            </SecurityContextProvider>
        </ThemeProvider>
    );
};

export default App;
