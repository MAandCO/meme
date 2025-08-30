"use client";
import React from "react";

type Message = { id: string; role: "user" | "assistant"; content: string };

export default function Chatbot() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { id: "m1", role: "assistant", content: "Hi! I’m your Ma & Co AI assistant. Ask me about tax, compliance, or bookkeeping." }
  ]);
  const [input, setInput] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const toggle = () => setOpen((v) => !v);

  function onSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    void callApi([...messages, userMsg]);
  }

  async function callApi(msgs: Message[]) {
    try {
      setSending(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: msgs.map(({ role, content }) => ({ role, content })) })
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Sorry, I couldn’t respond just now.";
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: "There was a problem connecting to the assistant. Please email info@maandcoaccountants.com." }
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-[90vw] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white chat-shadow">
          <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/20" />
              <span className="font-semibold">Ma & Co AI</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded p-1 hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`text-sm ${m.role === "assistant" ? "text-slate-700" : "text-slate-900"}`}>
                <div className={`inline-block rounded-2xl px-3 py-2 ${m.role === "assistant" ? "bg-slate-100" : "bg-sky-50"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSend} className="flex items-center gap-2 border-t border-slate-200 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tax, VAT, payroll…"
              className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus-ring"
            />
            <button type="submit" disabled={sending} className="rounded-xl bg-sky-600 px-3 py-2 text-sm text-white hover:bg-sky-700 focus-ring disabled:opacity-60">
              {sending ? "Sending…" : "Send"}
            </button>
          </form>
        </div>
      )}
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-white shadow-lg hover:bg-slate-800 focus-ring"
        aria-expanded={open}
        aria-controls="chatbot"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c0 4.418-4.03 8-9 8-1.07 0-2.09-.16-3.03-.45L3 20l1.54-3.08C3.57 15.62 3 13.86 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Chat with us
      </button>
    </div>
  );
}
