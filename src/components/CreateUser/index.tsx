import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUser } from "../../utils/api";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !gender || !status) {
      setError("All fields are required.");
      return;
    }

    try {
      await createUser({ name, email, gender, status });
      router.push("/users"); // Redirect to the users list after successful creation
    } catch (err) {
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <Container className="my-5">
      <h1>Create User</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Control>
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
