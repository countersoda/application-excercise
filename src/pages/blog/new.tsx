import Link from "next/link";
import { type FormEvent, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

interface IFormInput {
  title: string;
  content: string;
}

export default function Blog() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const create = api.blog.create.useMutation();
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
  };
  return (
    <Layout>
      <form
        method="post"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submit)}
        className="w-[80vw] lg:w-[50vw] mt-20 grid grid-cols-1 gap-5"
      >
        <input
          className="rounded-md p-1 text-black"
          placeholder="Title"
          {...register("title", { minLength: 1 })}
        ></input>
        <textarea
          className="h-[100vh] rounded-md p-1 text-black lg:min-w-[50vw]"
          placeholder="Content"
          {...register("content", { minLength: 1 })}
        ></textarea>
        <button
          className="my-10 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
          type="submit"
        >
          Save
        </button>
      </form>
    </Layout>
  );
}
