import * as React from 'react';
import Feed from '../telas/Feed';
import Compartilhar from '../telas/Compartilhar';
import Favoritos from '../telas/Favoritos';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

  export default function ScreenE() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Podcast',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Compartilhar"
        component={Compartilhar}
        options={{
          tabBarLabel: 'Compartilhar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="share" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


