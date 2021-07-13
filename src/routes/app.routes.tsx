import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { ProfileStore } from '../screens/ProfileStore';
import { Dashboard } from '../screens/ChartDashboard';


const Stack = createStackNavigator();

function RouteApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="ProfileStore" component={ProfileStore} />
        <Stack.Screen options={{ title: "Dashboard" }} name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { RouteApp };