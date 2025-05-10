import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import BlogCard from "~/components/Blog-card";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const prisma = new PrismaClient();

  const blogPost = await prisma.blogPost.findMany();

  return json({ blogPost });
}

export default function Blog() {
  const { blogPost } = useLoaderData<typeof loader>();

  console.log({ blogPost });
  return (
    <div className="flex flex-wrap gap-4 selection:justify-start my-auto p-4 m-1">
      {blogPost.map((blogPost) => (
        <BlogCard
          key={blogPost.id}
          title={blogPost.title}
          releaseDate={blogPost.createdAt}
          Account={blogPost.user}
          content={blogPost.content}
        />
      ))}
    </div>
  );
}
