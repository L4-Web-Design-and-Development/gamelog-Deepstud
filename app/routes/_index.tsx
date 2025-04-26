import { PrismaClient } from "@prisma/client";

import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import Navbar from "app/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany();

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  console.log({ games });
  return (
    <div>
      <Navbar />
      <section>
        <div className="flex flex-wrap justify-evenly m-auto py-4 ">
          {games.map((game) => (
            <div key={game.id}>
              <img
                className=" max-h-14 max-w-auto"
                src="/app/assets/png/field-game-background.png"
                alt=""
              />
              <h2 className="flex wrap items-start justify-evenly">
                {game.title}
              </h2>
              <h3 className="flex justify-center">£{game.price}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
