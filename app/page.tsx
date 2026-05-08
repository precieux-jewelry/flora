export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-muted-foreground)]">
          <span className="h-1.5 w-1.5 rounded-full bg-flora-500" />
          Phase 0 — Foundation ready
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Flora
        </h1>
        <p className="text-[var(--color-muted-foreground)] text-lg">
          The social app where runners share shoes, outfits, and race-day gear.
        </p>
        <p className="text-sm text-[var(--color-muted-foreground)]">
          Landing page lands in Phase 1.
        </p>
      </div>
    </main>
  );
}
