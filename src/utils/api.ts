import axios from "axios";

const API_BASE_URL = "https://gorest.co.in/public/v2";
const API_TOKEN =
  "d2ed3e41c00fbe2f674dcb489462871dd16fb15fc6736b974717fc7dcaefc6b4";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Posts
export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const getPostComments = async (postId: number) => {
  const response = await api.get(`/posts/${postId}/comments`);
  return response.data;
};

// Users
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: { name: string; email: string }) => {
  const response = await api.post("/users", user);
  return response.data;
};

export const updateUser = async (
  id: number,
  user: { name: string; email: string }
) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/users/${id}`);
};

// Comments
export const createComment = async (
  postId: number,
  comment: { name: string; email: string; body: string }
) => {
  const response = await api.post(`/posts/${postId}/comments`, comment);
  return response.data;
};

export const getCommentById = async (id: number) => {
  const response = await api.get(`/comments/${id}`);
  return response.data;
};

export default api;
