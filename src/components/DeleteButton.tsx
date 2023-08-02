import { useRouter } from "next/router";
import { useCallback } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { api } from "~/utils/api";

interface IDeleteButton {
  className: string;
  id: string;
}

export default function DeleteButton({ className, id }: IDeleteButton) {
  const router = useRouter();
  const deleteBlog = api.blog.delete.useMutation();
  const submit = useCallback(() => {
    const deleteBlogTx = deleteBlog.mutateAsync({
      id,
    });
    void deleteBlogTx.then(() => router.push(`/`).catch(() => null));
  }, [deleteBlog, id, router]);
  return (
    <button className={className} onClick={submit}>
      <RiDeleteBin6Line />
    </button>
  );
}
