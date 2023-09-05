import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#D9D9DB', true: '#5658D6'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
