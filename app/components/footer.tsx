import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";
import twitter from "~/assets/svg/twitter.svg";
import facebook from "~/assets/svg/facebook.svg";
import instagram from "~/assets/svg/instagram.svg";
export default function Footer() {
  return (
    <div className="flex justify-between items-start flex-wrap p-6  ">
      <div className="flex flex-col items-start space-y-4 m-1">
        <section>
          <Link to="/">
            <img className="h-10 w-auto" src={siteLogo} alt="Site Logo" />
          </Link>
        </section>

        <section className="flex space-x-4">
          <Link to="/">
            <img className="h-6 w-auto" src={facebook} alt="Facebook" />
          </Link>
          <Link to="/">
            <img className="h-6 w-auto" src={instagram} alt="Instagram" />
          </Link>
          <Link to="/">
            <img className="h-6 w-auto" src={twitter} alt="Twitter" />
          </Link>
        </section>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        <section className="flex flex-col">
          <h1 className="font-bold mb-1">Site</h1>
          <Link to="">Games</Link>
          <Link to="">About</Link>
          <Link to="">Blog</Link>
        </section>
        <section className="flex flex-col">
          <h1 className="font-bold mb-1">Support</h1>
          <Link to="">Legal</Link>
          <Link to="">Contact Us</Link>
          <Link to="">Privacy Policy</Link>
        </section>
        <section className="flex flex-col">
          <h1 className="font-bold mb-1">Follow Us</h1>
          <Link to="">Facebook</Link>
          <Link to="">Twitter</Link>
          <Link to="">Instagram</Link>
        </section>
      </div>
    </div>
  );
}
