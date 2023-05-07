import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Screen, Navigator} = createNativeStackNavigator();

import {ScreenA} from "../telas/ScreenA";
import {ScreenB} from "../telas/ScreenB";
import {ScreenC} from "../telas/ScreenC";
import ScreenD from '../telas/ScreenD';



export function StackRoutes(){
return(
    <Navigator>
    <Screen
    name='ScreenA'
    options={{
        headerShown: false,
    }}
    component={ScreenA}
    />
     <Screen
    name='screenB'
    options={{
        title:'',
        headerStyle:{
            backgroundColor:'white'
        }
    }}
    component={ScreenB}
    />
    <Screen
    name='screenC'
    options={{
        title:'',
        headerStyle:{
            backgroundColor:'white'
        }
    }}
    component={ScreenC}
    />
     <Screen
    name='screenD'
    options={{
        title:'',
        headerStyle:{
            backgroundColor:'white'
        }
    }}
    component={ScreenD}
    />
    </Navigator>
)
}

