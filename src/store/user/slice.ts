import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitalState } from "./initialState";
import { filterUserRepos, searchUserRepos, searchUserRequest } from "./thunks";

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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchUserRequest.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(searchUserRequest.rejected, () => {
                alert("ERRO NA REQUISÇÃO")
            }),

        builder
            .addCase(searchUserRepos.fulfilled, (state, action) => {
                state.userRepos = action.payload
                state.loading = false
            })
            .addCase(searchUserRepos.pending, (state) => {
                state.loading = true
            })
            .addCase(searchUserRepos.rejected, () => {
                alert("ERRO NA REQUISÇÃO")
            }),

        builder
            .addCase(filterUserRepos.fulfilled, (state, action) => {
                state.userRepos = action.payload.items
                state.loading = false
            })
            .addCase(filterUserRepos.pending, (state) => {
                state.loading = true
            })
            .addCase(filterUserRepos.rejected, () => {
                alert("ERRO NA REQUISÇÃO")
            })
    },
})