import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, GallaryStackScreen, ViewStackScreen, SettingsStackScreen } from './src/ButtomNavigation';
import {Container} from 'native-base';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Container>
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Booking" component={SettingsStackScreen} />
        <Tab.Screen name="View" component={ViewStackScreen} />
        <Tab.Screen name="Gallary" component={GallaryStackScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
    </Container>
  );
}
