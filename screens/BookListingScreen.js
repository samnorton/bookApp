import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../constants';
import AppScreen from '../components/AppScreen';
import AppCard from '../components/AppCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class BookListingScreen extends Component {
  render() {
    return (
      <AppScreen style={styles.screen}>
        <Text style={styles.title}>Book App</Text>
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
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
  },
});
export default BookListingScreen;
