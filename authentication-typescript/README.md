# Authentication Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-template-authentication-typescript?color=%23007bc1&label=%40brightlayer-ui%2Freact-native-template-authentication-typescript)

This is an official Brightlayer UI template used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template installs and configures the Brightlayer UI [react-native-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-native-auth-workflow) package to automatically wrap your main application with functions and screens for Login, Registration, Change Password, etc. This uses the same configurations as the sample project for that package — you will need to replace the API integrations with implementations specific to your API. This template also includes the installation and initial setup of routing using [React Navigation](https://reactnavigation.org/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) navigator from the Brightlayer UI [React Native Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-native-components).

## Usage
This template can be used with the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react-native --name=myapp --cli=rnc --language=ts --template=authentication
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                              // ios project folder
|── /android                          // android project folder
|── /actions                          
|   |── AuthUIActions.tsx             // handles the implementation of the authentication related actions (such as login and forgot password)
|   └── RegistrationUIActions.tsx     // handles the implementation of the registration related actions (such as loading the EULA and registration by invitation)
|── /assets                           // fonts and images used by the application
|── App.tsx                           // app entry point
|── /constants                          
|   |── index.ts                      // application constants
|   └── sampleEula.ts                 // sample Eula
|── /pages                            // sample application pages
|── /router                             
|   |── index.tsx                     // sets up routing
|   |── DeepLinking.ts                // sets up deep linking
|   └── navigation-drawer.tsx         // sets up Drawer
└── /store                             
    └── local-storage.ts              // mock implementation for storing/retrieving user authentication session data 
```