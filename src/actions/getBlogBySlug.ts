import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { Blog } from "./blogs";

export interface GetBlogBySlugAction {
  type: ActionTypes.getBlogBySlug;
  payload: Blog;
}

/**
 * We call this api to get a blog with a given slug value.
 * @param slug 
 * @returns 
 */
export const getBlogBySlug = (slug: string) => {
  let getselectedBlogApi = `/api/blogs/slug/${slug}`;
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Blog[]>(getselectedBlogApi);
    dispatch<GetBlogBySlugAction>({
      type: ActionTypes.getBlogBySlug,
      payload: response.data[0]
    });
  };
};

