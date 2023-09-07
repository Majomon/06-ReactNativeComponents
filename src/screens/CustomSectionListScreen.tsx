import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useContext} from 'react';

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
      'Green Lantern',
      'Cyborg',
      'Batgirl',
      'Wonder Girl',
      'Nightwing',
      'Martian Manhunter',
      'Zatanna',
      'Black Canary',
      'Red Hood',
      'The Atom',
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
      'Hulk',
      'Black Widow',
      'Doctor Strange',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch',
      'Black Panther',
      'Captain Marvel',
      'Vision',
      'Hawkeye',
      'Falcon',
      'Star-Lord',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Naruto',
      'Luffy',
      'Vegeta',
      'Ichigo Kurosaki',
      'Monkey D. Luffy',
      'Sasuke Uchiha',
      'Eren Yeager',
      'Mikasa Ackerman',
      'Gon Freecss',
      'Killua Zoldyck',
      'Edward Elric',
      'Inuyasha',
      'Natsu Dragneel',
      'Light Yagami',
      'Lelouch Lamperouge',
    ],
  },
];

export const CustomSectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        //Headers
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={`Total de casas ` + casas.length} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{...stylesSection.text, color: colors.text}}>
            {item}
          </Text>
        )}
        /*     stickySectionHeadersEnabled={true} */
        stickySectionHeadersEnabled
        //Renders
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ` + section.data.length} />
        )}
        //Separator
        SectionSeparatorComponent={() => <ItemSeparator />}
        /* ItemSeparatorComponent={() => <ItemSeparator />} */

        //Quitar la barra del scroll
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const stylesSection = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
