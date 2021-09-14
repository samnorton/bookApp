import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {fetchBooks} from '../redux/actions/booksActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {COLORS, FONTS} from '../constants';
import AppScreen from '../components/AppScreen';

class BookListingScreen extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  onPressHandler = (item = {}) => {
    this.props.navigation.navigate('BookDetailScreen', {item});
  };

  render() {
    _keyExtractor = item => item.cover_i;

    if (this.props.randomBooks.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return (
      <AppScreen style={styles.screen}>
        <Text style={styles.title}>Book App</Text>
        <FlatList
          style={{flex: 1}}
          data={this.props.books}
          keyExtractor={this._keyExtractor}
          renderItem={({item} = this.props.books) => {
            return (
              <BookItem
                onPressHandler={() => this.props.onPressHandler(item)}
                item={item}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </AppScreen>
    );
  }
}

BookListingScreen.PropTypes = {
  fetchBooks: PropTypes.func.isRequired,
  randomBooks: PropTypes.object.isRequired,
};

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

const mapStateToProps = state => {
  return {
    randomBooks: state,
  };
};

export default connect(mapStateToProps, {fetchBooks})(BookListingScreen);
