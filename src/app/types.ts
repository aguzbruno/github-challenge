export interface User {
    id: number;
    login: string;
    avatar_url: string;
  }
  
  export interface UserDetails extends User {
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
  }
  
  export interface SearchResult {
    items: User[];
  }