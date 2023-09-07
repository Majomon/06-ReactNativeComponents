import {View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View style={{borderBottomWidth: 2, marginVertical: 8, borderBottomColor:dividerColor}} />
  );
};
