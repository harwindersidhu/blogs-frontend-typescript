import React from "react";
import { Blog } from "../actions";
import BlogItem from "./BlogItem";

interface HomeProps {
  blogs: Blog[];
  nextPage: any;
  prevPage: any;
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
      <div className="pagination">
        <button className="previous-button" onClick={props.prevPage}>
          Prev
        </button>
        <button className="next-button" onClick={props.nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
