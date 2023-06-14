import React from "react";
import Image from "next/image";
import Twitter from "public/assets/social_twitter.png";
import Facebook from "public/assets/social_facebook.png";
import Instagram from "public/assets/social_instagram.png";
import Google from "public/assets/social_google.png";
import Discord from "public/assets/social_discord.png";
import Link from "next/link";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Google"
          width={20}
          height={20}
          src={Google}
        />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Facebook"
          width={20}
          height={20}
          src={Facebook}
        />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Instagram"
          width={20}
          height={20}
          src={Instagram}
        />
      </a>

      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Discord"
          width={20}
          height={20}
          src={Discord}
        />
      </a>

      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Twitter"
          width={20}
          height={20}
          src={Twitter}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
