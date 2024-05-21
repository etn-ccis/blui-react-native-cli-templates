import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
