import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../utils/api";
import { useRouter } from "next/router";
import { Container, ListGroup, Button } from "react-bootstrap";
import { User, UsersProps } from "../../utils/type";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList: React.FC<UsersProps> = ({ users }) => {
  const [usersList, setUsersList] = useState<User[]>(users);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsersList(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsersList(usersList.filter((user) => user.id !== id));
  };

  const handleCreateUser = () => {
    router.push("/users/create");
  };

  const handleEditUser = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <Container className="my-5">
      <h1>User List</h1>
      <Button onClick={handleCreateUser} variant="primary" className="mb-3">
        Create New User
      </Button>
      <ListGroup>
        {usersList.map((user) => (
          <ListGroup.Item
            key={user.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              {user.name} ({user.email})
            </span>
            <div>
              <Button
                onClick={() => handleEditUser(user.id)}
                variant="warning"
                size="sm"
                className="me-2"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(user.id)}
                variant="danger"
                size="sm"
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="text-center mt-4">
        <Button variant="primary" href="/">
          Back to Posts
        </Button>
      </div>
    </Container>
  );
};

export default UserList;
