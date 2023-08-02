import ReactMarkdown from "react-markdown";
import { type IBlog } from "~/types";

export default function Blog(blog: IBlog) {
  return (
    <div className="from-top w-[80vw] lg:w-[60vw]">
      <div className="mt-20 border-b">
        <p className="text-3xl lg:text-7xl">{blog.title}</p>
        {blog.createdAt && <p className="mt-2">Created at {blog.createdAt.toLocaleDateString()}</p>}
      </div>
      <ReactMarkdown
        className="mx-5 my-10"
      >
        {blog.content}
      </ReactMarkdown>
    </div>
  );
}
