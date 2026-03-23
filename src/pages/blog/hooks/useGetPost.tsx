import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Article {
  _id: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  bookmarks: any[];
  createdAt: string;
  __v: number;
}

const useGetPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blog, setBlog] = useState<Article>();

  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get("id");

  useEffect(() => {
    const getPost = async () => {
      if (paramsId) {
        setLoading(true);
        await axios
          .get(`https://friendnpalapi.onrender.com/api/article/${paramsId}`)
          .then((res: any) => {
            setBlog(res?.data?.article);
          })
          .catch((error) => {
            console.error("failed to get Order", error);
            setLoading(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    getPost();
  }, [paramsId]);

  return {
    loading,
    blog,
  };
};

export default useGetPost;
