import { Quote } from "../types/quote";

export async function generateQuote(
  theme: string,
  tone: string,
  audience: string,
  customMessage: string
): Promise<Quote> {
  const response = await fetch("/api/generate-quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      theme,
      tone,
      audience,
      customMessage,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate quote");
  }

  const data = await response.json();

  return {
    id: Date.now(),
    text: data.quote.trim(),
    theme,
    tone,
    audience,
    customMessage,
    createdAt: new Date().toLocaleString(),
  };
}