import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function getClient() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  return new OpenAI({ apiKey: key });
}

function systemPrompt() {
  return `You are Ma & Co’s helpful UK accountancy assistant.
Provide concise, accurate guidance on UK tax, VAT, PAYE, bookkeeping, property tax, and compliance.
Be pragmatic and explain trade-offs; when uncertain, say so and suggest next steps.
Add a brief disclaimer when giving tax-sensitive advice: “This is general guidance, not tax advice.”`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const messages = (body?.messages as ChatMessage[] | undefined) || [];
    const client = getClient();

    // Fallback when no API key is set
    if (!client) {
      const last = messages.filter((m) => m.role === "user").pop()?.content || "";
      const fallback = `Thanks for your question. We’ll connect our AI advisor shortly. For now: ${last ? `“${last.slice(0, 160)}${last.length > 160 ? '…' : ''}”` : ''}. You can also email info@maandcoaccountants.com.`;
      return NextResponse.json({ reply: fallback });
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const history: ChatMessage[] = [
      { role: "system", content: systemPrompt() },
      ...messages.slice(-10) // keep context small
    ];

    const completion = await client.chat.completions.create({
      model,
      messages: history,
      temperature: 0.2,
      max_tokens: 400
    });

    const reply = completion.choices[0]?.message?.content?.trim() || "I didn’t catch that—could you rephrase?";
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("/api/chat error", err);
    return NextResponse.json({ error: "Chat error" }, { status: 500 });
  }
}

