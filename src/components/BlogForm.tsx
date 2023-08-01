import { useForm } from "react-hook-form";
import type { IBlog, IBlogForm } from "~/types";
import { TfiSave } from "react-icons/tfi";

export default function BlogForm({ onSubmit }: IBlogForm) {
  const { register, handleSubmit } = useForm<IBlog>();
  return (
    <form
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="from-top my-20 grid w-[80vw] grid-cols-1 gap-5 lg:w-[50vw]"
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
  );
}
