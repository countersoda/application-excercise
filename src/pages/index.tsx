import Head from "next/head";
import Link from "next/link";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FiPlusSquare } from "react-icons/fi";
import { FadeLoader } from "react-spinners";
import BlogPreview from "~/components/BlogPreview";

export default function Home() {
  const blogPostsQuery = api.blog.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Markdown Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Link
          href="/blog/create"
          className="fixed right-5 top-5 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
        >
          <FiPlusSquare />
        </Link>
        <p className="mt-10 text-3xl">Blogs by BRbase</p>
        {blogPostsQuery.isLoading && <FadeLoader color="white" />}
        {blogPostsQuery.isFetched && (
          <div className="my-10 grid grid-cols-1 gap-5">
            {blogPostsQuery.data?.map((blog, key) => (
              <BlogPreview key={key} blog={blog} />
            ))}
          </div>
        )}
      </Layout>
    </>
  );
}
