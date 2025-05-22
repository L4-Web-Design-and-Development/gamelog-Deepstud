import { json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getClerksUser } from "~/utils/api.getClerksUser";

export const loader: LoaderFunction = async (args) => {
  const userData = await getClerksUser(args);

  if (userData === "Unknowen") {
    return redirect("/login"); // handle unauthenticated users
  }

  return json(userData);
};

export default function ProfilePage() {
  const { user } = useLoaderData<typeof loader>();

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <img src={user.imageUrl} alt="User profile" />
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
