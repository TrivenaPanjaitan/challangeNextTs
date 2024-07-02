// src/pages/users/create.tsx

import { NextPage } from "next";
import CreateUser from "../../components/CreateUser";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateUserPage: NextPage = () => {
  return (
    <Container>
      <CreateUser />
    </Container>
  );
};

export default CreateUserPage;
