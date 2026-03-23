import BlogCard from "@/components/BlogCard";
import CustomLoader from "@/components/core/Loader/CustomLoader";
import useGetAllPost from "../../hooks/useGetAllPost";
import empty from "@/assets/images/no_result.png";
import { Link } from "react-router-dom";

const RelatedPosts = () => {
  const { loading, blogPosts } = useGetAllPost();
  let content;
  if (loading) {
    content = (
      <div className="w-full h-full">
        <CustomLoader variant="dots" className="mx-auto py-10" />
      </div>
    );
  } else if (blogPosts.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          {blogPosts.slice(0, 3).map((blog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
        <Link
          to="/blogs"
          className="w-fit  mx-auto inline-block py-3 px-6 text-brand-secondary-buttonText border border-brand-secondary-buttonText font-medium text-base rounded-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 text-center cursor-pointer"
        >
          View more articles
        </Link>
      </>
    );
  } else {
    content = (
      <img src={empty} className="mx-auto md:my-10" alt="No results found" />
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-bold text-xl md:text-4xl">Recent blog posts</h1>
      {content}
    </div>
  );
};

export default RelatedPosts;
