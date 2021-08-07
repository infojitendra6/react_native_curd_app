import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './ShowStudentListActivity';
import ViewScreen from './ShowStudentListActivity';
import GallaryScreen from './EditStudentRecordActivity';

 import SettingsScreen from './DeleteStudentRecord';

// import  SettingsScreen from './src/ViewScreen';

const HomeStack = createStackNavigator();

export  function HomeStackScreen() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen name="Home" component={HomeScreen}  options={{
          headerShown: false
        }}  />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>

      <SettingsStack.Screen name="Booking" component={SettingsScreen} 
       options={{
          title: 'Online Room Booking',
          headerTitleAlign: 'center',
          headerShown: true
        }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
      
    </SettingsStack.Navigator>
  );
}

const ViewStack = createStackNavigator();

export  function ViewStackScreen() {
  return (
    <ViewStack.Navigator>
     
      <ViewStack.Screen name="View" component={ViewScreen} />

      {/* <ViewStack.Screen name="Gallary" component={GallaryScreen} /> */}
      
    </ViewStack.Navigator>
  );
}

const GallaryStack = createStackNavigator();

export function GallaryStackScreen() {
  return (
    <GallaryStack.Navigator>
     
      <GallaryStack.Screen name="Gallary" component={GallaryScreen} 
      options={{
        headerShown: false
      }}  />
    </GallaryStack.Navigator>
  );
}


