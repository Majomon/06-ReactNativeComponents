import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo!');
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          //Hasta donde va a bajar en el eje Y el loading
          progressViewOffset={10}
          //Color del círculo
          progressBackgroundColor="grey"
          //Gradiente de colores
          colors={['white', 'yellow', 'orange']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

const stylesPull = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
  },
});
