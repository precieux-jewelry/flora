import type { ReactNode } from "react";

export function ProfileSection({
  title,
  hint,
  action,
  children,
}: {
  title: string;
  hint?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
          {hint && <p className="mt-1 text-sm text-neutral-500">{hint}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
