import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <TouchableOpacity
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}
        activeOpacity={0.7}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
