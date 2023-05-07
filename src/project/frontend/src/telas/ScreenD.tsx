import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import { SafeAreaView, ScrollView,StyleSheet, Text, View, TextInput ,TouchableOpacity } from 'react-native';

export default function ScreenD()
{
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
<ScrollView
      contentContainerStyle={{
flex:1,
alignItens: "center",
justifyContent: "center",
      }}
      >
      <View style={styles.content}>
<Text style={styles.title}>Cadastro</Text>
<Text style={styles.title2}>Digite seu nome de usuário</Text>
<View style={styles.inputContainer}>
  < TextInput 
  style={styles.input}
  placeholder="Nome de Usuário"
  placeholderTextColor="#000000"
  selectionColor="#000000"/>
</View>
<View>
<TouchableOpacity style={styles.loginButton}>
    <Text style={styles.loginButtonText}>
Entrar
    </Text>
  </TouchableOpacity>
</View>
<Text style={styles.title3}>Ao se inscrever,você concorda com os Termos de Política de Privacidade e Termos de Serviço</Text>
      </View>
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  },
content :{
  paddingHorizontal:30,
  },
title :{
  fontSize:30,
  fontWeight:"bold",
  marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItens: "center",
    justifyContent: "center",
marginBottom: 10,
position: "relative",
  },
  title2 :{
      fontSize:15,
      fontWeight:"bold",
      marginBottom: 20,
      },
  input:{
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#000000",
    fontSize: 16,
  },
  loginButton :{
    backgroundColor :"#000000",
    padding:14,
borderRadius:10,
  },
  loginButtonText: {
    color : "#fff",
    textAlign : "center",
    fontWeight : "bold", 
    fontSize : 16, 
  },
  title3 : {
    fontSize:15,
    fontWeight:"bold",
    marginBottom: 40,
    marginTop: 10,
    },
});