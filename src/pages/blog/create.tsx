import { type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import BlogForm from "~/components/BlogForm";
import { type IFormInput } from "~/types";

export default function CreateBlogPage() {
  const create = api.blog.create.useMutation();
  const router = useRouter();
  const submit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const { title, content } = data;
    if (title === "" || content === "") {
      toast.error("Empty fields not allowed");
      return;
    }
    const createTx = create.mutateAsync({
      title: title,
      content: content,
    });
    toast
      .promise(createTx, {
        pending: "Loading...",
        success: "Saved!",
        error: "Error!",
      })
      .catch(() => null);
    void createTx.then((id) => router.push(`/blog/${id}`).catch(() => null));
  };

  return (
    <Layout>
      <h1 className="mb-10">Create a new blog!</h1>
      <BlogForm onSubmit={submit}></BlogForm>
    </Layout>
  );
}
