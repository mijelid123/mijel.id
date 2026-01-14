
import { GoogleGenAI } from "@google/genai";

export const getImpactAnalysis = async (liters: number): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze the environmental impact of recycling ${liters} liters of used cooking oil (minyak jelantah).
    The goal is to encourage the user with impressive facts.
    - Mention how many liters of clean water are saved (1 liter of oil can pollute 1 million liters of water).
    - Compare it to something relatable for Jakartans (e.g., Olympic-sized pools, Monas height, or drinking water needs).
    - Use an enthusiastic, professional, and friendly tone in Indonesian.
    - Format it as a short paragraph (max 3-4 sentences).
    - Start with "Fakta Mijel Kamu:"
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Terima kasih telah berkontribusi menjaga lingkungan!";
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback static calculation if API fails
    const waterSaved = liters * 1000000;
    const pools = (waterSaved / 2500000).toFixed(1);
    return `Luar biasa! Aksi hebatmu mendaur ulang ${liters} liter minyak jelantah telah menyelamatkan ${liters} juta liter air bersih! Ini setara dengan sekitar ${pools} kolam renang Olimpiade.`;
  }
};
