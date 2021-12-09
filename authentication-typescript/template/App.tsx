/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
import { MainRouter } from './src/navigation';
import { ProjectAuthUIActions } from './src/actions/AuthUIActions';
import { ProjectRegistrationUIActions } from './src/actions/RegistrationUIActions';
import {
    SecurityContextProvider,
    AuthNavigationContainer,
    AuthUIContextProvider,
    useSecurityActions,
} from '@brightlayer-ui/react-native-auth-workflow';
import { useLinking } from '@react-navigation/native';
import { authLinkMapping, resolveInitialState } from './src/navigation/DeepLinking';

export const AuthUIConfiguration: React.FC = (props) => {
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

export const App = (): JSX.Element => {
    const ref = React.useRef(null);
    const { getInitialState } = useLinking(ref, authLinkMapping);
    const [initialState, setInitialState] = React.useState();
    React.useEffect(() => {
        resolveInitialState(getInitialState, setInitialState);
    }, [getInitialState]);

    return (
        <ThemeProvider theme={BLUIThemes.blue}>
            <SafeAreaProvider>
                <SecurityContextProvider>
                    <AuthUIConfiguration>
                        <AuthNavigationContainer initialState={initialState} ref={ref}>
                            <MainRouter />
                        </AuthNavigationContainer>
                    </AuthUIConfiguration>
                </SecurityContextProvider>
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default App;
