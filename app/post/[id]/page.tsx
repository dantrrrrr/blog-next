import Sidebar from "@/app/(share)/Sidebar";
import { prisma } from "@/app/api/client";
import React from "react";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/type";
import Content from "./Content";
export const revalidate = 60;

type Props = {
  params: { id: string };
};
const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    console.log("post with id not found");
    return null;
  }
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };
  return formattedPost;
};
const Post = async ({ params }: Props) => {
  const { id } = params;

  const post: FormattedPost | null = await getPost(id);
  console.log("🚀 ~ file: page.tsx:26 ~ Post ~ post:", post);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
