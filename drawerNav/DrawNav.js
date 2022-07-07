import {createDrawerNavigator} from '@react-navigation/drawer';
import User from '../screens/User'
import About from '../screens/About';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
