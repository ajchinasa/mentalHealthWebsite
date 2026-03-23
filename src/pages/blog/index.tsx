import CTA from "../../pages/home/view/CTA";
import BlogList from "./view/BlogList";
import FeaturedArticle from "./view/FeaturedArticle";
import Landing from "./view/Landing";

const Blog = () => {
  return (
    <div className="mt-20 md:mt-16 w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden">
      <Landing />
      <FeaturedArticle />
      <BlogList />
      <CTA />
    </div>
  );
};

export default Blog;
