import siteLogo from "~/assets/svg/gamelog-logo.svg";
import { Link } from "@remix-run/react";
export default function NavBar() {
  return (
    <nav className="container mx-auto flex items-start py-8 justify-between">
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <img className="h-10 w-auto mr-4" src={siteLogo} alt="logo " />
        </Link>
        <h1 className="text-5xl font-bold">
          Game <span className="text-blue-800">Log</span>!
        </h1>
      </div>
      <div className="flex gap-8">
        <Link to="/add-games">Add Games</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
