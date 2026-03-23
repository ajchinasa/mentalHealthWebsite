import CustomLoader from "@/components/core/Loader/CustomLoader";
import image1 from "@/assets/images/smiling_people.png";
import SocialShare from "@/components/SocialShare";
import { formatDate } from "@/utils/formatDate";
import useGetPost from "../../hooks/useGetPost";
import RelatedPosts from "./RelatedPosts";

const ViewBlog = () => {
  const { loading, blog } = useGetPost();

  let content = null;

  if (loading) {
    content = (
      <div className="w-full h-[400px] flex items-center justify-center">
        <CustomLoader variant="text" className="mx-auto py-10" />
      </div>
    );
  } else if (blog?._id) {
    const contentLines = blog?.content?.split("\n") || [];
    content = (
      <div className="mt-20 md:mt-16 w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden flex flex-col md:gap-20 gap-10">
        <div className="flex flex-col gap-3 md:gap-5 w-full md:max-w-[800px] mx-auto">
          <p className="w-fit text-sm text-brand-secondary-customSkyBlue800 bg-[#F0F8FF] py-3 px-5 rounded-lg mx-auto">
            Featured
          </p>
          <h1 className="text-lg md:text-4xl font-semibold text-[#2D384D] text-center max-w-[850px] mx-auto">
            {blog?.title}
          </h1>
          <p className="text-[#384B6C] text-lg text-center">{blog?.excerpt}</p>
          <p className="text-[#384B6C] text-sm text-center">
            {formatDate(blog?.createdAt)}
          </p>
        </div>
        <img
          src={image1}
          // src={blog?.image}
          alt="Blog Banner"
          className="w-full rounded-lg max-h-[600px] object-cover object-center"
        />
        <div className="w-full md:max-w-[900px] mx-auto flex flex-col gap-5">
          {contentLines.map((each, i) => (
            <p key={each + i} className="text-justify md:text-left">
              {each}
            </p>
          ))}
        </div>
        <hr className="w-full h-px bg-gray-200 border-0"></hr>
        <SocialShare url={encodeURIComponent(globalThis.location.href)} />
        <RelatedPosts />
      </div>
    );
  }

  return content;
};

export default ViewBlog;
