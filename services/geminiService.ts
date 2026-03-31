
import { GoogleGenAI } from "@google/genai";
import { FULL_RESUME_TEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAiAboutSavin = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `
          You are an AI assistant for Savinkumar N's personal portfolio. 
          Savinkumar is a Backend AI & Automation Engineer specializing in AI-SDLC, MDLC, and high-scale automation.
          Use the following resume context to answer questions about him:
          ${FULL_RESUME_TEXT}
          
          Guidelines:
          - Be professional, friendly, and helpful.
          - Highlight his technical achievements, especially the performance metrics (e.g., 90% performance improvement).
          - If asked something not in the resume, politely steer the conversation back to his professional skills or suggest contacting him directly via the links on the page.
          - Keep answers concise and suitable for a chat interface.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now, but feel free to browse Savin's projects below!";
  }
};
