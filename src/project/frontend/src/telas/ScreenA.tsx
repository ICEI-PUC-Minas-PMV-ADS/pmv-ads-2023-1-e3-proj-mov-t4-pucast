import React from "react";
import { Button, View } from "react-native";
import {useNavigation} from '@react-navigation/native';


export function ScreenA() {  
    const navigation = useNavigation();
    
    function openScreen() {
     navigation.navigate('screenB');
    }

    function registrerScreen() {
        navigation.navigate('screenC');
       }
   
    return(
        <View style={{flex :1, backgroundColor:'#fff',justifyContent:"center"}}>
            <Button title="Login"
            onPress={openScreen}
            />
            <Button title="Cadastro"
            onPress={registrerScreen}
            />
        </View>
    );
}