import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import BlogCard from "~/components/Blog-card";
import { useLoaderData } from "@remix-run/react";
import BlogToolBar from "~/components/blog-tool-bar";
//Loads the blogPost table
export async function loader() {
  const prisma = new PrismaClient();

  const blogPost = await prisma.blogPost.findMany();

  return json({ blogPost });
}

export default function Blog() {
  const { blogPost } = useLoaderData<typeof loader>();

  console.log({ blogPost });
  return (
    <div className="min-h-screen ">
      <BlogToolBar />
      <div className="flex flex-wrap justify-start gap-4">
        {blogPost.map((blogPost) => (
          <BlogCard
            key={blogPost.id}
            title={blogPost.title}
            releaseDate={blogPost.createdAt}
            Account={blogPost.user}
            content={blogPost.content}
            profileImage={blogPost.userProfileImage}
          />
        ))}
      </div>
    </div>
  );
}
