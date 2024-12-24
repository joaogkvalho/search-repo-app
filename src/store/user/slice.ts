import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { userInitalState } from "./initialState";
import { filterUserRepos, loadMoreRepos, searchUserRepos, searchUserRequest } from "./thunks";

export const userSlice = createSlice({
    name: "user",
    initialState: userInitalState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setUserFavoriteRepos: (state, action) => {
            state.userFavoriteRepos = action.payload
        },
        setShowUserRepo: (state, action) => {
            state.showUserRepo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchUserRequest.fulfilled, (state, action) => {
                state.user = action.payload
                
                state.userName = ""
                state.showUserRepo = true
            })
            .addCase(searchUserRequest.rejected, (state, action) => {
                state.userName = ""

                Alert.alert("Erro", action.payload as string)
            })

        builder
            .addCase(searchUserRepos.fulfilled, (state, action) => {
                state.userRepos = action.payload
                state.loading = false
            })
            .addCase(searchUserRepos.pending, (state) => {
                state.loading = true
            })

        builder
            .addCase(loadMoreRepos.fulfilled, (state, action) => {
                state.userRepos = [...state.userRepos, ...action.payload]
                state.loading = false
            })
            .addCase(loadMoreRepos.pending, (state) => {
                state.loading = true
            })

        builder
            .addCase(filterUserRepos.fulfilled, (state, action) => {
                state.userRepos = action.payload.items

                state.filter = ""
                state.loading = false
            })
            .addCase(filterUserRepos.pending, (state) => {
                state.loading = true
            })
    },
})