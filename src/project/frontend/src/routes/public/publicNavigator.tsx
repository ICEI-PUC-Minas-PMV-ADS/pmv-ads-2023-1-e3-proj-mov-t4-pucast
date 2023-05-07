import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Login } from '../../screens/public/Login';
import { Register } from '../../screens/public/Register';
import { RedefinePassword } from '../../screens/public/RedefinePassword';

const Stack = createStackNavigator();

export const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      <Stack.Screen options={{ headerShown: false }} name="RedefinePassword" component={RedefinePassword} />
    </Stack.Navigator>
  );
};
