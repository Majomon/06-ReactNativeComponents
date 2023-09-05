import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      //Valor al que necesito que llegue
      toValue: 1,
      //Lo que va a durar :D en milisegundos
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox, opacity, marginBottom: 20}} />
      <Button title="FaseIn" onPress={fadeIn} />
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
});
