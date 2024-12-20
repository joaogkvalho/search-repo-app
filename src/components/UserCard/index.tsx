import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { styles } from "./styles";

interface UserCardProps {
    avatarUrl: string,
    userName: string,
    userCompleteName: string
}

export function UserCard({ avatarUrl, userName, userCompleteName }: UserCardProps) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenUserInfo() {
        navigation.navigate("user")
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.5}
            onPress={handleOpenUserInfo}
        >
            <Image src={avatarUrl} style={styles.avatar} />

            <View style={styles.textContainer}>
                <Text style={styles.userCompleteName}>
                    {userCompleteName}
                </Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>
        </TouchableOpacity>
    )
}