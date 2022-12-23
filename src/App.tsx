import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Blog, fetchBlogs } from "./actions";

interface AppProps {
  blogs: Blog[];
  fetchBlogs(page: number): any;
}

const _App = (props: AppProps) => {
  useEffect(() => {
    props.fetchBlogs(1);
  }, []);

  const blogs = props.blogs.map((blog: Blog) => {
    return <div key={blog.id}>{blog.title}</div>;
  });

  return <div>{blogs}</div>;
};

const mapStateToProps = (state: StoreState): { blogs: Blog[] } => {
  return { blogs: state.blogs };
};

export const App = connect(mapStateToProps, { fetchBlogs })(_App);
