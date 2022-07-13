import * as React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../components/Login';
import CreatAcc from '../components/CreatAcc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#3b7ced',
        },
      }}
      style={{}}
      initialRouteName="Login">
      <Tab.Screen
        options={{
          tabBarLabel: 'Đăng nhập',
        }}
        name="Login"
        component={Login}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Đăng ký',
        }}
        name="CreatAcc"
        component={CreatAcc}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
