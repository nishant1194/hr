import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      theme,
      tone,
      audience,
      customMessage,
    } = await req.json();

    const prompt = `
You are an HR communication assistant.

Generate a WhatsApp-ready morning motivational message for office employees.

Details:
- Theme: ${theme}
- Tone: ${tone}
- Audience: ${audience}

Additional Context:
${customMessage || "None"}

Writing Style:
- Start with exactly:
Good Morning Team,

- Then write 1 or 2 short motivational sentences.

- Use very simple English.

- Keep the total message under 10-15 words (excluding "Good Morning Team,").

- Make it suitable for sharing in an office WhatsApp group.

- The message should feel warm, positive, and professional.

- End with exactly ONE or two relevant positive emoji such as:
✨ 😊 💫 🌟 💪 🙌 🌞 🌱 🍀 🎯 👏 🤝 

Rules:
- Do not use quotation marks.
- Do not use hashtags.
- Do not use bullet points.
- Do not mention AI.
- Do not explain anything.
- Return only the final message.

Example format:

Good Morning Team,

Start the day with positivity and confidence.
Every small effort leads to big success. ✨
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      quote: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate quote",
      },
      {
        status: 500,
      }
    );
  }
}
