import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import bg from "../../assets/background.png";
import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { setShowUserRepo, setUserName } from "../../store/user/actions";
import { searchUserRequest } from "../../store/user/thunks";
import { styles } from "./styles";

export function Users() {
    const { user, userName, showUserRepo } = useAppSelector((store) => store.user)

    const dispatch = useAppDispatch()
    const navigation = useNavigation()

    function handleSearchUser() {
        if (!userName.trim()) {
            Alert.alert("Por favor preencha o campo de usuário")

            return
        }

        dispatch(searchUserRequest(userName))
    }

    useEffect(() => {
        navigation.addListener('blur' , () => {
            dispatch(setShowUserRepo(false))
        })
    }, [])

    return (
        <ImageBackground 
            source={bg} 
            defaultSource={bg} 
            style={styles.container} 
            resizeMode="cover"
        >
            <View style={styles.formContainer}>
                <Logo />

                <Text style={styles.description}>
                    Pesquise repositórios a partir de um usuário do github.
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={userName}
                        clearTextOnFocus
                        placeholder="Buscar usuário"
                        placeholderTextColor="#7F7F98"
                        onChangeText={(name) => dispatch(setUserName(name))}
                    />

                    <TouchableOpacity onPress={handleSearchUser}>
                        <Feather
                            name="search" 
                            size={24}
                            color={userName.trim() ? "#FFF" : "#7F7F98"}
                            style={{ width: 24 }} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        
            {user.login && showUserRepo && (
                <UserCard
                    avatarUrl={user.avatar_url}
                    userName={user.login}
                    userCompleteName={user.name}
                />
            )}
        </ImageBackground>
    )
}