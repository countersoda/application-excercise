import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

export default function Blog({}) {
  const router = useRouter();
  const id = router.query.id as string;
  const blog = api.blog.getById.useQuery({ id }).data;
  return (
    <Layout>
      <Link className="fixed left-5 top-5" href="/">Home</Link>
      <div className="max-w-[50vw]">
        <p className="text-7xl">{blog?.title}</p>
        <p>{blog?.createdAt.toLocaleDateString()}</p>
      </div>
      <p className="mt-10 max-w-[50vw]">{blog?.content}</p>
    </Layout>
  );
}
