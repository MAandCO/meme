"use client";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const navItems = [
    { href: "/services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2" onClick={close}>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500" aria-hidden />
          <span className="text-slate-900 text-lg font-semibold">Ma & Co</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-full bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700 focus-ring">
            Book a Free Consultation
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-ring"
          aria-label="Toggle menu"
          onClick={toggle}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-base flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-slate-700 hover:text-slate-900"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 rounded-full bg-sky-600 px-4 py-2 text-center text-white shadow hover:bg-sky-700 focus-ring"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
