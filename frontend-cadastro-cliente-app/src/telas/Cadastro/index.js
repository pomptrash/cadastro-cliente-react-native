import { View, Text } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Input } from "../../componentes/input";
import { Button } from "../../componentes/button";
import Toast from "react-native-toast-message";
import { apiCep } from "../../services/cep.api";
import { apiClientes } from "../../services/clientes.api";

export function Cadastro() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState(null);
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleCep(cep) {
    try {
      const response = await apiCep.get(`/${cep}/json/`);
      setRua(response.data.logradouro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
    } catch (error) {
      console.log(error);
    }
  }

  async function postCliente() {
    console.log("Clicou em enviar");
    try {
      if (!name || !email || !idade) return Toast.show({
        type: "error",
        text1: "Preencha todos os dados",
        text2: "Os campos Nome, Idade e Email são obrigatórios."
      });

      if (name.length < 3) return Toast.show({
        type: "error",
        text1: "Nome inválido",
        text2: "O nome deve ter no mínimo 3 caracteres."
      });

      await apiClientes.post("/clientes", {
        name: name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
        idade: Number(idade),
        email: email.toLowerCase(),
        cep,
        cidade,
        estado,
      });

      setName("");
      setIdade(0);
      setEmail("");
      setCep(null);
      setRua("");
      setCidade("");
      setEstado("");
      Toast.show({
        type: "success",
        text1: "Cliente cadastrado com sucesso!",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao cadastrar cliente",
        text2: "Certifique-se de que o Email já não existe.",
      });
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
          <Input
            label="Nome"
            type="default"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Idade"
            type="numeric"
            value={idade}
            onChangeText={setIdade}
          />
          <Input
            label="Email"
            type="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Input label="CEP" type="numeric" value={cep} onChangeText={setCep} />
          {cep?.length > 7 && handleCep(cep) && (
            <Text style={styles.endereco}>
              {rua}, {cidade}, {estado}
            </Text>
          )}
        </View>
      </View>
      <Button text="Enviar" onPress={postCliente} />
    </View>
  );
}
