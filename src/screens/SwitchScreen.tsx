import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: string) => {
    setState({...state, [field]: value});
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.infoSwitch}>Is active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.infoSwitch}>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.infoSwitch}>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.infoSwitch}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
