import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Button, Alert } from "react-bootstrap";
import { createUser } from "../../utils/api";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser({ name, email });
      setSuccess(true);
      setError(null);
      // Redirect to user list after successful creation
      setTimeout(() => router.push("/users"), 2000);
    } catch (err) {
      setError("Failed to create user. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="my-5">
      <h1>Create User</h1>
      <Form onSubmit={handleSubmit}>
        {success && <Alert variant="success">User created successfully!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
