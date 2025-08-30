import Chatbot from "@/components/Chatbot";
import TeamGallery from "@/components/TeamGallery";

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const services = [
    {
      title: "Tax Planning & Compliance",
      desc: "CT600, Self-Assessment, VAT, PAYE — proactive planning and precise filing.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "AI-Driven Bookkeeping Automation",
      desc: "FreeAgent, Xero, QuickBooks integrations to reduce admin and errors.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Payroll & Pensions Management",
      desc: "Timely, compliant payroll with auto-enrolment and RTI submissions.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 7h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7V5a4 4 0 118 0v2" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Estate & Property Tax Advisory",
      desc: "Structuring for landlords and investors, CGT and IHT strategies.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 10l9-7 9 7v8a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Growth & Strategy Consulting",
      desc: "Forecasting, KPIs, board-ready reports, and cash flow mastery.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 17l4-4 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Saira K.",
      role: "Consultant",
      quote: "Saved £12,000 in tax last year thanks to proactive planning.",
    },
    {
      name: "James M.",
      role: "Property Investor",
      quote: "They challenged our assumptions and restructured our SPV—clear, confident advice.",
    },
    {
      name: "Liam P.",
      role: "Agency Founder",
      quote: "Automation removed hours of bookkeeping each month. Strong strategic sparring, too.",
    }
  ];

  const posts = [
    { title: "Latest HMRC tax updates for SMEs", tag: "Tax Updates", href: "/blog/hmrc-tax-updates-smes-2025", date: "2025-08-01" },
    { title: "Using AI to automate bookkeeping the right way", tag: "AI in Finance", href: "/blog/ai-bookkeeping-automation-best-practices", date: "2025-07-15" },
    { title: "Property tax strategies for UK landlords", tag: "Property Tax", href: "/blog/property-tax-strategies-uk-landlords", date: "2025-07-01" }
  ];

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Ma & Co Accountants",
    url: "https://www.maandcoaccountants.com",
    telephone: "+44 20 7946 0123", // TODO replace
    email: "info@maandcoaccountants.com",
    image: "https://www.maandcoaccountants.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "London",
      addressRegion: "",
      postalCode: "",
      addressCountry: "GB"
    },
    areaServed: "GB",
    openingHours: [
      "Mo-Fr 09:00-17:00"
    ],
    sameAs: []
  } as const;

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you help me save tax?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We combine proactive planning (allowances, reliefs, optimal structures) with precise, on-time filings to minimise liabilities."
        }
      },
      {
        "@type": "Question",
        name: "Which bookkeeping software do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FreeAgent, Xero, and QuickBooks—including automated bank feeds, categorisation, and reconciliations."
        }
      },
      {
        "@type": "Question",
        name: "Do you work with property investors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We advise on SPVs, CGT, IHT, and landlord-specific considerations for UK property portfolios."
        }
      }
    ]
  } as const;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* Hero */}
      <section className="container-base mt-10 grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2">
        <div className="animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your Trusted Partner in Tax, Compliance & Growth
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Expert accountants helping UK professionals save tax, stay compliant, and scale with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-full bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 focus-ring">
              Book a Free Consultation
            </a>
            <a href="#services" className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100 focus-ring">
              Explore Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              HMRC-compliant workflows
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-500" aria-hidden />
              AI-enabled bookkeeping
            </div>
          </div>
        </div>
        <div className="animate-fade-up">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl shadow-soft">
            <img
              src="/images/team-1.jpg"
              alt="Ma & Co accountants collaborating with a client"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/85 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-medium text-slate-800">Real-time insights</p>
              <p className="text-xs text-slate-600">Forecasts, cash flow, KPIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-base mt-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Services built for UK professionals</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Practical expertise across tax, automation, payroll, property, and strategic finance.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="flex items-center gap-3 text-sky-600">
                {s.icon}
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container-base mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Modern, digital-first accountants</h2>
          <p className="mt-3 text-slate-600">
            We combine rigorous financial honesty with a sparring-partner mindset. We pressure-test decisions, challenge assumptions, and refine strategy to help you move faster with less risk.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Cloud-first, paperless workflows</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Secure client portal & e-sign</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Actionable reporting dashboards</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className="rounded-full bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus-ring">Get advice</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl shadow-soft">
            <img
              src="/images/team-4.jpg"
              alt="Our digital-first accounting team at work"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-2 text-sm shadow">Your finance team, on-demand</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container-base mt-20">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What clients say</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-6">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">{t.name} · {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Team photos */}
      <section className="container-base mt-20" aria-label="Our team">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meet your team</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          A modern, friendly team of accountants and advisors focused on clarity and results.
        </p>
        <div className="mt-6">
          <TeamGallery />
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="container-base mt-20">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Insights & updates</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Latest tax updates, AI in finance, property strategies.</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="card p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-sky-700">{p.tag}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                <a href={p.href} className="hover:underline">{p.title}</a>
              </h3>
              <time className="mt-1 block text-sm text-slate-500" dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}</time>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-base mt-20">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900">How do you help me save tax?</h3>
            <p className="mt-2 text-slate-600">We plan ahead using allowances, reliefs, and optimal structures—then file accurately and on time to minimise liabilities.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900">Which software do you support?</h3>
            <p className="mt-2 text-slate-600">FreeAgent, Xero, and QuickBooks. We automate bank feeds, posting, and reconciliation to cut manual work.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900">Do you work with property investors?</h3>
            <p className="mt-2 text-slate-600">Yes—structuring SPVs, CGT and IHT planning, and landlord-specific rules for UK portfolios.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-base mt-20">
        {searchParams?.contact === "ok" && (
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
            Thanks! We’ve received your message and will reply shortly.
          </div>
        )}
        {searchParams?.contact === "error" && (
          <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800">
            Sorry—there was a problem sending your message. Please try again or email info@maandcoaccountants.com.
          </div>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Book a free consultation</h2>
            <p className="mt-2 text-slate-600">Tell us about your business and we’ll propose the most efficient path forward.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <form className="grid grid-cols-1 gap-4" method="POST" action="/api/contact">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Business Type</label>
                  <select name="businessType" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring">
                    <option>Limited Company</option>
                    <option>Sole Trader</option>
                    <option>Partnership/LLP</option>
                    <option>Property Investor</option>
                    <option>Contractor/Freelancer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Service Needed</label>
                  <select name="service" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring">
                    <option>Tax Planning & Compliance</option>
                    <option>AI-Driven Bookkeeping</option>
                    <option>Payroll & Pensions</option>
                    <option>Estate & Property Tax</option>
                    <option>Growth & Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message (optional)</label>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus-ring" />
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 focus-ring">
                    Send Request
                  </button>
                </div>
                <p className="text-xs text-slate-500">By submitting, you agree to our <a href="#privacy" className="underline">Privacy Policy</a>.</p>
              </form>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Why book a call?</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> Get tailored recommendations for your structure</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" /> Learn how automation cuts admin time</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" /> Understand next steps to stay compliant</li>
            </ul>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-800">Prefer email?</p>
              <p>
                Reach us at
                <a className="ml-1 font-medium text-sky-700 underline" href="mailto:info@maandcoaccountants.com">
                  info@maandcoaccountants.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer anchor targets */}
      <div id="privacy" className="sr-only" aria-hidden />

      {/* Chatbot */}
      <Chatbot />
    </>
  );
}
