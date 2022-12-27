import { Blog, GetBlogBySlugAction } from "../actions";
import { ActionTypes } from "../actions/types";

const defaultValue = {
  id : 1,
  title: "",
  slug: "",
  content: "",
  image: "",
  published_at: ""
}

export const selectedBlogReducer = (state: Blog = defaultValue, action: GetBlogBySlugAction) => {
  switch (action.type) {
    case ActionTypes.getBlogBySlug:
      return action.payload || {...defaultValue, content: "<h2>Unable to find a Blog. Please check the slug value and try again.</h2>"};
    default:
      return state;
  }
}