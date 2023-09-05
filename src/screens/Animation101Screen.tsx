import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      //Valor al que necesito que llegue
      toValue: 1,
      //Lo que va a durar :D en milisegundos
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Termino de cargar la animación FadeIn'));

    Animated.timing(top, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      // Efectos - EASING
      easing: Easing.bounce,

/*       easing: Easing.elastic(3), */
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      //Valor al que necesito que llegue
      toValue: 0,
      //Lo que va a durar :D en milisegundos
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('Termino de cargar la animación FadeOut'));

    Animated.timing(top, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          marginBottom: 20,
          transform: [{translateY: top}],
        }}
      />
      <View style={styles.btn}>
        <Button title="FaseIn" onPress={fadeIn} />
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
