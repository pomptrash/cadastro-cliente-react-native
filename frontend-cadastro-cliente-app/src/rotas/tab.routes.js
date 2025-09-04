import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Cadastro } from "../telas/Cadastro";
import { Clientes } from "../telas/Clientes";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarIcon: ({ size, color='#033' }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#033',
        }}
      />

      <Tab.Screen
        name="Clientes"
        component={Clientes}
        options={{
          tabBarIcon: ({ size, color='#033'}) => (
            <Feather name="users" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#033',
        }}
      />
    </Tab.Navigator>
  );
}
