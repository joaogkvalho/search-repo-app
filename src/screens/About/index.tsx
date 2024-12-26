import { Feather } from "@expo/vector-icons";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { Logo } from "../../components/Logo";
import { styles } from "./styles";

export function About() {
    function handleNavigateToGithubProfile() {
        Linking.openURL("https://github.com/joaogkvalho")
    }

    function handleNavigateToLinkedinProfile() {
        Linking.openURL("https://www.linkedin.com/in/joaogkvalho/")
    }

    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <View style={styles.creatorInfo}>
                    <Image 
                        src="https://github.com/joaogkvalho.png" 
                        style={styles.profileImg}
                    />

                <View>
                    <Text style={styles.descriptionText}>Criado por:</Text>
                    <Text style={styles.nameTitle}>João Gabriel Carvalho</Text>
                </View>
                </View>

                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity
                        style={styles.githubButton} 
                        activeOpacity={0.8}
                        onPress={handleNavigateToGithubProfile}
                    >
                        <Feather name="github" size={24} color="7F7F98" />
                        <Text style={styles.githubButtonText}>
                            Perfil no Github
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.linkedinButton} 
                        activeOpacity={0.8}
                        onPress={handleNavigateToLinkedinProfile}
                    >
                        <Feather name="linkedin" size={24} color="#FFF" />
                        <Text style={styles.linkedinButtonText}>
                            Perfil no Linkedin
                        </Text>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}