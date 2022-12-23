import React from "react";
import { Blog } from "../actions";
import BlogItem from "./BlogItem";
import { useNavigate } from "react-router";

interface HomeProps {
  blogs: Blog[];
  nextPage(): void;
  prevPage(): void;
  totalPages: number;
  currentPage: number;
  setSlugValue(slug: string): void;
}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  const navigateToBlog = (slug: string) => {
    props.setSlugValue(slug);
    const blogPath = `/blog/${slug}`;
    navigate(blogPath);
  };

  const blogsItems = props.blogs.map((blog: Blog) => (
    <BlogItem
      key={blog.id}
      title={blog.title}
      image={blog.image}
      date={blog.published_at}
      navigateToBlog={() => navigateToBlog(blog.slug)}
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
