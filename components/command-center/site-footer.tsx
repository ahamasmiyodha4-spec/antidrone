import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800/90 bg-zinc-950">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          © {new Date().getFullYear()} Aegis Defense · Export controlled
        </p>
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
          <Link
            href="#"
            className="text-zinc-500 transition-colors duration-150 ease-linear hover:text-cyan"
          >
            Compliance
          </Link>
          <Link
            href="#"
            className="text-zinc-500 transition-colors duration-150 ease-linear hover:text-cyan"
          >
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
