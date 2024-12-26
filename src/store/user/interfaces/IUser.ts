export type Repo = {
   id: string
   name: string
   description: string
   owner: {
      login: string
      avatar_url: string
   }
   url: string
   created_at: string
   updated_at: string
   language: string
   forks_count: number
   stargazers_count: number
}

export type FavoriteRepo = {
   id: string
   name: string
   owner: {
      login: string
      avatar_url: string
   }
   description: string
   language: string
}

export type User = {
   login: string
   name: string
   avatar_url: string
   public_repos: number
   followers: number
   following: number
}

export type IUserProps = {
   userName: string
   filter: string
   loading: boolean
   showUserRepo: boolean
   repoListPage: number
   user: User
   userRepos: {
      userName: string,
      userRepos: Repo[]
   }
   userFavoriteRepos: FavoriteRepo[]
}