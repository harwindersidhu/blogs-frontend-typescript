import React from "react";
import { Blog } from "../actions";
import BlogItem from "./BlogItem";

interface HomeProps {
  blogs: Blog[];
  nextPage: any;
  prevPage: any;
  totalPages: number;
  currentPage: number;
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
        {props.currentPage > 1 && (
          <button className="previous-button" onClick={props.prevPage}>
            Prev
          </button>
        )}
        {props.currentPage < props.totalPages && (
          <button className="next-button" onClick={props.nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
