import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { Repo } from "../../store/user/interfaces/IUser";
import { styles } from "./styles";

interface UserRepoProps {
    userRepo: Repo
}

export function UserRepo({ userRepo }: UserRepoProps) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenRepoDetails() {
        navigation.navigate("repository", { repo: userRepo })
    }

    return (
        <TouchableOpacity
            onPress={handleOpenRepoDetails}
            style={styles.container}
        >
            <Text style={styles.title}>{userRepo.name}</Text>
            
            {userRepo.description && (
                <Text 
                    numberOfLines={3}
                    style={styles.description}
                >
                    {userRepo.description}
                </Text>
            )}
        </TouchableOpacity>
    )
}