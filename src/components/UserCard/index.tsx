import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface UserCardProps {
    avatarUrl: string,
    userName: string,
    userCompleteName: string
}

export function UserCard({ avatarUrl, userName, userCompleteName }: UserCardProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
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