import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();

    return () => setPosts([]);
  }, []);

  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error("Can not get posts from API.");
      }

      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return posts && posts.length > 0
    ? posts.map((post) => <PostItem key={post.id} post={post} />)
    : "";
}
