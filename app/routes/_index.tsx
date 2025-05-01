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
    <div className="flex flex-wrap justify-evenly gap-4 p-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="w-48 h-48 flex flex-col items-center justify-between p-2  "
        >
          <section>
            <img
              className="h-24 w-full object-cover rounded"
              src="/app/assets/png/field-game-background.png"
              alt={game.title}
            />
          </section>
          <div className=" flex ">
            <section>
              <h2 className="text-center font-semibold">{game.title}</h2>
              <h3 className="text-center text-gray-700">£{game.price}</h3>
            </section>
            <section className="flex-col gap-20">
              <button className="flex border-2 border-cyan-100 rounded-sm my-2">
                Edit
              </button>
              <button className=" flex border-2 border-red-600 rounded-sm my-2">
                Delete
              </button>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
