import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import AppScreen from './AppScreen';

class AppInput extends Component {
  render() {
    return (
      <AppScreen>
        <TextInput style={styles.input} placeholder="Search Books.." />
      </AppScreen>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: COLORS.lightGray3,
    marginVertical: 30,
    marginHorizontal: 25,
    color: COLORS.darkgray,
  },
});

export default AppInput;
