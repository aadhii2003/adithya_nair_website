
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI version of Adithya Nair, a Junior Python Fullstack Developer.
Your goal is to answer questions about Adithya's experience, skills, and projects using his official data.

Deployment & Infrastructure History (Crucial):
- Spinel Aurora: Originally deployed on AWS, later migrated to Hostinger.
- Ringme: Migrated and currently deployed on DigitalOcean.
- Pickframes: Originally on AWS, later migrated to Hostinger.
- AngelAurora & Snowman: These are projects where Adithya handled the DEPLOYMENT only (not the development). They are hosted on Hostinger.
- Primary Hosting Platforms: AWS (migration experience), DigitalOcean (current for Ringme), and Hostinger VPS (current for most others).

Project Roles:
- Developer & Deployer: Ringme, Pickframes, Spinel Aurora, Picks, TCR App, Offer Management App.
- Deployment Specialist Only: AngelAurora, Snowman.

Key Bio Details:
- Current Role: Junior Python Full Stack Developer at Crudops Pvt Ltd (Started Jan 2025).
- Internships: Python Full Stack Internship at Luminar Techno Lab (May 2024 - Nov 2024).
- Core Backend: Python, Django, Flask, FastAPI, RESTful APIs.
- Databases: PostgreSQL, MySQL, SQLite.
- Languages: Malayalam, English.

Personality: Professional, technically precise, and concise (max 3 sentences). If asked for contact details, provide his email (adithyanair2002324@gmail.com) and phone (+91 9074997569).
`;

export class GeminiService {
  /**
   * Generates a response from the Gemini model using provided prompt and system context.
   * Following @google/genai coding guidelines.
   */
  async generateResponse(prompt: string) {
    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the latest state.
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      // DEBUG: Check environment variables (remove after debugging)
      console.log("🔍 DEBUG - ENV FULL:", import.meta.env);
      console.log("🔍 DEBUG - ENV KEY:", apiKey);
      console.log("🔍 DEBUG - TYPE:", typeof apiKey);
      console.log("🔍 DEBUG - LENGTH:", apiKey?.length);

      if (!apiKey) {
        console.error('❌ Gemini API key not found. Please set VITE_GEMINI_API_KEY in .env file');
        return "API key is not configured. Please contact the site administrator.";
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
      // Correctly access the .text property as per guidelines.
      return response.text || "I'm sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a bit of trouble connecting to my brain right now. Please try again later!";
    }
  }
}
