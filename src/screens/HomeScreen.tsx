import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{color: 'black'}}>HomeScreen</Text>
      <Icon name="star-outline" size={50} color={'black'} />
    </View>
  );
};

export default HomeScreen;
