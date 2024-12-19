import { ImageBackground, Text } from "react-native";
import bg from "../../assets/background.png";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { styles } from "./styles";

export function Users() {
    return (
        <ImageBackground 
            source={bg} 
            defaultSource={bg} 
            style={styles.container} 
            resizeMode="cover"
        >
            <Header />

            <Text style={styles.description}>
                Pesquise repositórios a partir de um usuário do github.
            </Text>

            <Input />
        </ImageBackground>
    )
}