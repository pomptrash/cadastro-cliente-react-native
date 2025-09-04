import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { apiClientes } from "../../services/clientes.api";

import React, { useState } from "react";

export function Clientes() {
  const [clientes, setClientes] = useState([]);

  const navigation = useNavigation();

  function handlePress(cliente) {
    navigation.navigate("Detalhes", { cliente: cliente });
  }

  async function fetchClientes() {
    console.log("Chamando fetchClientes");
    try {
      const response = await apiClientes.get("/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }


  async function deleteCliente(id) {
    try {
      await apiClientes.delete(`/clientes/${id}`);
      fetchClientes()
    } catch (error) {
      alert("Erro ao deletar cliente:", error);
    }
  }

  // HOOK QUE EXECUTA A FUNÇÃO QUANDO A TELA GANHA FOCO
  useFocusEffect(
    React.useCallback(() => {
      fetchClientes();
    }, [])
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>Clientes cadastrados</Text>

      <View style={styles.main}>
        {clientes.map((cliente) => (
          <View key={cliente.email} style={styles.card}>
            <TouchableOpacity
              style={styles.itemUser}
              onPress={() => handlePress(cliente)}
            >
              <Feather name="user" size={40} color="#fff" />
              <View>
                <Text style={styles.itemNome}>{cliente.name}</Text>
                <Text style={styles.item}>{cliente.email}</Text>
                <Text style={styles.item}>{cliente.idade} anos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteCliente(cliente.id)}>
              <Feather name="trash-2" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
