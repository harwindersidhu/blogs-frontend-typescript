import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Count {
  count: number
}

export interface CountPagesAction {
  type: ActionTypes.countPages;
  payload: number;
}

/**
 * We call this api to count total number of blogs
 * and then we count total pages where each page contains six blogs.
 * @returns 
 */
export const countBlogs = () => {
  let getBlogsApi = `/api/blogs/`;
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Count[]>(getBlogsApi);
    const numberOfPages =  Math.ceil(response.data[0].count / 6);
    dispatch<CountPagesAction>({
      type: ActionTypes.countPages,
      payload: numberOfPages
    });
  };
};