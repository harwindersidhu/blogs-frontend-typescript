import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Blog {
  id: number,
  title: string,
  slug: string;
  content: string;
  image: string;
  published_at: string;
}

export interface FetchBlogssAction {
  type: ActionTypes.fetchBlogs;
  payload: Blog[];
}

export const fetchBlogs = (page: number) => {
  let getBlogsApi = `/api/blogs/${page}`;
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Blog[]>(getBlogsApi);
    dispatch<FetchBlogssAction>({
      type: ActionTypes.fetchBlogs,
      payload: response.data
    });
  };
};