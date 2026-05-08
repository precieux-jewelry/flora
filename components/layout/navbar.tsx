import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "@/lib/supabase/auth";
import { UserMenu } from "./user-menu";
import { MobileMenu } from "./mobile-menu";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/shoes", label: "Shoe reviews" },
  { href: "/outfits", label: "Outfits" },
];

export async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between relative">
        <Link href="/" aria-label="Flora home" className="flex items-center">
          <Image
            src="/flora-wordmark.png"
            alt="Flora"
            width={384}
            height={256}
            priority
            className="h-9 w-auto rounded-md"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-neutral-950 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition"
              >
                Join Flora
              </Link>
            </>
          )}
        </div>

        <MobileMenu links={links} signedIn={!!user} />
      </div>
    </header>
  );
}
