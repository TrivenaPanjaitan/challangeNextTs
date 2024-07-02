import { GetServerSideProps, NextPage } from "next";
import { getUsers } from "../../utils/api";
import UserList from "../../components/UserList";
import { UsersProps } from "../../utils/type";

const Users: NextPage<UsersProps> = ({ users }) => {
  return <UserList users={users} />;
};

export const getServerSideProps: GetServerSideProps<UsersProps> = async () => {
  try {
    const users = await getUsers();
    return { props: { users } };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { props: { users: [] } }; // Return an empty array on error
  }
};

export default Users;
