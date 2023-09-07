import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

export const TextInputScreen = () => {
  const {form, onChange, isSuscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={dividerColor}
              //Para que no me marque error de autocompletado
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su email"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.infoSwitch}>Suscribirse</Text>
              <CustomSwitch
                isOn={isSuscribe}
                onChange={value => onChange(value, 'isSuscribe')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{
                ...stylesScreen.textInput,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su teléfono"
              placeholderTextColor={dividerColor}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  textInput: {
    opacity: 0.7,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    /*    borderColor: 'rgba(0,0,0,0.3)', */
    padding: 10,
    marginVertical: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoSwitch: {
    color: 'black',
    fontSize: 25,
  },
});
