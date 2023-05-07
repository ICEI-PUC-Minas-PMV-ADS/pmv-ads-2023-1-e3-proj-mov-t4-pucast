import { FC } from 'react'
import { createStackNavigator } from "@react-navigation/stack";

//Rotas
import { PublicNavigator } from './public/publicNavigator';
import { PrivateNavigator } from './private/privateNavigator';

const Stack = createStackNavigator();

export const _RootNavigator: FC = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='PublicNavigator' component={PublicNavigator} />
            <Stack.Screen options={{ headerShown: false }} name='PrivateNavigator' component={PrivateNavigator} />
        </Stack.Navigator>
    )

};