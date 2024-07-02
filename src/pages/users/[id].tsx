import { GetServerSideProps, NextPage } from "next";
import UserForm from "../../components/UserForm";
import { getUserById } from "../../utils/api";
import { User } from "../../utils/type";

interface UserPageProps {
  user: User;
}

const UserPage: NextPage<UserPageProps> = ({ user }) => {
  return <UserForm initialUser={user} />;
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  const { id } = context.query;
  try {
    const user = await getUserById(Number(id));
    return { props: { user } };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { props: { user: null } }; // Handle error case appropriately
  }
};

export default UserPage;
