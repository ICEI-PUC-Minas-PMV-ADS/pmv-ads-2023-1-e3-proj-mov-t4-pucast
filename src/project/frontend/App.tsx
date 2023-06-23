import { Routes } from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalState } from "./globalState";

export default function App() {
  return (
    <GlobalState>
      <Routes />      
    </GlobalState>
  );
}
