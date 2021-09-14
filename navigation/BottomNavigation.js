import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookSearchScreen, BookListingScreen} from '../screens';
import {COLORS, icons} from '../constants';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

// Custom Navigator Behavior
const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  const isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.customContainer}>
        <View style={styles.backgroundCircle}>
          <View style={styles.customIconContainer}></View>
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>

        <TouchableOpacity style={styles.onPressContainer} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

// Actual Bottom Navigation
class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Book List"
          component={BookListingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.book}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Book Search"
          component={BookSearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            tabBarButton: props => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  customContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundCircle: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  customIconContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  onPressContainer: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
});
export default BottomNavigation;
