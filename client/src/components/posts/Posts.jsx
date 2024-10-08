import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="posts">
      {error 
        ? "Something went wrong!" 
        : (isLoading 
        ? "loading"
        : data.map((post) => ( <Post post={post} key={post.id} />)))}
    </div>
  );
};

export default Posts;