import React from 'react';
import {Alert, Button, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'El msj de la alerta',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Boton de Cancelar'),
          // Puedo personalizarlo
          style: 'destructive',
        },
        {text: 'Okey', onPress: () => console.log('Boton de Ok')},
      ],
      {
        // Si hago click afuera osea ninguna de las dos opciones se sale la alerta
        cancelable: true,
        // Función que se manda al hacer click afuera
        onDismiss: () => console.log('OnDismiss'),
      },
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
