import { useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import GameForm from "~/components/game-form";
//Loads game categories
export async function loader() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });
  await prisma.$disconnect();
  return json({ categories });
}

//Creates a entire in the game table
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const rating = parseFloat(formData.get("rating") as string);
  const releaseDate = new Date(formData.get("releaseDate") as string);
  const imageUrl = formData.get("imageUrl") as string;
  const categoryId = formData.get("categoryId") as string;

  const prisma = new PrismaClient();
  await prisma.game.create({
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

export default function AddGame() {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1 className="font-bold text-5xl text-center mb-10">
        Add <span className="text-cyan-400">Game</span>
      </h1>
      <GameForm categories={categories} imageUrl="" releaseDate="" genre="" />
    </div>
  );
}
