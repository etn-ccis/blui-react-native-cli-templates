# Authentication Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-template-authentication-typescript?color=%23007bc1&label=%40brightlayer-ui%2Freact-native-template-authentication-typescript)


This template installs and configures the Brightlayer UI [react-native-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-native-auth-workflow) package to automatically wrap your main application with functions and screens for Login, Registration, Change Password, etc. This uses the same configurations as the sample project for that package — you will need to replace the API integrations with implementations specific to your API. This template also includes the installation and initial setup of routing using [React Navigation](https://reactnavigation.org/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) navigator from the Brightlayer UI [React Native Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-native-components).

## Usage
To create a new project using the Authenication Template simply run :
```sh
npx react-native init MyApp --template @brightlayer-ui/react-native-template-authentication-typescript
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                              // ios project folder
|── /android                          // android project folder
|── App.tsx                           // app entry point
|── src
|   |── actions                          
|   |   |── AuthUIActions.tsx             // handles the implementation of the authentication related actions (such as login and forgot password)
|   |   └── RegistrationUIActions.tsx     // handles the implementation of the registration related actions (such as loading the EULA and registration by invitation)
|   |── assets                           // fonts and images used by the application
|   |── constants                          
|   |   |── index.ts                      // application constants
|   |   └── sampleEula.ts                 // sample Eula
|   |── contexts
|   |   |── AppContextProvider.tsx          // handles context for Auth
|   |   └── ThemeContext.ts                 // handles context for theme
|   |── screens                            // sample application pages
|   |── navigation                             
|   |   |── index.tsx                     // sets up routing
|   |   └── navigation-drawer.tsx         // sets up Drawer
|   └── store                             
|       └── local-storage.ts              // mock implementation for storing/retrieving user authentication session data
└──/translations
    |── /dictionary                     // translation dictionary for i18next       
    |── i18n.ts                         // configuration for i18next
```