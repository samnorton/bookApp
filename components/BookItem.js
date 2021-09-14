import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import AppCard from '../components/AppCard';

export default class BookItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressHandler(this.props.item)}>
        <AppCard item={this.props.item} />
      </TouchableOpacity>
    );
  }
}
