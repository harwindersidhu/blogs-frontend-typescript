import React, { useEffect } from "react";
import { Blog } from "../actions";
import { useParams } from "react-router-dom";

interface CurrentBlogProps {
  slug: string;
  getBlog: any;
  blog: Blog;
}

const CurrentBlog = (props: CurrentBlogProps) => {
  //If we will refresh page, sluf value will be cleared out.
  //With following line of code we can get slug value from url.
  let { slug } = useParams();

  useEffect(() => {
    props.getBlog(props.slug || slug);
  }, []);

  return (
    <div className="blog">
      <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
    </div>
  );
};

export default CurrentBlog;
