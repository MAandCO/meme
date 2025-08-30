import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-base py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500" />
              <span className="text-slate-900 text-lg font-semibold">Ma & Co</span>
            </div>
            <p className="text-sm text-slate-600">
              Accountants for UK professionals and small businesses. We help you save tax, stay compliant, and grow with confidence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Navigation</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/services" className="hover:text-slate-900">Services</a></li>
              <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Services</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Tax Planning & Compliance</li>
              <li>AI-Driven Bookkeeping</li>
              <li>Payroll & Pensions</li>
              <li>Estate & Property Tax</li>
              <li>Growth & Strategy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Connect</h3>
            <div className="mt-3 flex gap-4">
              <a aria-label="LinkedIn" href="#" className="text-slate-500 hover:text-slate-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.65c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z"/></svg>
              </a>
              <a aria-label="Twitter" href="#" className="text-slate-500 hover:text-slate-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.633 7.997c.013.18.013.36.013.542 0 5.53-4.207 11.9-11.9 11.9-2.366 0-4.566-.694-6.416-1.88.33.04.648.053.99.053a8.42 8.42 0 0 0 5.22-1.8 4.205 4.205 0 0 1-3.927-2.914c.26.04.52.066.793.066.38 0 .76-.053 1.114-.146A4.198 4.198 0 0 1 1.64 9.62v-.053c.566.314 1.22.5 1.916.526A4.197 4.197 0 0 1 1.43 6.53c0-.78.207-1.5.566-2.126A11.93 11.93 0 0 0 10.1 9.86a4.732 4.732 0 0 1-.106-.96 4.197 4.197 0 0 1 7.27-2.87 8.27 8.27 0 0 0 2.665-1.02 4.21 4.21 0 0 1-1.84 2.32 8.422 8.422 0 0 0 2.412-.646 8.98 8.98 0 0 1-2.868 2.33z"/></svg>
              </a>
              <a aria-label="YouTube" href="#" className="text-slate-500 hover:text-slate-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.23-1.63-.94-2.35c-.9-.94-1.91-.95-2.38-1C16.7 2.5 12 2.5 12 2.5h-.01s-4.7 0-8.17.35c-.47.05-1.48.06-2.38 1C.73 4.57.5 6.2.5 6.2S.25 8.18.25 10.17v1.67c0 1.98.25 3.97.25 3.97s.23 1.63.94 2.35c.9.94 2.08.91 2.6 1.01 1.88.18 7.96.35 7.96.35s4.7-.01 8.17-.36c.47-.05 1.48-.06 2.38-1 .71-.72.94-2.35.94-2.35s.25-1.98.25-3.97V10.2c0-1.99-.25-3.98-.25-3.98zM9.75 14.5v-6l6 3-6 3z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ma & Co Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
