import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONTS} from '../constants';
import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';

class BookListingScreen extends Component {
  render() {
    return (
      <AppScreen style={styles.screen}>
        <AppCard />
        <AppCard />
        <AppCard />
      </AppScreen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    ...FONTS.h1,
  },
});
export default BookListingScreen;
