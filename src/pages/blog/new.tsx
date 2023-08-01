import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { TfiSave } from "react-icons/tfi";
import { useRouter } from "next/router";

interface IFormInput {
  title: string;
  content: string;
}

export default function Blog() {
  const { register, handleSubmit } = useForm<IFormInput>();
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
      <form
        method="post"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submit)}
        className="my-20 grid w-[80vw] grid-cols-1 gap-5 lg:w-[50vw]"
      >
        <input
          className="rounded-md px-1 py-5 text-2xl text-black"
          placeholder="Title"
          {...register("title", { minLength: 1 })}
        ></input>
        <textarea
          className="resize-none rounded-md p-1 text-black lg:min-w-[50vw]"
          placeholder="Content"
          {...register("content", { minLength: 1 })}
          rows={28}
        ></textarea>
        <button
          className="fixed right-5 top-5 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
          type="submit"
        >
          <TfiSave />
        </button>
      </form>
    </Layout>
  );
}
