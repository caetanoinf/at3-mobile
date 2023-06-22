import { Card, TextInput, Button, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useState } from "react";

export function ProductItem({ item, onEdit, onDelete }) {
  const [formData, setFormData] = useState({
    quantity: item.quantity,
    productPrice: item.productPrice,
  });

  const handleChangeValue = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  return (
    <Card style={styles.card}>
      <Card.Title title={item.productName} subtitle={item.productCategory} />

      <Card.Content>
        <TextInput
          dense
          size="small"
          style={styles.input}
          label="Quantidade"
          value={formData.quantity}
          onChangeText={(text) => handleChangeValue("quantity", text)}
        />
        <TextInput
          dense
          style={styles.input}
          label="Preço"
          value={formData.productPrice}
          onChangeText={(text) => handleChangeValue("productPrice", text)}
        />
      </Card.Content>

      <Card.Actions style={styles.actions}>
        <Button onPress={() => onEdit(item.id, formData)}>Alterar</Button>
        <IconButton icon="delete" onPress={() => onDelete(item.id)} />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  input: {
    marginTop: 16,
  },
  actions: {
    justifyContent: "space-between",
  },
});
