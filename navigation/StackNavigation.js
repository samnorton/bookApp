import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BookDetailScreen} from '../screens';
import BottomNavigation from './BottomNavigation';
import {COLORS} from '../constants';

const Stack = createStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'BookListingScreen'}
          screenOptions={{
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="Book List"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookDetailScreen"
            component={BookDetailScreen}
            options={{
              headerTitle: '',
              headerLeft: ({onPress, focused}) => (
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 20,
                      tintColor: focused ? COLORS.primary : COLORS.black,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default StackNavigation;
