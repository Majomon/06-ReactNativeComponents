import React from 'react';
import {Alert, Button, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

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
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
};
