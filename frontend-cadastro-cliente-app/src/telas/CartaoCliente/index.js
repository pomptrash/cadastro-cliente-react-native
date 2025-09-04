import { View, Text } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
export function CartaoCliente() {
  
  const route = useRoute();
  const clienteRoute = route.params?.cliente

  return (
    <View style={styles.card}> 
      <Text style={styles.text}>ID: {clienteRoute.id}</Text>
      <Text style={styles.text}>NOME: {clienteRoute.name}</Text>
      <Text style={styles.text}>IDADE: {clienteRoute.idade} anos</Text>
      <Text style={styles.text}>EMAIL: {clienteRoute.email}</Text>
      <Text style={styles.text}>CEP: {clienteRoute.cep}</Text>
      <Text style={styles.text}>CIDADE: {clienteRoute.cidade}</Text>
      <Text style={styles.text}>ESTADO: {clienteRoute.estado}</Text>
      <Text style={styles.created}>Cadastrado em: {clienteRoute.createdAt}</Text>
      {/* <Text style={styles.updated}>Atualizado em: {clienteRoute.updatedAt}</Text> */}
    </View>
  );
}
