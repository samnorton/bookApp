import React, {Component} from 'react';
import {View} from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import {BookDetailScreen} from './screens';

class App extends Component {
  render() {
    return <BookDetailScreen />;
  }
}

export default App;
