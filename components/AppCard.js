import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';

class AppCard extends Component {
  render() {
    const {title, author_name} = this.props.item;
    return (
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://covers.openlibrary.org/b/isbn/9782266148825-M.jpg',
          }}
          style={styles.bookCover}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>By {author_name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
    paddingRight: 30,
    shadowColor: '#dedede',
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
  },
  bookCover: {
    width: 70,
    height: 115,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  title: {
    ...FONTS.h5,
    color: COLORS.primary,
    paddingRight: 10,
  },
  author: {
    ...FONTS.sub,
    fontStyle: 'italic',
    color: COLORS.darkgray,
  },
  bookIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
    position: 'absolute',
    top: 45,
    right: 30,
  },
});

export default AppCard;
