# Routing Template (JavaScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-template-routing?color=%23007bc1&label=%40brightlayer-ui%2Freact-native-template-routing)

This is an official Brightlayer UI template used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template includes the installation and initial setup of routing using [React Navigation](https://reactnavigation.org/). It includes several placeholder routes/screens and a [Drawer](https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer) navigator from the Brightlayer UI [React Native Component Library](https://www.npmjs.com/package/@brightlayer-ui/react-native-components).

## Usage
This template can be used with the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react-native --name=myapp --cli=rnc --language=js --template=routing
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                              // ios project folder
|── /android                          // android project folder
|── /assets                           // fonts and images used by the application
|── App.js                            // app entry point
|── /pages                             // sample application pages
└── /router                             
    |── index.js                      // sets up routing
    └── navigation-drawer.js          // sets up Drawer
```