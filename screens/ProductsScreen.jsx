import { View, StyleSheet, FlatList, Alert } from "react-native";
import { useProducts } from "../hooks";
import { useMutation, useQuery } from "react-query";
import { Text, ActivityIndicator, Banner } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductItem } from "../components";

export default function ProductsScreen() {
  const { getProducts, deleteProduct, updateProduct } = useProducts();

  const products = useQuery("GET_PRODUCTS", () => getProducts());

  const deleteMutation = useMutation("DELETE_PRODUCT", (id) => deleteProduct(id), {
    onSuccess: () => {
      products.refetch();
    },
    onError: () => {
      Alert.alert("Erro ao deletar produto");
    },
  });

  const updateMutation = useMutation("UPDATE_PRODUCT", (payload) => updateProduct(payload.id, payload.data), {
    onSuccess: () => {
      products.refetch();
      Alert.alert("Produto atualizado com sucesso");
    },
    onError: () => {
      Alert.alert("Erro ao atualizar produto");
    },
  });

  const handleDelete = (id) => {
    Alert.alert("Deletar produto", "Tem certeza que deseja deletar esse produto?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: () => {
          deleteMutation.mutate(id);
        },
      },
    ]);
  };

  const handleUpdate = (id, data) => {
    updateMutation.mutate({ id, data });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Produtos cadastrados</Text>

      {products.isLoading ? <ActivityIndicator size={64} animating={true} /> : null}

      {products.data?.length === 0 ? (
        <Banner
          actions={[
            {
              label: "Atualizar",
              onPress: () => products.refetch(),
            },
          ]}
          visible
        >
          Nenhum produto cadastrado
        </Banner>
      ) : null}

      <FlatList
        data={products.data || []}
        renderItem={({ item }) => <ProductItem item={item} onDelete={handleDelete} onEdit={handleUpdate} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
  },
});
