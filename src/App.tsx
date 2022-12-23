import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "./reducers";
import { Blog, fetchBlogs, countBlogs } from "./actions";
import Home from "./components/Home";
import CurrentBlog from "./components/CurrentBlog";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    if (page < props.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = (): void => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Home
                  blogs={props.blogs}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  totalPages={props.totalPages}
                  currentPage={page}
                />
              }
            />
            <Route path="/blog/:slug" element={<CurrentBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
