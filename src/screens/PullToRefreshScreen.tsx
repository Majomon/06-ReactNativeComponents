import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Pull to refresh" />
    </View>
  );
};

const stylesPull = StyleSheet.create({});
