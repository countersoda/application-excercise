import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { FadeLoader } from "react-spinners";
import BlogForm from "~/components/BlogForm";
import { type IFormInput } from "~/types";
import { type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import DeleteButton from "~/components/DeleteButton";

export default function BlogEditPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const blogQuery = api.blog.getById.useQuery({ id });
  const update = api.blog.update.useMutation();
  const submit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const { title, content } = data;
    if (title === "" || content === "") {
      toast.error("Empty fields not allowed");
      return;
    }
    const updateTx = update.mutateAsync({
      title: title,
      content: content,
      id: id,
    });
    toast
      .promise(updateTx, {
        pending: "Loading...",
        success: "Saved!",
        error: "Error!",
      })
      .catch(() => null);
    void updateTx.then((id) => router.push(`/blog/${id}`).catch(() => null));
  };
  return (
    <Layout>
      <DeleteButton
        className="right-5 top-5 bg-[rgba(0,0,0,0.4)] p-3 rounded-md fixed"
        id={id}
      />
      {blogQuery.isLoading && <FadeLoader color="white" />}
      {blogQuery.isFetched && blogQuery.data && (
        <BlogForm
          onSubmit={submit}
          title={blogQuery.data.title}
          content={blogQuery.data.content}
          id={blogQuery.data.id}
        />
      )}
    </Layout>
  );
}
