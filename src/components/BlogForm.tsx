import { useForm } from "react-hook-form";
import type { IBlog, IBlogForm } from "~/types";
import { TfiSave } from "react-icons/tfi";

export default function BlogForm({ onSubmit, content, title }: IBlogForm) {
  const { register, handleSubmit } = useForm<IBlog>();
  return (
    <form
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="from-top mb-5 grid w-[80vw] grid-cols-1 place-items-center gap-5 lg:w-[60vw]"
    >
      <input
        className="w-full rounded-md px-1 py-5 text-2xl text-black"
        placeholder="Title"
        {...register("title", { minLength: 1 })}
        defaultValue={title}
      ></input>
      <textarea
        className="w-full resize-none rounded-md p-1 text-black"
        placeholder="Content"
        {...register("content", { minLength: 1 })}
        rows={28}
        defaultValue={content}
      ></textarea>
      <div className="grid grid-cols-2 gap-5">
        <button className="from-top grid grid-cols-1 place-items-center rounded-md bg-[rgba(0,0,0,0.5)] p-3">
          Preview
        </button>
        <button
          className="from-top grid grid-cols-1 place-items-center rounded-md bg-[rgba(0,0,0,0.5)] p-3"
          type="submit"
        >
          <TfiSave />
        </button>
      </div>
    </form>
  );
}
