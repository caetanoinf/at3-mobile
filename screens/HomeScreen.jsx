import { Button, View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import { useProducts } from "../hooks";

export default function HomeScreen() {
  const { createProduct } = useProducts();

  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    productCategory: "",
  });

  const handleChangeValue = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await createProduct(formData);
      Alert.alert("Sucesso", "Produto criado com sucesso");

      setFormData({
        productName: "",
        quantity: "",
        productCategory: "",
        productPrice: "",
      });
    } catch (error) {
      Alert.alert("Erro ao criar produto", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        onChangeText={(text) => handleChangeValue("productName", text)}
        value={formData.productName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        onChangeText={(text) => handleChangeValue("quantity", text)}
        value={formData.quantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria do Produto"
        onChangeText={(text) => handleChangeValue("productCategory", text)}
        value={formData.productCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Produto"
        onChangeText={(text) => handleChangeValue("productPrice", text)}
        value={formData.productPrice}
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={handleSave} />
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
