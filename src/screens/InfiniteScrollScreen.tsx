import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    // Simulando retraso en la petición
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  const renderItem = (item: number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />
      /*       <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{
          width: '100%',
          height: 400,
        }}
      /> */
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()} // Espera recibir un string pero recibe un número, por eso el toString()
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        // Cuando se llega al final
        onEndReached={loadMore}
        // Que tan cerca del fondo debo estar para disparar nuevamente esta función -> onEndReached
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={30} color={'#5856D6'} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
