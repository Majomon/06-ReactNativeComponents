import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Background negro */}
        <View style={stylesModal.containerModal}>
          {/* Contenido del modal */}
          <View style={stylesModal.contenidoModal}>
            <HeaderTitle title="Modal" />
            <Text
              style={{color: 'black', marginVertical: 10, fontWeight: '300'}}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    //width: 100,
    //height: 100,
  },
  contenidoModal: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 100},
    shadowOpacity: 0.25,
    elevation: 15,
  },
});
