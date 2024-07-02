export interface Post {
  id: number;
  title: string;
  body: string;
  user_id: number;
}
export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UsersProps {
  users: User[];
}

export interface BlogPostDetailProps {
  post: Post;
  comments: Comment[];
  user: User;
}
