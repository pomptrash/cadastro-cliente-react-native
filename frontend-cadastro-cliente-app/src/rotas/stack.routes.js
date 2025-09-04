import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {TabRoutes} from './tab.routes'
import { CartaoCliente } from "../telas/CartaoCliente";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={TabRoutes} options={{headerShown:false}}/>
            <Stack.Screen name="Detalhes" component={CartaoCliente}/>   
        </Stack.Navigator>
    )
}