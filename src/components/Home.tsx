import React from "react";
import { Blog } from "../actions";
import BlogItem from "./BlogItem";

interface HomeProps {
  blogs: Blog[];
}

const Home = (props: HomeProps) => {
  const blogsItems = props.blogs.map((blog: Blog) => (
    <BlogItem
      key={blog.id}
      title={blog.title}
      image={blog.image}
      date={blog.published_at}
    />
  ));

  return (
    <div className="home">
      <span className="title">Blogs</span>
      <div className="home-blogs">{blogsItems}</div>
    </div>
  );
};

export default Home;