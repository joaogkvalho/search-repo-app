import { Feather } from "@expo/vector-icons"
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { About } from "../screens/About"
import { Favorites } from "../screens/Favorites"
import { Repository } from "../screens/Repository"
import { User } from "../screens/User"
import { Users } from "../screens/Users"
import { Repo } from "../store/user/interfaces/IUser"

type AppRoutes = {
    users: undefined
    user: undefined
    favorites: undefined
    about: undefined
    repository: { repo: Repo }
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
                    height: 64,
                    paddingBottom: 14,
                    paddingTop: 14
                }
            }}
        >
            <Screen
                name="users"
                component={Users}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={26} color={color} />
                    ),
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

            <Screen
                name="user"
                component={User}
                options={{ 
                    tabBarButton: () => null,
                    tabBarItemStyle: {
                        display: "none"
                    }
                }}
            />

            <Screen 
                name="repository"
                component={Repository}
                options={{
                    tabBarButton: () => null,
                    tabBarItemStyle: {
                        display: "none"
                    }
                }}
            />
        </Navigator>
    )
}