import React from 'react';
import {FlatList, View} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

const HomeScreen = () => {
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
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
