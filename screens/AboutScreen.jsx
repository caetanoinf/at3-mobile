import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks";
import { List } from "react-native-paper";

export default function About() {
  const { authenticatedUser, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <List.Section title="Usuário">
        <List.Item title="Nome" description={authenticatedUser?.displayName ?? "-"} />
        <List.Item title="Email" description={authenticatedUser?.email ?? "-"} />
      </List.Section>

      <List.Section title="Detalhes">
        <List.Item title="Descrição" description="Aplicativo para gerenciamento de estoque" />
        <List.Item title="Desenvolvedores" description="Lucio" />
        <List.Item title="Versão" description="1.0.0" />
      </List.Section>

      <List.Section>
        <List.Item onPress={handleLogout} title="Sair" left={(props) => <List.Icon {...props} icon="logout" />} />
      </List.Section>
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
  input: {
    marginTop: 16,
  },
  card: {
    flex: 1,
  },
  actions: {
    justifyContent: "space-between",
  },
});
