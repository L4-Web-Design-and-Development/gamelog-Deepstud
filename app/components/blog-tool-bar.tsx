import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function BlogToolBar() {
  return (
    <nav className="  px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/blog" className="text-blue-600">
          Gamelog <span className="text-white">Blog posts</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <SignedOut>
          <p>Sign in now to create a post! </p>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Link to="/add-blog" className="text-white hover:text-blue-600">
            New Post
          </Link>
          <p>Account: </p>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
