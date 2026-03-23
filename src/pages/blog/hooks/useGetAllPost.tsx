import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "types/articles";

const useGetAllPost = () => {
  const [loading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await axios
        .get("https://friendnpalapi.onrender.com/api/article")
        .then((res: any) => {
          setBlogPosts(res?.data?.articles);
        })
        .catch((error) => {
          console.error("failed to get Order", error);
          setLoading(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchPosts();
  }, []);
  return { loading, blogPosts };
};

export default useGetAllPost;
