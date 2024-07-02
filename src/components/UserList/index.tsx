import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../utils/api";
import { useRouter } from "next/router";
import { Container, ListGroup, Button } from "react-bootstrap";
import { UsersProps, User } from "../../utils/type";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList: React.FC<UsersProps> = ({ users }) => {
  const [userList, setUserList] = useState<User[]>(users); // Use initial props as state
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUserList(userList.filter((user) => user.id !== id));
  };

  const handleCreateUser = () => {
    router.push("/users/create");
  };

  return (
    <Container className="my-5">
      <h1>User List</h1>
      <Button onClick={handleCreateUser} variant="primary" className="mb-3">
        Create New User
      </Button>
      <ListGroup>
        {userList.map((user) => (
          <ListGroup.Item
            key={user.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              {user.name} ({user.email})
            </span>
            <Button
              onClick={() => handleDelete(user.id)}
              variant="danger"
              size="sm"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UserList;
