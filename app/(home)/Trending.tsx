import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  post: Post;
};
type Props = {
  trendingPosts: Array<Post>;
};
const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      // href={"#"}
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
    >
      <div className="z-0 relative w-full h-full ">
        <Image
          src={post?.image}
          alt="Tech image"
          placeholder="blur"
          sizes="(max-width:480px) 100vw,
          (max-width:768px) 75vh,
          (max-width:1060px) 50vh,
          30vw
          "
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-1 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};
const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold  ">
          Trending
        </div>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus
          Modi?
        </p>
      </div>
      {/* flex  */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className=" basis-1/2 bg-wh-500 h-96  leftSide"></div>
        <div className=" flex flex-col gap-3 basis-1/2   rightSide">
          <div className="basis-1/2 bg-wh-500 topRight"></div>
          <div className="basis-1/2 flex gap-3 bottomRight">
            <div className="basis-1/2 bg-blue-500 leftBottomRight"></div>
            <div className="basis-1/2 bg-red-400 rightBottomRight"></div>
          </div>
        </div>
      </div> */}
      {/* grid */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-700"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-400"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-400"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-400"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a magnam
        obcaecati suscipit non totam repellat laboriosam quaerat, molestias
      </p>
    </section>
  );
};

export default Trending;
