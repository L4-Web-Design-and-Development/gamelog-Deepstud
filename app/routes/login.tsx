import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

export default function login() {
  return (
    <div>
      <h1>Index Route</h1>
      <SignedIn>
        <p>You are signed in!</p>

        <UserButton />
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>

        <SignInButton />
      </SignedOut>
    </div>
  );
}
