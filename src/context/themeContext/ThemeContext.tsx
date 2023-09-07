import React, {createContext, useReducer, useEffect} from 'react';
import {useColorScheme, AppState, Appearance} from 'react-native';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  //Solo funciona en IOS
  //const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  //Esto solo funciona en IOS
  /*   useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]); */

  // Esto funciona en Android
  useEffect(() => {
    AppState.addEventListener('change', status => {
      //Puedo ver si esta activo o si esta en el background
      //console.log(status);
      //status="" Para ver las opciones
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('Set dark theme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('Set light theme');
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
