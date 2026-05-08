import Image from "next/image";
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
          aria-label="Flora home"
          className="inline-flex items-center gap-2.5"
        >
          <Image
            src="/flora-icon.png"
            alt=""
            width={256}
            height={256}
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-lg font-bold tracking-[0.18em] text-neutral-950">
            FLORA
          </span>
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
