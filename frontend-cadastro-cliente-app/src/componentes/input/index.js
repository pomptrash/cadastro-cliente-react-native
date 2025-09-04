import {View, Text, TextInput} from 'react-native'
import { styles } from './styles'

export function Input({label, type, value, onChangeText}){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={type}
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={type === 'numeric' ? 8 : 50}
                />
        </View>
    )
}