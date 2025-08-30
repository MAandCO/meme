import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ma & Co Accountants",
  description:
    "Tiered accountancy services for UK SMEs, consultants, and property investors: bookkeeping, payroll, VAT, statutory accounts, budgeting, management accounts, personal and corporation tax, CGT/IHT, internal audit, and company secretarial.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Accountancy Services & Advisory | Ma & Co",
    description:
      "Tiered services across operations, management, tax strategy, and specialist advisory: Bookkeeping, Payroll, VAT, Statutory Accounts, Forecasting, Management Accounts, Personal/Business/Corporation Tax, CGT/IHT, Audit, Secretarial.",
    url: "/services",
    type: "website"
  }
};

const tiers = [
  {
    id: "tier-4",
    title: "Tier 4 – Operational / Core Services",
    blurb:
      "Reliable day-to-day finance operations with automation and accuracy at the core.",
    color: "from-sky-500",
    roles: [
      {
        name: "Bookkeeping Agent",
        desc: "Automates transaction coding, reconciliations, and CIS allocation."
      },
      {
        name: "Payroll Agent",
        desc: "Runs director/employee payroll, RTI submissions, and pensions."
      },
      {
        name: "VAT Agent",
        desc: "Prepares VAT returns, checks thresholds, and ensures HMRC compliance."
      },
      {
        name: "Software Agent",
        desc: "Manages FreeAgent, Xero, and QuickBooks integrations."
      }
    ]
  },
  {
    id: "tier-3",
    title: "Tier 3 – Management & Forecasting",
    blurb:
      "Management information that drives better decisions and forward visibility.",
    color: "from-emerald-500",
    roles: [
      {
        name: "Statutory Accounts Agent",
        desc: "Ensures compliance with Companies House and HMRC deadlines."
      },
      {
        name: "Budgeting Agent",
        desc: "Builds rolling forecasts, cash flow models, and scenario planning."
      },
      {
        name: "Management Accounts Agent",
        desc: "Generates monthly/quarterly packs for confident decisions."
      }
    ]
  },
  {
    id: "tier-2",
    title: "Tier 2 – Tax Strategy & Advisory",
    blurb:
      "Strategic tax planning that protects profits and personal wealth.",
    color: "from-indigo-500",
    roles: [
      { name: "Personal Tax Agent", desc: "Optimises Self Assessment, reliefs, and allowances." },
      { name: "Business Tax Agent", desc: "Maximises deductions and identifies reliefs (R&D, AIA)." },
      { name: "Corporation Tax Agent", desc: "Calculates CT600, dividend planning, director salary mix." },
      { name: "Capital Gains Agent", desc: "Advises on property/asset sales and reliefs." },
      { name: "Inheritance Tax Agent", desc: "Estate planning, trusts, and wealth preservation." }
    ]
  },
  {
    id: "tier-1",
    title: "Tier 1 – Specialist / High-Value Services",
    blurb:
      "Independent assurance and specialist support for complex situations.",
    color: "from-rose-500",
    roles: [
      { name: "Independent Examiner Agent", desc: "Reviews charity and society accounts." },
      { name: "Forensic Agent", desc: "Investigates irregularities and supports disputes." },
      { name: "Internal Audit Agent", desc: "Strengthens controls and compliance." },
      { name: "Company Secretarial Agent", desc: "Manages filings, registers, and TCSP obligations." }
    ]
  }
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.maandcoaccountants.com/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.maandcoaccountants.com/services"
    }
  ]
} as const;

const jsonLdItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Accountancy Services Tiers",
  itemListOrder: "http://schema.org/ItemListOrderAscending",
  numberOfItems: tiers.length,
  itemListElement: tiers.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.maandcoaccountants.com/services#${t.id}`
  }))
} as const;

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      <section className="container-base mt-10 py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-sky-700">Our Services</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Accountancy Services & Advisory Tiers
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Structured service tiers designed for UK small businesses, consultants, and property investors — from core operations to specialist advisory.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/#contact" className="rounded-full bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700 focus-ring">
              Book a Free Consultation
            </a>
            <a href="/" className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-100 focus-ring">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className="container-base mt-4 space-y-14">
        {tiers.map((tier) => (
          <div key={tier.id} id={tier.id} className="scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${tier.color} to-emerald-500`} />
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{tier.title}</h2>
            </div>
            <p className="mt-2 max-w-3xl text-slate-600">{tier.blurb}</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tier.roles.map((r) => (
                <article key={r.name} className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{r.name}</h3>
                  <p className="mt-2 text-slate-600">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-base mt-16 mb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Which tier do I need?</h3>
            <p className="mt-2 text-slate-600">
              Most clients start with Tier 4 for core operations, then add Tier 3 for decision-ready reporting. Tiers 2 and 1 are engaged as your strategy evolves or specific events arise.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Next step</h3>
            <p className="mt-2 text-slate-600">Book a free consultation — we’ll assess your needs and recommend a tiered setup to save tax, stay compliant, and scale with confidence.</p>
            <div className="mt-4">
              <a href="/#contact" className="rounded-full bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700 focus-ring">Book a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

