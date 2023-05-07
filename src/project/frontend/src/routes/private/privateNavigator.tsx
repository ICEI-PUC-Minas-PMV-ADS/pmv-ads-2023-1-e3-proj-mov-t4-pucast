import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { DashBoard } from '../../screens/private/DashBoard';

const Stack = createStackNavigator();

export const PrivateNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};
