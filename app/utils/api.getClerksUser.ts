import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";

export const getClerksUser: LoaderFunction = async (args) => {
  // Use `getAuth()` to retrieve the user's ID
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }

  // Initialize the Backend SDK and get the user's full `Backend User` object
  const user = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);
  // Return the retrieved user data
  return { user };
};
