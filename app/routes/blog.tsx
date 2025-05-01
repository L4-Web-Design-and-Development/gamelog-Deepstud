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

  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return json({ posts });
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  console.log({ posts });
  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-48 h-48 flex flex-col items-center justify-between p-2  "
            >
              <h1 className="font-bold">{post.title}</h1>
              <div className="flex align-top">
                <img
                  className="flex align-top rounded-lg size-10"
                  src="/app/assets/png/avatar.png"
                  alt="Profile"
                />
                <h2 className="flex my-5 font-semibold">
                  {post.user.username}
                </h2>
              </div>
              <h1 className="text-center text-gray-700">Post:</h1>
              <div className="text">
                <p>
                  {post.content.length > 100
                    ? `${post.content.slice(0, 100)}...`
                    : post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
