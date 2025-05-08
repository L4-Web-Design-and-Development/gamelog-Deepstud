import { PrismaClient } from "@prisma/client";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GameCard from "~/components/game-card";
import fallbackImage from "~/assets/svg/fallback_image.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      releaseDate: true,
      imageUrl: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  console.log({ games });
  return (
    <div className="flex flex-wrap gap-4 selection:justify-start my-auto p-4 m-1">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          releaseDate={game.releaseDate}
          genre={game.category?.title || "Unknown"}
          imageUrl={game.imageUrl || fallbackImage}
        />
      ))}
    </div>
  );
}
