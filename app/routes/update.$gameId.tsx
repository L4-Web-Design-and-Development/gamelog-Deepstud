import { useState, useRef } from "react";
import { Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import ImageUploader from "~/components/ImageUploader";
import { useForm } from "react-hook-form";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const prisma = new PrismaClient();

  try {
    const game = await prisma.game.findUnique({
      where: {
        id: params.gameId,
      },
      select: {
        title: true,
        createdAt: true,
      },
    });

    return json({ game });
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
  // const { categories } = useLoaderData<typeof loader>();
  const [imageUrl, setImageUrl] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // Once validation passes, manually submit the form
    formRef.current?.submit();
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="font-bold text-5xl text-center mb-10">
        Add <span className="text-cyan-400">Game</span>
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-950 p-8 rounded-xl">
        <form
          ref={formRef}
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <input type="hidden" name="imageUrl" value={imageUrl} />

          <div>
            <label
              htmlFor="title"
              className="block text-sm text-slate-400 mb-2"
            >
              Title
            </label>
            <input
              {...register("title", { required: "Game title is required" })}
              type="text"
              className="w-full p-3 bg-gray-800 rounded-md"
            />
            {errors.title && typeof errors.title.message === "string" && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm text-slate-400 mb-2"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              name="description"
              rows={4}
              className="w-full p-3 bg-gray-800 rounded-md"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">
                {String(errors.description.message)} ===
              </p>
            )}
          </div>

          <div className="mb-8">
            <ImageUploader onImageUploaded={setImageUrl} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm text-slate-400 mb-2"
              >
                Price
              </label>
              <input
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: { value: 0.0, message: "Minimum price 0" },
                })}
                name="price"
                type="number"
                step="0.01"
                min="0"
                className="w-full p-3 bg-gray-800 rounded-md"
              />
              {errors.price && (
                <p className="text-red-500">{String(errors.price.message)}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-sm text-slate-400 mb-2"
              >
                Rating
              </label>

              <input
                {...register("rating", {
                  required: "Rating is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Minimum is 0" },
                  max: { value: 5, message: "Maximum is 5" },
                })}
                name="rating"
                type="number"
                step=".5"
                min="0"
                className="w-full p-3 bg-gray-800 rounded-md"
              />
              {errors.rating && (
                <p className="text-red-500">{String(errors.rating.message)}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="releaseDate"
              className="block text-sm text-slate-400 mb-2"
            >
              Release Date
            </label>
            <input
              {...register("releaseDate", {
                required: "Release date is required",
              })}
              name="releaseDate"
              type="date"
              className="w-full p-3 bg-gray-800 rounded-md"
            />
            {errors.releaseDate && (
              <p className="text-red-500">
                {String(errors.releaseDate.message)}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-16">
            <Link
              to="/"
              className="text-red-300 border-2 border-red-300 py-3 px-6 rounded-md hover:bg-red-50/10"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-cyan-600 text-white py-3 px-6 rounded-md hover:bg-cyan-500"
            >
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
