import { ImageBackground, Text } from "react-native";
import bg from "../../assets/background.png";
import { Header } from "../../components/Header";
import { SearchUserInput } from "../../components/SearchUserInput";
import { styles } from "./styles";

const userTest = {
    avatarUrl: "https://github.com/joaogkvalho.png",
    userName: "joaogkvalho",
    userCompleteName: "João Gabriel Carvalho"
}

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

            <SearchUserInput />

            {/* <UserCard
                avatarUrl={userTest.avatarUrl}
                userName={userTest.userName}
                userCompleteName={userTest.userCompleteName}
            /> */}
        </ImageBackground>
    )
}