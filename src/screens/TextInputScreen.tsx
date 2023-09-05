import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({...form, [field]: value});
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su nombre"
              placeholderTextColor="black"
              //Para que no me marque error de autocompletado
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su email"
              placeholderTextColor="black"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesScreen.textInput}
              placeholder="Ingrese su teléfono"
              placeholderTextColor="black"
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
    color: 'black',
    opacity: 0.7,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    /*    borderColor: 'rgba(0,0,0,0.3)', */
    padding: 10,
    marginVertical: 5,
  },
});
