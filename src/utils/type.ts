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
  post: {
    id: number;
    title: string;
    body: string;
    user_id: number;
  };
  comments: Comment[];
  user: User;
}
