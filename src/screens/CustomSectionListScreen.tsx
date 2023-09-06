import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Wonder Woman',
      'The Flash',
      'Aquaman',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Iron Man',
      'Captain America',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama', 'Naruto', 'Luffy', 'Vegeta'],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      {/*       <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={stylesSection.text}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

const stylesSection = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
  },
});
