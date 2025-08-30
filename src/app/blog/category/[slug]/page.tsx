import type { Metadata } from "next";
import { getCategories, getPostsByCategorySlug, slugifyCategory } from "@/content/posts";
import { notFound } from "next/navigation";

type Params = { slug: string };

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: slugifyCategory(c) }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  return {
    title: `${name} Articles | Ma & Co Blog`,
    description: `Articles about ${name} for UK SMEs, consultants, and property investors.`,
    alternates: { canonical: `/blog/category/${params.slug}` }
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const list = getPostsByCategorySlug(params.slug).sort((a, b) => (a.date < b.date ? 1 : -1));
  if (list.length === 0) return notFound();

  const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

  return (
    <>
      <section className="container-base mt-10 py-10">
        <p className="text-sm font-medium text-sky-700">Category</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">Latest articles in {name}.</p>
      </section>

      <section className="container-base mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
        {list.map((p) => (
          <article key={p.slug} className="card flex flex-col overflow-hidden">
            {p.hero && (
              <img src={p.hero} alt="" className="h-40 w-full object-cover" />
            )}
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-sky-700">{p.category}</div>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                <a href={`/blog/${p.slug}`} className="hover:underline">{p.title}</a>
              </h2>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}</time>
                <span>{p.minutes} min read</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

