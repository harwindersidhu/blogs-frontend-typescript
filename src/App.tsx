import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Blog, fetchBlogs } from "./actions";
import Home from "./components/Home";
import "./style.scss";

interface AppProps {
  blogs: Blog[];
  fetchBlogs(page: number): any;
}

const _App = (props: AppProps) => {
  useEffect(() => {
    props.fetchBlogs(1);
  }, []);

  return (
    <div className="App">
      <Home blogs={props.blogs} />
    </div>
  );
};

const mapStateToProps = (state: StoreState): { blogs: Blog[] } => {
  return { blogs: state.blogs };
};

export const App = connect(mapStateToProps, { fetchBlogs })(_App);
