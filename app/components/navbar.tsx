import siteLogo from "~/assets/svg/gamelog-logo.svg";
import { Link } from "@remix-run/react";
export default function NavBar() {
  return (
    <nav className="w-full flex items-start justify-between py-8 px-8">
      <section className="flex items-start">
        <Link to="/">
          <img className="h-10 w-auto mr-4" src={siteLogo} alt="logo" />
        </Link>
      </section>
      <section className="flex gap-8 text-center text-lg justify-end">
        <Link to="/add-games" className="whitespace-nowrap">
          Add Games
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </section>
    </nav>
  );
}
