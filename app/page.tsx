// Home page
import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(home)/Other";
import Subscrible from "@/app/(share)/Subscrible";
import Sidebar from "app/(share)/Sidebar";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  const formattedPosts = await Promise.all(
    posts.map((post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return { ...post, image: imageModule.default };
    })
  );
  return formattedPosts;
};
export default async function Home() {
  const posts = await getPosts();
  console.log("🚀 ~ file: page.tsx:15 ~ Home ~ posts:", posts);
  const formatPost = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];
    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });
    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };
  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPost();
  return (
    <main className="px-10 leading-7 min-h-[100vh]">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscrible />
          </div>
        </div>
        {/* side bar */}
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
