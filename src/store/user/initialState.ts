import { IUserProps } from "./interfaces/IUser";

export const userInitalState: IUserProps = {
   userName: "",
   filter: "",
   loading: false,
   user: {
    login: "",
    name: "",
    avatar_url: "",
    public_repos: 0,
    followers: 0,
    following: 0
   },
   userRepos: [],
   userFavoriteRepos: [],
}