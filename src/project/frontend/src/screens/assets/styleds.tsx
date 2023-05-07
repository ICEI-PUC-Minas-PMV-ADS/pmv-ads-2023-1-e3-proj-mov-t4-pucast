import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
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
    input: {
        borderBottomWidth: 1.5,
        flex: 1,
        paddingBottom: 10,
        borderBottomColor: "#000000",
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: "#000000",
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
    },
    loginButtonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
});