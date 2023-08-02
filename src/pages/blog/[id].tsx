import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FadeLoader } from "react-spinners";
import Blog from "~/components/Blog";
import Link from "next/link";
import { BsPencil } from "react-icons/bs";

export default function BlogPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const blogQuery = api.blog.getById.useQuery({ id });
  if (blogQuery.isFetched && !blogQuery.data) router.back();
  return (
    <Layout>
      <Link
        className="fixed right-5 top-5 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
        href={`/blog/edit/${id}`}
      >
        <BsPencil />
      </Link>
      {blogQuery.isLoading && <FadeLoader color="white" />}
      {blogQuery.isFetched && blogQuery.data && (
        <Blog
          title={blogQuery.data.title}
          content={blogQuery.data.content}
          createdAt={blogQuery.data.createdAt}
        />
      )}
    </Layout>
  );
}
