import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

export default function Blog({}) {
  const router = useRouter();
  const id = router.query.id as string;
  const blog = api.blog.getById.useQuery({ id }).data;
  return (
    <Layout>
      <p>{blog?.title}</p>
      <p>{blog?.createdAt.toLocaleDateString()}</p>
      <p>{blog?.content}</p>
    </Layout>
  );
}
