# Routing Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-template-routing-typescript?color=%23007bc1&label=%40brightlayer-ui%2Freact-native-template-routing-typescript)


This template includes the installation and initial setup of routing using [React Navigation](https://reactnavigation.org/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) navigator from the Brightlayer UI [React Native Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-native-components).

## Usage
To create a new project using the Routing Template simply run :
```sh
npx react-native init MyApp --template @brightlayer-ui/react-native-template-routing-typescript
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                              // ios project folder
|── /android                          // android project folder
|── /assets                           // fonts and images used by the application
|── App.tsx                           // app entry point
└── src
    |── /screens                            // sample application pages
    └── /Navigation                             
        |── index.tsx                     // sets up routing
        └── navigation-drawer.tsx         // sets up Drawer
```

## Clear Metro bundler cache (recommended)

Run the command into the root of the created project.
```sh
yarn start --reset-cache
```
