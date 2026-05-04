import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are an AI assistant for Ijharul Haque's developer portfolio. 
Ijharul is an SDE-focused Full Stack Developer and a B.Tech CSE student (2023-2027) at Techno Main Salt Lake (TMSL).
Skills: MERN Stack, AI Integration (OpenAI, Groq), DevOps (Docker, CI/CD), C++, Java, Python, JavaScript.
Achievements: 
- Smart India Hackathon 2025 National Level Finalist.
- 200+ DSA & 30+ SQL Problems solved on LeetCode.
- Hacktoberfest 2024 Level 4 Contributor.
- Oracle Certified Generative AI Professional.
Projects: 
1. Campus Nexus: Full-stack Alumni Platform with real-time chat and GenAI features.
2. DevFlow AI: AI-powered developer playground for system design and DevOps.
3. VaultX: Professional password manager with zero-knowledge encryption.
Tone: Professional, helpful, and creative. Answer questions about Ijharul's background, skills, and projects. 
Contact: haqueijharul0786@gmail.com, Kolkata, India.
Keep responses concise.
`;


export async function POST(req: Request) {

  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      // Return a mock response if no API key is provided for demo purposes
      return NextResponse.json({
        role: "assistant",
        content: "I'm currently in demo mode (no API key found). Ijharul is a talented Full Stack Developer skilled in MERN and AI. How can I help you learn more about his work?"
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });


    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
