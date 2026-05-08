import Link from "next/link";
import type { ReactNode } from "react";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-neutral-700"
        >
          <span className="inline-block h-6 w-6 rounded-full bg-flora-500" />
          flora
        </Link>

        <div className="mt-6 rounded-3xl bg-white border border-neutral-100 p-7 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        <p className="mt-5 text-center text-sm text-neutral-500">{footer}</p>
      </div>
    </main>
  );
}
