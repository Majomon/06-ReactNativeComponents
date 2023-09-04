import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {name: 'Animación 1', icon: 'cube-outline', components: 'Animation101Screen'},
  {
    name: 'Animación 2',
    icon: 'game-controller-outline',
    components: 'Animation102Screen',
  },
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text style={styles.parrafo}>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        // Renderizar cada uno de los elementos - Como un map
        renderItem={({item}) => renderMenuItem(item)}
        // Llave unica en cada uno de los elementos
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
      />
    </View>
  );
};

export default HomeScreen;
