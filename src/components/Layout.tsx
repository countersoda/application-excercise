import Link from "next/link";
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5fa8dd] to-[#146095] text-white">
      {children}
      <Link
        className="fixed left-5 top-5 rounded-md bg-[rgba(0,0,0,0.5)] p-3"
        href="/"
      >
        <AiOutlineHome />
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
