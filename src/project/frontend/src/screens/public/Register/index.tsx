import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../assets/styleds';

export const Register = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Cadastro</Text>
          <View style={styles.inputContainer}>
            < TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000000"
              selectionColor="#000000" />
          </View>
          < View style={styles.inputContainer}>
            < TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000000"
              selectionColor="#000000" />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate("Login")
              }}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                Continuar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}