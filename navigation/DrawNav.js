import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../screens/Setting';
import FollowOder from '../screens/FollowOder';
import About from '../screens/About';
import Home from '../components/Home';
import User from '../screens/User';
// function HomeSr({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Messenger')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }
// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function DrawNav() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#D04711',
          height: 100,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tài khoản" component={User} />
      <Drawer.Screen name="Cài đặt" component={Setting} />
      <Drawer.Screen name="Thông tin app" component={About} />
      <Drawer.Screen name="Theo dõi đơn hàng" component={FollowOder} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
