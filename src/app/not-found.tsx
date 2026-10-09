import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">
        This page is not part of the house.
      </h1>
      <p className="mt-5 max-w-md text-base leading-8 text-muted">
        The address may have changed. The story, the science, and the concerns are still here.
      </p>
      <Link href="/" className="btn btn-primary mt-8 w-fit">
        Back to Seravia
      </Link>
    </main>
  );
}
