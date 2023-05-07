import { StatusBar } from 'expo-status-bar';
import React from 'react-native';
import { SafeAreaView, ScrollView,StyleSheet, Text, View, TextInput ,TouchableOpacity } from 'react-native';


export function ScreenB (){
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
    <Text style={styles.title}>Login</Text>
    <View style={styles.inputContainer}>
      < TextInput 
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="#000000"
      selectionColor="#000000"/>
    </View>
    < View style={styles.inputContainer}>
    < TextInput 
      style={styles.input}
      placeholder="Senha"
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
          </View>
          </ScrollView> 
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({container :{
      flex: 1,
      backgroundColor: '#fff',
      },
    content :{
      paddingHorizontal:30,
      },
    title :{
      fontSize:30,
      fontWeight:"bold",
      marginBottom: 40,
      },
      inputContainer: {
        flexDirection: "row",
        width: "100%",
        alignItens: "center",
        justifyContent: "center",
    marginBottom: 20,
    position: "relative",
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
    marginTop: 20,
      },
      loginButtonText: {
        color : "#fff",
        textAlign : "center",
        fontWeight : "bold", 
        fontSize : 16, 
      }
    });
    