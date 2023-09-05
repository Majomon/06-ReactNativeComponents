import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
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
        />
      </View>
      <View style={styles.btn}>
        <Button title="FaseOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
  btn: {
    width: 150,
    height: 50,
    marginVertical: 10,
  },
});
