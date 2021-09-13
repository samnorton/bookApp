import React, {Component} from 'react';
import {View} from 'react-native';
import BookListingScreen from './screens/BookListingScreen';

class App extends Component {
  render() {
    return (
      <View>
        <BookListingScreen />
      </View>
    );
  }
}

export default App;
