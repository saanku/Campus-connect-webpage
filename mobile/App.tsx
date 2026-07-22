import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { store } from './src/store';
import { useAppSelector } from './src/store/hooks';
import { darkTheme, lightTheme } from './src/theme/theme';

function AppShell() {
  const darkMode = useAppSelector(state => state.preferences.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <AppShell />
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
