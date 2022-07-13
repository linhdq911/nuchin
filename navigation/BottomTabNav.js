import * as React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import User from '../components/User';
import Messenger from '../components/Messenger';
import DrawNav from './DrawNav';
import MapGG from '../screens/MapGG';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        // title: 'Alo',
        headerShown: false,
        // headerStyle: {backgroundColor: '#3b7ced'},
      }}
      initialRouteName="DrawNav">
      <Tab.Screen
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{
                  fontSize: 25,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="home"
              />
            );
          },
        }}
        name="DrawNav"
        component={DrawNav}
      />

      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleStyle: {color: '#3D2B2B',marginHorizontal:windowWidth*0.33},
          headerStyle: {},
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{
                  fontSize: 24,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="message1"
              />
            );
          },
        }}
        name="Messenger"
        component={Messenger}
      />
<Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Feather
                style={{
                  fontSize: 27,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="user"
              />
            );
          },
        }}
        name="Map"
        component={MapGG}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Feather
                style={{
                  fontSize: 27,
                  color: focused ? '#3b7ced' : 'gray',
                }}
                name="user"
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
