import { useForm, useWatch } from "react-hook-form";
import type { IBlog, IBlogForm } from "~/types";
import { TfiSave } from "react-icons/tfi";
import { useState } from "react";
import Blog from "./Blog";

export default function BlogForm({ onSubmit, content, title }: IBlogForm) {
  const { register, handleSubmit, control } = useForm<IBlog>();
  const watchTitle = useWatch({
    control,
    name: "title",
    defaultValue: title ?? "",
  });
  const watchContent = useWatch({
    control,
    name: "content",
    defaultValue: content ?? "",
  });
  const [isPreview, setIsPreview] = useState(false);
  return (
    <form
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="from-top mb-5 grid w-[80vw] grid-cols-1 place-items-center gap-5 lg:w-[60vw]"
    >
      {!isPreview && (
        <>
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
        </>
      )}
      {isPreview && watchTitle && watchContent && (
        <Blog title={watchTitle} content={watchContent} />
      )}
      <div className="grid grid-cols-2 gap-5">
        <button
          className="from-top grid grid-cols-1 place-items-center rounded-md bg-[rgba(0,0,0,0.5)] p-3"
          type="button"
          onClick={() =>
            setIsPreview(!isPreview && watchTitle !== "" && watchContent !== "")
          }
        >
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
