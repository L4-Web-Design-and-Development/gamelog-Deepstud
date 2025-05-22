import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json, redirect, LoaderFunctionArgs } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";
import GameForm from "~/components/game-form";

export async function loader({ params }: LoaderFunctionArgs) {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });
  try {
    const game = await prisma.game.findUnique({
      where: {
        id: params.gameId,
      },
      select: {
        title: true,

        description: true,
        price: true,
        rating: true,
        releaseDate: true,
        imageUrl: true,
        categoryId: true,
      },
    });

    return json({ game, categories });
  } finally {
    await prisma.$disconnect();
  }
}

//Creates a entire in the game table
export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const rating = parseFloat(formData.get("rating") as string);
  const releaseDate = new Date(formData.get("releaseDate") as string);
  const imageUrl = formData.get("imageUrl") as string;
  const categoryId = formData.get("categoryId") as string;

  const prisma = new PrismaClient();
  await prisma.game.update({
    where: {
      id: params.gameId,
    },
    data: {
      title,
      description,
      price,
      rating,
      releaseDate,
      imageUrl,
      categoryId,
    },
  });
  await prisma.$disconnect();
  return redirect("/");
}

export default function UpdateGame() {
  const { categories, game } = useLoaderData<typeof loader>();
  const [imageUrl] = useState(game?.imageUrl || "");
  useForm({
    defaultValues: {
      title: game?.title || "",
      description: game?.description || "",
      price: game?.price || 0,
      rating: game?.rating || 0,
      releaseDate: game?.releaseDate?.slice(0, 10) || "", // format to yyyy-mm-dd
      categoryId: game?.categoryId || "",
    },
  });

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="font-bold text-5xl text-center mb-10">
        Update <span className="text-cyan-400">Game</span>
      </h1>
      <GameForm
        categories={categories}
        imageUrl={imageUrl}
        releaseDate={game?.releaseDate?.slice(0, 10) || ""}
        defaultValues={{
          title: game?.title || "",
          description: game?.description || "",
          price: game?.price || 0,
          rating: game?.rating || 0,
          releaseDate: game?.releaseDate?.slice(0, 10) || "",
          categoryId: game?.categoryId || "",
        }}
      />{" "}
    </div>
  );
}
