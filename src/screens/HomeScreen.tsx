import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}
const menuItems = [
  {name: 'Animación 1', icon: 'cube-outline', components: 'Animation101Screen'},
];

const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text style={{color: 'black'}}>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={menuItems}
        // Renderizar cada uno de los elementos - Como un map
        renderItem={({item}) => renderMenuItem(item)}
        // Llave unica en cada uno de los elementos
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default HomeScreen;
