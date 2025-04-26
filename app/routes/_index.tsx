import { PrismaClient } from "@prisma/client";

import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

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
      <div className="flex justify-center ">
        <h1 className=" text-6xl font-bold m-auto">
          Game <span className="text-blue-800">Log</span>!
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly m-auto py-4 ">
        {games.map((game) => (
          <div key={game.id}>
            <h2 className="flex wrap items-start justify-evenly">
              {game.title} £{game.price}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
