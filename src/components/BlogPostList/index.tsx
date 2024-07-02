import React from "react";
import Link from "next/link";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Post } from "../../utils/type";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./index.module.scss";
interface BlogPostListProps {
  posts: Post[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col>
          <h1>Blog Post List</h1>
        </Col>
        <Col className="text-right">
          <Link href="/users">
            <Button variant="primary">User List</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className={`card ${styles.card}`}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body.substring(0, 100)}...</Card.Text>
                <Link href={`/posts/${post.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPostList;
