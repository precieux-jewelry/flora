import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="space-y-3">
          <Image
            src="/flora-wordmark.png"
            alt="Flora"
            width={384}
            height={256}
            className="h-8 w-auto rounded-md"
          />
          <p className="text-neutral-600 max-w-xs">
            The social app where runners share shoes, outfits, and race-day gear.
          </p>
        </div>

        <FooterCol
          title="Explore"
          items={["Shoe reviews", "Outfits", "Race day", "Trail"]}
        />
        <FooterCol
          title="Community"
          items={["Runners", "Brands", "Coaches", "Stories"]}
        />
        <FooterCol
          title="Company"
          items={["About", "Press", "Careers", "Contact"]}
        />
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Flora. Built for runners.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="space-y-2 text-neutral-600">
        {items.map((i) => (
          <li key={i} className="hover:text-neutral-950 cursor-pointer">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
