import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
import { MainRouter } from './src/navigation';

export const App = () => (
    <ThemeProvider theme={PXBThemes.blue}>
        <MainRouter />
    </ThemeProvider>
);

export default App;
