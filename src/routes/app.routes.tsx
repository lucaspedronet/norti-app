import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screens/Dashboard';
import { Home } from '../screens/Home';


const Stack = createStackNavigator();

function RouteApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{ title: "Dashboard" }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { RouteApp };