import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';

class AppScreen extends Component {
  render() {
    const {children, style} = this.props;
    return (
      <SafeAreaView style={[styles.screenContainer, style]}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
  },
});
export default AppScreen;
