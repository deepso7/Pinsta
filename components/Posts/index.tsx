import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "deepso",
  },
];

const Posts = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
