import Link from "next/link";
import { type IBlog } from "~/types";

export default function BlogPreview({
  blog,
  key,
}: {
  blog: IBlog;
  key: number;
}) {
  return (
    <Link
      className="from-top mx-5 rounded-md bg-[rgba(0,0,0,0.4)] p-5 text-white"
      style={{
        animationDuration: `${key * 400}ms`,
      }}
      key={key}
      href={`blog/${blog.id}`}
    >
      <p>{blog.title}</p>
      {blog.createdAt && (
        <p>Created at {blog.createdAt.toLocaleDateString()}</p>
      )}
    </Link>
  );
}
