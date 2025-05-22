import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import stylesheet from "~/tailwind.css?url";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export default ClerkApp(App);

export function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-950 text-gray-50">
          <div className="flex-1">
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
            <Scripts />
          </div>
        </div>
      </body>
    </html>
  );
}
