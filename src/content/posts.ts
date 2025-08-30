export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author?: string;
  tags: string[];
  minutes: number;
  hero?: string; // image path
  blocks: Array<{ type: string; text?: string; items?: string[] }>;
};

function estimateMinutes(texts: string[]): number {
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

export const posts: Post[] = [
  {
    slug: "hmrc-tax-updates-smes-2025",
    title: "Latest HMRC tax updates for SMEs",
    description: "Key HMRC changes affecting UK small businesses, with practical steps to stay compliant and efficient.",
    date: "2025-08-01",
    author: "Ma & Co Team",
    tags: ["Tax Updates", "HMRC", "SME"],
    hero: "/images/team-5.jpg",
    minutes: 0,
    blocks: [
      { type: "p", text: "HMRC continues to refine guidance and reporting obligations for UK SMEs. Here are the updates we’re tracking and the actions we recommend." },
      { type: "h2", text: "What changed" },
      { type: "ul", items: [
        "Adjusted thresholds for select reliefs and allowances.",
        "Clarified VAT treatment for mixed supplies in service businesses.",
        "Extended digital record-keeping expectations under MTD.",
      ]},
      { type: "h2", text: "Practical next steps" },
      { type: "ul", items: [
        "Review your chart of accounts and VAT mappings for affected codes.",
        "Assess whether quarterly management accounts would highlight cash/tax impacts earlier.",
        "Confirm your software is set for MTD-compatible digital links and audit trails.",
      ]},
      { type: "quote", text: "If you’re unsure how a threshold change applies, ask us for a quick review—we’ll provide a clear decision and action plan." },
    ]
  },
  {
    slug: "ai-bookkeeping-automation-best-practices",
    title: "Using AI to automate bookkeeping the right way",
    description: "A pragmatic approach to AI-driven bookkeeping across FreeAgent, Xero, and QuickBooks—without sacrificing accuracy.",
    date: "2025-07-15",
    author: "Ma & Co Team",
    tags: ["AI in Finance", "Bookkeeping", "Automation"],
    hero: "/images/team-3.jpg",
    minutes: 0,
    blocks: [
      { type: "p", text: "AI can remove hours of categorisation and reconciliation time—if it’s implemented with the right controls and oversight." },
      { type: "h2", text: "Where AI helps" },
      { type: "ul", items: [
        "Bank feed matching and auto-categorisation for common transactions.",
        "Duplicate detection and CIS allocation prompts.",
        "Document extraction for bills/receipts and approval routing.",
      ]},
      { type: "h2", text: "Controls that matter" },
      { type: "ul", items: [
        "Use rulesets with a human-in-the-loop for edge cases.",
        "Schedule monthly reviews of suspense and uncategorised items.",
        "Lock prior periods and use audit trails to track changes.",
      ]},
    ]
  },
  {
    slug: "property-tax-strategies-uk-landlords",
    title: "Property tax strategies for UK landlords",
    description: "Structuring options, reliefs, and planning considerations for property investors and SPVs.",
    date: "2025-07-01",
    author: "Ma & Co Team",
    tags: ["Property Tax", "CGT", "IHT"],
    hero: "/images/team-1.jpg",
    minutes: 0,
    blocks: [
      { type: "p", text: "With the right structure and planning, landlords can preserve more of their returns while staying compliant." },
      { type: "h2", text: "Common structures" },
      { type: "ul", items: [
        "Personal ownership vs. SPV companies—understanding tax trade-offs.",
        "Joint ownership and beneficial interest considerations.",
        "Use of holding companies for larger portfolios.",
      ]},
      { type: "h2", text: "Key reliefs and timing" },
      { type: "ul", items: [
        "CGT allowances, main residence relief interactions, and timing of disposals.",
        "Financing and interest deductibility rules.",
        "IHT planning using trusts and lifetime gifting within allowances.",
      ]},
    ]
  }
].map((p) => ({
  ...p,
  minutes:
    p.minutes ||
    estimateMinutes([
      p.title,
      p.description,
      ...p.blocks.flatMap((b) => (b.text ? [b.text] : b.items ?? []))
    ])
}));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
