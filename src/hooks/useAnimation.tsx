import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      //Valor al que necesito que llegue
      toValue: 1,
      //Lo que va a durar :D en milisegundos
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Termino de cargar la animación FadeIn'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      //Valor al que necesito que llegue
      toValue: 0,
      //Lo que va a durar :D en milisegundos
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('Termino de cargar la animación FadeOut'));
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // Efectos - EASING
      easing: Easing.bounce,

      /*       easing: Easing.elastic(3), */
    }).start();
  };

  return {fadeIn, fadeOut, opacity, position, startMovingPosition};
};
