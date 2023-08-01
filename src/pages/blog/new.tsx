import Link from "next/link";
import { type FormEvent, useCallback } from "react";
import { toast } from "react-toastify";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

export default function Blog() {
  const create = api.blog.create.useMutation();
  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      const createTx = create.mutateAsync({
        title: data.get("title")?.toString() ?? "",
        content: data.get("content")?.toString() ?? "",
      });
      toast
        .promise(createTx, {
          pending: "Loading...",
          success: "Saved!",
          error: "Error!",
        })
        .catch(() => null);
    },
    [create]
  );
  return (
    <Layout>
      <Link className="fixed left-5 top-5" href="/">
        Home
      </Link>
      <form method="post" onSubmit={submit} className="m-10 grid grid-cols-1">
        <div className="mt-10 grid max-w-[50vw] grid-cols-1">
          <input
            className="text-black"
            placeholder="Title"
            name="title"
          ></input>
        </div>
        <div className="grid grid-cols-1">
          <label>Content: </label>
          <textarea
            className="h-screen min-w-[50vw] text-black"
            name="content"
          ></textarea>
        </div>
        <button
          className="mt-10 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
          type="submit"
        >
          Save
        </button>
      </form>
    </Layout>
  );
}