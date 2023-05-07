import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { _RootNavigator } from './routes/_rootNavigator';
import { AuthUserProvider } from './context/AuthContext';

export const Routes: FC = () => {

    return (
        <AuthUserProvider>
            <NavigationContainer>
                <_RootNavigator />
            </NavigationContainer>
        </AuthUserProvider>
    );

};