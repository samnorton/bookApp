import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONTS} from '../constants';
class BookListingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Listing Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  title: {
    ...FONTS.largeTitle,
  },
});
export default BookListingScreen;
