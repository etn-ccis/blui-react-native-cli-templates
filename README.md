[![Build](https://github.com/etn-ccis/blui-react-native-cli-templates/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-react-native-cli-templates/actions/workflows/blui-ci.yml)

# React Native CLI Templates

These are project templates that are used by the React Native CLi when starting a new Brightlayer UI project. They are used behind the scenes by the React Native CLI.

## Available Templates

### Blank

The [Blank template](https://www.npmjs.com/package/@brightlayer-ui/react-native-template-blank-typescript) provides a bare-bones application with Brightlayer UI components and themes automatically configured and ready to use.

### Routing

The [Routing template](https://www.npmjs.com/package/@brightlayer-ui/react-native-template-routing-typescript) provides all of the essential Brightlayer UI configuration as well as additional configuration for using [React Navigation](https://reactnavigation.org/). It also adds a navigation Drawer to switch between several sample screens.

### Authentication

The [Authentication template](https://www.npmjs.com/package/@brightlayer-ui/react-native-template-authentication-typescript) includes everything from the Routing template and also installs and configures the Brightlayer UI [react-native-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-native-auth-workflow) package to automatically wrap the main application with functions and screens for Login, Registration, Change Password, etc.

|                | placeholder landing page | navigation drawer & routing | login & registration screens |
| -------------- | ------------------------ | --------------------------- | ---------------------------- |
| Blank          | ✅                       |                             |                              |
| Routing        | ✅                       | ✅                          |                              |
| Authentication | ✅                       | ✅                          | ✅                           |

## Screenshots

##### Blank Template

![Blank Template](./images/blank-typescript-ios.png)

##### Routing Template With Collapsed Drawer

![Routing Template](./images/routing-typescript-ios.png)

##### Routing Template With Expanded Drawer

![Routing Template](./images/routing-typescript-ios-expanded-drawer.png)

##### Authentication Template Login Page

![Authentication Template](./images/authentication-typescript-ios.png)

## Usage

To create a new project using the Template simply run (recommended):

```sh
npx react-native init MyApp --template @brightlayer-ui/react-native-template-blank-typescript
npx react-native init MyApp --template @brightlayer-ui/react-native-template-routing-typescript
npx react-native init MyApp --template @brightlayer-ui/react-native-template-authentication-typescript
```
