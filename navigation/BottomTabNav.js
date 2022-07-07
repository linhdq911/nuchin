import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import User from '../components/User';
import Messenger from '../components/Messenger';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        title: 'Alo',
        headerShown: false,
        headerStyle: {backgroundColor: '#3b7ced'},
      }}
      initialRouteName="Trangchu">
      <Tab.Screen
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused}) => {
            return (
              <Entypo
                style={{
                  fontSize: 25,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="home"
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Đặt lịch',
          tabBarIcon: ({focused}) => {
            return (
              <MaterialCommunityIcons
                style={{
                  fontSize: 24,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="calendar-multiple-check"
              />
            );
          },
        }}
        name="Messenger"
        component={Messenger}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                style={{
                  fontSize: 27,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="notifications"
              />
            );
          },
        }}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;
