import React from "react";
import Card from "../(share)/Card";
import { Post } from "@prisma/client";
type Props = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      {/* Header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl ">Lastest new in tech world</p>
      </div>
      {/* flex */}
      {/* <div className="flex justify-between items-center gap-5 ">
        <div className="bg-wh-900 h-96 basis-1/2"></div>
        <div className="flex flex-col gap-3 bg-white-900 h-96 basis-1/2">
          <div className="bg-wh-500 basis-1/3 "></div>
          <div className="bg-wh-500 basis-1/3 "></div>
          <div className="bg-wh-500 basis-1/3 "></div>
        </div>
      </div> */}
      {/* grid */}
      <div className="  sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8   my-5">
        {/* large card */}
        <Card
          imageHeight="h-96"
          isLongForm
          className=" row-span-3 col-span-1"
          post={techPosts[0]}
        />
        {/* sm card */}
        <Card
          imageHeight="h-48"
          isSmallCard
          className=" row-span-1 col-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          post={techPosts[1]}
        />
        {/* sm card */}
        <Card
          imageHeight="h-48"
          isSmallCard
          className=" row-span-1 col-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          post={techPosts[2]}
        />
        {/* sm card */}
        <Card
          imageHeight="h-48"
          isSmallCard
          className="row-span-1 col-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          post={techPosts[3]}
        />
      </div>
    </section>
  );
};

export default Tech;
