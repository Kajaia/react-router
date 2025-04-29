import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>Learn more</Link>
    </div>
  );
}
