import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export function Button({text, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}