import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {} from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={stylesScreen.textInput} />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
});
