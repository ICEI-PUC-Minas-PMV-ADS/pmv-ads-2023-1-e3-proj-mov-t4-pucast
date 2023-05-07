import React from 'react';
import { FC, useContext, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../assets/styleds';
import { AuthUserContext } from '../../../context/AuthContext';
import { IUserLoginDTO } from '../../../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO';

export const Login: FC = () => {

  const navigation = useNavigation();

  const { signIn } = useContext(AuthUserContext);

  const initialDataUser: IUserLoginDTO = {
    email: '',
    password: ''
  };

  const [dataUser, setDataUser] = useState<IUserLoginDTO>(initialDataUser);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await signIn({ email: dataUser.email, password: dataUser.password });

    if (!!response) {
      setDataUser(initialDataUser);
      //@ts-ignore
      navigation.navigate('DashBoard');
    };

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000000"
              selectionColor="#000000" 
              value={dataUser.email} 
              onChange={(e) => setDataUser({ ...dataUser, email: e.nativeEvent.text })}/>
          </View>
          < View style={styles.inputContainer}>
            < TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000000"
              selectionColor="#000000" 
              value={dataUser.password} 
              onChange={(e) => setDataUser({ ...dataUser, password: e.nativeEvent.text })} />
          </View>
          <View>
            <TouchableOpacity
              onPress={(e) => { handleLogin(e) }}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}