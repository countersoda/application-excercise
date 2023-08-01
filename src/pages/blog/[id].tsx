import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FadeLoader } from "react-spinners";
import Blog from "~/components/Blog";

export default function BlogPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const blogQuery = api.blog.getById.useQuery({ id });
  return (
    <Layout>
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
