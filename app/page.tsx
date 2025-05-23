import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
 
  return (
    <section className="py-10">
      <div className="container max-w-3xl px-4 py-8">
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  );
};