import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Blog, fetchBlogs, countBlogs } from "./actions";
import Home from "./components/Home";
import "./style.scss";

interface AppProps {
  blogs: Blog[];
  fetchBlogs(page: number): any;
  totalPages: number;
  countBlogs: any;
}

const _App = (props: AppProps) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.countBlogs();
    props.fetchBlogs(page);
  }, [page]);

  const nextPage = (): void => {
    if (page < 3) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = (): void => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <Home
        blogs={props.blogs}
        nextPage={nextPage}
        prevPage={prevPage}
        totalPages={props.totalPages}
        currentPage={page}
      />
    </div>
  );
};

const mapStateToProps = (
  state: StoreState
): { blogs: Blog[]; totalPages: number } => {
  return {
    blogs: state.blogs,
    totalPages: state.totalPages,
  };
};

export const App = connect(mapStateToProps, { fetchBlogs, countBlogs })(_App);
