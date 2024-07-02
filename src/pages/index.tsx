import { GetServerSideProps, NextPage } from "next";
import { getPosts } from "../utils/api";
import BlogPostList from "../components/BlogPostList";

const Home: NextPage<{ posts: any[] }> = ({ posts }) => (
  <BlogPostList posts={posts} />
);

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

export default Home;
