import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={colors.primary}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...(style as any), opacity /* width: '100%', height: 400,  */}}
      />
    </View>
  );
};
