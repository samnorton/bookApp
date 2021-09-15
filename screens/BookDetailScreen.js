import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppScreen from '../components/AppScreen';
import {COLORS, FONTS} from '../constants';

class BookDetailScreen extends Component {
  render() {
    const {
      title,
      author_name,
      isbn = [],
      oclc = [],
      lccn = [],
    } = this.props.route.params.item;
    return (
      <AppScreen>
        <View style={styles.cover}>
          <Image
            source={{
              uri: 'https://covers.openlibrary.org/b/isbn/9782266148825-M.jpg',
            }}
            style={styles.bookCover}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>By {author_name}</Text>
        </View>
        <View style={styles.otherDetails}>
          <View style={styles.divider}>
            <Text style={styles.subTitle}>ISBN</Text>
            <Text style={styles.value}>{isbn[0]}</Text>
          </View>

          <View style={styles.divider}>
            <Text style={styles.subTitle}>OCLC</Text>
            <Text style={styles.value}>{oclc[0]}</Text>
          </View>

          <View style={styles.divider}>
            <Text style={styles.subTitle}>LCCN</Text>
            <Text style={styles.value}>{lccn[0]}</Text>
          </View>
        </View>
      </AppScreen>
    );
  }
}
const styles = StyleSheet.create({
  cover: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.darkgray,
    shadowOffset: {width: 5, height: 7},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  bookCover: {
    width: 110,
    height: 180,
  },
  details: {
    marginVertical: 20,
  },
  title: {
    ...FONTS.h4,
    color: COLORS.primary,
    textAlign: 'center',
  },
  author: {
    ...FONTS.sub,
    fontStyle: 'italic',
    color: COLORS.darkgray,
    textAlign: 'center',
    marginTop: 5,
  },
  subTitle: {
    ...FONTS.h4,
    textAlign: 'center',
  },
  value: {
    ...FONTS.sub,
    fontStyle: 'italic',
    color: COLORS.darkgray,
    marginTop: 5,
    textAlign: 'center',
  },
  divider: {
    paddingVertical: 15,
  },
});

export default BookDetailScreen;
