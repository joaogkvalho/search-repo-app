import { Feather } from "@expo/vector-icons"
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { About } from "../screens/About"
import { Favorites } from "../screens/Favorites"
import { Users } from "../screens/Users"

type AppRoutes = {
    users: undefined
    favorites: undefined
    about: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#8FB2F5",
                tabBarInactiveTintColor: "#7F7F98",
                tabBarStyle: {
                    backgroundColor: "#22222F",
                    borderTopWidth: 0,
                    height: 72,
                    paddingTop: 18,
                    paddingBottom: 18
                }
            }}
        >
            <Screen
                name="users"
                component={Users}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={26} color={color} />
                    )
                }}
            />

            <Screen
                name="favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="star" size={26} color={color} />
                    )
                }}
            />

            <Screen
                name="about"
                component={About}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="info" size={26} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}