# Blank Template (TypeScript)

![npm (scoped)](https://img.shields.io/npm/v/@brightlayer-ui/react-native-template-blank-typescript?color=%23007bc1&label=%40brightlayer-ui%2Freact-native-template-blank-typescript)

This is an official Brightlayer UI template used internally by the [Brightlayer UI CLI](https://www.npmjs.com/package/@brightlayer-ui/cli).

This template installs the basic Brightlayer UI libraries for themes and components and configures the application to use them. It includes a simple placeholder screen that you can replace with your own application content.

## Usage
This template can be used with the Brightlayer UI CLI:
```sh
npx -p @brightlayer-ui/cli blui new react-native --name=myapp --cli=rnc --language=ts --template=blank
```

## Project Structure
Projects created using this template will start out with the following file structure:

```
|── /ios                                   // ios project folder
|── /android                               // android project folder
|── /assets                                // fonts and images used by the application
└── App.tsx                                // sample landing page
```