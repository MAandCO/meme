import type { Metadata } from "next";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog | Ma & Co Accountants",
  description: "Tax updates, AI in finance, and property tax strategies for UK professionals.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Ma & Co Blog",
    description: "Insights on tax, automation, and growth for UK SMEs and professionals.",
    url: "/blog",
    type: "website"
  }
};

const jsonLdBlog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ma & Co Accountants Blog",
  url: "https://www.maandcoaccountants.com/blog"
} as const;

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }} />
      <section className="container-base mt-10 py-10">
        <p className="text-sm font-medium text-sky-700">Insights</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Practical guidance on UK tax, compliance automation, and finance strategy.
        </p>
      </section>

      <section className="container-base mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
        {sorted.map((p) => (
          <article key={p.slug} className="card flex flex-col overflow-hidden">
            {p.hero && (
              <img src={p.hero} alt="" className="h-40 w-full object-cover" />
            )}
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-sky-700">{p.tags[0] || "Update"}</div>
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

