import React, { useEffect } from "react";
import { Blog } from "../actions";
import { useParams } from "react-router-dom";

interface CurrentBlogProps {
  slug: string;
  getBlog: any;
  blog?: Blog;
}

const CurrentBlog = (props: CurrentBlogProps) => {
  /**
   * If we will refresh page, slug value will be cleared out.
   * With following line of code we can get slug value from url
   * and hence api will run again to get blog.
   */
  let { slug } = useParams();

  useEffect(() => {
    props.getBlog(props.slug || slug);
  }, []);

  return (
    <div className="blog">
      {props.blog && (
        <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
      )}
    </div>
  );
};

export default CurrentBlog;
