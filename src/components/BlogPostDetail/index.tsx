import React from "react";
import { Card, ListGroup, Container, Button } from "react-bootstrap";
import { BlogPostDetailProps } from "../../utils/type";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  comments,
  user,
}) => {
  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h3">{post.title}</Card.Header>
        <Card.Body>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        {user && (
          <Card.Footer className="text-muted">
            <strong>Author:</strong> {user.name} ({user.email})
          </Card.Footer>
        )}
      </Card>

      <Card className="mt-4">
        <Card.Header as="h4">Comments</Card.Header>
        <ListGroup variant="flush">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <ListGroup.Item key={comment.id}>
                <h5>{comment.name}</h5>
                <p>{comment.body}</p>
                <small className="text-muted">{comment.email}</small>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No comments yet.</ListGroup.Item>
          )}
        </ListGroup>
      </Card>

      <div className="text-center mt-4">
        <Button variant="primary" href="/">
          Back to Posts
        </Button>
      </div>
    </Container>
  );
};

export default BlogPostDetail;
