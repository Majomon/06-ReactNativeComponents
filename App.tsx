import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';
import {Navigator} from './src/navigation/Navigator';

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
