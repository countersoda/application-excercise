import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FadeLoader } from "react-spinners";

export default function Blog({}) {
  const router = useRouter();
  const id = router.query.id as string;
  const blogQuery = api.blog.getById.useQuery({ id });
  return (
    <Layout>
      {blogQuery.isLoading && <FadeLoader color="white" />}
      {blogQuery.isFetched && (
        <>
          <div className="md:max-w-[50vw] max-w-[80vw]">
            <p className="text-3xl lg:text-7xl">{blogQuery.data?.title}</p>
            <p className="mt-2">
              Created at {blogQuery.data?.createdAt.toLocaleDateString()}
            </p>
          </div>
          <p className="mt-10 md:max-w-[50vw] max-w-[80vw]">{blogQuery.data?.content}</p>
        </>
      )}
    </Layout>
  );
}
