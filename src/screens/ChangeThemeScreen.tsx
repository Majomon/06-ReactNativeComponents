import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,

            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          activeOpacity={0.7}
          onPress={setLightTheme}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          activeOpacity={0.7}
          onPress={setDarkTheme}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
