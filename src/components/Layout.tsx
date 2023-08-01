import { type ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {children}
    </main>
  );
}