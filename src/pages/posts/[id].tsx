import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import BlogPostDetail from "../../components/BlogPostDetail";
import { getPostById, getPostComments, getUserById } from "../../utils/api";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface PostDetailPageProps {
  post: {
    id: number;
    title: string;
    body: string;
    user_id: number;
  };
  comments: {
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({
  post,
  comments,
  user,
}) => {
  if (!post) {
    return (
      <Container className="my-5">
        <h1>Post not found</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <BlogPostDetail post={post} comments={comments} user={user} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const post = (await getPostById(Number(id))) || null;
  const comments = (await getPostComments(Number(id))) || [];
  const user = (await getUserById(Number(post.user_id))) || null;

  return {
    props: {
      post,
      comments,
      user,
    },
  };
};

export default PostDetailPage;
