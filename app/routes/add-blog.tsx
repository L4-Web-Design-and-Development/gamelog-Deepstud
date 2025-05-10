import { useState, useRef } from "react";
import { useLoaderData, Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";
import { getClerksUser } from "~/utils/getClerkUser";
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const user = "aaa";
  const prisma = new PrismaClient();
  await prisma.blogPost.create({
    data: {
      title,
      content,
      user,
    },
  });
  await prisma.$disconnect();

  return redirect("/");
}

export default function AddBlogPost() {
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
          <div>
            <label
              htmlFor="title"
              className="block text-sm text-slate-400 mb-2"
            >
              Title
            </label>
            <input
              {...register("title", { required: "Blog Post is required" })}
              type="text"
              className="w-full p-3 bg-gray-800 rounded-md"
            />
            {errors.title && typeof errors.title.message === "string" && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm text-slate-400 mb-2"
            >
              Description
            </label>
            <textarea
              {...register("content", {
                required: "content is required",
              })}
              name="content"
              rows={4}
              className="w-full p-3 bg-gray-800 rounded-md"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
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
