import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity
        style={stylesTheme.touchable}
        activeOpacity={0.7}
        onPress={setLightTheme}>
        <Text style={stylesTheme.textTouchable}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesTheme = StyleSheet.create({
  touchable: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  textTouchable: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
