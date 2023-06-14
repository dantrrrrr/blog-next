import React from "react";
import SocialLinks from "./SocialLinks";
import Subscrible from "./Subscrible";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="">
      <h4 className="bg-wh-900 py-3 px-5 text-wh-500 text-xs text-center font-bold">
        Subscrible and follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscrible />

      <Image
        className="hidden md:block my-8 w-full"
        src={Ad2}
        alt="advert-2 image"
        placeholder="blur"
        width={500}
        height={1000}
        style={{ objectFit: "cover" }}
      />

      <h4 className="bg-wh-900 py-3 px-5 text-wh-500 text-xs text-center font-bold">
        About the blog
      </h4>
      <div className=" my-3 flex justify-center ">
        <Image
          src={AboutProfile}
          alt="about image"
          placeholder="blur"
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className=" py-3 px-5 text-wh-500 text-center font-bold">
        dant ruong
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, saepe?
        Quam fugiat molestiae ducimus numquam nobis obcaecati hic, expedita
      </p>
    </section>
  );
};

export default Sidebar;
