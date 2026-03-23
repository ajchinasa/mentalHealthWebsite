import { useNavigate } from "react-router-dom";
import { Article } from "types/articles";

interface BlogCardProps {
  blog: Article;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-3 cursor-pointer hover:-translate-y-3 transition-all duration-500"
      onClick={() => navigate(`/blogs/view-blog?id=${blog?._id}`)}
    >
      <img src={blog?.image} className="w-full rounded-lg" alt={blog?.title} />
      <p className="font-bold text-[#2D384D]">{blog?.title}</p>
      <p className="text-[#384B6C] text-sm">{blog?.excerpt}</p>
      <p className="text-[10px] text-[#384B6C]">{blog?.createdAt}</p>
    </div>
  );
};

export default BlogCard;
