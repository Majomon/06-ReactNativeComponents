import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
  {name: 'Animación 1', icon: 'cube-outline', component: 'Animation101Screen'},
  {
    name: 'Animación 2',
    icon: 'game-controller-outline',
    component: 'Animation102Screen',
  },
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 2, opacity: 0.5, marginVertical: 8}} />
    );
  };
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        // Renderizar cada uno de los elementos - Como un map
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        // Llave unica en cada uno de los elementos
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
