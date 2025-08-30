import type { Metadata } from "next";
import { getPost, posts } from "@/content/posts";
import { notFound } from "next/navigation";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Ma & Co Accountants`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.hero ? [{ url: post.hero }] : undefined
    }
  };
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: [{ "@type": "Person", name: post.author || "Ma & Co Team" }],
    image: post.hero ? [post.hero] : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.maandcoaccountants.com/blog/${post.slug}`
    }
  } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container-base mt-10 max-w-3xl py-10">
        <p className="text-sm font-medium text-sky-700">{post.tags.join(" · ")}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}</time>
          <span>•</span>
          <span>{post.minutes} min read</span>
        </div>
        {post.hero && (
          <div className="mt-8 overflow-hidden rounded-2xl shadow-soft">
            <img src={post.hero} alt="" className="h-64 w-full object-cover" />
          </div>
        )}
        <div className="prose prose-slate mt-8 max-w-none">
          {post.blocks.map((b, i) => {
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "ul" && Array.isArray(b.items)) return (
              <ul key={i}>
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
            if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
            return null;
          })}
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-600">
          <p>Like this? <a href="/" className="text-sky-700 underline">Book a free consultation</a> to see how we apply it to your business.</p>
        </div>
      </article>
    </>
  );
}
