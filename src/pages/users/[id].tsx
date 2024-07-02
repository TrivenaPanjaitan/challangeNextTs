import { GetServerSideProps, NextPage } from "next";
import { getUserById, updateUser, createUser } from "../../utils/api";
import UserForm from "../../components/UserForm";

const UserDetail: NextPage<{ user: any }> = ({ user }) => {
  const handleSubmit = async (user: {
    id?: number;
    name: string;
    email: string;
  }) => {
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await createUser(user);
    }
  };

  return <UserForm user={user} onSubmit={handleSubmit} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const user = await getUserById(Number(id));
  return { props: { user } };
};

export default UserDetail;
