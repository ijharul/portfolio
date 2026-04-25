import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are an AI assistant for Ijharul Haque's developer portfolio. 
Ijharul is a B.Tech CSE student (2023-2027) at Techno Main Salt Lake (TMSL).
Skills: MERN Stack (MongoDB, Express, React, Node), AI Integration (OpenAI API, Prompt Engineering), C++, Java, Python, JavaScript.
Achievements: 
- Smart India Hackathon 2025 National Level Finalist.
- Hacktoberfest 2024 Level 4 Contributor.
- INTRA Hackathon 2024 2nd Place.
- 165+ DSA Problems solved.
- Oracle Certified Generative AI Professional.
Projects: 
1. Alumni Association Platform: Full-stack MERN app with real-time chat (Socket.io) and OpenAI features.
2. Password Manager: Secure vault with JWT and bcrypt.
3. Weather App: SkyCast, real-time weather data with Redux.
Tone: Professional, helpful, and creative. Answer questions about Ijharul's background, skills, and projects. 
Contact: haqueijharul0786@gmail.com, Kolkata, West Bengal.
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
