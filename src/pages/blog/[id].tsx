import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FadeLoader } from "react-spinners";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Blog() {
  const router = useRouter();
  const id = router.query.id as string;
  const blogQuery = api.blog.getById.useQuery({ id });
  return (
    <Layout>
      {blogQuery.isLoading && <FadeLoader color="white" />}
      {blogQuery.isFetched && blogQuery.data && (
        <div className="lg:w-[60vw]">
          <div className="border-b mt-20">
            <p className="text-3xl lg:text-7xl">{blogQuery.data?.title}</p>
            <p className="mt-2">
              Created at {blogQuery.data?.createdAt.toLocaleDateString()}
            </p>
          </div>
          <ReactMarkdown className="my-10">
            {blogQuery.data.content}
          </ReactMarkdown>
        </div>
      )}
    </Layout>
  );
}
