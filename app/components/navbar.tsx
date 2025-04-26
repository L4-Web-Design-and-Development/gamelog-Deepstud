import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export default function NavBar() {
  return (
    <div className="flex justify-start ">
      <img src="/app/assets/svg/gamelog-logo.svg" alt="" />
      <h1 className=" flex justify-start text-6xl font-bold m-auto">
        Game <span className="text-blue-800">Log</span>!
      </h1>
    </div>
  );
}
