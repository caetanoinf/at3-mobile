import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useAuth } from "../hooks";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro ao logar", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar na sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput style={styles.input} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />

      <Button title="Entrar" onPress={handleLogin} />
      <Link to={{ screen: "Register" }} style={styles.link}>
        Não tem conta ainda? Registre-se
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  link: {
    marginTop: 16,
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingLeft: 10,
  },
});
