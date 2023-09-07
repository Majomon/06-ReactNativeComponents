import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          marginBottom: 20,
          transform: [{translateY: position}],
        }}
      />
      <View style={styles.btn}>
        <Button
          title="FaseIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(-100, 3000);
          }}
          color={colors.primary}
        />
      </View>
      <View style={styles.btn}>
        <Button title="FaseOut" onPress={fadeOut} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
  btn: {
    width: 150,
    height: 50,
    marginVertical: 10,
  },
});
