import { Feather } from "@expo/vector-icons";
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import bg from "../../assets/background.png";
import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setUserName } from "../../store/user/actions";
import { searchUserRequest } from "../../store/user/thunks";
import { styles } from "./styles";

export function Users() {
    const { user, userName } = useAppSelector((store) => store.user)
    const dispatch = useAppDispatch()

    return (
        <ImageBackground 
            source={bg} 
            defaultSource={bg} 
            style={styles.container} 
            resizeMode="cover"
        >
            <View style={styles.formContainer}>
                <Header />

                <Text style={styles.description}>
                    Pesquise repositórios a partir de um usuário do github.
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar usuário"
                        placeholderTextColor="#7F7F98"
                        onChangeText={(name) => dispatch(setUserName(name))}
                    />

                    <TouchableOpacity
                        onPress={() => dispatch(searchUserRequest(userName))}
                    >
                        <Feather
                            name="search" 
                            size={24}
                            color="#7F7F98"
                            style={{ width: 24 }} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        
            {user.login && (
                <UserCard
                    avatarUrl={user.avatar_url}
                    userName={user.login}
                    userCompleteName={user.name}
                />
            )}
        </ImageBackground>
    )
}