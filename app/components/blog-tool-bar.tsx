import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function BlogToolBar() {
  return (
    <nav className=" m-4 px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/blog" className="text-blue-600">
          Gamelog <span className="text-white">Blog posts</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {/*This tells clerk auth what to do if a user is  signed out */}
        <SignedOut>
          <SignInButton
            mode="modal"
            appearance={{
              elements: {
                card: "bg-white shadow-lg rounded-lg p-6",
                formButtonPrimary:
                  "bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded",
              },
            }}
          >
            <button className="bg-slate-400 hover:bg-cyan-400 text-white text-sm px-4 py-2 rounded">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        {/*This tells clerk auth what to do if a user is  signed in */}

        <SignedIn>
          <Link
            to="/add-blog"
            className="font-bold text-white bg-cyan-600 hover:bg-cyan-500  p-3 rounded-lg"
          >
            New Post
          </Link>
          <p>Account: </p>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
