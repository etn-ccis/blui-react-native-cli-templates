# Routing Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/react-native-template-routing-typescript?color=%23007bc1&label=%40pxblue%2Freact-native-template-routing-typescript)

This is an official PX Blue template used internally by the [PX Blue CLI](https://www.npmjs.com/package/@pxblue/cli).

This template includes the installation and initial setup of routing using [React Navigation](https://reactnavigation.org/). It includes several placeholder routes/screens and a [Drawer](https://pxblue-components.github.io/react-native/?path=/info/components-documentation--drawer) navigator from the PX Blue [React Native Component Library](https://www.npmjs.com/package/@pxblue/react-native-components).

## Usage
This template can be used with the PX Blue CLI:
```sh
npx -p @pxblue/cli pxb new react-native --name=myapp --cli=rnc --language=ts --template=routing
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                              // ios project folder
|── /android                          // android project folder
|── /assets                           // fonts and images used by the application
|── App.tsx                           // app entry point
|── /pages                            // sample application pages
└── /router                             
    |── index.tsx                     // sets up routing
    └── navigation-drawer.tsx         // sets up Drawer
```