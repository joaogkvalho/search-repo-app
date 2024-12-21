export type Repo = {
   name: string,
   description: string
   url: string
   created_at: string
   updated_at: string
   language: string
   forks_count: number
   stargazers_count: number
}

export type IUserProps = {
   userName: string,
   user: {
      login: string
      name: string
      avatar_url: string
      public_repos: number
      followers: number
      following: number
   },
   userRepos: Repo[]
}