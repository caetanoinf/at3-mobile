import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useAuth } from "../hooks";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signUp } = useAuth();

  const handleLogin = async () => {
    try {
      await signUp({ email, password, name });
    } catch (error) {
      Alert.alert("Erro ao criar conta", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>

      <TextInput style={styles.input} placeholder="Nome" onChangeText={(text) => setName(text)} value={name} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput style={styles.input} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />

      <Button title="Cadastrar" onPress={handleLogin} />
      <Link to={{ screen: "Login" }} style={styles.link}>
        Já tem conta? Entre
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
