import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (!res.ok) {
        throw new Error("Can not get post from API.");
      }

      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) return;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
